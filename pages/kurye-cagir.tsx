import Link from 'next/link';
import { LeadEstimator } from '../components/LeadEstimator';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { districts } from '../lib/geoData';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

const quickSteps = [
  'Alış adresini ve teslim noktasını paylaş.',
  'Gönderi tipini ve aciliyet durumunu belirt.',
  'Telefon veya WhatsApp üzerinden hızlı teklif ve kurye yönlendirmesi al.'
];

const quickFaqs = [
  {
    question: 'Kurye çağırmak için hangi bilgiler gerekli?',
    answer: 'Alış noktası, teslim adresi, gönderi tipi ve mümkünse aciliyet durumu paylaşılması yeterlidir.'
  },
  {
    question: 'Kurye çağırmak için en hızlı kanal hangisi?',
    answer: 'Telefonla arama ve WhatsApp mesajı en hızlı dönüş alınan iki kanaldır.'
  },
  {
    question: 'İstanbul dışında teslimat için de buradan talep bırakabilir miyim?',
    answer: 'Evet. Şehirler arası kurye veya uçak kargo gibi talepler için de aynı sayfadan başlangıç bilgisi iletebilirsiniz.'
  }
];

export default function CourierCallPage() {
  const neighborhoodCount = districts.reduce((total, district) => total + district.neighborhoods.length, 0);
  const description = 'İstanbul içinde acil kurye, express kurye, şehirler arası kurye ve özel teslimat için hızlı kurye çağırma sayfası.';
  const path = '/kurye-cagir';

  return (
    <>
      <SeoHead title="Kurye Çağır" description={description} path={path} />
      <Schema
        data={[
          webPageSchema('Kurye Çağır', description, `${siteConfig.domain}${path}`),
          serviceSchema('Kurye Çağır', description, `${siteConfig.domain}${path}`),
          faqSchema(quickFaqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Kurye Çağır', url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Yüksek niyetli dönüşüm</p>
            <h1>İstanbul içinde 1 dakikada kurye çağır</h1>
            <p>Acil evrak, küçük paket, medikal gönderi, arabalı kurye veya şehirler arası teslimat ihtiyacınız için tek ekranda hızlı aksiyon alın.</p>
            <div className="hero__actions">
              <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp ile kurye çağır</a>
              <a className="ghost-button" href={siteConfig.phoneHref}>Hemen ara</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Nasıl ilerler?</p>
              <h2>Kurye çağırma süreci kısa, net ve hızlı olmalı</h2>
              <p>Bu sayfa, rakiplerdeki ayrı kurye çağır akışının daha sade ve daha yüksek dönüşüm odaklı sürümünü sunar. Kullanıcıyı uzun formlarla yormadan önce temel bilgiyi aldırır, sonra teklif ve yönlendirmeye taşır.</p>
            </div>
            <div className="check-list">
              {quickSteps.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <LeadEstimator />
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Lokal kapsama</p>
              <h2>39 ilçe ve {neighborhoodCount}+ mahallede hızlı pickup odaklı akış</h2>
              <p>Kadıköy, Şişli, Ataşehir, Beşiktaş, Bakırköy, Ümraniye ve diğer tüm ilçelerde pickup bilgisini ileterek size en uygun rota ve hizmet tipini öğrenebilirsiniz.</p>
            </div>
            <div className="hero__actions">
              <Link className="primary-button" href="/teklif-al">Detaylı teklif bırak</Link>
              <Link className="ghost-button" href="/bolgeler">Bölge sayfalarını incele</Link>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sık sorulanlar</p>
              <h2>Kurye çağırma süreci hakkında kısa cevaplar</h2>
            </div>
            <div className="faq-list">
              {quickFaqs.map((faq) => (
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