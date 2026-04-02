import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { buildKeywordSet } from '../../lib/keywordData';
import { breadcrumbSchema, faqSchema, serviceSchema, webPageSchema } from '../../lib/seo';
import { ServiceItem, services, siteConfig } from '../../lib/siteData';
import { fetchUnsplashPhotos, GalleryPhoto } from '../../lib/unsplash';

type ServicePageProps = {
  service: ServiceItem;
  servicePhoto: GalleryPhoto;
};

const serviceImageQueries: Record<string, string> = {
  'arabalı-kurye': 'cargo van parcel delivery no people',
  'vip-kurye': 'black delivery car envelope logistics no people',
  'medikal-kurye': 'medical package delivery box no people',
  'evrak-kurye': 'documents envelope courier desk no people',
  'e-ticaret-kurye': 'ecommerce parcel boxes scooter no people',
  'ayni-gun-kurye': 'same day parcel delivery city no people',
  'gece-kurye': 'night delivery scooter city lights no people',
  'express-kurye': 'delivery scooter parcel city street no people',
  'acil-kurye': 'fast courier motorcycle parcel no people',
  'sehir-ici-kurye': 'city courier scooter package no people'
};

export default function ServicePage({ service, servicePhoto }: ServicePageProps) {
  const description = `${service.hero} Istanbul ici hizli teklif ve kurye yonlendirmesi icin hizmet detaylari.`;
  const path = `/hizmetler/${service.slug}`;
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
    throw new Error('Service not found');
  }

  const photos = await fetchUnsplashPhotos(serviceImageQueries[service.slug] || 'courier motorcycle package no people', 1);

  return {
    props: {
      service,
      servicePhoto: photos[0]
    },
    revalidate: 3600
  };
};