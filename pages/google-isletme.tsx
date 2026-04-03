import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { competitorAudits, gbpActionPlan, gbpContentAssets, gbpProfileDescription, gbpReadyPostCaptions, gbpServiceList, reviewRequestFlow, weeklyGbpPostPlan } from '../lib/marketIntel';
import { breadcrumbSchema, organizationSchema, reviewSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

const businessSignals = [
  'Birincil kategori kurye hizmeti, ikincil kategoriler express kurye ve teslimat hizmetleri olarak net tanımlanmalı.',
  'Telefon numarası, website URL, çalışma saatleri ve hizmet alanı Google İşletme ile sitede birebir tutarlı olmalı.',
  'Gerçek iş fotoğrafları, kurye ekip görüntüleri ve teslimat süreçleri düzenli eklenmeli.',
  'Yorumlarda ilçe, hız, aciliyet ve hizmet tipi geçen doğal metinler yerel sıralamayı güçlendirir.',
  'WhatsApp ve arama CTA metinleri hem sitede hem işletme profilinde aynı marka diliyle ilerlemeli.'
];

const businessAssets = [
  '15+ yıllık tecrübeyi profil açıklamasında ve düzenli gönderilerde sabit mesaj haline getir.',
  '5 yıldızlı işletme algısını desteklemek için yorum yanıtlarında hız, güven ve ilçe bilgisini mutlaka geçir.',
  '900+ müşteri yorumu vurgusunu işletme açıklaması, soru-cevap ve web bağlantılı sayfalarda aynı dille kullan.',
  'Ataşehir, Şişli, Kağıthane, Kartal, Eyüpsultan ve Sultangazi gibi rekabet yoğun ilçeler için haftalık post döngüsü oluştur.',
  'Acil kurye, arabalı kurye, express kurye ve aynı gün teslimat için ayrı işletme gönderileri hazır tut.'
];

const businessPosts = [
  'İstanbul genelinde 15+ yıllık tecrübemizle acil kurye ve express kurye taleplerinizi aynı gün planlıyoruz. Ataşehir, Şişli, Kağıthane ve tüm ilçelerde hızlı alım için hemen arayın.',
  'Google’da 5 yıldızlı memnuniyet algımızı sahadaki hızımızla destekliyoruz. 900+ müşteri geri bildirimiyle İstanbul içi motorlu ve arabalı kurye ihtiyaçlarınızda yanınızdayız.',
  'Kartal, Eyüpsultan ve Sultangazi dahil 39 ilçede aynı gün teslimat, acil evrak taşıma ve express kurye hizmeti için WhatsApp üzerinden dakikalar içinde teklif alın.'
];

const businessFaqs = [
  {
    question: 'İstanbul içinde hangi bölgelere hizmet veriyorsunuz?',
    answer: '34 Moto Kurye İstanbul olarak Ataşehir, Şişli, Kağıthane, Kartal, Eyüpsultan dahil 39 ilçenin tamamında hizmet veriyoruz.'
  },
  {
    question: 'Kurye ne kadar sürede yönlendirilir?',
    answer: 'Lokasyon ve yoğunluğa göre değişmekle birlikte acil kurye taleplerinde en kısa sürede operasyon planlaması yapıyoruz.'
  },
  {
    question: 'Hangi hizmetleri sunuyorsunuz?',
    answer: 'Acil kurye, express kurye, arabalı kurye, aynı gün teslimat, evrak kurye ve medikal kurye hizmetleri sunuyoruz.'
  }
];

export default function GoogleBusinessPage() {
  return (
    <>
      <SeoHead
        title="Konum ve İşletme Bilgileri"
        description="34 Moto Kurye İstanbul için konum, işletme bilgileri, örnek gönderiler ve sık sorulan sorular."
        path="/google-isletme"
      />
      <Schema
        data={[
          organizationSchema,
          reviewSchema('Google İşletme ve Yerel Görünürlük', '34 Moto Kurye İstanbul için Google İşletme stratejisi, yerel görünürlük planı ve yorum yönetimi.', `${siteConfig.domain}/google-isletme`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Konum ve İşletme Bilgileri', url: `${siteConfig.domain}/google-isletme` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Konum bilgileri</p>
            <h1>İşletme bilgileri ve iletişim detayları</h1>
            <p>Harita, işletme bilgileri, örnek içerikler ve sık sorulan sorular tek sayfada yer alır.</p>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div className="map-card map-card--tall">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Google İşletme Harita Alanı"
              />
            </div>
            <div className="check-list">
              {businessSignals.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Profil bilgileri</p>
              <h2>İşletme profilinde öne çıkan temel bilgiler</h2>
            </div>
            <div className="check-list">
              {businessAssets.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container card-grid two-up">
            <article className="content-card content-card--longform">
              <p className="eyebrow">Hazır açıklama</p>
              <h3>Google İşletme profil açıklaması</h3>
              <p>{gbpProfileDescription}</p>
            </article>
            <article className="content-card">
              <p className="eyebrow">Hizmet listesi</p>
              <h3>Profilde açılması gereken hizmetler</h3>
              <div className="check-list check-list--flat">
                {gbpServiceList.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">GBP aksiyon plani</p>
              <h2>Google Business Profile tarafinda uygulanacak net adimlar</h2>
              <p>Yerel siralamada kazanc, tek seferlik optimizasyondan degil; profil, yorum ve post ritminin birlikte yonetilmesinden gelir.</p>
            </div>
            <div className="check-list">
              {gbpActionPlan.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container card-grid two-up">
            <article className="content-card content-card--longform">
              <p className="eyebrow">Haftalik post takvimi</p>
              <h3>Surekli gorunurluk icin post ritmi</h3>
              {weeklyGbpPostPlan.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </article>
            <article className="content-card content-card--longform">
              <p className="eyebrow">Yorum stratejisi</p>
              <h3>Google yorumlarini yerel SEO sinyaline cevirme akisi</h3>
              {reviewRequestFlow.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Hazır GBP içerikleri</p>
              <h2>İşletme profilinde doğrudan kullanılabilecek metin iskeletleri</h2>
              <p>Profil açıklaması, gönderi metni ve soru-cevap tarafında tutarlı marka dili kullanmak lokal görünürlüğü güçlendirir.</p>
            </div>
            <div className="check-list">
              {gbpContentAssets.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Rakiplerden çıkan GBP dersleri</p>
              <h2>Yerel görünürlükte rakiplerin kullandığı sinyaller</h2>
            </div>
            <div className="card-grid three-up">
              {competitorAudits.slice(0, 6).map((item) => (
                <article key={item.name} className="content-card">
                  <p className="eyebrow">{item.name}</p>
                  <h3>{item.name} için öne çıkan GBP yaklaşımı</h3>
                  <p>{item.gbpSignals.join(', ')}.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Örnek duyurular</p>
              <h2>İşletme profilinde kullanılabilecek örnek gönderi metinleri</h2>
            </div>
            <div className="card-grid three-up">
              {businessPosts.map((post) => (
                <article className="content-card" key={post}>
                  <p>{post}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hazır paylaşım seti</p>
              <h2>Doğrudan kopyalanabilir GBP paylaşım metinleri</h2>
            </div>
            <div className="card-grid two-up">
              {gbpReadyPostCaptions.map((post) => (
                <article className="content-card content-card--longform" key={post}>
                  <p>{post}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Soru Cevap</p>
              <h2>İşletme profili için örnek soru cevaplar</h2>
            </div>
            <div className="faq-list">
              {businessFaqs.map((item) => (
                <article className="faq-item" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}