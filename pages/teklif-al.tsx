import { FormEvent, useState } from 'react';
import { Layout } from '../components/Layout';
import { Schema } from '../components/Schema';
import { SeoHead } from '../components/SeoHead';
import { breadcrumbSchema, serviceSchema } from '../lib/seo';
import { siteConfig } from '../lib/siteData';

export default function QuotePage() {
  const [draftLinks, setDraftLinks] = useState<{ whatsapp: string; email: string } | null>(null);
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitMessage('');

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const pickup = String(formData.get('pickup') || '').trim();
    const dropoff = String(formData.get('dropoff') || '').trim();
    const shipmentType = String(formData.get('shipmentType') || '').trim();
    const note = String(formData.get('note') || '').trim();

    const message = [
      'Merhaba, teklif almak istiyorum.',
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Pickup: ${pickup}`,
      `Teslim: ${dropoff}`,
      `Gönderi Tipi: ${shipmentType}`,
      `Not: ${note || '-'}`
    ].join('\n');

    setIsSubmitting(true);

    try {
      setDraftLinks({
        whatsapp: `https://wa.me/905303219004?text=${encodeURIComponent(message)}`,
        email: `mailto:${siteConfig.email}?subject=${encodeURIComponent('Kurye Teklif Talebi')}&body=${encodeURIComponent(message)}`
      });
      setSubmitMessage('Teklif mesajı hazırlandı. WhatsApp veya e-posta taslağı ile hemen iletebilirsiniz.');
    } catch (error) {
      setDraftLinks({
        whatsapp: `https://wa.me/905303219004?text=${encodeURIComponent(message)}`,
        email: `mailto:${siteConfig.email}?subject=${encodeURIComponent('Kurye Teklif Talebi')}&body=${encodeURIComponent(message)}`
      });
      setSubmitMessage(error instanceof Error ? error.message : 'İstek alınamadı, taslak bağlantıları hazırlandı.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SeoHead title="Moto Kurye Teklif Al" description="İstanbul içi acil kurye, express kurye ve aynı gün teslimat için hızlı teklif alın." path="/teklif-al" />
      <Schema
        data={[
          serviceSchema('Moto Kurye Teklif', 'İstanbul içi kurye teklifi alma sayfası.', `${siteConfig.domain}/teklif-al`),
          breadcrumbSchema([
            { name: 'Ana Sayfa', url: siteConfig.domain },
            { name: 'Teklif Al', url: `${siteConfig.domain}/teklif-al` }
          ])
        ]}
      />
      <Layout>
        <section className="subhero">
          <div className="container narrow">
            <p className="eyebrow">Hizli teklif</p>
            <h1>İstanbul içi kurye teklifi alın</h1>
            <p>Pickup noktasi, teslim noktasi ve gonderi bilgisini paylasin; size en uygun kurye planini hizlica iletelim.</p>
          </div>
        </section>

        <section className="section">
          <div className="container quote-grid">
            <form className="quote-form" onSubmit={handleSubmit}>
              <label>
                Ad Soyad
                <input type="text" name="name" placeholder="Adınızı yazın" />
              </label>
              <label>
                Telefon
                <input type="tel" name="phone" placeholder="05xx xxx xx xx" />
              </label>
              <label>
                Pickup noktası
                <input type="text" name="pickup" placeholder="Örn. Şişli" />
              </label>
              <label>
                Teslim noktası
                <input type="text" name="dropoff" placeholder="Örn. Kadıköy" />
              </label>
              <label>
                Gönderi tipi
                <select name="shipmentType" defaultValue="">
                  <option value="" disabled>
                    Seçiniz
                  </option>
                  <option value="evrak">Evrak</option>
                  <option value="kucuk-paket">Küçük Paket</option>
                  <option value="medikal">Medikal</option>
                  <option value="e-ticaret">E-Ticaret</option>
                  <option value="arabalı-kurye">Arabalı Kurye</option>
                  <option value="eczane-kurye">Eczane Kurye</option>
                  <option value="gumruk-kurye">Gümrük Kurye</option>
                  <option value="gidis-donus-kurye">Gidiş Dönüş Kurye</option>
                  <option value="randevulu-gonderim">Randevulu Gönderim</option>
                  <option value="ucak-kargo">Uçak Kargo</option>
                  <option value="minivan-panelvan">Minivan Panelvan</option>
                  <option value="kamyonet-kurye">Kamyonet Kurye</option>
                </select>
              </label>
              <label>
                Not
                <textarea name="note" rows={5} placeholder="Teslim saati veya özel not ekleyin" />
              </label>
              <button type="submit" className="primary-button" disabled={isSubmitting}>{isSubmitting ? 'Gönderiliyor...' : 'Teklif Gönder'}</button>

              {submitMessage ? <p className="form-status">{submitMessage}</p> : null}

              {draftLinks ? (
                <div className="generated-links">
                  <strong>Teklif mesajı hazır.</strong>
                  <p>cPanel uyumlu akışta mesaj taslağını doğrudan WhatsApp veya e-posta ile gönderebilirsiniz.</p>
                  <div className="hero__actions">
                    <a className="primary-button" href={draftLinks.whatsapp} target="_blank" rel="noreferrer">
                      WhatsApp ile gönder
                    </a>
                    <a className="ghost-button" href={draftLinks.email}>
                      E-posta taslağını aç
                    </a>
                  </div>
                </div>
              ) : null}
            </form>

            <div className="content-card quote-card">
              <h2>Teklif vermemiz için gereken temel bilgiler</h2>
              <ul>
                <li>Alış ve teslim noktası</li>
                <li>Gönderi tipi ve aciliyet durumu</li>
                <li>Motorlu ya da arabalı kurye ihtiyacı</li>
                <li>İletişim telefonu</li>
                <li>Varsa ek notlar</li>
              </ul>
              <a className="ghost-button" href={siteConfig.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp ile yaz
              </a>
            </div>
          </div>
        </section>

        <section className="section section--tint">
          <div className="container split-panel">
            <div>
              <p className="eyebrow">Konum ve iletişim</p>
              <h2>Teklif oncesi konum ve iletisim bilgisi</h2>
              <p>
                Iletisim bilgilerini ve konum alanini inceleyip ardindan teklifinizi iletebilirsiniz.
              </p>
            </div>
            <div className="map-card map-card--short">
              <iframe
                src={siteConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="34 Moto Kurye İstanbul Harita"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}