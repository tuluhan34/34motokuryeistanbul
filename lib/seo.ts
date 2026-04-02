import { keywordString } from './keywordData';
import { siteConfig } from './siteData';

export const buildTitle = (title?: string) => {
  if (!title) {
    return `${siteConfig.brand} | Acil, Express ve Şehir İçi Moto Kurye`;
  }

  return `${title} | ${siteConfig.brand}`;
};

export const defaultDescription =
  'İstanbul genelinde acil kurye, express kurye, gece kurye, VIP kurye ve şehir içi teslimat çözümleri. Telefon ve WhatsApp üzerinden hızlı teklif alın.';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'CourierOrDeliveryService',
  name: siteConfig.brand,
  areaServed: 'Istanbul',
  url: siteConfig.domain,
  telephone: '+905303219004',
  email: siteConfig.email,
  hasMap: siteConfig.mapEmbedUrl,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'İstanbul',
    addressCountry: 'TR'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: '+905303219004',
    areaServed: 'TR',
    availableLanguage: ['tr', 'en']
  },
  openingHours: 'Mo-Su 00:00-23:59',
  sameAs: [siteConfig.whatsappHref]
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.brand,
  url: siteConfig.domain,
  inLanguage: 'tr-TR',
  description: defaultDescription,
  keywords: keywordString
};

export const webPageSchema = (name: string, description: string, url: string, keywords?: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url,
  inLanguage: 'tr-TR',
  about: ['kurye', 'moto kurye', 'istanbul kurye', 'acil kurye'],
  keywords: keywords?.join(', ') || keywordString,
  isPartOf: {
    '@type': 'WebSite',
    name: siteConfig.brand,
    url: siteConfig.domain
  }
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const serviceSchema = (name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name,
  description,
  provider: {
    '@type': 'CourierOrDeliveryService',
    name: siteConfig.brand,
    areaServed: 'İstanbul'
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul'
  },
  url
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});