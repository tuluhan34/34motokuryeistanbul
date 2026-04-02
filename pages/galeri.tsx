import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { districts } from '../lib/geoData';
import { breadcrumbSchema, serviceSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';
import { getFeaturedHubItems, getTimedNarrative, sectorContent } from '../lib/contentHub';
import { fetchUnsplashPhotos, GalleryPhoto } from '../lib/unsplash';

type GalleryIndexProps = {
  narrative: ReturnType<typeof getTimedNarrative>;
  servicePhotos: GalleryPhoto[];
  sectorPhotos: GalleryPhoto[];
};

export default function GalleryIndexPage({ narrative, servicePhotos, sectorPhotos }: GalleryIndexProps) {
  const featured = getFeaturedHubItems(new Date());

  return (
    <>
      <SeoHead
        title="Kurye Galerisi"
        description="Moto kurye, arabalı kurye, paket taşımacılığı ve sektör bazlı teslimat görselleri için galeri alanı."
        path="/galeri"
      />
      <Schema
        data={[
          serviceSchema('Kurye Galerisi', 'Moto kurye, arabalı kurye ve lojistik odaklı görsel galeri.', `${siteConfig.domain}/galeri`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Galeri', url: `${siteConfig.domain}/galeri` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Galeri</p>
            <h1>Kurye ve taşımacılık odaklı görsel arşiv</h1>
            <p>{narrative.gallery}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hizmet görselleri</p>
              <h2>Motorlu ve arabalı kurye akışından kareler</h2>
            </div>
            <div className="card-grid three-up">
              {servicePhotos.map((photo) => (
                <article key={photo.id} className="content-card media-card">
                  <img className="media-card__image" src={photo.thumb} alt={photo.alt} loading="lazy" />
                  <p>Fotoğraf: <a href={photo.creditUrl} target="_blank" rel="noreferrer">{photo.creditName}</a></p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sektör galerileri</p>
              <h2>Tüm sektörler için ayrı galeri bağlantıları</h2>
            </div>
            <div className="card-grid two-up">
              {sectorContent.map((sector, index) => (
                <article key={sector.slug} className="content-card media-card">
                  <img className="media-card__image" src={sectorPhotos[index % sectorPhotos.length].thumb} alt={sectorPhotos[index % sectorPhotos.length].alt} loading="lazy" />
                  <h3>{sector.name}</h3>
                  <p>{sector.detail}</p>
                  <div className="keyword-list">
                    <Link href={`/galeri/sektor-${sector.slug}`}>Galeri</Link>
                    <Link href={`/blog/sektor-${sector.slug}`}>Blog</Link>
                    <Link href={`/sikca-sorulan-sorular/sektor-${sector.slug}`}>SSS</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Bölge galerileri</p>
              <h2>Tüm ilçe ve mahalleler için galeri sayfaları</h2>
            </div>
            <div className="card-grid two-up">
              {districts.map((district) => (
                <article key={district.slug} className="content-card">
                  <h3>{district.name}</h3>
                  <p>{district.neighborhoods.length} mahalle için detay galeri bağlantısı hazır.</p>
                  <div className="keyword-list">
                    <Link href={`/galeri/ilce-${district.slug}`}>İlçe galerisi</Link>
                    {district.neighborhoods.slice(0, 6).map((neighborhood) => (
                      <Link key={neighborhood.slug} href={`/galeri/mahalle-${district.slug}-${neighborhood.slug}`}>
                        {neighborhood.name}
                      </Link>
                    ))}
                    <span>+{Math.max(district.neighborhoods.length - 6, 0)} mahalle daha</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container cta-band cta-band--dense">
            <div>
              <h3>Öne çıkan alanlar</h3>
              <p>{featured.district.title}, {featured.neighborhood.title} ve {featured.sector.title} için görseller saatlik akışta yenilenir.</p>
            </div>
            <div className="hero__actions">
              <Link className="primary-button" href={`/galeri/${featured.district.slug}`}>İlçe galerisi</Link>
              <Link className="ghost-button" href={`/galeri/${featured.sector.slug}`}>Sektör galerisi</Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<GalleryIndexProps> = async () => {
  const [servicePhotos, sectorPhotos] = await Promise.all([
    fetchUnsplashPhotos('courier motorcycle cargo van parcel no people', 6),
    fetchUnsplashPhotos('logistics packages warehouse delivery no people', 6)
  ]);

  return {
    props: {
      narrative: getTimedNarrative(new Date()),
      servicePhotos,
      sectorPhotos
    },
    revalidate: 3600
  };
};
