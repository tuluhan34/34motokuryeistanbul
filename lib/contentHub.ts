import { districts } from './geoData';
import { sectorCatalog } from './sectorCatalog';
import { services } from './siteData';

export type HubKind = 'district' | 'neighborhood' | 'sector';
export type DaySlot = 'sabah' | 'ogle' | 'aksam';

export type SectorContentItem = {
  slug: string;
  name: string;
  detail: string;
  focus: string;
  imageQuery: string;
};

export type HubContentItem = {
  slug: string;
  kind: HubKind;
  title: string;
  excerpt: string;
  intro: string;
  body: string[];
  imageQuery: string;
  keywords: string[];
  targetPath: string;
  relatedLinks: Array<{ href: string; label: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

const slugify = (value: string) =>
  value
    .toLocaleLowerCase('tr-TR')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const sectorContent: SectorContentItem[] = sectorCatalog.map((sector) => ({
  slug: sector.slug,
  name: sector.name,
  detail: sector.short,
  focus: sector.focus,
  imageQuery: sector.imageQuery
}));

const districtItems: HubContentItem[] = districts.map((district) => ({
  slug: `ilce-${district.slug}`,
  kind: 'district',
  title: `${district.name} kurye blog rehberi`,
  excerpt: `${district.name} içinde acil kurye, express teslimat ve gün içi pickup akışını özetleyen ilçe rehberi.`,
  intro: `${district.name} bölgesinde pickup noktası, teslim alanı ve gün içi hız beklentisine göre farklı kurye senaryoları öne çıkar.`,
  body: [
    `${district.summary} İlçe içi dağıtım yoğunluğu, günün saatine ve teslimat tipine göre değiştiği için rota planı kısa sürede netleştirilmelidir.`,
    `${district.highlights.join(' ')} Özellikle evrak, küçük paket, teknik parça ve kurumsal gönderilerde pickup bilgisinin doğru paylaşılması işlemi hızlandırır.`,
    `${district.name} içinde çalışan firmalar için telefon ve WhatsApp üzerinden anlık teklif akışı, gün içinde değişen trafik temposuna daha hızlı uyum sağlar.`
  ],
  imageQuery: `${district.name} city parcel courier scooter no people`,
  keywords: [district.name, `${district.name} kurye`, `${district.name} acil kurye`],
  targetPath: `/istanbul/${district.slug}`,
  relatedLinks: [
    { href: `/istanbul/${district.slug}`, label: `${district.name} ilçe sayfası` },
    { href: `/blog/ilce-${district.slug}`, label: `${district.name} blog yazısı` },
    { href: `/galeri/ilce-${district.slug}`, label: `${district.name} galeri` }
  ],
  faqs: [
    {
      question: `${district.name} içinde kurye ne kadar sürede yönlendirilir?`,
      answer: `${district.name} içindeki pickup noktasına, yoğunluğa ve gönderi tipine göre kısa sürede planlama yapılır; acil taleplerde öncelikli yönlendirme hedeflenir.`
    },
    {
      question: `${district.name} için hangi gönderiler taşınır?`,
      answer: 'Evrak, paket, teknik parça, numune ve aynı gün teslim edilmesi gereken bireysel ya da kurumsal gönderiler taşınabilir.'
    }
  ]
}));

const neighborhoodItems: HubContentItem[] = districts.flatMap((district) =>
  district.neighborhoods.map((neighborhood) => ({
    slug: `mahalle-${district.slug}-${neighborhood.slug}`,
    kind: 'neighborhood',
    title: `${district.name} ${neighborhood.name} kurye rehberi`,
    excerpt: `${neighborhood.name} mahallesi için pickup, teslimat ve hızlı kurye ihtiyaçlarına odaklanan yerel rehber.`,
    intro: `${neighborhood.name} mahallesinde evrak, paket ve aynı gün teslimat ihtiyaçlarında mahalle içi pickup bilgisi süreç hızını doğrudan etkiler.`,
    body: [
      `${neighborhood.summary} Mahalle çıkışlı teslimatlarda bina, ofis ve teslim kişisi bilgisinin net olması operasyonu hızlandırır.`,
      `${district.name} ilçesinin ${neighborhood.name} bölgesinde acil teslimat, express kurye ve arabalı kurye ihtiyaçları gönderi tipine göre ayrıştırılarak planlanır.`,
      `Mahalle bazlı taleplerde en hızlı sonuç için pickup noktası, teslim noktası ve gönderi içeriğini kısa şekilde iletmek yeterlidir.`
    ],
    imageQuery: `${district.name} ${neighborhood.name} parcel delivery scooter no people`,
    keywords: [
      `${neighborhood.name} kurye`,
      `${district.name} ${neighborhood.name} acil kurye`,
      `${district.name} ${neighborhood.name} moto kurye`
    ],
    targetPath: `/istanbul/${district.slug}/${neighborhood.slug}`,
    relatedLinks: [
      { href: `/istanbul/${district.slug}/${neighborhood.slug}`, label: `${neighborhood.name} mahalle sayfası` },
      { href: `/blog/mahalle-${district.slug}-${neighborhood.slug}`, label: `${neighborhood.name} blog yazısı` },
      { href: `/galeri/mahalle-${district.slug}-${neighborhood.slug}`, label: `${neighborhood.name} galeri` }
    ],
    faqs: [
      {
        question: `${neighborhood.name} mahallesinde aynı gün teslim mümkün mü?`,
        answer: 'Pickup saati, teslim noktası ve trafik durumuna göre aynı gün teslimat planı oluşturulabilir.'
      },
      {
        question: `${neighborhood.name} için hangi kurye tipi uygundur?`,
        answer: 'Küçük paket ve evraklarda moto kurye, hacimli kolilerde ise arabalı kurye seçeneği değerlendirilir.'
      }
    ]
  }))
);

const sectorItems: HubContentItem[] = sectorContent.map((sector) => ({
  slug: `sektor-${sector.slug}`,
  kind: 'sector',
  title: `${sector.name} için kurye operasyon rehberi`,
  excerpt: `${sector.name} alanında sık kullanılan gönderi tipleri ve teslim önceliklerini anlatan sektör rehberi.`,
  intro: `${sector.name} alanında teslimat süreci yalnızca hız değil, aynı zamanda düzenli bilgilendirme ve gönderi güvenliği gerektirir.`,
  body: [
    `${sector.detail} ${sector.focus}`,
    'Kurye planı yapılırken pickup saati, teslim önceliği, araç tipi ve gönderinin hassasiyeti birlikte değerlendirilmelidir.',
    'Düzenli operasyon ihtiyacı olan firmalarda WhatsApp, telefon ve teklif formu üzerinden ilerleyen sabit bir iş akışı daha hızlı sonuç verir.'
  ],
  imageQuery: sector.imageQuery,
  keywords: [sector.name, `${sector.name} kurye`, `${sector.name} teslimat`],
  targetPath: '/sektorler',
  relatedLinks: [
    { href: '/sektorler', label: 'Sektörler sayfası' },
    { href: `/blog/sektor-${sector.slug}`, label: `${sector.name} blog yazısı` },
    { href: `/galeri/sektor-${sector.slug}`, label: `${sector.name} galeri` }
  ],
  faqs: [
    {
      question: `${sector.name} için en uygun kurye tipi hangisidir?`,
      answer: 'Gönderinin hacmine, gizlilik ihtiyacına ve teslim hızına göre acil, express, VIP veya arabalı kurye seçeneği belirlenir.'
    },
    {
      question: `${sector.name} alanında düzenli çalışma yapılır mı?`,
      answer: 'Evet. Günlük, haftalık veya proje bazlı düzenli pickup ve teslimat modeli oluşturulabilir.'
    }
  ]
}));

export const hubItems: HubContentItem[] = [...districtItems, ...neighborhoodItems, ...sectorItems];

export const getHubItemBySlug = (slug: string) => hubItems.find((item) => item.slug === slug);

export const getHubItemsByKind = (kind: HubKind) => hubItems.filter((item) => item.kind === kind);

export const getDaySlot = (date = new Date()): DaySlot => {
  const hour = date.getHours();

  if (hour < 12) {
    return 'sabah';
  }

  if (hour < 18) {
    return 'ogle';
  }

  return 'aksam';
};

export const getDaySlotLabel = (slot: DaySlot) => {
  switch (slot) {
    case 'sabah':
      return 'Sabah akışı';
    case 'ogle':
      return 'Öğle temposu';
    default:
      return 'Akşam yoğunluğu';
  }
};

export const getTimedNarrative = (date = new Date()) => {
  const slot = getDaySlot(date);

  const copy = {
    sabah: {
      blog: 'Sabah saatlerinde planlanan pickup ve kurumsal evrak çıkışlarına odaklanan içerikler öne çıkar.',
      faq: 'Sabah saatlerinde en çok sorulan pickup süresi ve ilk yönlendirme sorularını öne aldık.',
      gallery: 'Sabah akışında motor, araç ve paket odaklı operasyon görselleri öne çıkar.'
    },
    ogle: {
      blog: 'Öğle saatlerinde aynı gün teslim, hızlı yönlendirme ve yoğun rota içerikleri öne alınır.',
      faq: 'Öğle temposunda aynı gün teslim ve anlık fiyat akışıyla ilgili sorular öne çıkar.',
      gallery: 'Öğle temposunda şehir içi teslimat, araç yükleme ve paket toplama görselleri yenilenir.'
    },
    aksam: {
      blog: 'Akşam saatlerinde mesai çıkışı teslimat, gece kurye ve son dakika gönderi içerikleri öne çıkar.',
      faq: 'Akşam yoğunluğunda gece kurye ve geç saat teslimat soruları görünür tutulur.',
      gallery: 'Akşam akışında gece teslimatı çağrıştıran araç ve lojistik kareleri öne alınır.'
    }
  };

  return {
    slot,
    label: getDaySlotLabel(slot),
    ...copy[slot]
  };
};

export const getFeaturedHubItems = (date = new Date()) => {
  const hourSeed = date.getHours();
  const district = districtItems[hourSeed % districtItems.length];
  const neighborhood = neighborhoodItems[hourSeed % neighborhoodItems.length];
  const sector = sectorItems[hourSeed % sectorItems.length];
  const service = services[hourSeed % services.length];

  return {
    district,
    neighborhood,
    sector,
    service
  };
};
