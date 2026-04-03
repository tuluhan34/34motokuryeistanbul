import { LeadEstimator } from '../components/LeadEstimator';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { buildKeywordSet } from '../lib/keywordData';
import { competitorCommonFeatures, implementedAdvantageChecklist } from '../lib/marketIntel';
import { breadcrumbSchema, faqSchema, reviewSchema, serviceSchema, webPageSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

const pricingFactors = [
  {
    title: 'Mesafe ve ilçe yapısı',
    detail: 'Aynı ilçe içi, yakalar arası geçiş ve uzak ilçeler fiyatı doğrudan etkiler.'
  },
  {
    title: 'Teslimat hızı',
    detail: 'Standart, express, VIP veya aynı gün modeli seçildiğinde operasyon önceliği değişir.'
  },
  {
    title: 'Gönderi tipi',
    detail: 'Evrak, küçük paket, medikal gönderi veya arabalı kurye gerektiren hacimli gönderiler farklı planlanır.'
  },
  {
    title: 'Saat ve trafik yoğunluğu',
    detail: 'Gece operasyonu, köprü geçişi ve yoğun trafik zamanlaması maliyeti etkileyebilir.'
  }
];

const averageTimes = [
  'Aynı ilçe içi teslimat: ortalama 45-60 dakika',
  'Aynı yaka teslimatı: ortalama 60-90 dakika',
  'Avrupa ve Anadolu arası: ortalama 60-120 dakika',
  'Gece ve özel taşıma: operasyon koşuluna göre planlanır'
];

const pricingFaqs = [
  {
    question: 'Kurye fiyatı sabit mi?',
    answer: 'Hayır. Fiyat; mesafe, teslimat hızı, gönderi tipi ve rota koşullarına göre belirlenir.'
  },
  {
    question: 'WhatsApp üzerinden fiyat alabilir miyim?',
    answer: 'Evet. Pickup ve teslim noktalarını, gönderi tipini ve aciliyet seviyesini paylaşarak hızlı teklif alabilirsiniz.'
  },
  {
    question: 'Arabalı kurye fiyatı farklı mı?',
    answer: 'Evet. Hacimli paketler ve araç gerektiren teslimatlar motorlu kurye modelinden farklı fiyatlanır.'
  },
  {
    question: 'Kurumsal firmalara özel fiyat var mı?',
    answer: 'Düzenli gönderi hacmi olan işletmeler için kurumsal anlaşma ve operasyon bazlı fiyat modeli oluşturulabilir.'
  }
];

export default function PricingPage() {
  const pageKeywords = buildKeywordSet(
    ['kurye fiyatları', 'kurye fiyat hesaplama', 'istanbul kurye fiyat', 'acil kurye fiyatı', 'express kurye fiyatı'],
    competitorCommonFeatures,
    ['aynı gün kurye fiyatı', 'şehirler arası kurye fiyatı']
  );

  return (
    <>
      <SeoHead
        title="Kurye Fiyatları İstanbul"
        description="İstanbul içi moto kurye, acil kurye, arabalı kurye ve aynı gün teslimat için fiyatı etkileyen faktörler ve teklif alma sayfası."
        path="/kurye-fiyatlari"
        keywords={pageKeywords}
      />
      <Schema
        data={[
          webPageSchema('Kurye Fiyatları İstanbul', 'İstanbul içi moto kurye, acil kurye, arabalı kurye ve aynı gün teslimat için fiyatı etkileyen faktörler ve teklif alma sayfası.', `${siteConfig.domain}/kurye-fiyatlari`, pageKeywords),
          serviceSchema('İstanbul Kurye Fiyatları', 'İstanbul içi kurye fiyatlandırma bilgisi ve teklif alma sayfası.', `${siteConfig.domain}/kurye-fiyatlari`),
          reviewSchema('İstanbul Kurye Fiyatları', 'İstanbul içi kurye fiyatlandırma bilgisi ve teklif alma sayfası.', `${siteConfig.domain}/kurye-fiyatlari`),
          faqSchema(pricingFaqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Kurye Fiyatları', url: `${siteConfig.domain}/kurye-fiyatlari` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Kurye fiyatlari</p>
            <h1>İstanbul kurye fiyatları nasıl belirlenir?</h1>
            <p>Mesafe, gonderi tipi, teslim hizi ve operasyon kosullari fiyat uzerinde belirleyicidir. Net teklif icin pickup ve teslim noktalarini iletin.</p>
          </div>
        </section>

        <section className="section">
          <div className="container card-grid two-up">
            {pricingFactors.map((factor) => (
              <article key={factor.title} className="content-card">
                <h2>{factor.title}</h2>
                <p>{factor.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <LeadEstimator />
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Ortalama süreler</p>
              <h2>Teslim süresi ve teklif ilişkisi</h2>
              <p>Teslimat modeli hızlandıkça rota önceliği, sürücü planlaması ve araç seçimi değişir. Bu da fiyatı etkileyen temel unsurlardan biridir.</p>
            </div>
            <div className="check-list">
              {averageTimes.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Rakiplerde gorulenler</p>
              <h2>Fiyat arayan kullanici rakiplerde ne goruyor?</h2>
              <p>Rakip sayfalarda acik fiyat hissi, hizli CTA ve hizmet farklarini ayni ekranda gormek karar hizini artiriyor. Bu sayfa ayni yapinin daha gelismis versiyonunu sunar.</p>
            </div>
            <div className="check-list">
              {competitorCommonFeatures.slice(0, 5).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="container section-stack-top">
            <div className="card-grid two-up">
              {implementedAdvantageChecklist.slice(0, 4).map((item) => (
                <article key={item} className="content-card">
                  <h3>34 Moto Kurye farki</h3>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sık sorulanlar</p>
              <h2>Fiyat ve teklif süreci hakkında sorular</h2>
            </div>
            <div className="faq-list">
              {pricingFaqs.map((faq) => (
                <article key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
            <div className="cta-band">
              <div>
                <h3>Hızlı teklif almak için hazır bilgiler</h3>
                <p>Alış noktası, teslim noktası, gönderi tipi ve aciliyet bilgisini ilettiğinizde net teklif daha hızlı oluşur.</p>
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp ile fiyat sor
                </a>
                <a className="ghost-button" href={siteConfig.phoneHref}>
                  Hemen ara
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}