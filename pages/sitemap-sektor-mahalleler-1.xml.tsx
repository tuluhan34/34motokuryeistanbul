import { GetServerSideProps } from 'next';
import { buildXmlSitemap, getSectorNeighborhoodUrls } from '../lib/sectorSitemaps';

export default function SectorNeighborhoodSitemapOne() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(buildXmlSitemap(getSectorNeighborhoodUrls(0, 35)));
  res.end();

  return { props: {} };
};
