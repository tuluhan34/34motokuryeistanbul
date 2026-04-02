import Link from 'next/link';
import { QuickConversionSection } from '../components/QuickConversionSection';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { districts } from '../lib/geoData';
import { buildKeywordSet } from '../lib/keywordData';
import { breadcrumbSchema, faqSchema, organizationSchema, serviceSchema, webPageSchema, websiteSchema } from '../lib/seo';
import { homepageFaqs, services, siteConfig, valuePoints } from '../lib/siteData';

const socialProofStats = [
  { value: '15+ Yıl', label: 'aktif saha tecrübesi' },
  { value: '5.0', label: 'Google yıldız güveni' },
  { value: '1000+', label: 'başarılı teslimat' },
  { value: '900+', label: 'müşteri yorumu' },
  { value: '7/24', label: 'çağrı ve operasyon akışı' }
];

const trustStats = [
  { value: '30 dk', label: 'pickup hedefi' },
  { value: '1000+', label: 'başarılı teslimat' },
  { value: '39', label: 'ilçede kapsama' },
  { value: '7/24', label: 'aktif talep hattı' }
];

const highIntentBlocks = [
  {
    title: 'Acil Kurye',
    subtitle: 'Acil gönderin mi var?',
    text: 'Evrak, parça ve paket gönderilerinde beklemeyi azaltan hızlı pickup ve doğrudan teslimat akışı.',
    note: 'Şu an kurye çağır, uygunlukta 30 dakikada alım hedefiyle süreci başlat.',
    href: '/hizmetler/acil-kurye'
  },
  {
    title: 'Hemen Kurye',
    subtitle: 'Yoğunluk artmadan sipariş ver',
    text: 'Kararsızlığı azaltan net yapı: telefonu aç, WhatsApp yaz veya teklif formuyla anında fiyat al.',
    note: 'Bekleyen gönderi maliyet yaratır; siparişi şimdi oluşturmak teslim süresini kısaltır.',
    href: '/teklif-al'
  },
  {
    title: 'En Hızlı Kurye',
    subtitle: 'Zaman kritik teslimatlar için',
    text: 'Express ve VIP kurye senaryoları ile rota sadeleşir, teslim süreci daha hızlı ve daha kontrollü yürür.',
    note: 'Gonderi tipini ilet, hizli teklif al ve operasyonu bekletmeden baslat.',
    href: '/hizmetler/express-kurye'
  },
  {
    title: 'Gece Kurye',
    subtitle: 'Mesai bittiğinde de kurye lazım olabilir',
    text: 'Gece açık kurye ve 7/24 teslimat ihtiyacı olan işletmeler için mesai dışı operasyon mesajı güçlendirildi.',
    note: 'Gece açık kurye arayan kullanıcıyı doğrudan aramaya ve WhatsApp mesajına yönlendiren kısa akış.',
    href: '/hizmetler/gece-kurye'
  }
];

const conversionProofs = [
  'Kurumsal evrak, medikal numune, e-ticaret siparişi ve parça teslimatlarında planlı operasyon',
  'WhatsApp, arama ve teklif formu üzerinden üç ayrı hızlı dönüşüm kanalı',
  'Acil kurye, express kurye, motorlu kurye ve aynı gün teslimat sorgularına özel içerik blokları',
  'Istanbul geneli ilce ve mahalle kapsami'
];

const funnelSteps = [
  {
    title: 'Sorun',
    text: 'Acil gönderin var ve bekledikçe hem zaman hem müşteri kaybı yaşıyorsun.'
  },
  {
    title: 'Çözüm',
    text: 'Kurye talebini şimdi ilet, uygun operasyonda 30 dakikada pickup hedefiyle süreç başlasın.'
  },
  {
    title: 'Aksiyon',
    text: 'Karar vermeyi erteleme. Telefon, WhatsApp veya teklif al sayfasından siparişi hemen oluştur.'
  }
];

const advantageCards = [
  {
    title: 'Daha hızlı aksiyon',
    text: 'Net mesaj ve hizli iletisim adimlariyla siparis sureci kisalir.'
  },
  {
    title: 'Daha görünür fiyat akışı',
    text: 'Anında fiyat al, WhatsApp ile yaz ve teklif al sayfası birlikte çalışarak kullanıcıyı bekletmiyor.'
  },
  {
    title: 'Daha ulaşılabilir yapı',
    text: '7/24, gece açık kurye ve aynı gün teslim mesajları özellikle acil trafik için ayrı güçlendirildi.'
  },
  {
    title: 'Daha güçlü yerel sinyal',
    text: 'Ilce ve mahalle bazli hizmet alanlari sayesinde bulundugunuz bolgeye daha hizli ulasilir.'
  }
];

const processSteps = [
  {
    title: '1. Talebi ilet',
    text: 'Pickup noktası, teslim adresi ve gönderi tipini paylaş. İstersen WhatsApp üzerinden tek mesajla başlat.'
  },
  {
    title: '2. Hızlı fiyat al',
    text: 'Mesafe, teslimat hızı ve gönderi tipine göre net teklif kısa sürede oluşturulsun.'
  },
  {
    title: '3. Kurye yönlendirilsin',
    text: 'Acil kurye, express kurye veya aynı gün teslimat modeline göre operasyon hemen başlasın.'
  }
];

const localConversionBlocks = [
  {
    name: 'Kadıköy',
    slug: 'kadikoy',
    title: 'Kadıköy’de en hızlı kurye çözümleri',
    text: 'Moda, Kozyatağı, Göztepe ve merkez hattında acil kurye ve aynı gün teslimat taleplerini hızlı pickup odaklı karşılıyoruz.'
  },
  {
    name: 'Beşiktaş',
    slug: 'besiktas',
    title: 'Beşiktaş kurye arayanlar için hızlı operasyon',
    text: 'Levent, Etiler ve Zincirlikuyu çevresindeki kurumsal gönderiler için express ve VIP kurye akışı öne çıkarılıyor.'
  },
  {
    name: 'Şişli',
    slug: 'sisli',
    title: 'Şişli express kurye taleplerinde net aksiyon',
    text: 'Mecidiyeköy ve Osmanbey ekseninde hız, ulaşılabilirlik ve anında fiyat alma süreci daha görünür hale getirildi.'
  },
  {
    name: 'Üsküdar',
    slug: 'uskudar',
    title: 'Üsküdar’da hemen kurye çağır',
    text: 'Üsküdar merkezli gönderilerde köprü geçişli teslimatlar için hızlı karar aldıran lokal içerik ve CTA akışı kuruluyor.'
  },
  {
    name: 'Ataşehir',
    slug: 'atasehir',
    title: 'Ataşehir’de kurumsal kurye ihtiyacına hızlı cevap',
    text: 'Finans merkezi ve plaza yoğunluğu olan bölgelerde acil evrak, VIP kurye ve express teslimat içerikleri daha ikna edici hale getirildi.'
  },
  {
    name: 'Bakırköy',
    slug: 'bakirkoy',
    title: 'Bakırköy aynı gün teslimat odaklı kurye',
    text: 'Klinik, ofis ve bireysel gönderilerde aynı gün kurye ve gece açık kurye talebine uygun kısa ve satış odaklı bloklar sunuluyor.'
  }
];

const nightUrgencySignals = [
  'Gece açık kurye arayan kullanıcıya doğrudan 7/24 ulaşılabilirlik mesajı verilir.',
  'Acil gönderi, nöbet teslimi ve mesai dışı evrak ihtiyaçları için ayrı karar metni kullanılır.',
  'WhatsApp ile gece talebi başlatma ve telefonla anında operasyon bilgisi alma yolu görünür tutulur.',
  '“Yoğunluk artmadan sipariş ver” ve “şimdi kurye çağır” mesajları acil niyetli trafiği hızla dönüştürür.'
];

const testimonials = [
  {
    name: 'Merve Y.',
    title: 'E-ticaret operasyon sorumlusu',
    text: 'Aynı gün teslimat tarafında hızlı geri dönüş ve yüksek yorum puanı birlikte görünce karar vermemiz kolaylaştı.'
  },
  {
    name: 'Onur K.',
    title: 'Hukuk ofisi yöneticisi',
    text: 'Acil evrak ve sözleşme teslimlerinde hız kadar 15+ yıllık deneyim vurgusu da önemliydi. Bu akış daha güven verici duruyor.'
  },
  {
    name: 'Derya A.',
    title: 'Klinik koordinatörü',
    text: 'Medikal gönderiler için süreç anlatımının net olması, Google yıldız gücü ve doğrudan arama butonu dönüşümü artırır.'
  }
];

const localHighlights = ['Kadıköy kurye', 'Beşiktaş acil kurye', 'Şişli express kurye', 'Ataşehir motorlu kurye', 'Bakırköy aynı gün teslimat', 'Üsküdar şehir içi kurye'];

const homepageTitle = 'Acil Kurye İstanbul, Hemen Kurye ve En Hızlı Kurye';
const homepageDescription =
  'Istanbul genelinde acil kurye, hemen kurye, en hizli kurye, gece kurye, express kurye ve ayni gun teslimat icin hizli fiyat ve kolay iletisim sunan kurye hizmeti.';

export default function HomePage() {
  const neighborhoodCount = districts.reduce((total, district) => total + district.neighborhoods.length, 0);
  const homepageKeywords = buildKeywordSet(
    ['istanbul kurye', 'moto kurye istanbul', 'acil kurye istanbul', 'express kurye istanbul', 'hemen kurye', 'en hizli kurye', 'gece kurye istanbul', 'ayni gun kurye istanbul', 'ucuz kurye istanbul', 'uygun fiyatli kurye'],
    districts.slice(0, 12).map((district) => `${district.name} kurye`),
    services.map((service) => service.intent[0])
  );
  const schemas = [
    organizationSchema,
    websiteSchema,
    webPageSchema(homepageTitle, homepageDescription, siteConfig.domain, homepageKeywords),
    serviceSchema('İstanbul Moto Kurye Hizmeti', 'İstanbul genelinde acil, express, VIP ve şehir içi moto kurye hizmetleri.', siteConfig.domain),
    faqSchema(homepageFaqs),
    breadcrumbSchema([
      { name: 'Ana Sayfa', url: siteConfig.domain }
    ])
  ];

  return (
    <>
      <SeoHead title={homepageTitle} description={homepageDescription} path="/" keywords={homepageKeywords} />
      <Schema data={schemas} />
      <Layout>
        <section className="hero">
          <div className="container hero__grid">
            <div>
              <p className="eyebrow">İstanbul içi moto kurye ve hızlı teslimat</p>
              <h1>1 dakikada kurye çağır</h1>
              <p className="hero__lead">
                Acil evrak, paket, express teslimat ve aynı gün kurye ihtiyaçlarınız için İstanbul genelinde hızlı teklif, net iletişim ve güçlü operasyon akışı sunuyoruz.
              </p>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp ile teklif al
                </a>
                <a className="ghost-button" href={siteConfig.phoneHref}>
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="metric-strip">
                <div>
                  <strong>10+</strong>
                  <span>hizmet sayfası</span>
                </div>
                <div>
                  <strong>39</strong>
                  <span>ilçe sayfası</span>
                </div>
                <div>
                  <strong>117</strong>
                  <span>mahalle sayfası</span>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <h2>Neden 34 Moto Kurye?</h2>
              <ul>
                {valuePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--compact-top">
          <div className="container">
            <div className="proof-band">
              {socialProofStats.map((item) => (
                <article key={item.label} className="proof-chip">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
            <div className="cta-band cta-band--trust">
              <div>
                <p className="eyebrow">Güven sinyali</p>
                <h3>15+ yıllık tecrübe, 1000+ başarılı teslimat ve 900+ müşteri yorumu aynı anda görünmeli</h3>
                <p>
                  Hizli teslimat kadar guven, ulasilabilirlik ve musteri memnuniyeti de karar surecinde belirleyicidir.
                </p>
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Hemen kurye çağır</a>
                <Link className="ghost-button" href="/teklif-al">Anında fiyat al</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hizli siparis</p>
              <h2>3 adimda kurye cagir</h2>
              <p>
                Adresi paylasin, hizli fiyat alin ve kurye yonlendirmesini hemen baslatin.
              </p>
            </div>
            <div className="card-grid three-up">
              {funnelSteps.map((item) => (
                <article key={item.title} className="content-card funnel-card">
                  <p className="eyebrow">{item.title}</p>
                  <h3>{item.title === 'Sorun' ? 'Acil gönderin mi var?' : item.title === 'Çözüm' ? '30 dakikada pickup hedefi' : 'Şimdi kurye çağır'}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="cta-band cta-band--dense">
              <div>
                <h3>Yoğunluk artmadan sipariş ver</h3>
                <p>Acil gönderilerde karar geciktikçe teslim süresi uzar. Şimdi arayarak veya WhatsApp’tan yazarak süreci başlat.</p>
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.phoneHref}>Hemen kurye çağır</a>
                <a className="ghost-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp’tan yaz</a>
              </div>
            </div>
          </div>
        </section>

        <QuickConversionSection neighborhoodCount={neighborhoodCount} />

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hizmet secenekleri</p>
              <h2>Acil kurye, hemen kurye, en hizli kurye ve gece kurye</h2>
              <p>
                Acil, express, gece ve ayni gun teslimat ihtiyaclari icin en uygun hizmete hizli ulasin.
              </p>
            </div>
            <div className="card-grid two-up">
              {highIntentBlocks.map((block) => (
                <article key={block.title} className="content-card intent-card">
                  <p className="eyebrow">{block.subtitle}</p>
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                  <p>{block.note}</p>
                  <div className="hero__actions">
                    <Link className="ghost-button" href={block.href}>Detayı gör</Link>
                    <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Şimdi kurye çağır</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hizmetlerimiz</p>
              <h2>Acil kurye, express kurye ve ayni gun teslimat secenekleri</h2>
              <p>
                Gonderinizin hizina ve tasima tipine gore en uygun hizmet secenegini kolayca inceleyin.
              </p>
            </div>
            <div className="card-grid three-up">
              {services.map((service) => (
                <article key={service.slug} className="content-card">
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                  <p>{service.hero}</p>
                  <div className="tag-row">
                    {service.intent.slice(0, 3).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="hero__actions">
                    <Link className="ghost-button" href={`/hizmetler/${service.slug}`}>Sayfayı incele</Link>
                    <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp'tan yaz</a>
                  </div>
                </article>
              ))}
            </div>
            <div className="cta-band cta-band--dense">
              <div>
                <h3>Acil kurye mi lazım?</h3>
                <p>Karışık seçeneklerle uğraşma. Gönderi tipini yaz, anında fiyat al ve kurye yönlendirme sürecini başlat.</p>
              </div>
              <div className="hero__actions">
                <Link className="primary-button" href="/teklif-al">Anında fiyat al</Link>
                <a className="ghost-button" href={siteConfig.phoneHref}>Anında ara</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Neden Biz</p>
              <h2>Hizli teklif ve net iletisimle kurye hizmeti</h2>
              <p>
                Hizli teklif, net iletisim ve bolgesel kapsama sayesinde siparis sureci daha kolay ilerler.
              </p>
              <div className="stats-grid">
                {trustStats.map((item) => (
                  <div className="stat-card" key={item.label}>
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="check-list">
              {conversionProofs.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Neden Bizi Seçmelisiniz?</p>
              <h2>Kurye ihtiyaclariniz icin net ve hizli cozum</h2>
              <p>
                Acil gonderilerde hizli ulasim, net fiyat akisi ve bolgesel hizmet gucu karar vermeyi kolaylastirir.
              </p>
            </div>
            <div className="check-list">
              <span>Telefon, WhatsApp ve teklif formu ile hizli iletisim</span>
              <span>Acil, express, gece, vip ve arabalı kurye secenekleri</span>
              <span>39 ilce ve mahalle kapsamina uygun hizmet akisi</span>
              <span>Kurumsal ve bireysel gonderiler icin esnek operasyon</span>
            </div>
          </div>
          <div className="container">
            <div className="card-grid two-up section-stack-top">
              {advantageCards.map((item) => (
                <article key={item.title} className="content-card advantage-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Lokal Dominasyon</p>
              <h2>Istanbul ve semt bazli kurye hizmet alanlari</h2>
              <p>
                Bulundugunuz ilce ve mahalleye uygun hizmet detaylarini hizlica inceleyin.
              </p>
              <div className="tag-row">
                {localHighlights.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="card-grid three-up local-mini-grid">
              {localConversionBlocks.map((block) => (
                <article key={block.slug} className="content-card local-mini-card">
                  <p className="eyebrow">{block.name}</p>
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                  <div className="hero__actions">
                    <Link className="ghost-button" href={`/istanbul/${block.slug}`}>Semt sayfası</Link>
                    <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Hemen kurye çağır</a>
                  </div>
                </article>
              ))}
            </div>
            <div className="district-list">
              {districts.map((district) => (
                <Link key={district.slug} href={`/istanbul/${district.slug}`} className="district-pill">
                  <strong>{district.name}</strong>
                  <span>{district.summary}</span>
                </Link>
              ))}
            </div>
            <div className="cta-band">
              <div>
                <h3>Bulunduğun bölge için hemen kurye çağır</h3>
                <p>İlçeni seç, sayfayı incele ve anında fiyat almak için WhatsApp veya arama ile ilerle.</p>
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Hemen kurye çağır</a>
                <Link className="ghost-button" href="/teklif-al">Anında fiyat al</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Nasıl Çalışır</p>
              <h2>1 mesajla başlayan hızlı kurye akışı</h2>
              <p>
                Pickup ve teslim bilgisi iletildiginde teklif ve yonlendirme sureci hizla baslatilir.
              </p>
            </div>
            <div className="card-grid three-up">
              {processSteps.map((step) => (
                <article key={step.title} className="content-card step-card">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
              <article className="content-card urgency-card">
                <h3>Şimdi kurye çağır</h3>
                <p>30 dakikada pickup hedefi, aynı gün teslimat planı ve doğrudan operasyona bağlanan WhatsApp akışı.</p>
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Anında fiyat al</a>
              </article>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Gece ve Acil Trafik</p>
              <h2>Gece acik kurye ve 7/24 hizmet</h2>
              <p>
                Gece kurye, gece acik kurye ve 7/24 hizmet ihtiyacinda hizli ulasim ve net yonlendirme sunuyoruz.
              </p>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Gece kurye çağır</a>
                <a className="ghost-button" href={siteConfig.phoneHref}>7/24 ara</a>
              </div>
            </div>
            <div className="check-list">
              {nightUrgencySignals.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Güven ve dönüşüm</p>
              <h2>Musteri yorumlari ve hizli geri donus</h2>
            </div>
            <div className="card-grid two-up">
              {testimonials.map((item) => (
                <article key={item.name} className="content-card review-card">
                  <p>“{item.text}”</p>
                  <strong>{item.name}</strong>
                  <span>{item.title}</span>
                </article>
              ))}
              <article className="content-card review-card">
                <p>“15+ yil tecrube, hizli geri donus ve ulasilabilir ekip sayesinde gonderilerimizi guvenle teslim ediyoruz.”</p>
                <strong>Musteri Deneyimi</strong>
                <span>Hizli iletisim ve duzenli operasyon</span>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sık sorulanlar</p>
              <h2>Müşteri karar sürecini hızlandıran net cevaplar</h2>
            </div>
            <div className="faq-list">
              {homepageFaqs.map((faq) => (
                <article key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
            <div className="cta-band cta-band--accent">
              <div>
                <h3>Acil gonderiniz icin son adim</h3>
                <p>Acil gonderiniz varsa beklemeyin. WhatsApp'tan yazin, aninda fiyat alin veya dogrudan arayin.</p>
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp'tan yaz</a>
                <Link className="ghost-button" href="/teklif-al">Anında fiyat al</Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}