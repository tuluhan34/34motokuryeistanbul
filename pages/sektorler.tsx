import Link from 'next/link';
import { Layout } from '../components/Layout';
import { SeoHead } from '../components/SeoHead';
import { Schema } from '../components/Schema';
import { districts } from '../lib/geoData';
import { sectorContent } from '../lib/contentHub';
import { breadcrumbSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

export default function SectorPage() {
  return (
    <>
      <SeoHead title="Sektörlere Özel Kurye" description={`${sectorContent.length} farklı sektör için ana sektör sayfası, ilçe bazlı rota ve mahalle bazlı kurye sayfaları.`} path="/sektorler" />
      <Schema
        data={breadcrumbSchema([
          { name: 'Ana Sayfa', url: siteConfig.domain },
          { name: 'Sektörler', url: `${siteConfig.domain}/sektorler` }
        ])}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Sektorel cozumler</p>
            <h1>{sectorContent.length} sektör için ayrı kurye sayfaları</h1>
            <p>Her sektor icin ana sayfa, ilce bazli rota ve mahalle bazli teslim icerikleri hazirlandi. Boylece isletmenize en uygun hizmete daha hizli ulasabilirsiniz.</p>
          </div>
        </section>

        <section className="section">
          <div className="container split-panel">
            <div>
              <h2>Sektör, ilçe ve mahalle birlikte çalışır</h2>
              <p>Her sektor icin Istanbul genelinde ayri merkez sayfasi, 39 ilce sayfasi ve mahalle odakli detay sayfalari bulunur. Boylece sektorunuze ve bolgenize en uygun kurye hizmetini dogrudan inceleyebilirsiniz.</p>
            </div>
            <div className="check-list">
              <span>{sectorContent.length} ana sektör sayfası</span>
              <span>{sectorContent.length * districts.length} sektör + ilçe rotası</span>
              <span>Tüm mahalleler için sektör bazlı detay rotaları</span>
              <span>Bolgeye uygun hizmet bilgileri ve kolay erisim</span>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container card-grid two-up">
            {sectorContent.map((sector) => (
              <article key={sector.slug} className="content-card">
                <h2>{sector.name}</h2>
                <p>{sector.detail}</p>
                <div className="keyword-list">
                  <Link href={`/sektorler/${sector.slug}`}>Sektör sayfası</Link>
                  <Link href={`/blog/sektor-${sector.slug}`}>Blog</Link>
                  <Link href={`/sikca-sorulan-sorular/sektor-${sector.slug}`}>SSS</Link>
                  <Link href={`/galeri/sektor-${sector.slug}`}>Galeri</Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}