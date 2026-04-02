import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { breadcrumbSchema, faqSchema } from '../../lib/seo';
import { getHubItemBySlug, hubItems } from '../../lib/contentHub';
import { siteConfig } from '../../lib/siteData';

type FaqDetailProps = {
  item: NonNullable<ReturnType<typeof getHubItemBySlug>>;
};

export default function FaqDetailPage({ item }: FaqDetailProps) {
  const path = `/sikca-sorulan-sorular/${item.slug}`;

  return (
    <>
      <SeoHead title={`${item.title} SSS`} description={item.excerpt} path={path} />
      <Schema
        data={[
          faqSchema(item.faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Sıkça Sorulan Sorular', url: `${siteConfig.domain}/sikca-sorulan-sorular` },
            { name: item.title, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">SSS detayı</p>
            <h1>{item.title} hakkında sık sorulan sorular</h1>
            <p>{item.intro}</p>
          </div>
        </section>

        <section className="section">
          <div className="container faq-list">
            {item.faqs.map((faq) => (
              <article key={faq.question} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--tint">
          <div className="container cta-band">
            <div>
              <h3>İlgili sayfalar</h3>
              <p>Bu alan için detay yazı ve galeri bağlantılarını aşağıdan açabilirsiniz.</p>
            </div>
            <div className="hero__actions">
              <Link className="primary-button" href={`/blog/${item.slug}`}>Blog yazısı</Link>
              <Link className="ghost-button" href={`/galeri/${item.slug}`}>Galeri</Link>
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

export const getStaticProps: GetStaticProps<FaqDetailProps> = async ({ params }) => {
  const slug = String(params?.slug || '');
  const item = getHubItemBySlug(slug);

  if (!item) {
    return { notFound: true };
  }

  return {
    props: {
      item
    }
  };
};
