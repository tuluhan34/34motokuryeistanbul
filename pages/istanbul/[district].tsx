import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Schema } from '../../components/Schema';
import { SeoHead } from '../../components/SeoHead';
import { buildKeywordSet } from '../../lib/keywordData';
import { DistrictSeoItem, districts } from '../../lib/geoData';
import { breadcrumbSchema, serviceSchema, webPageSchema } from '../../lib/seo';
import { services, siteConfig } from '../../lib/siteData';

type DistrictPageProps = {
  district: DistrictSeoItem;
};

export default function DistrictPage({ district }: DistrictPageProps) {
  const path = `/istanbul/${district.slug}`;
  const description = `${district.name} kurye hizmeti, mahalle kapsami ve bolgeye uygun hizli teslimat detaylari. ${district.summary}`;
  const pageKeywords = buildKeywordSet(
    [`${district.name} kurye`, `${district.name} acil kurye`, `${district.name} moto kurye`, `${district.name} express kurye`, `${district.name} ayni gun kurye`],
    district.neighborhoods.slice(0, 10).map((item) => `${item.name} kurye`),
    ['istanbul kurye', 'hizli kurye']
  );

  return (
    <>
      <SeoHead title={`${district.name} Kurye`} description={description} path={path} keywords={pageKeywords} />
      <Schema
        data={[
          webPageSchema(`${district.name} Kurye`, description, `${siteConfig.domain}${path}`, pageKeywords),
          serviceSchema(`${district.name} Kurye`, district.summary, `${siteConfig.domain}${path}`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'İstanbul İlçeleri', url: `${siteConfig.domain}/anahtar-kelime-haritasi` },
            { name: district.name, url: `${siteConfig.domain}${path}` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero district-hero">
          <div className="container narrow">
            <p className="eyebrow">Ilce bazli kurye</p>
            <h1>{district.name} Kurye Hizmeti</h1>
            <p>{district.summary}</p>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <h2>{district.name} için öne çıkan ihtiyaçlar</h2>
              <p>
                {district.name} icinde acil evrak, paket, express teslimat ve gun ici kurye ihtiyaclari icin hizli yonlendirme ve net iletisim on plandadir.
              </p>
            </div>
            <div className="check-list">
              {district.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">İlgili hizmetler</p>
              <h2>{district.name} için en çok talep edilen kurye tipleri</h2>
            </div>
            <div className="card-grid three-up">
              {services.slice(0, 6).map((service) => (
                <article className="content-card" key={service.slug}>
                  <h3>{service.name}</h3>
                  <p>{service.short}</p>
                  <Link href={`/hizmetler/${service.slug}`}>Hizmet detayını aç</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Mahalle bazlı sayfalar</p>
              <h2>{district.name} mahallelerinde hizmet verilen alanlar</h2>
            </div>
            <div className="district-neighborhoods">
              {district.neighborhoods.map((item) => (
                <Link className="district-pill" key={item.slug} href={`/istanbul/${district.slug}/${item.slug}`}>
                  <strong>{item.name}</strong>
                  <span>{item.summary}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container cta-band">
            <div>
              <h3>{district.name} bölgesi için teklif al</h3>
              <p>Pickup ve teslimat noktasını paylaşın, bölgeye uygun hızlı kurye planı oluşturalım.</p>
            </div>
            <div className="hero__actions">
              <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp ile başla
              </a>
              <Link className="ghost-button" href="/teklif-al">
                Teklif formu
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: districts.map((district) => ({ params: { district: district.slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<DistrictPageProps> = async ({ params }) => {
  const district = districts.find((item) => item.slug === params?.district);

  if (!district) {
    throw new Error('District not found');
  }

  return {
    props: {
      district
    }
  };
};