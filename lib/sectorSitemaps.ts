import { districts } from './geoData';
import { sectorCatalog } from './sectorCatalog';
import { siteConfig } from './siteData';

export const buildXmlSitemap = (urls: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `<url><loc>${url}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`)
  .join('')}
</urlset>`;

export const getSectorMainUrls = () => sectorCatalog.map((sector) => `${siteConfig.domain}/sektorler/${sector.slug}`);

export const getSectorDistrictUrls = () =>
  sectorCatalog.flatMap((sector) => districts.map((district) => `${siteConfig.domain}/sektorler/${sector.slug}/${district.slug}`));

export const getSectorNeighborhoodUrls = (sectorStart: number, sectorEnd: number) =>
  sectorCatalog.slice(sectorStart, sectorEnd).flatMap((sector) =>
    districts.flatMap((district) => district.neighborhoods.map((neighborhood) => `${siteConfig.domain}/sektorler/${sector.slug}/${district.slug}/${neighborhood.slug}`))
  );
