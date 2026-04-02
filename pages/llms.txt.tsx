import { GetServerSideProps } from 'next';
import { districts } from '../lib/geoData';
import { getAllProgrammaticLandings } from '../lib/programmaticSeo';
import { sectorCatalog } from '../lib/sectorCatalog';
import { services, siteConfig } from '../lib/siteData';

export default function Llms() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const programmaticLandings = getAllProgrammaticLandings();
  const lines = [
    `# ${siteConfig.brand}`,
    'İstanbul içi moto kurye, acil kurye, express kurye, şehir içi kurye, evrak kurye, VIP kurye ve ilçe bazlı teslimat hizmetleri sunan işletme web sitesi.',
    '',
    '## Core Trust Pages',
    `- Referanslar: ${siteConfig.domain}/referanslar`,
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

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.write(lines.join('\n'));
  res.end();

  return {
    props: {}
  };
};