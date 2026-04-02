import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { districts } from '../lib/geoData';
import { getFeaturedHubItems, getHubItemsByKind, getTimedNarrative } from '../lib/contentHub';
import { faqSchema, breadcrumbSchema, organizationSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

const faqs = [
  {
    question: 'Kurye kac dakikada gelir?',
    answer: 'Merkezi ilcelerde trafik ve yogunluga gore pickup hedefi genelde 15-30 dakika bandinda planlanir.'
  },
  {
    question: 'Istanbul\'un tum ilce ve mahallelerine hizmet var mi?',
    answer: 'Evet. 39 ilce ve tum mahalle kapsami icin lokal sayfa ve operasyon yapisi kuruldu.'
  },
  {
    question: 'Gece kurye ve 7/24 hizmet sunuyor musunuz?',
    answer: 'Mesai disi acil gonderiler icin gece kurye ve 7/24 operasyon uygunluğa gore planlanir.'
  },
  {
    question: 'Fiyat neye gore belirlenir?',
    answer: 'Pickup noktasi, teslim noktasi, gonderi tipi, hiz ihtiyaci ve arac tipine gore netlestirilir.'
  },
  {
    question: 'WhatsApp\'tan siparis verilebilir mi?',
    answer: 'Evet. Nereden nereye gidecegini ve gonderi tipini yazmaniz hizli teklif surecini baslatir.'
  },
  {
    question: 'Arabalı kurye ne zaman gerekir?',
    answer: 'Motorla tasinamayacak hacimli paket, koli, yedek parca veya coklu gonderilerde arabalı kurye tercih edilir.'
  },
  {
    question: 'Kurumsal aylik calisma yapiliyor mu?',
    answer: 'Duzenli evrak, dagitim ve e-ticaret cikisi olan firmalar icin planli operasyon modeli kurulabilir.'
  },
  {
    question: 'Ayni gun teslimat yapiliyor mu?',
    answer: 'Evet. Uygun rota ve saat araliginda ayni gun teslim odakli plan yapilir.'
  }
];

type FaqHubProps = {
  narrative: ReturnType<typeof getTimedNarrative>;
};

export default function FaqPage({ narrative }: FaqHubProps) {
  const featured = getFeaturedHubItems(new Date());
  const districtItems = getHubItemsByKind('district');
  const sectorItems = getHubItemsByKind('sector');

  return (
    <>
      <SeoHead
        title="Sikca Sorulan Sorular"
        description="Istanbul acil kurye, moto kurye, gece kurye, fiyatlandirma ve mahalle kapsami hakkinda sikca sorulan sorular."
        path="/sikca-sorulan-sorular"
      />
      <Schema
        data={[
          organizationSchema,
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Sikca Sorulan Sorular', url: `${siteConfig.domain}/sikca-sorulan-sorular` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Sikca sorulanlar</p>
            <h1>Kurye hizmeti hakkinda sik sorulan sorular</h1>
            <p>{narrative.faq}</p>
          </div>
        </section>

        <section className="section">
          <div className="container faq-list">
            {faqs.map((item) => (
              <article key={item.question} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Günün öne çıkanları</p>
              <h2>İlçe, mahalle ve sektör detay SSS sayfaları</h2>
            </div>
            <div className="card-grid three-up">
              {[featured.district, featured.neighborhood, featured.sector].map((item) => (
                <article key={item.slug} className="content-card">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="keyword-list">
                    <Link href={`/sikca-sorulan-sorular/${item.slug}`}>SSS detayı</Link>
                    <Link href={`/blog/${item.slug}`}>Blog</Link>
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
              <p className="eyebrow">İlçe SSS</p>
              <h2>39 ilçe için ayrı soru cevap akışı</h2>
            </div>
            <div className="card-grid two-up">
              {districtItems.map((item) => (
                <article key={item.slug} className="content-card">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link href={`/sikca-sorulan-sorular/${item.slug}`}>Detay SSS</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Mahalle kapsamı</p>
              <h2>Tüm mahalleler için detay SSS bağlantıları</h2>
            </div>
            <div className="card-grid two-up">
              {districts.map((district) => (
                <article key={district.slug} className="content-card">
                  <h3>{district.name}</h3>
                  <p>{district.neighborhoods.length} mahalle için SSS bağlantısı üretildi.</p>
                  <div className="keyword-list">
                    {district.neighborhoods.slice(0, 8).map((neighborhood) => (
                      <Link key={neighborhood.slug} href={`/sikca-sorulan-sorular/mahalle-${district.slug}-${neighborhood.slug}`}>
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

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sektör SSS</p>
              <h2>Tüm sektörlere özel soru cevap sayfaları</h2>
            </div>
            <div className="card-grid two-up">
              {sectorItems.map((item) => (
                <article key={item.slug} className="content-card">
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="keyword-list">
                    <Link href={`/sikca-sorulan-sorular/${item.slug}`}>SSS detayı</Link>
                    <Link href={`/blog/${item.slug}`}>Blog</Link>
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

export const getStaticProps: GetStaticProps<FaqHubProps> = async () => ({
  props: {
    narrative: getTimedNarrative(new Date())
  },
  revalidate: 3600
});