import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { districts } from '../../lib/geoData';
import { breadcrumbSchema, serviceSchema } from '../../lib/seo';
import { siteConfig } from '../../lib/siteData';
import { getFeaturedHubItems, getHubItemsByKind, getTimedNarrative } from '../../lib/contentHub';
import { fetchUnsplashPhotos, GalleryPhoto } from '../../lib/unsplash';

type BlogIndexProps = {
  featuredCards: Array<{
    href: string;
    title: string;
    excerpt: string;
    photo: GalleryPhoto;
  }>;
  narrative: ReturnType<typeof getTimedNarrative>;
};

export default function BlogIndexPage({ featuredCards, narrative }: BlogIndexProps) {
  const districtItems = getHubItemsByKind('district');
  const sectorItems = getHubItemsByKind('sector');

  return (
    <>
      <SeoHead
        title="Kurye Blogu"
        description="İstanbul ilçeleri, mahalleleri ve sektörleri için programatik kurye blog içerikleri ve gün içi operasyon rehberleri."
        path="/blog"
      />
      <Schema
        data={[
          serviceSchema('Kurye Blogu', 'İlçe, mahalle ve sektör bazlı kurye operasyon içerikleri.', `${siteConfig.domain}/blog`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Blog', url: `${siteConfig.domain}/blog` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Kurye blogu</p>
            <h1>İlçe, mahalle ve sektör bazlı kurye içerikleri</h1>
            <p>{narrative.blog}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{narrative.label}</p>
              <h2>Günün öne çıkan yazıları</h2>
            </div>
            <div className="card-grid three-up">
              {featuredCards.map((card) => (
                <article key={card.href} className="content-card media-card">
                  <img className="media-card__image" src={card.photo.thumb} alt={card.photo.alt} loading="lazy" />
                  <h3>{card.title}</h3>
                  <p>{card.excerpt}</p>
                  <Link href={card.href}>Yazıyı aç</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">İlçe yazıları</p>
              <h2>39 ilçe için ayrı blog rehberleri</h2>
            </div>
            <div className="card-grid two-up">
              {districtItems.map((item) => (
                <article key={item.slug} className="content-card">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="keyword-list">
                    <Link href={`/blog/${item.slug}`}>Blog yazısı</Link>
                    <Link href={`/sikca-sorulan-sorular/${item.slug}`}>SSS</Link>
                    <Link href={`/galeri/${item.slug}`}>Galeri</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Mahalle kapsamı</p>
              <h2>Tüm mahalleler ilçe bazlı blog akışına bağlandı</h2>
            </div>
            <div className="card-grid two-up">
              {districts.map((district) => (
                <article key={district.slug} className="content-card">
                  <h3>{district.name}</h3>
                  <p>{district.neighborhoods.length} mahalle için blog, SSS ve galeri bağlantısı hazır.</p>
                  <div className="keyword-list">
                    {district.neighborhoods.slice(0, 8).map((neighborhood) => (
                      <Link key={neighborhood.slug} href={`/blog/mahalle-${district.slug}-${neighborhood.slug}`}>
                        {neighborhood.name}
                      </Link>
                    ))}
                    <span>+{Math.max(district.neighborhoods.length - 8, 0)} mahalle daha</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sektör yazıları</p>
              <h2>Tüm sektörler için ayrı operasyon yazıları</h2>
            </div>
            <div className="card-grid two-up">
              {sectorItems.map((item) => (
                <article key={item.slug} className="content-card">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="keyword-list">
                    <Link href={`/blog/${item.slug}`}>Yazıyı aç</Link>
                    <Link href={`/sikca-sorulan-sorular/${item.slug}`}>SSS</Link>
                    <Link href={`/galeri/${item.slug}`}>Galeri</Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const featured = getFeaturedHubItems(new Date());
  const [districtPhoto, neighborhoodPhoto, sectorPhoto] = await Promise.all([
    fetchUnsplashPhotos(featured.district.imageQuery, 1),
    fetchUnsplashPhotos(featured.neighborhood.imageQuery, 1),
    fetchUnsplashPhotos(featured.sector.imageQuery, 1)
  ]);

  return {
    props: {
      narrative: getTimedNarrative(new Date()),
      featuredCards: [
        {
          href: `/blog/${featured.district.slug}`,
          title: featured.district.title,
          excerpt: featured.district.excerpt,
          photo: districtPhoto[0]
        },
        {
          href: `/blog/${featured.neighborhood.slug}`,
          title: featured.neighborhood.title,
          excerpt: featured.neighborhood.excerpt,
          photo: neighborhoodPhoto[0]
        },
        {
          href: `/blog/${featured.sector.slug}`,
          title: featured.sector.title,
          excerpt: featured.sector.excerpt,
          photo: sectorPhoto[0]
        }
      ]
    },
    revalidate: 3600
  };
};
