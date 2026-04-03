import Link from 'next/link';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { breadcrumbSchema, webPageSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

export default function NotFoundPage() {
  return (
    <>
      <SeoHead title="Sayfa Bulunamadi" description="Aradiginiz kurye sayfasi bulunamadi. Ana sayfa, hizmetler veya teklif al sayfasina gecerek devam edebilirsiniz." path="/404" />
      <Schema
        data={[
          webPageSchema('Sayfa Bulunamadı', 'Aradığınız kurye sayfası bulunamadı.', `${siteConfig.domain}/404`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: '404', url: `${siteConfig.domain}/404` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">404</p>
            <h1>Aradiginiz sayfa bulunamadi</h1>
            <p>Hizmet, ilce veya mahalle sayfasi tasinmis olabilir. Ana sayfadan, hizmetler alanindan veya teklif al akisindan devam edin.</p>
            <div className="hero__actions">
              <Link className="primary-button" href="/">Ana sayfaya don</Link>
              <Link className="ghost-button" href="/teklif-al">Teklif al</Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
