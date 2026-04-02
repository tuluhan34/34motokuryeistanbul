import { FormEvent, useMemo, useState } from 'react';
import { siteConfig } from '../lib/siteData';

type QuickConversionSectionProps = {
  neighborhoodCount: number;
};

function buildWhatsappUrl(message: string) {
  return `https://wa.me/905303219004?text=${encodeURIComponent(message)}`;
}

export function QuickConversionSection({ neighborhoodCount }: QuickConversionSectionProps) {
  const [routeText, setRouteText] = useState('');

  const now = new Date();
  const currentHour = now.getHours();
  const isNight = currentHour >= 22 || currentHour < 7;

  const liveStats = useMemo(
    () => [
      { value: '12', label: 'aktif kurye sahada' },
      { value: '18 dk', label: 'ortalama pickup hedefi' },
      { value: '64', label: 'bugun tamamlanan teslimat' },
      { value: `39 ilce / ${neighborhoodCount}+ mahalle`, label: 'lokal kapsama alani' }
    ],
    [neighborhoodCount]
  );

  const urgencyLine = isNight
    ? 'Gece acil gonderiler icin aktif ekip su anda hatta. Adresi yaz, hizli donelim.'
    : 'Su an hizli fiyat ve uygun rota icin adresi yazman yeterli. Operasyon kisa surede donus yapsin.';
  const primaryCtaLabel = isNight ? 'Gece icin WhatsApp\'tan yaz' : 'WhatsApp\'tan hizli fiyat al';

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = routeText.trim()
      ? `Merhaba, gonderim rotam su sekilde: ${routeText}. Mumkun olan en hizli kurye ve fiyat bilgisini paylasir misiniz?`
      : 'Merhaba, en hizli kurye secenegi ve fiyat bilgisi almak istiyorum.';

    window.open(buildWhatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="content-card quick-conversion-card">
          <div>
            <p className="eyebrow">Ilk 10 saniyede aksiyon</p>
            <h2>Adresi yaz, WhatsApp'tan hizli fiyat ve kurye donusu al</h2>
            <p>
              Alic noktasini, teslim adresini ve gonderi tipini yazin. Ekibimiz hizli fiyat ve uygun kurye yonlendirmesiyle donus yapsin.
            </p>
            <p className="quick-conversion-note">{urgencyLine}</p>
            <div className="live-proof-grid">
              {liveStats.map((item) => (
                <div key={item.label} className="proof-chip">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <form className="quick-route-form" onSubmit={handleSubmit}>
              <label htmlFor="quick-route">Nereden nereye?</label>
              <input
                id="quick-route"
                name="quick-route"
                type="text"
                value={routeText}
                onChange={(event) => setRouteText(event.target.value)}
                placeholder="Ornek: Kadikoy Rıhtım -> Sisli Mecidiyekoy, evrak teslim"
              />
              <div className="quick-route-form__microcopy">Ilk mesajda rota + gonderi tipi yazildiginda fiyat donusu hizlanir.</div>
              <button type="submit" className="primary-button pulse-button">
                {primaryCtaLabel}
              </button>
            </form>

            <div className="generated-links generated-links--inline">
              <p>
                Telefonla hizli cikis icin <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
              </p>
              <p>
                Kurumsal talep birakmak isteyenler <a href="/teklif-al">teklif formuna</a> gecerek detayli bilgi gonderebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}