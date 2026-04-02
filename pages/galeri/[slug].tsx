import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { breadcrumbSchema, serviceSchema } from '../../lib/seo';
import { getHubItemBySlug, hubItems } from '../../lib/contentHub';
import { fetchUnsplashPhotos, GalleryPhoto } from '../../lib/unsplash';
import { siteConfig } from '../../lib/siteData';

type GalleryDetailProps = {
  item: NonNullable<ReturnType<typeof getHubItemBySlug>>;
  photos: GalleryPhoto[];
};

export default function GalleryDetailPage({ item, photos }: GalleryDetailProps) {
  const path = `/galeri/${item.slug}`;

  return (
    <>
      <SeoHead title={`${item.title} galerisi`} description={item.excerpt} path={path} />
      <Schema
        data={[
          serviceSchema(`${item.title} galerisi`, item.excerpt, `${siteConfig.domain}${path}`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Galeri', url: `${siteConfig.domain}/galeri` },
            { name: item.title, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Galeri detayı</p>
            <h1>{item.title}</h1>
            <p>{item.intro}</p>
          </div>
        </section>

        <section className="section">
          <div className="container photo-grid">
            {photos.map((photo) => (
              <figure key={photo.id} className="content-card photo-card">
                <img className="photo-card__image" src={photo.url} alt={photo.alt} loading="lazy" />
                <figcaption>
                  <span>{photo.alt}</span>
                  <a href={photo.creditUrl} target="_blank" rel="noreferrer">{photo.creditName}</a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section section--tint">
          <div className="container cta-band">
            <div>
              <h3>İlgili içeriklere geçin</h3>
              <p>Bu alan için blog yazısını, SSS detayını ve asıl hizmet sayfasını aynı akışta açabilirsiniz.</p>
            </div>
            <div className="hero__actions">
              <Link className="primary-button" href={`/blog/${item.slug}`}>Blog yazısı</Link>
              <Link className="ghost-button" href={`/sikca-sorulan-sorular/${item.slug}`}>SSS detayı</Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: hubItems.map((item) => ({ params: { slug: item.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<GalleryDetailProps> = async ({ params }) => {
  const slug = String(params?.slug || '');
  const item = getHubItemBySlug(slug);

  if (!item) {
    return { notFound: true };
  }

  const photos = await fetchUnsplashPhotos(item.imageQuery, 6);

  return {
    props: {
      item,
      photos
    }
  };
};
