// Send an email template via Resend API
// Usage: node email-templates/send.mjs <recipient-email> <template-name>
// Example: node email-templates/send.mjs max@gmail.com android-test-welcome

import { readFile } from 'fs/promises';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env from project root
const envPath = resolve(__dirname, '..', '.env');
try {
  const envContent = await readFile(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) process.env[key.trim()] = rest.join('=').trim();
  }
} catch {}

const RESEND_API_KEY = process.env.RESEND_API_KEY || process.env.PUBLIC_RESEND_API_KEY;
const FROM_EMAIL = 'ENDURE <info@endure-cycling.com>';

const TEMPLATES = {
  'android-test-welcome': {
    subject: 'Your ENDURE Android Test Access',
    file: 'android-test-welcome.html',
  },
};

async function send() {
  const [, , to, templateName] = process.argv;

  if (!RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable.');
    console.error('Set it via: set RESEND_API_KEY=re_xxxxxxxxx (Windows)');
    process.exit(1);
  }

  if (!to || !templateName) {
    console.error('Usage: node email-templates/send.mjs <email> <template>');
    console.error('Available templates:', Object.keys(TEMPLATES).join(', '));
    process.exit(1);
  }

  const template = TEMPLATES[templateName];
  if (!template) {
    console.error(`Unknown template: ${templateName}`);
    console.error('Available templates:', Object.keys(TEMPLATES).join(', '));
    process.exit(1);
  }

  const html = await readFile(resolve(__dirname, template.file), 'utf-8');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [to],
      subject: template.subject,
      html,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    console.log(`Sent "${template.subject}" to ${to} (id: ${data.id})`);
  } else {
    console.error('Failed to send:', data);
    process.exit(1);
  }
}

send();
