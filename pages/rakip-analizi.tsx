import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import {
  competitorAudits,
  competitorFeatureInventory,
  missingCompetitorFeatures,
  upgradedFeatureChecklist
} from '../lib/marketIntel';
import { breadcrumbSchema, faqSchema, reviewSchema, webPageSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

const rivalFaqs = [
  {
    question: 'Rakip analizinde hangi markalar incelendi?',
    answer: 'Hit Kurye, Ataşehir Kurye, Son Kurye, Senin Kuryen, Size Bi Kurye, Bugün Kurye ve diğer görünür İstanbul merkezli kurye markalarının kamuya açık site ve yerel görünürlük sinyalleri incelendi.'
  },
  {
    question: 'Bu sayfa neden önemli?',
    answer: 'Rakiplerin kullandığı telefon görünürlüğü, teklif akışı, hizmet çeşitliliği, ilçe bazlı sayfalar ve GBP sinyalleri tek noktada toplanarak 34 Moto Kurye İstanbul için daha güçlü bir yapı kurulmasını sağlar.'
  },
  {
    question: 'Eklenen geliştirmeler neleri kapsıyor?',
    answer: 'Yeni hizmet sayfaları, rakip gap envanteri, kurye çağır ve geçmiş teslimatlar sayfaları, daha uzun ilçe-mahalle içerikleri ve güçlendirilmiş GBP stratejisi bu pakete dahil edildi.'
  }
];

export default function CompetitorAnalysisPage() {
  const description = 'İstanbul moto kurye pazarındaki rakip sitelerden çıkarılan özellikler, eksikler ve 34 Moto Kurye İstanbul için uygulanan geliştirmeler.';
  const path = '/rakip-analizi';

  return (
    <>
      <SeoHead title="Rakip Analizi ve Özellik Envanteri" description={description} path={path} />
      <Schema
        data={[
          webPageSchema('Rakip Analizi ve Özellik Envanteri', description, `${siteConfig.domain}${path}`),
          reviewSchema('Rakip Analizi ve Özellik Envanteri', description, `${siteConfig.domain}${path}`),
          faqSchema(rivalFaqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Rakip Analizi', url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Rakip gap analizi</p>
            <h1>Rakiplerde olan tüm görünür özellikleri tek yapıda topladık</h1>
            <p>Bu sayfa, kamuya açık rakip site ve yerel görünürlük sinyallerinden çıkarılan özellikleri, önceki eksikleri ve projeye eklenen geliştirmeleri görünür hale getirir.</p>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Rakiplerde tekrar eden yapı</p>
              <h2>İstanbul kurye pazarında çalışan özellik kümeleri</h2>
              <p>Arama sonuçları ve rakip ana sayfalarda en sık görülen kalıplar; hızlı arama, WhatsApp, fiyat alma, çoklu hizmet kartları, ilçe odaklı başlıklar ve güçlü işletme sinyalleridir.</p>
            </div>
            <div className="check-list">
              {competitorFeatureInventory.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Marka bazlı özet</p>
              <h2>Rakiplerin öne çıkan yönleri</h2>
            </div>
            <div className="card-grid two-up">
              {competitorAudits.map((audit) => (
                <article key={audit.name} className="content-card content-card--longform">
                  <p className="eyebrow">{audit.name}</p>
                  <h3>{audit.domain}</h3>
                  <p><strong>Site sinyalleri:</strong> {audit.siteSignals.join(', ')}.</p>
                  <p><strong>GBP sinyalleri:</strong> {audit.gbpSignals.join(', ')}.</p>
                  <p><strong>Öne çıkan yön:</strong> {audit.standoutFeatures.join(', ')}.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Önce eksik olanlar</p>
              <h2>Projede kapatılan boşluklar</h2>
              <p>Rakip analizi sonrası ilk hedef; yalnızca benzer görünmek değil, daha kapsamlı hizmet ve daha net dönüşüm akışı kurmaktı.</p>
            </div>
            <div className="check-list">
              {missingCompetitorFeatures.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="container section-stack-top">
            <div className="card-grid two-up">
              {upgradedFeatureChecklist.map((item) => (
                <article key={item} className="content-card">
                  <h3>Uygulanan geliştirme</h3>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hızlı aksiyon</p>
              <h2>Rakipleri incelemek yerine hemen kurye çağır</h2>
            </div>
            <div className="cta-band cta-band--accent">
              <div>
                <h3>Hizmet, fiyat ve hız bilgisi birkaç saniyede netleşsin</h3>
                <p>Kurye ihtiyacınız varsa doğrudan teklif sayfasına veya WhatsApp hattına geçerek anında dönüşüm akışını başlatabilirsiniz.</p>
              </div>
              <div className="hero__actions">
                <Link className="primary-button" href="/teklif-al">Teklif al</Link>
                <a className="ghost-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp yaz</a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}