import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { buildKeywordSet } from '../lib/keywordData';
import {
  ProgrammaticLanding,
  getAllProgrammaticLandings,
  getNearbyLandings,
  getProgrammaticLandingBySlug,
  getSiblingServiceLandings
} from '../lib/programmaticSeo';
import { PriorityKeywordLanding, getPriorityKeywordLandingBySlug, priorityKeywordLandings } from '../lib/priorityKeywordPages';
import { breadcrumbSchema, courierServiceSchema, faqSchema, localBusinessSchema, productSchema, serviceSchema, webPageSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

type LandingPageProps = {
  landing: ProgrammaticLanding | PriorityKeywordLanding;
};

const buildLocalBusinessSchema = (landing: ProgrammaticLanding, url: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  additionalType: 'https://schema.org/CourierOrDeliveryService',
  name: `${landing.semt.name} ${landing.service.name} | ${siteConfig.brand}`,
  description: landing.description,
  url,
  telephone: '+905303219004',
  priceRange: landing.priceRange,
  areaServed: [landing.semt.name, 'İstanbul'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'İstanbul',
    addressCountry: 'TR'
  },
  openingHours: 'Mo-Su 00:00-23:59'
});

export default function ProgrammaticLandingPage({ landing }: LandingPageProps) {
  if ('keyword' in landing) {
    const path = `/${landing.slug}`;
    const pageUrl = `${siteConfig.domain}${path}`;
    const pageKeywords = Array.from(new Set([landing.keyword, ...landing.lsiKeywords, `${landing.districtFocus} kurye`, 'istanbul moto kurye', 'hemen kurye', 'aynı gün teslimat']));

    return (
      <>
        <SeoHead title={landing.title} description={landing.description} path={path} keywords={pageKeywords} />
        <Schema
          data={[
            webPageSchema(landing.title, landing.description, pageUrl, pageKeywords),
            localBusinessSchema(`${landing.keyword} | ${siteConfig.brand}`, landing.description, pageUrl, [landing.districtFocus, ...landing.nearbyDistricts]),
            courierServiceSchema(landing.title, landing.description, pageUrl, [landing.districtFocus, ...landing.nearbyDistricts]),
            productSchema(landing.title, landing.description, pageUrl),
            faqSchema(landing.faqs),
            breadcrumbSchema([
              { name: 'Ana Sayfa', url: siteConfig.domain },
              { name: landing.keyword, url: pageUrl }
            ])
          ]}
        />
        <Layout>
          <section className="subhero">
            <div className="container narrow">
              <p className="eyebrow">Özel anahtar kelime landing page</p>
              <h1>{landing.h1}</h1>
              <p>{landing.description}</p>
              <div className="tag-row">
                <span>{landing.keyword}</span>
                {landing.lsiKeywords.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Şimdi WhatsApp'tan Yaz</a>
                <a className="ghost-button" href={siteConfig.phoneHref}>5 Dakikada Kurye Kapınızda</a>
              </div>
            </div>
          </section>

          <section className="section">
            <div className="container split-panel">
              <div>
                <p className="eyebrow">Hizmet kapsamı</p>
                <h2>{landing.districtFocus} odaklı görünürlük ve dönüşüm akışı</h2>
                <p>{landing.promise}</p>
                <p>{landing.districtFocus} merkezli teslimatlar için bu sayfa telefon, WhatsApp ve teklif formu akışını birlikte görünür tutar.</p>
              </div>
              <div className="check-list">
                <span>39 ilçe ve mahalle bazlı görünür hizmet yapısı</span>
                <span>ARA / WHATSAPP CTA odaklı mobil akış</span>
                <span>Schema destekli SEO ve indexlenebilir yapı</span>
                <span>Soru cevap blokları ile Google AI uyumluluğu</span>
              </div>
            </div>
          </section>

          <section className="section section--tint">
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">Uzun form içerik</p>
                <h2>{landing.keyword} için detaylı açıklamalar</h2>
              </div>
              <div className="card-grid two-up">
                {landing.sections.map((section) => (
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

          <section className="section">
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">Google AI için kısa cevaplar</p>
                <h2>Net, kısa ve özetlenebilir bilgi blokları</h2>
              </div>
              <div className="card-grid three-up">
                {landing.answerBlocks.map((item) => (
                  <article className="content-card" key={item.question}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section--tint">
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">Sık sorulanlar</p>
                <h2>{landing.keyword} hakkında sorular</h2>
              </div>
              <div className="faq-list">
                {landing.faqs.map((faq) => (
                  <article key={faq.question} className="faq-item">
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </article>
                ))}
              </div>
              <div className="cta-band cta-band--accent">
                <div>
                  <h3>{landing.keyword} için hemen aksiyon al</h3>
                  <p>Telefon numaramız ve WhatsApp hattımız üzerinden birkaç saniyede teklif alabilir, kurye yönlendirmesini başlatabilirsiniz.</p>
                </div>
                <div className="hero__actions">
                  <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Şimdi WhatsApp'tan Yaz</a>
                  <a className="ghost-button" href={siteConfig.phoneHref}>Hemen Ara</a>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  const path = `/${landing.slug}`;
  const pageUrl = `${siteConfig.domain}${path}`;
  const nearbyLandings = getNearbyLandings(landing);
  const siblingLandings = getSiblingServiceLandings(landing);
  const pageKeywords = buildKeywordSet(
    [landing.title, `${landing.semt.name} ${landing.service.serviceLabel}`, `${landing.semt.name} acil kurye`, `${landing.semt.name} express kurye`, `${landing.semt.name} ayni gun kurye`, `${landing.semt.name} gece kurye`],
    ['istanbul semt kurye', 'hizli kurye', 'kurye fiyat al']
  );

  return (
    <>
      <SeoHead title={landing.title} description={landing.description} path={path} keywords={pageKeywords} />
      <Schema
        data={[
          webPageSchema(landing.title, landing.description, pageUrl, pageKeywords),
          buildLocalBusinessSchema(landing, pageUrl),
          serviceSchema(landing.title, landing.description, pageUrl),
          faqSchema(landing.faqs),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Semt Kurye Sayfaları', url: `${siteConfig.domain}/bolgeler` },
            { name: landing.title, url: pageUrl }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Semt bazli kurye</p>
            <h1>{landing.title}</h1>
            <p>{landing.description}</p>
            <div className="keyword-list meta-grid">
              <span>{landing.semt.name}</span>
              <span>{landing.serviceType}</span>
              <span>{landing.etaLabel}</span>
              <span>{landing.priceRange}</span>
            </div>
            <div className="hero__actions">
              <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp'tan yaz</a>
              <a className="ghost-button" href={siteConfig.phoneHref}>Tek tık ara</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Bolgeye ozel hizmet</p>
              <h2>{landing.semt.name} icin {landing.service.serviceLabel} hizmet detaylari</h2>
              <p>{landing.intro}</p>
              <p>{landing.secondary}</p>
              <p>{landing.urgency}</p>
            </div>
            <div className="check-list">
              {landing.bullets.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Hizli siparis</p>
              <h2>Acil ihtiyaciniz icin kisa yol</h2>
            </div>
            <div className="card-grid three-up">
              <article className="content-card funnel-card">
                <p className="eyebrow">Sorun</p>
                <h3>{landing.semt.name} içinde acil gönderin mi var?</h3>
                <p>Bekleyen evrak, paket veya kritik teslimat süreci yavaşlatır ve kullanıcı hızlı çözüm arar.</p>
              </article>
              <article className="content-card funnel-card">
                <p className="eyebrow">Çözüm</p>
                <h3>{landing.etaLabel}</h3>
                <p>{landing.service.usp}</p>
              </article>
              <article className="content-card funnel-card">
                <p className="eyebrow">Aksiyon</p>
                <h3>Şimdi kurye çağır</h3>
                <p>Telefonla ara, WhatsApp'tan yaz veya teklif formuna geçerek teslimatı hemen başlat.</p>
              </article>
            </div>
            <div className="cta-band cta-band--dense">
              <div>
                <h3>{landing.semt.name} {landing.service.serviceLabel} için anında fiyat al</h3>
                <p>Pickup ve teslim bilgilerini paylasin, hizli fiyat ve uygun kurye yonlendirmesi alalim.</p>
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">Anında fiyat al</a>
                <a className="ghost-button" href={siteConfig.phoneHref}>Hemen ara</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Yakın Bölgelerde Kurye Hizmeti</p>
              <h2>Aynı hizmet için yakın bölgelerdeki sayfalar</h2>
              <p>Yakın semtlerdeki benzer hizmetleri inceleyerek pickup ve teslimat noktanıza en uygun seçeneği hızlıca görebilirsiniz.</p>
            </div>
            <div className="card-grid two-up">
              {nearbyLandings.map((item) => (
                <article className="content-card" key={item.slug}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={`/${item.slug}`}>Sayfayı aç</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Diger hizmet secenekleri</p>
              <h2>{landing.semt.name} için diğer kurye hizmet kombinasyonları</h2>
              <p>Ayni bolgede acil, express, gece, VIP, ayni gun ve arabalı kurye seceneklerini tek ekrandan karsilastirabilirsiniz.</p>
            </div>
            <div className="card-grid two-up">
              {siblingLandings.map((item) => (
                <article className="content-card" key={item.slug}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={`/${item.slug}`}>Kombinasyon sayfasını aç</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Sık Sorulanlar</p>
              <h2>{landing.semt.name} {landing.service.serviceLabel} hakkında sorular</h2>
            </div>
            <div className="faq-list">
              {landing.faqs.map((faq) => (
                <article key={faq.question} className="faq-item">
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </article>
              ))}
            </div>
            <div className="cta-band cta-band--accent">
              <div>
                <h3>{landing.semt.name} bölgesinde {landing.service.serviceLabel} için şimdi aksiyon al</h3>
                <p>Yoğunluk artmadan sipariş ver, telefon veya WhatsApp üzerinden teslimat sürecini hemen başlat.</p>
              </div>
              <div className="hero__actions">
                <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">WhatsApp CTA</a>
                <a className="ghost-button" href={siteConfig.phoneHref}>Tek tik arama</a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [...getAllProgrammaticLandings(), ...priorityKeywordLandings].map((landing) => ({
    params: { landing: landing.slug }
  })),
  fallback: false
});

export const getStaticProps: GetStaticProps<LandingPageProps> = async ({ params }) => {
  const slug = String(params?.landing || '');
  const landing = getProgrammaticLandingBySlug(slug) || getPriorityKeywordLandingBySlug(slug);

  if (!landing) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      landing
    }
  };
};
