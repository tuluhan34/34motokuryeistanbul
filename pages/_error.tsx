import Link from 'next/link';
import { NextPageContext } from 'next';
import { Layout } from '../components/Layout';
import { SeoHead } from '../components/SeoHead';

type ErrorPageProps = {
  statusCode?: number;
};

export default function ErrorPage({ statusCode }: ErrorPageProps) {
  const title = statusCode === 500 ? 'Geçici Bir Hata Oluştu' : 'Beklenmeyen Bir Durum Oluştu';
  const description = statusCode === 500
    ? 'Sayfa yüklenirken geçici bir sorun oluştu. Telefon veya WhatsApp üzerinden hemen kurye talebi oluşturabilirsiniz.'
    : 'Beklenmeyen bir durum oluştu. Hizmet sayfaları veya teklif al akışı üzerinden devam edebilirsiniz.';

  return (
    <>
      <SeoHead title={title} description={description} path="/error" />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">{statusCode || 500}</p>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="hero__actions">
              <Link className="primary-button" href="/">Ana sayfa</Link>
              <Link className="ghost-button" href="/teklif-al">Teklif al</Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 500;

  return {
    statusCode
  };
};