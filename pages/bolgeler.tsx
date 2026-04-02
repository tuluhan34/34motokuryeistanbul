import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { getAllProgrammaticLandings, getProgrammaticSemts, getProgrammaticServices } from '../lib/programmaticSeo';
import { breadcrumbSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

export default function ProgrammaticIndexPage() {
  const semts = getProgrammaticSemts();
  const services = getProgrammaticServices();
  const landings = getAllProgrammaticLandings();

  return (
    <>
      <SeoHead
        title="Semt Bazlı Kurye Sayfaları"
        description={`İstanbul genelinde ${semts.length} semt ve mahalle için ${services.length} farklı kurye hizmetini bir arada sunan bölge rehberi.`}
        path="/bolgeler"
      />
      <Schema
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: siteConfig.domain },
          { name: 'Semt Bazlı Kurye Sayfaları', url: `${siteConfig.domain}/bolgeler` }
        ])}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Bölge rehberi</p>
            <h1>{semts.length} semt ve mahallede {services.length} farklı kurye hizmeti</h1>
            <p>İstanbul genelindeki semt bazlı hizmet sayfalarına bu rehber üzerinden hızlıca ulaşabilirsiniz.</p>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <h2>İstanbul genelinde geniş hizmet ağı</h2>
              <p>İlçe, semt ve mahalle bazlı kurye sayfaları; acil, express, gece, VIP, aynı gün ve arabalı kurye ihtiyaçlarını ayrı ayrı incelemenizi kolaylaştırır.</p>
            </div>
            <div className="check-list">
              <span>{semts.length} semt ve mahalle kapsami</span>
              <span>{services.length} farkli hizmet secenegi</span>
              <span>{landings.length} aktif bolge sayfasi</span>
              <span>Hizli erisim icin duzenli baglanti yapisi</span>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Tüm Kombinasyonlar</p>
              <h2>Semt ve hizmet bazlı kurye sayfaları</h2>
            </div>
            <div className="card-grid two-up">
              {semts.map((semt) => (
                <article key={semt.slug} className="content-card">
                  <h3>{semt.name}</h3>
                  <p>{semt.localAngle}</p>
                  <div className="keyword-list">
                    {services.map((service) => {
                      const slug = `${semt.slug}-${service.slug}`;
                      return (
                        <Link key={slug} href={`/${slug}`}>
                          {semt.name} {service.serviceLabel}
                        </Link>
                      );
                    })}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
