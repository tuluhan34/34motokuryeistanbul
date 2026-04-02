import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../../components/Layout';
import { Schema } from '../../../components/Schema';
import { SeoHead } from '../../../components/SeoHead';
import { fetchUnsplashPhotos, GalleryPhoto } from '../../../lib/unsplash';
import { districts, DistrictSeoItem, getDistrictBySlug } from '../../../lib/geoData';
import { buildKeywordSet } from '../../../lib/keywordData';
import { getSectorBySlug, sectorCatalog, SectorCatalogItem } from '../../../lib/sectorCatalog';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../../../lib/seo';
import { siteConfig } from '../../../lib/siteData';

type SectorDistrictPageProps = {
  sector: SectorCatalogItem;
  district: DistrictSeoItem;
  photo: GalleryPhoto;
};

const buildFaqs = (sector: SectorCatalogItem, district: DistrictSeoItem) => [
  {
    question: `${district.name} içinde ${sector.name} için kurye ne kadar sürede çıkar?`,
    answer: `${district.name} içindeki pickup noktasına, saat aralığına ve gönderi tipine göre hızlı yönlendirme planlanır; acil işlerde öncelikli akış uygulanır.`
  },
  {
    question: `${district.name} bölgesinde ${sector.name} için hangi gönderiler taşınır?`,
    answer: `${sector.short} Evrak, numune, küçük paket veya teknik parça gibi gönderiler operasyon koşullarına göre planlanır.`
  },
  {
    question: `${district.name} için mahalle bazlı sektör sayfaları var mı?`,
    answer: 'Evet. Bu ilçe içindeki tüm mahalleler için sektör bazlı detay kurye sayfaları bulunur.'
  }
];

export default function SectorDistrictPage({ sector, district, photo }: SectorDistrictPageProps) {
  const path = `/sektorler/${sector.slug}/${district.slug}`;
  const faqs = buildFaqs(sector, district);
  const description = `${district.name} icinde ${sector.name} icin kurye hizmeti, mahalle bazli teslimat alanlari ve hizli pickup detaylari.`;
  const pageKeywords = buildKeywordSet(
    [`${district.name} ${sector.name} kurye`, `${district.name} ${sector.name} acil kurye`, `${district.name} ${sector.name} moto kurye`, `${district.name} ${sector.name} express kurye`],
    district.neighborhoods.slice(0, 12).map((neighborhood) => `${neighborhood.name} ${sector.name} kurye`),
    ['istanbul sektor kurye', 'kurye fiyat al']
  );

  return (
    <>
      <SeoHead title={`${district.name} ${sector.name} Kurye`} description={description} path={path} keywords={pageKeywords} />
      <Schema
        data={[
          webPageSchema(`${district.name} ${sector.name} Kurye`, description, `${siteConfig.domain}${path}`, pageKeywords),
          serviceSchema(`${district.name} ${sector.name} Kurye`, description, `${siteConfig.domain}${path}`),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Sektörler', url: `${siteConfig.domain}/sektorler` },
            { name: sector.name, url: `${siteConfig.domain}/sektorler/${sector.slug}` },
            { name: district.name, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Sektör + ilçe</p>
            <h1>{district.name} içinde {sector.name} için kurye</h1>
            <p>{district.name} bölgesindeki {sector.name.toLocaleLowerCase('tr-TR')} işletmeleri için pickup, teslimat ve mahalle bazlı rota akışı bu sayfada toplanır.</p>
          </div>
        </section>

        <section className="section section--compact-top">
          <div className="container narrow">
            <figure className="content-card media-hero">
              <img className="media-hero__image" src={photo.url} alt={photo.alt} loading="lazy" />
              <figcaption>
                Fotoğraf: <a href={photo.creditUrl} target="_blank" rel="noreferrer">{photo.creditName}</a>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <h2>{district.name} içinde neden ayrı sektör sayfası var?</h2>
              <p>{district.summary} {sector.focus} Bu sayfa, {district.name} icindeki {sector.name.toLocaleLowerCase('tr-TR')} isletmeleri icin pickup ve teslimat surecini daha net gormenizi saglar.</p>
            </div>
            <div className="check-list">
              <span>{district.name} icin lokal hizmet bilgileri</span>
              <span>{district.neighborhoods.length} mahalleye inen detay rota</span>
              <span>Yerel teslimat ve pickup anlatimi</span>
              <span>Mahalle sayfalarina hizli gecis</span>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Mahalle bazlı sayfalar</p>
              <h2>{district.name} mahallelerinde {sector.name}</h2>
            </div>
            <div className="district-neighborhoods">
              {district.neighborhoods.map((neighborhood) => (
                <Link key={neighborhood.slug} className="district-pill" href={`/sektorler/${sector.slug}/${district.slug}/${neighborhood.slug}`}>
                  <strong>{neighborhood.name}</strong>
                  <span>{sector.name} için {neighborhood.name} odaklı kurye sayfası</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container faq-list">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: sectorCatalog.flatMap((sector) =>
    districts.map((district) => ({
      params: {
        sector: sector.slug,
        district: district.slug
      }
    }))
  ),
  fallback: false
});

export const getStaticProps: GetStaticProps<SectorDistrictPageProps> = async ({ params }) => {
  const sectorSlug = String(params?.sector || '');
  const districtSlug = String(params?.district || '');
  const sector = getSectorBySlug(sectorSlug);
  const district = getDistrictBySlug(districtSlug);

  if (!sector || !district) {
    return { notFound: true };
  }

  const photos = await fetchUnsplashPhotos(`${sector.imageQuery} ${district.name}`, 1);

  return {
    props: {
      sector,
      district,
      photo: photos[0]
    }
  };
};
