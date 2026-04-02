import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { breadcrumbSchema, organizationSchema } from '../lib/seo';
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