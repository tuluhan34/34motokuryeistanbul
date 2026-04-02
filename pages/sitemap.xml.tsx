import { GetServerSideProps } from 'next';
import { hubItems } from '../lib/contentHub';
import { districts } from '../lib/geoData';
import { getAllProgrammaticLandings } from '../lib/programmaticSeo';
import { sectorCatalog } from '../lib/sectorCatalog';
import { services, siteConfig } from '../lib/siteData';

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const staticPages = ['', '/blog', '/galeri', '/teklif-al', '/kurumsal', '/sektorler', '/google-isletme', '/kurye-fiyatlari', '/anahtar-kelime-haritasi', '/bolgeler', '/referanslar', '/sikca-sorulan-sorular'];
  const programmaticLandings = getAllProgrammaticLandings();
  const urls = [
    ...staticPages.map((path) => `${siteConfig.domain}${path}`),
    ...services.map((service) => `${siteConfig.domain}/hizmetler/${service.slug}`),
    ...sectorCatalog.map((sector) => `${siteConfig.domain}/sektorler/${sector.slug}`),
    ...hubItems.map((item) => `${siteConfig.domain}/blog/${item.slug}`),
    ...hubItems.map((item) => `${siteConfig.domain}/galeri/${item.slug}`),
    ...hubItems.map((item) => `${siteConfig.domain}/sikca-sorulan-sorular/${item.slug}`),
    ...programmaticLandings.map((landing) => `${siteConfig.domain}/${landing.slug}`),
    ...districts.map((district) => `${siteConfig.domain}/istanbul/${district.slug}`),
    ...districts.flatMap((district) => district.neighborhoods.map((item) => `${siteConfig.domain}/istanbul/${district.slug}/${item.slug}`))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url><loc>${url}</loc><changefreq>weekly</changefreq><priority>${url === siteConfig.domain ? '1.0' : '0.8'}</priority></url>`
  )
  .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(body);
  res.end();

  return {
    props: {}
  };
};