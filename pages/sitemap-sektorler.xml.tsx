import { GetServerSideProps } from 'next';
import { buildXmlSitemap, getSectorMainUrls } from '../lib/sectorSitemaps';

export default function SectorSitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/xml');
  res.write(buildXmlSitemap(getSectorMainUrls()));
  res.end();

  return { props: {} };
};
