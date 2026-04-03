import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { reviewHighlights, sampleDeliveryTimeline, trustBadges } from '../lib/marketIntel';
import { breadcrumbSchema, reviewSchema, webPageSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

const deliveryExamples = [
  'Ataşehir finans merkezi çıkışlı sözleşme teslimi aynı gün sonuçlandı.',
  'Kadıköy çıkışlı medikal ürün talebinde hızlı pickup ve telefon teyidi sağlandı.',
  'Bakırköy ile Şişli arasındaki kurumsal evrak operasyonunda express rota kullanıldı.',
  'İstanbul çıkışlı şehirler arası evrak senaryosunda rota ve teslim süresi önceden netleştirildi.'
];

export default function DeliveryHistoryPage() {
  const description = '34 Moto Kurye İstanbul için örnek teslimat akışları, operasyon süreçleri ve güven sinyalleri.';
  const path = '/gecmis-teslimatlar';

  return (
    <>
      <SeoHead title="Geçmiş Teslimatlar ve Operasyon Akışları" description={description} path={path} />
      <Schema
        data={[
          webPageSchema('Geçmiş Teslimatlar ve Operasyon Akışları', description, `${siteConfig.domain}${path}`),
          reviewSchema('Geçmiş Teslimatlar ve Operasyon Akışları', description, `${siteConfig.domain}${path}`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Geçmiş Teslimatlar', url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Operasyon güveni</p>
            <h1>Örnek teslimat akışları ve görünür güven sinyalleri</h1>
            <p>Bu alan, gerçek zamanlı müşteri paneli yerine kullanıcıya operasyon disiplinini gösteren örnek teslimat akışlarını, süreç netliğini ve yorum desteğini görünür hale getirir.</p>
          </div>
        </section>

        <section className="section">
          <div className="container card-grid two-up">
            {sampleDeliveryTimeline.map((item) => (
              <article key={item.title} className="content-card content-card--longform">
                <p className="eyebrow">{item.title}</p>
                <h2>{item.title}</h2>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Operasyon örnekleri</p>
              <h2>Farklı gönderi senaryolarında nasıl ilerliyoruz?</h2>
              <p>Acil evrak, medikal paket, VIP teslimat ve şehirler arası taleplerde kullanıcıya ilk anda görünen şey; hız kadar süreç netliği olmalıdır.</p>
            </div>
            <div className="check-list">
              {deliveryExamples.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Müşteri yorumu</p>
              <h2>Teslimat sonrası oluşan güven</h2>
            </div>
            <div className="card-grid three-up">
              {reviewHighlights.map((item) => (
                <article key={item.author} className="content-card review-card">
                  <p>“{item.text}”</p>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </article>
              ))}
            </div>
            <div className="section-stack-top badge-strip">
              {trustBadges.map((item) => (
                <span key={item} className="trust-badge">{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-band cta-band--accent">
              <div>
                <h3>Şimdi kendi teslimatınızı başlatın</h3>
                <p>Pickup, teslim adresi ve gönderi tipini paylaşın; size uygun kurye modeliyle hızlı teklif ve yönlendirme sürecini başlatalım.</p>
              </div>
              <div className="hero__actions">
                <Link className="primary-button" href="/teklif-al">Teklif al</Link>
                <a className="ghost-button" href={siteConfig.phoneHref}>Hemen ara</a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}