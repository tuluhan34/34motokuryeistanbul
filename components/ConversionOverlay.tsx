import { useEffect, useState } from 'react';
import { siteConfig } from '../lib/siteData';

const liveOrders = [
  { route: 'Kadikoy -> Sisli evrak gonderisi olusturuldu', time: '2 dk once' },
  { route: 'Atasehir -> Besiktas acil parca teslimi alindi', time: '4 dk once' },
  { route: 'Bakirkoy -> Fatih kurumsal paket talebi geldi', time: '6 dk once' },
  { route: 'Umraniye -> Levent express kurye talebi acildi', time: '1 dk once' },
  { route: 'Kadikoy -> Atasehir vale ozel sofor talebi kaydedildi', time: '3 dk once' },
  { route: 'Sisli -> Ankara sehirler arasi kurye talebi alindi', time: '5 dk once' },
  { route: 'Besiktas -> Sariyer vip evrak teslimi baslatildi', time: '2 dk once' },
  { route: 'Maltepe -> Kartal ayni gun paket cikisi verildi', time: '7 dk once' },
  { route: 'Atasehir -> Tuzla medikal numune tasimasi planlandi', time: '4 dk once' },
  { route: 'Bakirkoy -> Bursa sehirler arasi evrak cikisi onaylandi', time: '8 dk once' }
];

const popupVariants = [
  {
    eyebrow: 'Cikmadan once',
    title: '30 saniyede fiyat bilgisi al',
    text: 'Adresi ve gonderi tipini WhatsApp\'tan yaz. Operasyon en hizli rota ve uygun kurye tipini hemen donsun.',
    cta: 'WhatsApp\'a gec'
  },
  {
    eyebrow: 'Karar aninda kalma',
    title: 'Acil kurye icin tek mesaj yeterli',
    text: 'Nereden nereye gidecegini yaz. Beklemeden fiyat ve kurye tipi donelim.',
    cta: 'Hemen yaz'
  }
];

export function ConversionOverlay() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [liveIndex, setLiveIndex] = useState(0);
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setLiveIndex((current) => (current + 1) % liveOrders.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const popupSeen = window.sessionStorage.getItem('conversion-popup-seen');
    if (popupSeen) {
      return;
    }

    setVariantIndex(new Date().getHours() % popupVariants.length);

    const openPopup = () => {
      setShowExitPopup(true);
      window.sessionStorage.setItem('conversion-popup-seen', '1');
    };

    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        openPopup();
      }
    };

    const onScroll = () => {
      const scrollRatio = window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);
      if (scrollRatio > 0.45) {
        openPopup();
      }
    };

    const timeoutId = window.setTimeout(openPopup, 18000);

    window.addEventListener('mouseout', onMouseLeave);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('mouseout', onMouseLeave);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const popupVariant = popupVariants[variantIndex];
  const currentLiveOrder = liveOrders[liveIndex];

  return (
    <>
      <div className="live-order-toast" aria-live="polite">
        <strong>Canli talep</strong>
        <span>{currentLiveOrder.route}</span>
        <small>{currentLiveOrder.time}</small>
      </div>

      <div className="live-order-toast live-order-toast--secondary" aria-live="polite">
        <strong>Yeni canli talep</strong>
        <span>{liveOrders[(liveIndex + 3) % liveOrders.length].route}</span>
        <small>{liveOrders[(liveIndex + 3) % liveOrders.length].time}</small>
      </div>

      {showExitPopup ? (
        <div className="exit-popup-backdrop" role="dialog" aria-modal="true">
          <div className="exit-popup">
            <button type="button" className="exit-popup__close" onClick={() => setShowExitPopup(false)} aria-label="Kapat">
              x
            </button>
            <p className="eyebrow">{popupVariant.eyebrow}</p>
            <h3>{popupVariant.title}</h3>
            <p>{popupVariant.text}</p>
            <div className="exit-popup__badge">Ortalama ilk donus: 3-5 dk</div>
            <div className="hero__actions">
              <a className="primary-button pulse-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                {popupVariant.cta}
              </a>
              <a className="ghost-button" href={siteConfig.phoneHref}>
                Hemen ara
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}