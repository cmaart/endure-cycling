// JSON-LD for /features/* pages, shared by FeaturePage.astro and
// TrainingPlanningPage.astro.
import type { FeatureContent } from '../i18n/features';
import { siteUrl } from './paths';

/** Dated page entity so answer engines can see when the feature copy last changed. */
export function featureWebPageSchema(t: FeatureContent, canonicalUrl: string, lang: 'en' | 'de') {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: t.h1,
    description: t.seoDescription,
    url: canonicalUrl,
    inLanguage: lang,
    datePublished: t.datePublished,
    dateModified: t.dateModified,
    about: { '@type': 'SoftwareApplication', name: 'ENDURE', url: siteUrl },
    author: { '@type': 'Organization', name: 'ENDURE', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'ENDURE', url: siteUrl },
  };
}

/** FAQPage covers the question-phrased cards; the direct answer is the featured-snippet target. */
export function featureFaqSchema(faq: FeatureContent['faq']) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
