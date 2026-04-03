import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { breadcrumbSchema, organizationSchema } from '../lib/seo';
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
      </Layout>
    </>
  );
}