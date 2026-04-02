import { GetServerSideProps } from 'next';
import { siteConfig } from '../lib/siteData';

export default function Robots() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write(`User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.domain}/sitemap.xml\nSitemap: ${siteConfig.domain}/sitemap-sektorler.xml\nSitemap: ${siteConfig.domain}/sitemap-sektor-ilceler.xml\nSitemap: ${siteConfig.domain}/sitemap-sektor-mahalleler-1.xml\nSitemap: ${siteConfig.domain}/sitemap-sektor-mahalleler-2.xml\nHost: ${siteConfig.domain}\n`);
  res.end();

  return {
    props: {}
  };
};