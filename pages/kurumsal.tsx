import { Layout } from '../components/Layout';
import { SeoHead } from '../components/SeoHead';
import { Schema } from '../components/Schema';
import { implementedAdvantageChecklist, trustBadges } from '../lib/marketIntel';
import { breadcrumbSchema, organizationSchema, reviewSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

const trustBlocks = [
  'Kurumsal evrak ve sözleşme süreçleri için planlı teslimat modeli',
  'Finans, hukuk, sağlık ve e-ticaret ekiplerine uygun teslim kurgusu',
  'Sabit operasyon iletişimi ve teklif standardı',
  'İstanbul genelinde ilçe bazlı rota planlama'
];

const entityFacts = [
  { label: 'Resmi marka adı', value: siteConfig.brand },
  { label: 'Alternatif marka adları', value: siteConfig.alternateNames.join(', ') },
  { label: 'Hizmet bölgesi', value: 'İstanbul geneli, 39 ilçe ve mahalle odaklı operasyon' },
  { label: 'İletişim', value: `${siteConfig.phoneDisplay} | ${siteConfig.email}` }
];

export default function CorporatePage() {
  return (
    <>
      <SeoHead title="Kurumsal Moto Kurye" description="Kurumsal firmalar için İstanbul içi düzenli kurye operasyonu ve şehir içi teslimat çözümleri." path="/kurumsal" />
      <Schema
        data={[
          organizationSchema,
          reviewSchema('Kurumsal Moto Kurye', 'Kurumsal firmalar için İstanbul içi düzenli kurye operasyonu ve şehir içi teslimat çözümleri.', `${siteConfig.domain}/kurumsal`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Kurumsal', url: `${siteConfig.domain}/kurumsal` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Kurumsal çözümler</p>
            <h1>Operasyon yoğun şirketler için kurye altyapısı</h1>
            <p>Kurumsal sayfa; güven, süreç netliği ve sektör uyumu gibi kalite sinyallerini artırmak için tasarlandı.</p>
          </div>
        </section>

        <section className="section">
          <div className="container card-grid two-up">
            {trustBlocks.map((item) => (
              <article key={item} className="content-card">
                <h2>{item}</h2>
                <p>Kurumsal müşterilerin satın alma kararında operasyon standardı, hız kadar belirleyicidir.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--tint">
          <div className="container narrow">
            <div className="section-head">
              <p className="eyebrow">Marka kimliği</p>
              <h2>Makine tarafından okunabilir işletme özeti</h2>
              <p>Arama motorları ve yapay zeka sistemleri için marka adı, temas noktası ve hizmet alanı burada tek yerde toplanır.</p>
            </div>
            <div className="faq-list">
              {entityFacts.map((item) => (
                <article className="faq-item" key={item.label}>
                  <h3>{item.label}</h3>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Kurumsal fark</p>
              <h2>Rakiplerin uzerine ekledigimiz operasyon katmani</h2>
              <p>Kurumsal tarafta sadece hiz yetmez; surecin olculebilir, ulasilabilir ve raporlanabilir hissettirmesi gerekir.</p>
            </div>
            <div className="check-list">
              {implementedAdvantageChecklist.slice(0, 5).map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="container section-stack-top badge-strip">
            {trustBadges.map((item) => (
              <span key={item} className="trust-badge">{item}</span>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}