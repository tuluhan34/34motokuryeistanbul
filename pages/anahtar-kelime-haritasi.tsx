import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { districts } from '../lib/geoData';
import { getAllProgrammaticLandings } from '../lib/programmaticSeo';
import { keywordClusters } from '../lib/keywordData';
import { breadcrumbSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

export default function KeywordMapPage() {
  const programmaticLandings = getAllProgrammaticLandings();

  return (
    <>
      <SeoHead
        title="Hizmet ve Bölge Rehberi"
        description="İstanbul kurye hizmetleri, ilçe kapsamı ve semt bazlı teslimat sayfalarını bir arada gösteren rehber."
        path="/anahtar-kelime-haritasi"
      />
      <Schema
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: siteConfig.domain },
          { name: 'Hizmet ve Bölge Rehberi', url: `${siteConfig.domain}/anahtar-kelime-haritasi` }
        ])}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Hizmet rehberi</p>
            <h1>Kurye hizmetleri ve hizmet verdiğimiz bölgeler</h1>
            <p>İstanbul genelindeki hizmet başlıklarını, ilçe kapsamini ve örnek semt sayfalarını tek ekranda inceleyebilirsiniz.</p>
          </div>
        </section>

        <section className="section">
          <div className="container card-grid three-up">
            {keywordClusters.map((cluster) => (
              <article key={cluster.title} className="content-card keyword-card">
                <h2>{cluster.title}</h2>
                <p>{cluster.items.length} anahtar kelime eşlendi.</p>
                <div className="keyword-list">
                  {cluster.items.map((item) => (
                    <Link key={item.keyword} href={item.targetPath}>
                      {item.keyword}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--tint">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Lokal kapsam</p>
              <h2>39 ilçe ve mahalle bazlı statik route kapsamı</h2>
            </div>
            <div className="card-grid two-up">
              {districts.map((district) => (
                <article key={district.slug} className="content-card">
                  <h3>{district.name}</h3>
                  <p>{district.summary}</p>
                  <div className="keyword-list">
                    <Link href={`/istanbul/${district.slug}`}>{district.name} ilçe sayfası</Link>
                    {district.neighborhoods.map((neighborhood) => (
                      <Link key={neighborhood.slug} href={`/istanbul/${district.slug}/${neighborhood.slug}`}>
                        {neighborhood.name}
                      </Link>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Semt bazlı sayfalar</p>
              <h2>Semt ve hizmet kombinasyonları için örnek kurye sayfaları</h2>
            </div>
            <div className="card-grid two-up">
              {programmaticLandings.slice(0, 24).map((landing) => (
                <article key={landing.slug} className="content-card">
                  <h3>{landing.title}</h3>
                  <p>{landing.description}</p>
                  <Link href={`/${landing.slug}`}>Sayfayı aç</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}