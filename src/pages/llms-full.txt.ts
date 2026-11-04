import type { APIRoute } from 'astro';
import { getTranslations } from '../i18n/translations';
import { featurePages, type FeatureKey } from '../i18n/features';
import { vsContent, vsKeys } from '../i18n/vs';
import { guides, type GuideKey } from '../i18n/guides';
import { withPrices } from '../utils/prices';
import { localeUrl } from '../utils/paths';

// Full-text companion to the hand-maintained public/llms.txt: the English copy of
// the home FAQ, every feature page, comparison and guide as one Markdown file, so
// an AI crawler can read what ENDURE does without rendering the site. Generated
// from the same i18n objects as the pages, so it never drifts from them.

const lang = 'en';

/** Translation strings carry inline <strong>/<a> markup; plain text reads better here. */
function plain(text: string): string {
  return withPrices(text, lang)
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');
}

function bullets(items: string[] | undefined): string {
  return items?.length ? '\n\n' + items.map((b) => `- ${plain(b)}`).join('\n') : '';
}

function faq(items: { q: string; a: string }[] | undefined): string {
  if (!items?.length) return '';
  return '\n\n### FAQ\n\n' + items.map((f) => `**${plain(f.q)}**\n${plain(f.a)}`).join('\n\n');
}

export const GET: APIRoute = () => {
  const t = getTranslations(lang);
  const out: string[] = [];

  out.push(
    '# ENDURE (full text)',
    '',
    '> ENDURE is an indoor cycling training app with an AI coach, for smart trainers on iOS, Android and Windows, plus a web app at https://app.endure-cycling.com/ that does everything except recording rides. The AI coach is the lead feature: it plans each day from the rider\'s own rides and a morning check-in (one workout, two alternatives, the reason), drafts the coming weeks in the calendar on request (aimed at a goal event), can be changed in chat, builds workouts from a text description and reviews every ride. ENDURE Premium is a subscription with a 14-day free trial that needs no payment details.',
    '',
    `This file holds the English page copy of ${localeUrl(lang, '/')} in one place. The short index is ${localeUrl(lang, '/').replace(/\/$/, '')}/llms.txt. A German version of every page lives under ${localeUrl('de', '/')}.`,
  );

  out.push('', '## Homepage FAQ', '', `Source: ${localeUrl(lang, '/')}`, '', faq(t.faq.items).trimStart().replace(/^### FAQ\n\n/, ''));

  out.push('', '## Features');
  for (const [key, page] of Object.entries(featurePages[lang]) as [FeatureKey, (typeof featurePages)['en'][FeatureKey]][]) {
    out.push(
      '',
      `### ${plain(page.h1)}`,
      '',
      `Source: ${localeUrl(lang, `/features/${key}`)} (updated ${page.dateModified})`,
      '',
      plain(page.directAnswer),
    );
    if (page.steps?.length) {
      out.push('', page.steps.map((s, i) => `${i + 1}. **${plain(s.title)}**: ${plain(s.body)}`).join('\n'));
    }
    for (const s of page.sections) {
      out.push('', `#### ${plain(s.title)}`, '', plain(s.body) + bullets(s.bullets));
    }
    if (page.platforms) {
      const p = page.platforms;
      out.push(
        '',
        `#### ${plain(p.title)}`,
        '',
        plain(p.body),
        '',
        `${plain(p.web.title)}:` + bullets(p.web.items),
        '',
        `${plain(p.app.title)}:` + bullets(p.app.items),
        '',
        plain(p.note),
      );
    }
    out.push(faq(page.faq).replace(/^\n\n### FAQ/, '\n\n#### FAQ'));
  }

  out.push('', '## Comparisons');
  for (const key of vsKeys) {
    const page = vsContent[lang][key];
    out.push(
      '',
      `### ${plain(page.h1)}`,
      '',
      `Source: ${localeUrl(lang, `/vs/${key}`)} (updated ${page.dateModified})`,
      '',
      plain(page.directAnswer),
      '',
      `| ${page.colFeature} | ${page.colEndure} | ${page.colOther} |`,
      '| --- | --- | --- |',
      ...page.rows.map((r) => `| ${plain(r.feature)} | ${plain(r.endure)} | ${plain(r.other)} |`),
      '',
      `#### ${plain(page.chooseEndureTitle)}` + bullets(page.chooseEndure),
      '',
      `#### ${plain(page.chooseOtherTitle)}` + bullets(page.chooseOther),
    );
    out.push(faq(page.faq).replace(/^\n\n### FAQ/, '\n\n#### FAQ'));
  }

  out.push('', '## Training guides');
  for (const [key, g] of Object.entries(guides[lang]) as [GuideKey, (typeof guides)['en'][GuideKey]][]) {
    out.push(
      '',
      `### ${plain(g.h1)}`,
      '',
      `Source: ${localeUrl(lang, `/guides/${key}`)} (updated ${g.dateModified})`,
      '',
      plain(g.directAnswer),
    );
    for (const s of g.sections) {
      out.push('', `#### ${plain(s.title)}`, '', plain(s.body) + bullets(s.bullets));
    }
  }

  return new Response(out.join('\n').replace(/\n{3,}/g, '\n\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
