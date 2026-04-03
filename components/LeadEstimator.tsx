import { FormEvent, useMemo, useState } from 'react';
import { districts } from '../lib/geoData';
import { services, siteConfig } from '../lib/siteData';

const serviceMultipliers: Record<string, number> = {
  'acil-kurye': 1,
  'express-kurye': 1.15,
  'gece-kurye': 1.22,
  'vip-kurye': 1.3,
  'evrak-kurye': 0.96,
  'medikal-kurye': 1.12,
  'e-ticaret-kurye': 0.92,
  'sehir-ici-kurye': 0.88,
  'arabali-kurye': 1.45,
  'ayni-gun-kurye': 1.05,
  'sehirler-arasi-kurye': 1.95,
  'vale-ozel-sofor': 1.7,
  'eczane-kurye': 1.08,
  'gumruk-kurye': 1.18,
  'gidis-donus-kurye': 1.24,
  'randevulu-gonderim': 1.1,
  'ucak-kargo': 2.2,
  'minivan-panelvan': 1.5,
  'kamyonet-kurye': 1.75
};

const timeMultipliers: Record<string, number> = {
  simdi: 1.18,
  bugun: 1,
  planli: 0.92,
  gece: 1.2
};

const formatPrice = (value: number) => new Intl.NumberFormat('tr-TR').format(Math.round(value));

export function LeadEstimator() {
  const [pickupDistrict, setPickupDistrict] = useState('kadikoy');
  const [dropoffDistrict, setDropoffDistrict] = useState('sisli');
  const [serviceSlug, setServiceSlug] = useState('acil-kurye');
  const [timePlan, setTimePlan] = useState('bugun');
  const [shipmentType, setShipmentType] = useState('evrak');

  const estimate = useMemo(() => {
    const pickupIndex = Math.max(districts.findIndex((item) => item.slug === pickupDistrict), 0);
    const dropoffIndex = Math.max(districts.findIndex((item) => item.slug === dropoffDistrict), 0);
    const districtDistance = Math.abs(pickupIndex - dropoffIndex);
    const base = 280 + districtDistance * 9;
    const serviceMultiplier = serviceMultipliers[serviceSlug] || 1;
    const timeMultiplier = timeMultipliers[timePlan] || 1;
    const shipmentMultiplier = shipmentType === 'koli' ? 1.2 : shipmentType === 'medikal' ? 1.14 : shipmentType === 'parca' ? 1.12 : 1;
    const min = base * serviceMultiplier * timeMultiplier * shipmentMultiplier;
    const max = min + 120 + districtDistance * 8;
    const eta = Math.max(22, 36 + districtDistance * 3 + (timePlan === 'planli' ? -6 : 0));

    return {
      min,
      max,
      eta,
      pickupName: districts[pickupIndex]?.name || 'İstanbul',
      dropoffName: districts[dropoffIndex]?.name || 'İstanbul'
    };
  }, [dropoffDistrict, pickupDistrict, serviceSlug, shipmentType, timePlan]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedService = services.find((item) => item.slug === serviceSlug)?.name || 'Kurye';
    const message = `Merhaba, ${estimate.pickupName} -> ${estimate.dropoffName} icin ${selectedService} talebi olusturmak istiyorum. Tahmini fiyat araligini gordum: ${formatPrice(estimate.min)}-${formatPrice(estimate.max)} TL. Gonderi tipi: ${shipmentType}. Teslim zamani: ${timePlan}.`; 

    window.open(`https://wa.me/905303219004?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="content-card estimator-card">
      <div>
        <p className="eyebrow">Hizli fiyat hesapla</p>
        <h2>Kurye fiyat hesaplama modulu</h2>
        <p>
          Rakiplerde gorulen fiyat hesapla akisini daha gelismis hale getirdik. Ilce, hizmet tipi ve teslim zamanini secin; ortalama fiyat bandi ve pickup hedefine gore hemen aksiyon alin.
        </p>
      </div>

      <form className="estimator-form" onSubmit={handleSubmit}>
        <label>
          Alis ilcesi
          <select value={pickupDistrict} onChange={(event) => setPickupDistrict(event.target.value)}>
            {districts.map((district) => (
              <option key={district.slug} value={district.slug}>{district.name}</option>
            ))}
          </select>
        </label>

        <label>
          Teslim ilcesi
          <select value={dropoffDistrict} onChange={(event) => setDropoffDistrict(event.target.value)}>
            {districts.map((district) => (
              <option key={district.slug} value={district.slug}>{district.name}</option>
            ))}
          </select>
        </label>

        <label>
          Hizmet tipi
          <select value={serviceSlug} onChange={(event) => setServiceSlug(event.target.value)}>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>{service.name}</option>
            ))}
          </select>
        </label>

        <label>
          Teslim zamani
          <select value={timePlan} onChange={(event) => setTimePlan(event.target.value)}>
            <option value="simdi">Hemen pickup</option>
            <option value="bugun">Bugun teslim</option>
            <option value="planli">Planli teslim</option>
            <option value="gece">Gece operasyonu</option>
          </select>
        </label>

        <label>
          Gonderi tipi
          <select value={shipmentType} onChange={(event) => setShipmentType(event.target.value)}>
            <option value="evrak">Evrak</option>
            <option value="kucuk-paket">Kucuk paket</option>
            <option value="koli">Koli</option>
            <option value="medikal">Medikal</option>
            <option value="parca">Yedek parca</option>
          </select>
        </label>

        <div className="estimator-result">
          <div>
            <strong>{formatPrice(estimate.min)} - {formatPrice(estimate.max)} TL</strong>
            <span>Tahmini fiyat bandi</span>
          </div>
          <div>
            <strong>{estimate.eta} dk</strong>
            <span>Pickup hedefi</span>
          </div>
          <div>
            <strong>{`${estimate.pickupName} -> ${estimate.dropoffName}`}</strong>
            <span>Ornek rota</span>
          </div>
        </div>

        <div className="hero__actions">
          <button type="submit" className="primary-button">WhatsApp ile teyit al</button>
          <a className="ghost-button" href={siteConfig.phoneHref}>Hemen ara</a>
        </div>
      </form>
    </section>
  );
}