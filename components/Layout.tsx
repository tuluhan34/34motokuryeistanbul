import Link from 'next/link';
import { ReactNode } from 'react';
import { ConversionOverlay } from './ConversionOverlay';
import { siteConfig } from '../lib/siteData';

type LayoutProps = {
  children: ReactNode;
};

const navItems = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/rakip-analizi', label: 'Rakip Analizi' },
  { href: '/blog', label: 'Blog' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/teklif-al', label: 'Teklif Al' },
  { href: '/kurye-fiyatlari', label: 'Fiyatlar' },
  { href: '/referanslar', label: 'Referanslar' },
  { href: '/kurumsal', label: 'Kurumsal' },
  { href: '/sektorler', label: 'Sektörler' }
];

export function Layout({ children }: LayoutProps) {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar__inner">
          <Link href="/" className="brand-mark">
            <span className="brand-mark__badge">34</span>
            <span>
              <strong>{siteConfig.brand}</strong>
              <small>İstanbul içi hızlı teslimat</small>
            </span>
          </Link>

          <nav className="nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <a className="ghost-button" href={siteConfig.phoneHref}>
              Anında Ara
            </a>
            <a className="primary-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
              Hemen Kurye Çağır
            </a>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="container footer__grid">
          <div>
            <h3>{siteConfig.brand}</h3>
            <p>
              İstanbul genelinde acil kurye, express kurye, VIP kurye ve şehir içi teslimat ihtiyaçları için profesyonel kurye altyapısı.
            </p>
          </div>
          <div>
            <h4>Hızlı Erişim</h4>
            <Link href="/hizmetler/acil-kurye">Acil Kurye</Link>
            <Link href="/hizmetler/express-kurye">Express Kurye</Link>
            <Link href="/hizmetler/arabalı-kurye">Arabalı Kurye</Link>
            <Link href="/kurye-fiyatlari">Kurye Fiyatları</Link>
            <Link href="/kurye-cagir">Kurye Çağır</Link>
            <Link href="/rakip-analizi">Rakip Analizi</Link>
            <Link href="/gecmis-teslimatlar">Geçmiş Teslimatlar</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/galeri">Galeri</Link>
            <Link href="/referanslar">Referanslar</Link>
            <Link href="/sikca-sorulan-sorular">SSS</Link>
            <Link href="/bolgeler">Semt Kurye Sayfaları</Link>
            <Link href="/istanbul/kadikoy">Kadıköy Kurye</Link>
            <Link href="/istanbul/besiktas">Beşiktaş Kurye</Link>
          </div>
          <div>
            <h4>İletişim</h4>
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
              WhatsApp üzerinden teklif al
            </a>
          </div>
        </div>
      </footer>

      <div className="sticky-cta">
        <a href={siteConfig.phoneHref}>Hemen Ara</a>
        <a href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
          WhatsApp Yaz
        </a>
      </div>

      <ConversionOverlay />
    </div>
  );
}