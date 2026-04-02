import { GetServerSideProps } from 'next';
import { buildXmlSitemap, getSectorNeighborhoodUrls } from '../lib/sectorSitemaps';
import { sectorCatalog } from '../lib/sectorCatalog';

export default function SectorNeighborhoodSitemapTwo() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(buildXmlSitemap(getSectorNeighborhoodUrls(35, sectorCatalog.length)));
  res.end();

  return { props: {} };
};
