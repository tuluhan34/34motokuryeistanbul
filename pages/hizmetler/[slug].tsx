import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { buildKeywordSet } from '../../lib/keywordData';
import { trustBadges } from '../../lib/marketIntel';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../../lib/seo';
import { ServiceItem, services, siteConfig } from '../../lib/siteData';
import { fetchUnsplashPhotos, GalleryPhoto } from '../../lib/unsplash';

type ServicePageProps = {
  service: ServiceItem;
  servicePhoto: GalleryPhoto;
};

const serviceImageQueries: Record<string, string> = {
  'arabalı-kurye': 'cargo motorcycle courier box city no people',
  'vip-kurye': 'premium motorcycle courier cargo box no people',
  'medikal-kurye': 'medical motorcycle courier package box no people',
  'evrak-kurye': 'document motorcycle courier cargo box no people',
  'e-ticaret-kurye': 'ecommerce motorcycle courier parcel boxes no people',
  'ayni-gun-kurye': 'same day motorcycle courier delivery no people',
  'gece-kurye': 'night motorcycle courier cargo box no people',
  'express-kurye': 'express motorcycle courier parcel no people',
  'acil-kurye': 'fast motorcycle courier cargo box no people',
  'sehir-ici-kurye': 'city motorcycle courier parcel no people',
  'sehirler-arasi-kurye': 'long distance motorcycle courier cargo no people',
  'vale-ozel-sofor': 'premium motorcycle courier cargo service no people',
  'eczane-kurye': 'pharmacy motorcycle courier package no people',
  'gumruk-kurye': 'customs document motorcycle courier no people',
  'gidis-donus-kurye': 'return document motorcycle courier no people',
  'randevulu-gonderim': 'scheduled motorcycle courier cargo no people',
  'ucak-kargo': 'airport motorcycle courier cargo no people',
  'minivan-panelvan': 'heavy parcel motorcycle courier cargo no people',
  'kamyonet-kurye': 'large parcel motorcycle courier logistics no people'
};

const buildServiceSections = (service: ServiceItem) => [
  {
    heading: `${service.name} hizmeti ne işe yarar?`,
    paragraphs: [
      `${service.name} hizmeti, standart teslimat akışının yetersiz kaldığı anlarda hız, teslim doğruluğu ve iletişim netliğini tek potada toplar. İstanbul içi gönderilerde kullanıcıların büyük bölümü yalnızca fiyat değil; ne kadar hızlı pickup yapılacağını, hangi kurye modelinin uygun olacağını ve sürecin ne kadar kontrollü ilerleyeceğini de görmek ister. Bu sayfa, ${service.name.toLocaleLowerCase('tr-TR')} ihtiyacını genel bir kurye araması olmaktan çıkarıp doğrudan aksiyona dönüştürmek için hazırlandı.`,
      `${service.hero} Bu nedenle içerik; başlık, alt başlık, soru-cevap ve çağrı alanlarıyla birlikte sadece arama motoruna değil, gerçek kullanıcı kararına da hizmet eder. İlk temasta görünen WhatsApp, telefon ve teklif akışı kararsızlığı azaltırken; hizmete özel kullanım senaryoları doğru kurye tipinin daha hızlı seçilmesini sağlar.`
    ]
  },
  {
    heading: `${service.name} kimler için uygundur?`,
    paragraphs: [
      `${service.name} çoğu zaman hukuk ofisleri, sağlık kuruluşları, e-ticaret operasyonları, teknik servis ekipleri ve bireysel kullanıcılar için kritik hale gelir. Çünkü gönderi ihtiyacı her zaman aynı değildir; kimi zaman acil bir sözleşme, kimi zaman aynı gün çıkması gereken bir paket, kimi zaman da belirli saat aralığında teslim edilmesi gereken operasyonel bir gönderi söz konusu olur.`,
      `Bu hizmet sayfasında amaç; ${service.intent.join(', ')} gibi yüksek niyetli aramaları doğal biçimde kapsarken, kullanıcının kendi senaryosunu da kolayca eşleştirebilmesidir. Kullanıcı hangi hizmete ihtiyacı olduğunu netleştirdiği anda dönüşüm ihtimali yükselir; bu nedenle içerik sadece bilgi vermek değil, doğru aksiyonu hızlandırmak için tasarlanır.`
    ]
  },
  {
    heading: `${service.name} fiyatı ve hız beklentisi`,
    paragraphs: [
      `İstanbul içi ${service.name.toLocaleLowerCase('tr-TR')} fiyatı; pickup noktası, teslim noktası, gönderi hacmi, seçilen hız seviyesi ve rota yoğunluğuna göre belirlenir. Ancak kullanıcı çoğu zaman ilk ekranda tam rakamdan çok netlik arar. Bu yüzden fiyatın nasıl şekillendiği, tahmini teklif alma yolu ve iletişimin ne kadar hızlı kurulacağı açık biçimde anlatılır.`,
      `Hız tarafında ise hedef; kullanıcının beklediği kadar kısa sürede pickup planı oluşturmak ve bunu telefon ya da WhatsApp üzerinden teyit etmektir. ${service.name} için hazırlanmış bu yapı, hem featured snippet uyumlu kısa cevaplar hem de uzun form açıklamalarla çalışarak SEO görünürlüğünü ve lead kalitesini aynı anda artırır.`
    ]
  }
];

const buildServiceAnswers = (service: ServiceItem) => [
  {
    question: `${service.name} nedir?`,
    answer: `${service.name}, İstanbul içinde belirli bir teslim önceliği, gönderi tipi veya operasyon ihtiyacına göre planlanan özel kurye hizmetidir.`
  },
  {
    question: `${service.name} nasıl çağrılır?`,
    answer: `Pickup adresi, teslim noktası ve gönderi tipini telefon veya WhatsApp üzerinden paylaşarak ${service.name.toLocaleLowerCase('tr-TR')} talebi hızlıca oluşturabilirsiniz.`
  },
  {
    question: `${service.name} için en hızlı kanal nedir?`,
    answer: `Telefonla arama ve WhatsApp mesajı, ${service.name.toLocaleLowerCase('tr-TR')} için en hızlı teklif ve yönlendirme yoludur.`
  }
];

export default function ServicePage({ service, servicePhoto }: ServicePageProps) {
  const description = `${service.hero} Istanbul ici hizli teklif ve kurye yonlendirmesi icin hizmet detaylari.`;
  const path = `/hizmetler/${service.slug}`;
  const serviceSections = buildServiceSections(service);
  const serviceAnswers = buildServiceAnswers(service);
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 6);
  const pageKeywords = buildKeywordSet(
    [service.name, `${service.name} istanbul`, `${service.name.toLocaleLowerCase('tr-TR')} fiyat`, `${service.name.toLocaleLowerCase('tr-TR')} çağır`, `${service.name.toLocaleLowerCase('tr-TR')} telefonu`],
    service.intent,
    ['istanbul kurye', 'moto kurye', 'hizli kurye']
  );

  return (
    <>
      <SeoHead title={`${service.name} İstanbul`} description={description} path={path} keywords={pageKeywords} />
      <Schema
        data={[
          webPageSchema(`${service.name} İstanbul`, description, `${siteConfig.domain}${path}`, pageKeywords),
          serviceSchema(`${service.name} İstanbul`, service.hero, `${siteConfig.domain}${path}`),
          faqSchema(service.faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Hizmetler', url: `${siteConfig.domain}/#hizmetler` },
            { name: service.name, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Kurye hizmeti</p>
            <h1>{service.name} İstanbul</h1>
            <p>{service.hero}</p>
            <div className="tag-row">
              {service.intent.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <h2>{service.name} hangi durumlarda tercih edilir?</h2>
              <p>
                Gonderinizin hizina, gizliligine ve tasima tipine gore en uygun kurye secenegini belirlemenizi kolaylastirir.
              </p>
            </div>
            <div className="content-card media-card">
              <img className="media-card__image" src={servicePhoto.thumb} alt={servicePhoto.alt} loading="lazy" />
              <div className="check-list check-list--flat">
                {service.bullets.map((bullet) => (
                  <span key={bullet}>{bullet}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hizmet sureci</p>
              <h2>Telefon ve WhatsApp ile hizli kurye sureci</h2>
            </div>
            <div className="card-grid two-up">
              <article className="content-card">
                <h3>1. Talep alınır</h3>
                <p>Pickup noktası, teslim noktası ve gönderi tipi kısa form veya WhatsApp mesajı ile alınır.</p>
              </article>
              <article className="content-card">
                <h3>2. Net teklif verilir</h3>
                <p>Sürpriz fiyat hissi oluşturmadan, bölge ve teslim senaryosuna göre net teklif iletilir.</p>
              </article>
              <article className="content-card">
                <h3>3. Operasyon başlatılır</h3>
                <p>Onay sonrası kurye yönlendirilir ve müşteri teslimat sürecinde bilgilendirilir.</p>
              </article>
              <article className="content-card">
                <h3>4. Teslimat takip edilir</h3>
                <p>Surec boyunca musteri bilgilendirilir ve teslimat adimlari net sekilde takip edilir.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Uzun form içerik</p>
              <h2>{service.name} hakkında detaylı açıklamalar</h2>
            </div>
            <div className="card-grid three-up">
              {serviceSections.map((section) => (
                <article className="content-card content-card--longform" key={section.heading}>
                  <h3>{section.heading}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Google AI blokları</p>
              <h2>{service.name} için kısa ve özetlenebilir cevaplar</h2>
              <p>Bu bloklar, soru-cevap ve featured snippet uyumlu yapıyı güçlendirirken mobil kullanıcı için de taranabilir kısa özetler sunar.</p>
            </div>
            <div className="card-grid three-up">
              {serviceAnswers.map((item) => (
                <article className="content-card" key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Operasyon avantajı</p>
              <h2>{service.name} seçen kullanıcı ne görmek ister?</h2>
              <p>Kullanıcı çoğu zaman tek ekranda hız, uygun kurye tipi, teklif kanalı ve güven sinyali görmek ister. Bu sayfa, bu dört kararı aynı anda destekleyecek biçimde kurgulandı.</p>
            </div>
            <div className="check-list">
              <span>Telefon ve WhatsApp üzerinden hızlı yönlendirme</span>
              <span>{service.name} için özel kullanım senaryoları ve niyet odaklı anahtar kelimeler</span>
              <span>FAQ ve schema ile desteklenen teknik SEO yapısı</span>
              <span>39 ilçe, yüzlerce mahalle ve çoklu hizmet çapraz link yapısı</span>
            </div>
          </div>
          <div className="container section-stack-top badge-strip">
            {trustBadges.map((item) => (
              <span key={item} className="trust-badge">{item}</span>
            ))}
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">İlgili hizmetler</p>
              <h2>{service.name} ile birlikte sık incelenen diğer çözümler</h2>
            </div>
            <div className="card-grid three-up">
              {relatedServices.map((item) => (
                <article className="content-card" key={item.slug}>
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                  <Link href={`/hizmetler/${item.slug}`}>Hizmeti incele</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sık sorulanlar</p>
              <h2>{service.name} hakkında merak edilenler</h2>
            </div>
            <div className="faq-list">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
            <div className="cta-band">
              <div>
                <h3>Bu hizmet için hızlı teklif alın</h3>
                <p>Istanbul ici {service.name.toLowerCase()} ihtiyaciniz icin pickup ve teslim noktasini paylasin, hizli teklif alalim.</p>
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                  WhatsApp teklif al
                </a>
                <Link className="ghost-button" href="/teklif-al">
                  Formu doldur
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: services.map((service) => ({ params: { slug: service.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async ({ params }) => {
  const service = services.find((item) => item.slug === params?.slug);

  if (!service) {
    return {
      notFound: true
    };
  }

  const photos = await fetchUnsplashPhotos(serviceImageQueries[service.slug] || 'courier motorcycle package no people', 1);

  return {
    props: {
      service,
      servicePhoto: photos[0]
    }
  };
};