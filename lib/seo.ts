import { keywordString } from './keywordData';
import { aggregateReviewData, reviewHighlights } from './marketIntel';
import { siteConfig } from './siteData';

const logoUrl = `${siteConfig.domain}${siteConfig.logoPath}`;
const serviceAreas = [
  'Ataşehir',
  'Beşiktaş',
  'Kadıköy',
  'Şişli',
  'Üsküdar',
  'Bakırköy',
  'Kağıthane',
  'Kartal',
  'Eyüpsultan',
  'İstanbul'
];

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
  '@type': ['Organization', 'LocalBusiness', 'CourierOrDeliveryService'],
  '@id': `${siteConfig.domain}/#organization`,
  name: siteConfig.brand,
  legalName: siteConfig.legalName,
  alternateName: siteConfig.alternateNames,
  url: siteConfig.domain,
  telephone: '+905303219004',
  email: siteConfig.email,
  slogan: siteConfig.slogan,
  logo: logoUrl,
  image: logoUrl,
  hasMap: siteConfig.mapEmbedUrl,
  priceRange: '$$',
  areaServed: serviceAreas.map((name) => ({
    '@type': name === 'İstanbul' ? 'City' : 'AdministrativeArea',
    name
  })),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'İstanbul',
    addressCountry: 'TR'
  },
  knowsAbout: [
    'moto kurye',
    'acil kurye',
    'express kurye',
    'şehir içi kurye',
    'aynı gün teslimat',
    'evrak kurye',
    'medikal kurye',
    'arabalı kurye'
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+905303219004',
      areaServed: 'TR',
      availableLanguage: ['tr', 'en'],
      url: siteConfig.whatsappHref
    }
  ],
  openingHours: 'Mo-Su 00:00-23:59',
  sameAs: [siteConfig.whatsappHref],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: aggregateReviewData.ratingValue,
    reviewCount: aggregateReviewData.reviewCount,
    bestRating: aggregateReviewData.bestRating,
    worstRating: aggregateReviewData.worstRating
  },
  review: reviewHighlights.map((item) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: item.author
    },
    reviewBody: item.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: item.rating,
      bestRating: 5,
      worstRating: 1
    }
  })),
  brand: {
    '@type': 'Brand',
    name: siteConfig.brand,
    alternateName: siteConfig.alternateNames,
    logo: logoUrl,
    url: siteConfig.domain
  }
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.domain}/#website`,
  name: siteConfig.brand,
  url: siteConfig.domain,
  inLanguage: 'tr-TR',
  description: defaultDescription,
  keywords: keywordString,
  publisher: {
    '@id': `${siteConfig.domain}/#organization`
  }
};

export const webPageSchema = (name: string, description: string, url: string, keywords?: string[]) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url,
  inLanguage: 'tr-TR',
  keywords: keywords?.join(', ') || keywordString,
  mentions: ['kurye', 'moto kurye', 'istanbul kurye', 'acil kurye'],
  isPartOf: {
    '@id': `${siteConfig.domain}/#website`
  },
  about: {
    '@id': `${siteConfig.domain}/#organization`
  },
  publisher: {
    '@id': `${siteConfig.domain}/#organization`
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
    '@id': `${siteConfig.domain}/#organization`
  },
  areaServed: {
    '@type': 'City',
    name: 'İstanbul'
  },
  url
});

export const courierServiceSchema = (name: string, description: string, url: string, areaServed: string | string[] = 'İstanbul') => ({
  '@context': 'https://schema.org',
  '@type': 'CourierOrDeliveryService',
  name,
  description,
  url,
  provider: {
    '@id': `${siteConfig.domain}/#organization`
  },
  areaServed: (Array.isArray(areaServed) ? areaServed : [areaServed]).map((item) => ({
    '@type': 'AdministrativeArea',
    name: item
  })),
  serviceOutput: 'Acil kurye, express kurye, aynı gün teslimat ve şehir içi teslimat',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: url,
    availableLanguage: ['tr-TR'],
    servicePhone: siteConfig.phoneHref.replace('tel:', ''),
    serviceSmsNumber: '+905303219004'
  }
});

export const localBusinessSchema = (name: string, description: string, url: string, areaServed: string | string[] = 'İstanbul') => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/CourierOrDeliveryService',
  name,
  description,
  url,
  telephone: '+905303219004',
  email: siteConfig.email,
  areaServed: Array.isArray(areaServed) ? areaServed : [areaServed],
  image: logoUrl,
  logo: logoUrl,
  openingHours: 'Mo-Su 00:00-23:59',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'İstanbul',
    addressCountry: 'TR'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: '+905303219004',
      url: siteConfig.whatsappHref,
      availableLanguage: ['tr-TR']
    }
  ]
});

export const productSchema = (name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  image: logoUrl,
  brand: {
    '@type': 'Brand',
    name: siteConfig.brand
  },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'TRY',
    url
  }
});

export const reviewSchema = (name: string, description: string, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url,
  provider: {
    '@id': `${siteConfig.domain}/#organization`
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: aggregateReviewData.ratingValue,
    reviewCount: aggregateReviewData.reviewCount,
    bestRating: aggregateReviewData.bestRating,
    worstRating: aggregateReviewData.worstRating
  },
  review: reviewHighlights.map((item) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: item.author
    },
    reviewBody: item.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: item.rating,
      bestRating: 5,
      worstRating: 1
    }
  }))
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