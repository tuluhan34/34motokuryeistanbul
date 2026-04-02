import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { breadcrumbSchema, faqSchema, serviceSchema } from '../../lib/seo';
import { getHubItemBySlug, hubItems } from '../../lib/contentHub';
import { fetchUnsplashPhotos, GalleryPhoto } from '../../lib/unsplash';
import { siteConfig } from '../../lib/siteData';

type BlogDetailProps = {
  photo: GalleryPhoto;
  item: NonNullable<ReturnType<typeof getHubItemBySlug>>;
};

export default function BlogDetailPage({ item, photo }: BlogDetailProps) {
  const path = `/blog/${item.slug}`;

  return (
    <>
      <SeoHead title={item.title} description={item.excerpt} path={path} />
      <Schema
        data={[
          serviceSchema(item.title, item.excerpt, `${siteConfig.domain}${path}`),
          faqSchema(item.faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Blog', url: `${siteConfig.domain}/blog` },
            { name: item.title, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Blog yazısı</p>
            <h1>{item.title}</h1>
            <p>{item.intro}</p>
            <div className="tag-row">
              {item.keywords.map((keyword) => (
                <span key={keyword}>{keyword}</span>
              ))}
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
            <div className="content-stack">
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="check-list">
              {item.relatedLinks.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sık sorulanlar</p>
              <h2>{item.title} hakkında kısa cevaplar</h2>
            </div>
            <div className="faq-list">
              {item.faqs.map((faq) => (
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

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: hubItems.map((item) => ({ params: { slug: item.slug } })),
  fallback: false
});

export const getStaticProps: GetStaticProps<BlogDetailProps> = async ({ params }) => {
  const slug = String(params?.slug || '');
  const item = getHubItemBySlug(slug);

  if (!item) {
    return { notFound: true };
  }

  const photos = await fetchUnsplashPhotos(item.imageQuery, 1);

  return {
    props: {
      item,
      photo: photos[0]
    }
  };
};
