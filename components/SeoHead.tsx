import Head from 'next/head';
import { buildTitle, defaultDescription } from '../lib/seo';
import { keywordString } from '../lib/keywordData';
import { siteConfig } from '../lib/siteData';

type SeoHeadProps = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
};

export function SeoHead({ title, description = defaultDescription, path = '', keywords }: SeoHeadProps) {
  const canonical = `${siteConfig.domain}${path}`;
  const fullTitle = buildTitle(title);
  const keywordContent = keywords?.length ? keywords.join(', ') : keywordString;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
      <meta name="news_keywords" content={keywordContent} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="googlebot" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="adsbot-google" content="index,follow" />
      <meta name="classification" content="Kurye, Moto Kurye, Express Kurye, Istanbul Kurye" />
      <meta name="distribution" content="global" />
      <meta name="geo.region" content="TR-34" />
      <meta name="geo.placename" content="Istanbul" />
      <meta name="ICBM" content="41.0082, 28.9784" />
      <meta name="application-name" content={siteConfig.brand} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="tr_TR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteConfig.brand} />
      <meta property="article:tag" content={keywordContent} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonical} />
    </Head>
  );
}