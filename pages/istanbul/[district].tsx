import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { buildKeywordSet } from '../../lib/keywordData';
import { DistrictSeoItem, districts } from '../../lib/geoData';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../../lib/seo';
import { services, siteConfig } from '../../lib/siteData';

type DistrictPageProps = {
  district: DistrictSeoItem;
};

const buildDistrictFaqs = (district: DistrictSeoItem) => [
  {
    question: `${district.name} içinde kurye ne kadar sürede gelir?`,
    answer: `${district.name} içinde pickup süresi trafik, saat ve gönderi yoğunluğuna göre değişir; amaç en kısa sürede kurye planı oluşturup kullanıcıyı anlık bilgilendirmektir.`
  },
  {
    question: `${district.name} için hangi hizmetler verilir?`,
    answer: 'Acil kurye, express kurye, gece kurye, arabalı kurye, aynı gün teslimat ve ihtiyaca göre özel operasyon hizmetleri planlanabilir.'
  },
  {
    question: `${district.name} kurye fiyatı nasıl belirlenir?`,
    answer: 'Fiyat; pickup noktası, teslim adresi, gönderi hacmi, seçilen hız seviyesi ve rota yoğunluğuna göre belirlenir.'
  }
];

const buildDistrictSections = (district: DistrictSeoItem) => [
  {
    heading: `${district.name} kurye hizmeti neden farklı planlanır?`,
    paragraphs: [
      `${district.name} bölgesinde kurye ihtiyacının güçlü olmasının temel nedeni, teslimat taleplerinin hem bireysel hem kurumsal tarafta yüksek niyet taşımasıdır. Kullanıcı çoğu zaman yalnızca bir kurye firması aramaz; bulunduğu ilçeye gerçekten hakim, pickup ve teslim süresini açıkça anlatan, WhatsApp veya telefon ile hızlıca aksiyon aldıran bir yapı görmek ister. Bu sayfa tam olarak bu beklentiye cevap vermek için oluşturuldu.`,
      `${district.summary} ${district.name} için hazırlanan bu içerik; ilçe adı, mahalle kapsaması, hizmet türleri ve sık sorulan sorular üzerinden güçlü bir lokal alaka kurar. Böylece hem Google hem de kullanıcı, bu sayfanın genel bir İstanbul kurye metni değil doğrudan ${district.name} odaklı bir operasyon sayfası olduğunu daha net anlar.`
    ]
  },
  {
    heading: `${district.name} içinde hangi teslimat senaryoları öne çıkar?`,
    paragraphs: [
      `${district.highlights.join(' ')} Bu vurgu alanları, ilçedeki gerçek gönderi niyetini daha iyi karşılamak için seçildi. Çünkü bazı ilçelerde plaza ve finans teslimatları öne çıkarken, bazı ilçelerde e-ticaret, medikal veya teknik servis gönderileri daha yoğun olabilir. İlçe bazlı içerikte bu ayrımı açık şekilde işlemek, dönüşüm tarafında çok daha doğru kullanıcıyı çekmeye yardımcı olur.`,
      `${district.name} içinde acil evrak, sözleşme, e-ticaret paketi, yedek parça veya aynı gün teslim edilmesi gereken küçük paket taleplerinde kullanıcı ilk anda netlik görmek ister. Hangi hizmetin uygun olduğu, ne kadar sürede pickup yapılabileceği ve teklifin nasıl alınacağı açıkça anlatıldığında arama niyeti telefon veya WhatsApp aksiyonuna daha hızlı döner.`
    ]
  },
  {
    heading: `${district.name} kurye sayfası SEO ve dönüşüm için nasıl çalışır?`,
    paragraphs: [
      `${district.name} kurye sayfası yalnızca bir başlık sayfası değildir. İlçeye bağlı mahalle sayfaları, hizmet detay sayfaları, fiyat hesaplama modülü, sık sorulan sorular ve schema katmanı ile birlikte daha büyük bir lokal SEO kümesinin parçası olarak çalışır. Bu sayede kullanıcı ${district.name} kurye, ${district.name} acil kurye, ${district.name} moto kurye veya mahalle bazlı aramalar yaptığında birden fazla alakalı giriş noktası oluşur.`,
      `Dönüşüm tarafında ise sabit WhatsApp, arama butonu, teklif sayfası ve hızlı CTA bantları birlikte hareket eder. Bu yapı, sadece sıralama almak değil; ${district.name} bölgesinden gelen ziyaretçiyi daha kısa sürede müşteri adayına çevirmek için tasarlanmıştır.`
    ]
  }
];

export default function DistrictPage({ district }: DistrictPageProps) {
  const path = `/istanbul/${district.slug}`;
  const description = `${district.name} kurye hizmeti, mahalle kapsami ve bolgeye uygun hizli teslimat detaylari. ${district.summary}`;
  const faqs = buildDistrictFaqs(district);
  const sections = buildDistrictSections(district);
  const pageKeywords = buildKeywordSet(
    [`${district.name} kurye`, `${district.name} acil kurye`, `${district.name} moto kurye`, `${district.name} express kurye`, `${district.name} ayni gun kurye`],
    district.neighborhoods.slice(0, 10).map((item) => `${item.name} kurye`),
    ['istanbul kurye', 'hizli kurye']
  );

  return (
    <>
      <SeoHead title={`${district.name} Kurye`} description={description} path={path} keywords={pageKeywords} />
      <Schema
        data={[
          webPageSchema(`${district.name} Kurye`, description, `${siteConfig.domain}${path}`, pageKeywords),
          serviceSchema(`${district.name} Kurye`, district.summary, `${siteConfig.domain}${path}`),
          faqSchema(faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'İstanbul İlçeleri', url: `${siteConfig.domain}/anahtar-kelime-haritasi` },
            { name: district.name, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero district-hero">
          <div className="container narrow">
            <p className="eyebrow">Ilce bazli kurye</p>
            <h1>{district.name} Kurye Hizmeti</h1>
            <p>{district.summary}</p>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <h2>{district.name} için öne çıkan ihtiyaçlar</h2>
              <p>
                {district.name} icinde acil evrak, paket, express teslimat ve gun ici kurye ihtiyaclari icin hizli yonlendirme ve net iletisim on plandadir.
              </p>
            </div>
            <div className="check-list">
              {district.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Uzun form içerik</p>
              <h2>{district.name} için detaylı lokal açıklamalar</h2>
            </div>
            <div className="card-grid three-up">
              {sections.map((section) => (
                <article className="content-card content-card--longform" key={section.heading}>
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">İlgili hizmetler</p>
              <h2>{district.name} için en çok talep edilen kurye tipleri</h2>
            </div>
            <div className="card-grid three-up">
              {services.slice(0, 6).map((service) => (
                <article className="content-card" key={service.slug}>
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                  <Link href={`/hizmetler/${service.slug}`}>Hizmet detayını aç</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Google AI için kısa cevaplar</p>
              <h2>{district.name} kurye arayanların en çok sorduğu konular</h2>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <article className="faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Mahalle bazlı sayfalar</p>
              <h2>{district.name} mahallelerinde hizmet verilen alanlar</h2>
            </div>
            <div className="district-neighborhoods">
              {district.neighborhoods.map((item) => (
                <Link className="district-pill" key={item.slug} href={`/istanbul/${district.slug}/${item.slug}`}>
                  <strong>{item.name}</strong>
                  <span>{item.summary}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cta-band">
            <div>
              <h3>{district.name} bölgesi için teklif al</h3>
              <p>Pickup ve teslimat noktasını paylaşın, bölgeye uygun hızlı kurye planı oluşturalım.</p>
            </div>
            <div className="hero__actions">
              <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp ile başla
              </a>
              <Link className="ghost-button" href="/teklif-al">
                Teklif formu
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: districts.map((district) => ({ params: { district: district.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<DistrictPageProps> = async ({ params }) => {
  const district = districts.find((item) => item.slug === params?.district);

  if (!district) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      district
    }
  };
};