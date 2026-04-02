import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../../components/Layout';
import { Schema } from '../../../components/Schema';
import { SeoHead } from '../../../components/SeoHead';
import { buildKeywordSet } from '../../../lib/keywordData';
import { DistrictSeoItem, NeighborhoodItem, districts, getNeighborhoodBySlug } from '../../../lib/geoData';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../../../lib/seo';
import { siteConfig } from '../../../lib/siteData';

type NeighborhoodPageProps = {
  district: DistrictSeoItem;
  neighborhood: NeighborhoodItem;
};

const buildNeighborhoodFaqs = (district: string, neighborhood: string) => [
  {
    question: `${neighborhood} içinde kurye ne kadar sürede gelir?`,
    answer: `${neighborhood} ve ${district} çevresinde pickup süresi trafik, saat ve kurye yoğunluğuna göre planlanır; amaç mümkün olan en kısa sürede yönlendirme yapmaktır.`
  },
  {
    question: `${neighborhood} için hangi gönderiler taşınır?`,
    answer: 'Evrak, küçük paket, medikal gönderi, e-ticaret siparişi, yedek parça ve özel teslimatlar operasyon koşullarına göre planlanır.'
  },
  {
    question: `${neighborhood} için WhatsApp teklif alabilir miyim?`,
    answer: 'Evet. Alış noktası, teslim noktası, gönderi tipi ve aciliyet bilgisini paylaşarak hızlı teklif alabilirsiniz.'
  }
];

export default function NeighborhoodPage({ district, neighborhood }: NeighborhoodPageProps) {
  const path = `/istanbul/${district.slug}/${neighborhood.slug}`;
  const faqs = buildNeighborhoodFaqs(district.name, neighborhood.name);
  const description = `${neighborhood.name} ${district.name} kurye hizmeti, hizli pickup ve mahalle bazli teslimat detaylari. ${neighborhood.summary}`;
  const pageKeywords = buildKeywordSet(
    [`${neighborhood.name} kurye`, `${district.name} ${neighborhood.name} kurye`, `${district.name} ${neighborhood.name} acil kurye`, `${district.name} ${neighborhood.name} moto kurye`, `${district.name} ${neighborhood.name} express kurye`],
    ['istanbul mahalle kurye', 'ayni gun kurye', 'hizli kurye']
  );

  return (
    <>
      <SeoHead title={`${neighborhood.name} ${district.name} Kurye`} description={description} path={path} keywords={pageKeywords} />
      <Schema
        data={[
          webPageSchema(`${neighborhood.name} ${district.name} Kurye`, description, `${siteConfig.domain}${path}`, pageKeywords),
          serviceSchema(`${neighborhood.name} ${district.name} Kurye`, description, `${siteConfig.domain}${path}`),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'İstanbul', url: `${siteConfig.domain}/anahtar-kelime-haritasi` },
            { name: district.name, url: `${siteConfig.domain}/istanbul/${district.slug}` },
            { name: neighborhood.name, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Mahalle bazli kurye</p>
            <h1>{neighborhood.name} Kurye Hizmeti</h1>
            <p>{neighborhood.summary}</p>
            <div className="tag-row">
              <span>{neighborhood.name.toLocaleLowerCase('tr-TR')} kurye</span>
              <span>{district.name.toLocaleLowerCase('tr-TR')} moto kurye</span>
              <span>{neighborhood.name.toLocaleLowerCase('tr-TR')} acil kurye</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <h2>{neighborhood.name} için hizli teslimat akisi</h2>
              <p>
                {neighborhood.name} ve {district.name} cevresindeki teslimat ihtiyaclarinda pickup, rota ve iletisim surecini hizlandiran bilgiler bir araya getirildi.
              </p>
            </div>
            <div className="check-list">
              <span>{neighborhood.name} çıkışlı hızlı pickup</span>
              <span>{district.name} içi ve yakalar arası teslim planı</span>
              <span>Evrak, paket, express ve aynı gün kurye senaryoları</span>
              <span>Telefon, WhatsApp ve teklif formu ile hizli iletisim</span>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">İlgili mahalleler</p>
              <h2>{district.name} içindeki diğer lokal sayfalar</h2>
            </div>
            <div className="card-grid three-up">
              {district.neighborhoods.filter((item) => item.slug !== neighborhood.slug).map((item) => (
                <article className="content-card" key={item.slug}>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                  <Link href={`/istanbul/${district.slug}/${item.slug}`}>Mahalle sayfasını aç</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sık sorulanlar</p>
              <h2>{neighborhood.name} kurye hakkında sık sorulan sorular</h2>
            </div>
            <div className="faq-list">
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

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: districts.flatMap((district) =>
    district.neighborhoods.map((neighborhood) => ({
      params: { district: district.slug, neighborhood: neighborhood.slug }
    }))
  ),
  fallback: false
});

export const getStaticProps: GetStaticProps<NeighborhoodPageProps> = async ({ params }) => {
  const districtSlug = String(params?.district || '');
  const neighborhoodSlug = String(params?.neighborhood || '');
  const result = getNeighborhoodBySlug(districtSlug, neighborhoodSlug);

  if (!result) {
    throw new Error('Neighborhood not found');
  }

  return {
    props: result
  };
};