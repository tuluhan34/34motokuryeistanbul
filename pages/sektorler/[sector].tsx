import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { fetchUnsplashPhotos, GalleryPhoto } from '../../lib/unsplash';
import { districts } from '../../lib/geoData';
import { buildKeywordSet } from '../../lib/keywordData';
import { getSectorBySlug, SectorCatalogItem } from '../../lib/sectorCatalog';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../../lib/seo';
import { services, siteConfig } from '../../lib/siteData';

type SectorPageProps = {
  sector: SectorCatalogItem;
  photo: GalleryPhoto;
};

const buildFaqs = (sector: SectorCatalogItem) => [
  {
    question: `${sector.name} için hangi kurye tipi uygundur?`,
    answer: `${sector.name} için gönderinin hacmine, hız ihtiyacına ve teslim içeriğine göre acil, express, VIP veya arabalı kurye seçeneği belirlenir.`
  },
  {
    question: `${sector.name} alanında ilçe bazlı çalışma yapılıyor mu?`,
    answer: 'Evet. İstanbul içindeki tüm ilçeler ve mahalleler için sektör odaklı ayrı kurye sayfaları bulunur.'
  },
  {
    question: `${sector.name} için teklif nasıl alınır?`,
    answer: 'Pickup noktası, teslim noktası ve gönderi tipini paylaşarak WhatsApp, telefon veya teklif formu üzerinden hızlı fiyat alabilirsiniz.'
  }
];

export default function SectorDetailPage({ sector, photo }: SectorPageProps) {
  const path = `/sektorler/${sector.slug}`;
  const faqs = buildFaqs(sector);
  const description = `${sector.name} icin Istanbul genelinde ilce ve mahalle bazli kurye hizmeti, hizli pickup ve ayni gun teslimat detaylari.`;
  const pageKeywords = buildKeywordSet(
    [sector.name, `${sector.name} kurye`, `${sector.name} istanbul kurye`, `${sector.name} acil kurye`, `${sector.name} express kurye`, `${sector.name} ayni gun teslimat`],
    districts.slice(0, 10).map((district) => `${district.name} ${sector.name} kurye`),
    ['istanbul kurye', 'moto kurye', 'kurye fiyat al']
  );

  return (
    <>
      <SeoHead title={`${sector.name} Kurye`} description={description} path={path} keywords={pageKeywords} />
      <Schema
        data={[
          webPageSchema(`${sector.name} Kurye`, description, `${siteConfig.domain}${path}`, pageKeywords),
          serviceSchema(`${sector.name} Kurye`, description, `${siteConfig.domain}${path}`),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Sektörler', url: `${siteConfig.domain}/sektorler` },
            { name: sector.name, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Sektör sayfası</p>
            <h1>{sector.name} için kurye hizmeti</h1>
            <p>{sector.short} {sector.focus}</p>
            <div className="tag-row">
              <span>{sector.name.toLocaleLowerCase('tr-TR')} kurye</span>
              <span>istanbul {sector.name.toLocaleLowerCase('tr-TR')}</span>
              <span>ilçe bazlı teslimat</span>
            </div>
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
              <h2>{sector.name} icin hizli kurye ulasimi</h2>
              <p>Bu sayfada sektorunuze uygun pickup, teslimat hizi, ilce kapsami ve mahalle bazli hizmet alanlarini tek ekranda inceleyebilirsiniz.</p>
            </div>
            <div className="check-list">
              <span>Sektore uygun ana hizmet bilgileri</span>
              <span>39 ilce icin ayri sektor sayfalari</span>
              <span>Mahalle bazli detay teslimat alanlari</span>
              <span>SSS, blog ve galeri baglantilari</span>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">İlçe bazlı sektör sayfaları</p>
              <h2>{sector.name} için 39 ilçe bağlantısı</h2>
            </div>
            <div className="district-list">
              {districts.map((district) => (
                <Link key={district.slug} className="district-pill" href={`/sektorler/${sector.slug}/${district.slug}`}>
                  <strong>{district.name}</strong>
                  <span>{sector.name} için {district.name} odaklı kurye akışı</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">İlgili hizmetler</p>
              <h2>{sector.name} için en uygun kurye seçenekleri</h2>
            </div>
            <div className="card-grid three-up">
              {services.slice(0, 6).map((service) => (
                <article key={service.slug} className="content-card">
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                  <Link href={`/hizmetler/${service.slug}`}>Hizmet detayını aç</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Destekleyici içerikler</p>
              <h2>{sector.name} için blog, SSS ve galeri</h2>
            </div>
            <div className="keyword-list">
              <Link href={`/blog/sektor-${sector.slug}`}>Blog yazısı</Link>
              <Link href={`/sikca-sorulan-sorular/sektor-${sector.slug}`}>SSS sayfası</Link>
              <Link href={`/galeri/sektor-${sector.slug}`}>Galeri</Link>
            </div>
            <div className="faq-list section-stack-top">
              {faqs.map((faq) => (
                <article key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<SectorPageProps> = async ({ params }) => {
  const sectorSlug = String(params?.sector || '');
  const sector = getSectorBySlug(sectorSlug);

  if (!sector) {
    return { notFound: true };
  }

  const photos = await fetchUnsplashPhotos(sector.imageQuery, 1);

  return {
    props: {
      sector,
      photo: photos[0]
    }
  };
};
