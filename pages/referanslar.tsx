import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { breadcrumbSchema, organizationSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

export default function ReferencesPage() {
  return (
    <>
      <SeoHead
        title="Referanslar ve Musteri Yorumlari"
        description="34 Moto Kurye Istanbul icin kurumsal kullanim senaryolari, musteri yorumlari ve guven sinyalleri."
        path="/referanslar"
      />
      <Schema
        data={[
          organizationSchema,
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Referanslar', url: `${siteConfig.domain}/referanslar` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Referans</p>
            <h1>Referans Alanı</h1>
            <p>Aktif referans alaninda paylasilan kurumsal web adresi asagida yer almaktadir.</p>
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <article className="content-card">
              <p className="eyebrow">Tek Domain</p>
              <h2>www.kueryexpress.com.tr</h2>
            </article>
          </div>
        </section>
      </Layout>
    </>
  );
}