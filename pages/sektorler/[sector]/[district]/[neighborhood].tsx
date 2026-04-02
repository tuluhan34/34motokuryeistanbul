import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../../../components/Layout';
import { Schema } from '../../../../components/Schema';
import { SeoHead } from '../../../../components/SeoHead';
import { fetchUnsplashPhotos, GalleryPhoto } from '../../../../lib/unsplash';
import { districts, getNeighborhoodBySlug } from '../../../../lib/geoData';
import { buildKeywordSet } from '../../../../lib/keywordData';
import { getSectorBySlug, sectorCatalog, SectorCatalogItem } from '../../../../lib/sectorCatalog';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../../../../lib/seo';
import { siteConfig } from '../../../../lib/siteData';

type SectorNeighborhoodPageProps = {
  sector: SectorCatalogItem;
  district: NonNullable<ReturnType<typeof getNeighborhoodBySlug>>['district'];
  neighborhood: NonNullable<ReturnType<typeof getNeighborhoodBySlug>>['neighborhood'];
  photo: GalleryPhoto;
};

const buildFaqs = (sector: SectorCatalogItem, districtName: string, neighborhoodName: string) => [
  {
    question: `${neighborhoodName} içinde ${sector.name} için kurye çağrılabilir mi?`,
    answer: `Evet. ${neighborhoodName} ve ${districtName} çevresindeki ${sector.name.toLocaleLowerCase('tr-TR')} işletmeleri için pickup ve teslimat planı yapılabilir.`
  },
  {
    question: `${neighborhoodName} bölgesinde hangi gönderiler taşınır?`,
    answer: `${sector.short} Gönderinin içeriğine göre moto kurye veya arabalı kurye planı oluşturulur.`
  },
  {
    question: `${neighborhoodName} için hızlı teklif nasıl alınır?`,
    answer: 'Pickup noktası, teslim noktası ve gönderi içeriği paylaşıldığında telefon, WhatsApp veya teklif formu üzerinden hızlı geri dönüş yapılır.'
  }
];

export default function SectorNeighborhoodPage({ sector, district, neighborhood, photo }: SectorNeighborhoodPageProps) {
  const path = `/sektorler/${sector.slug}/${district.slug}/${neighborhood.slug}`;
  const faqs = buildFaqs(sector, district.name, neighborhood.name);
  const description = `${neighborhood.name} ${district.name} icinde ${sector.name} icin mahalle bazli kurye hizmeti, hizli pickup ve teslimat detaylari.`;
  const pageKeywords = buildKeywordSet(
    [`${neighborhood.name} ${district.name} ${sector.name} kurye`, `${neighborhood.name} ${sector.name} acil kurye`, `${neighborhood.name} ${sector.name} moto kurye`, `${district.name} ${sector.name} express kurye`],
    ['mahalle kurye', 'ayni gun teslimat', 'kurye telefonu']
  );

  return (
    <>
      <SeoHead title={`${neighborhood.name} ${district.name} ${sector.name} Kurye`} description={description} path={path} keywords={pageKeywords} />
      <Schema
        data={[
          webPageSchema(`${neighborhood.name} ${district.name} ${sector.name} Kurye`, description, `${siteConfig.domain}${path}`, pageKeywords),
          serviceSchema(`${neighborhood.name} ${district.name} ${sector.name} Kurye`, description, `${siteConfig.domain}${path}`),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Sektörler', url: `${siteConfig.domain}/sektorler` },
            { name: sector.name, url: `${siteConfig.domain}/sektorler/${sector.slug}` },
            { name: district.name, url: `${siteConfig.domain}/sektorler/${sector.slug}/${district.slug}` },
            { name: neighborhood.name, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Sektör + mahalle</p>
            <h1>{neighborhood.name} içinde {sector.name} için kurye</h1>
            <p>{neighborhood.name} mahallesinde yer alan {sector.name.toLocaleLowerCase('tr-TR')} işletmeleri için pickup, teslimat ve aynı gün gönderi akışını bu sayfa özetler.</p>
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
              <h2>{neighborhood.name} için mahalle bazlı kurye akışı</h2>
              <p>{sector.short} {neighborhood.summary} Bu sayfa, {neighborhood.name} mahallesindeki pickup ve teslimat ihtiyacini daha hizli degerlendirmeniz icin hazirlandi.</p>
            </div>
            <div className="check-list">
              <span>{neighborhood.name} çıkışlı pickup odaklı kurgu</span>
              <span>{sector.name} icin lokal hizmet ozeti</span>
              <span>Soru cevap ile net bilgilendirme</span>
              <span>{district.name} icindeki diger mahallelere hizli gecis</span>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Yakın mahalleler</p>
              <h2>{district.name} içindeki diğer {sector.name} sayfaları</h2>
            </div>
            <div className="card-grid three-up">
              {district.neighborhoods.filter((item) => item.slug !== neighborhood.slug).slice(0, 18).map((item) => (
                <article key={item.slug} className="content-card">
                  <h3>{item.name}</h3>
                  <p>{sector.name} için {item.name} odaklı mahalle teslimat sayfası.</p>
                  <Link href={`/sektorler/${sector.slug}/${district.slug}/${item.slug}`}>Mahalle sayfasını aç</Link>
                </article>
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
    districts.flatMap((district) =>
      district.neighborhoods.map((neighborhood) => ({
        params: {
          sector: sector.slug,
          district: district.slug,
          neighborhood: neighborhood.slug
        }
      }))
    )
  ),
  fallback: false
});

export const getStaticProps: GetStaticProps<SectorNeighborhoodPageProps> = async ({ params }) => {
  const sectorSlug = String(params?.sector || '');
  const districtSlug = String(params?.district || '');
  const neighborhoodSlug = String(params?.neighborhood || '');
  const sector = getSectorBySlug(sectorSlug);
  const result = getNeighborhoodBySlug(districtSlug, neighborhoodSlug);

  if (!sector || !result) {
    return { notFound: true };
  }

  const photos = await fetchUnsplashPhotos(`${sector.imageQuery} ${result.district.name} ${result.neighborhood.name}`, 1);

  return {
    props: {
      sector,
      district: result.district,
      neighborhood: result.neighborhood,
      photo: photos[0]
    }
  };
};
