import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { hubItems } from '../lib/contentHub';
import { districts } from '../lib/geoData';
import { getAllProgrammaticLandings } from '../lib/programmaticSeo';
import { buildXmlSitemap, getSectorDistrictUrls, getSectorMainUrls, getSectorNeighborhoodUrls } from '../lib/sectorSitemaps';
import { sectorCatalog } from '../lib/sectorCatalog';
import { services, siteConfig } from '../lib/siteData';

const publicDir = join(process.cwd(), 'public');

const ensurePublicDir = () => {
  mkdirSync(publicDir, { recursive: true });
};

const writePublicFile = (name: string, content: string) => {
  writeFileSync(join(publicDir, name), content, 'utf8');
};

const buildMainSitemap = () => {
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

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `<url><loc>${url}</loc><changefreq>weekly</changefreq><priority>${url === siteConfig.domain ? '1.0' : '0.8'}</priority></url>`
  )
  .join('')}
</urlset>`;
};

const buildRobots = () => `User-agent: *
Allow: /

Sitemap: ${siteConfig.domain}/sitemap.xml
Sitemap: ${siteConfig.domain}/sitemap-sektorler.xml
Sitemap: ${siteConfig.domain}/sitemap-sektor-ilceler.xml
Sitemap: ${siteConfig.domain}/sitemap-sektor-mahalleler-1.xml
Sitemap: ${siteConfig.domain}/sitemap-sektor-mahalleler-2.xml
Host: ${siteConfig.domain}
`;

const buildLlms = () => {
  const programmaticLandings = getAllProgrammaticLandings();
  const lines = [
    `# ${siteConfig.brand}`,
    'İstanbul içi moto kurye, acil kurye, express kurye, şehir içi kurye, evrak kurye, VIP kurye ve ilçe bazlı teslimat hizmetleri sunan işletme web sitesi.',
    '',
    '## Official Brand Entity',
    `- Official name: ${siteConfig.brand}`,
    `- Alternate names: ${siteConfig.alternateNames.join(', ')}`,
    `- Official website: ${siteConfig.domain}`,
    `- Primary market: ${siteConfig.city}`,
    `- Contact email: ${siteConfig.email}`,
    `- Contact phone: ${siteConfig.phoneDisplay}`,
    `- Logo: ${siteConfig.domain}${siteConfig.logoPath}`,
    '',
    '## Core Trust Pages',
    `- Referanslar: ${siteConfig.domain}/referanslar`,
    `- Kurumsal: ${siteConfig.domain}/kurumsal`,
    `- Sıkça Sorulan Sorular: ${siteConfig.domain}/sikca-sorulan-sorular`,
    `- Google İşletme: ${siteConfig.domain}/google-isletme`,
    '',
    '## Core Services',
    ...services.map((service) => `- ${service.name}: ${siteConfig.domain}/hizmetler/${service.slug}`),
    '',
    '## Sector Pages',
    ...sectorCatalog.slice(0, 60).map((sector) => `- ${sector.name}: ${siteConfig.domain}/sektorler/${sector.slug}`),
    '',
    '## Istanbul District Pages',
    ...districts.map((district) => `- ${district.name}: ${siteConfig.domain}/istanbul/${district.slug}`),
    '',
    '## Programmatic SEO Landing Pages',
    ...programmaticLandings.slice(0, 40).map((landing) => `- ${landing.title}: ${siteConfig.domain}/${landing.slug}`),
    '',
    '## Neighborhood Coverage Samples',
    ...districts.slice(0, 10).flatMap((district) => district.neighborhoods.map((item) => `- ${district.name} / ${item.name}: ${siteConfig.domain}/istanbul/${district.slug}/${item.slug}`)),
    '',
    '## Contact',
    `- Phone: ${siteConfig.phoneDisplay}`,
    `- WhatsApp: ${siteConfig.whatsappHref}`
  ];

  return lines.join('\n');
};

ensurePublicDir();
writePublicFile('robots.txt', buildRobots());
writePublicFile('llms.txt', buildLlms());
writePublicFile('sitemap.xml', buildMainSitemap());
writePublicFile('sitemap-sektorler.xml', buildXmlSitemap(getSectorMainUrls()));
writePublicFile('sitemap-sektor-ilceler.xml', buildXmlSitemap(getSectorDistrictUrls()));
writePublicFile('sitemap-sektor-mahalleler-1.xml', buildXmlSitemap(getSectorNeighborhoodUrls(0, 35)));
writePublicFile('sitemap-sektor-mahalleler-2.xml', buildXmlSitemap(getSectorNeighborhoodUrls(35, sectorCatalog.length)));