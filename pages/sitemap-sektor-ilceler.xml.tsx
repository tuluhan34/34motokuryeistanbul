import { GetServerSideProps } from 'next';
import { buildXmlSitemap, getSectorDistrictUrls } from '../lib/sectorSitemaps';

export default function SectorDistrictSitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(buildXmlSitemap(getSectorDistrictUrls()));
  res.end();

  return { props: {} };
};
