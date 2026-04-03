import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { reviewHighlights, trustBadges } from '../lib/marketIntel';
import { breadcrumbSchema, organizationSchema, reviewSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

const referenceGroups = [
  {
    title: 'Hukuk ve finans ekipleri',
    description: 'Sözleşme, dava dosyası, banka evrakı ve imza süreçlerinde zaman kritik kurye akışı.'
  },
  {
    title: 'Sağlık ve laboratuvar operasyonları',
    description: 'Klinik, eczane ve laboratuvar çıkışlarında hassas evrak ve küçük paket teslimatı.'
  },
  {
    title: 'E-ticaret ve perakende markaları',
    description: 'Aynı gün teslimat beklentisi olan siparişlerde hızlı pickup ve rota planlaması.'
  }
];

const trustSignals = [
  'İstanbul geneli hizmet alanı ve ilçe bazlı içerik ağı',
  'Telefon, WhatsApp ve teklif formu üzerinden aynı marka diliyle iletişim',
  'Acil, express, VIP, evrak ve arabalı kurye senaryoları için ayrı sayfalar',
  'Kurumsal, SSS, Google İşletme ve fiyat sayfalarıyla desteklenen açık işletme kimliği'
];

export default function ReferencesPage() {
  return (
    <>
      <SeoHead
        title="Referanslar ve Musteri Yorumlari"
        description="34 Moto Kurye Istanbul icin kurumsal kullanim senaryolari, musteri yorumlari ve guven sinyalleri."
        path="/referanslar"
      />
      <Schema
        data={[
          organizationSchema,
          reviewSchema('Referanslar ve Müşteri Yorumları', '34 Moto Kurye İstanbul için kurumsal kullanım senaryoları, müşteri yorumları ve güven sinyalleri.', `${siteConfig.domain}/referanslar`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Referanslar', url: `${siteConfig.domain}/referanslar` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Referans</p>
            <h1>Referans Alanı</h1>
            <p>Aktif referans alaninda paylasilan kurumsal web adresi asagida yer almaktadir.</p>
          </div>
        </section>

        <section className="section">
          <div className="container card-grid three-up">
            {referenceGroups.map((item) => (
              <article className="content-card" key={item.title}>
                <p className="eyebrow">Referans grubu</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--tint">
          <div className="container narrow">
            <div className="section-head">
              <p className="eyebrow">Güven sinyalleri</p>
              <h2>{siteConfig.brand} için öne çıkan referans yapısı</h2>
            </div>
            <div className="check-list">
              {trustSignals.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Musteri yorumu</p>
              <h2>Gorunur guven sinyalleri</h2>
            </div>
            <div className="card-grid three-up">
              {reviewHighlights.map((item) => (
                <article className="content-card review-card" key={item.author}>
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
      </Layout>
    </>
  );
}