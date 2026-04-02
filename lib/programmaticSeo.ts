import { districts } from './geoData';

export type ProgrammaticService = {
  slug: string;
  name: string;
  serviceLabel: string;
  deliveryPromise: string;
  priceMultiplier: number;
  usp: string;
};

export type ProgrammaticSemt = {
  slug: string;
  name: string;
  etaMinutes: number;
  basePriceMin: number;
  basePriceMax: number;
  nearby: string[];
  localAngle: string;
  trustLine: string;
};

export type ProgrammaticLanding = {
  slug: string;
  semt: ProgrammaticSemt;
  service: ProgrammaticService;
  title: string;
  description: string;
  etaLabel: string;
  priceRange: string;
  serviceType: string;
  intro: string;
  secondary: string;
  urgency: string;
  bullets: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const formatPrice = (value: number) => `${new Intl.NumberFormat('tr-TR').format(value)} TL`;

const programmaticServices: ProgrammaticService[] = [
  {
    slug: 'acil-kurye',
    name: 'Acil Kurye',
    serviceLabel: 'acil kurye',
    deliveryPromise: '30 dakikada teslimat planı',
    priceMultiplier: 1,
    usp: 'Bekleyen evrak, paket ve acil gönderiler için hızlı pickup ve net aksiyon akışı.'
  },
  {
    slug: 'express-kurye',
    name: 'Express Kurye',
    serviceLabel: 'express kurye',
    deliveryPromise: 'öncelikli rota ve hızlı teslimat',
    priceMultiplier: 1.18,
    usp: 'Zaman kritik gönderiler için daha kısa rota, daha az bekleme ve daha net teslim planı.'
  },
  {
    slug: 'gece-kurye',
    name: 'Gece Kurye',
    serviceLabel: 'gece kurye',
    deliveryPromise: '7/24 kurye yönlendirme desteği',
    priceMultiplier: 1.24,
    usp: 'Mesai dışı acil teslimatlarda hızlı iletişim ve gece açık kurye mesajı ile dönüşüm odaklı yapı.'
  },
  {
    slug: 'vip-kurye',
    name: 'VIP Kurye',
    serviceLabel: 'vip kurye',
    deliveryPromise: 'tek gönderiye odaklı teslim akışı',
    priceMultiplier: 1.35,
    usp: 'Önemli evrak ve kritik teslimatlar için daha kontrollü, daha güvenli ve daha direkt rota planı.'
  },
  {
    slug: 'ayni-gun-kurye',
    name: 'Aynı Gün Kurye',
    serviceLabel: 'aynı gün kurye',
    deliveryPromise: 'aynı gün teslim odaklı planlama',
    priceMultiplier: 1.12,
    usp: 'Gün içinde yetişmesi gereken gönderiler için hız ve maliyeti dengeleyen kurye akışı.'
  },
  {
    slug: 'arabali-kurye',
    name: 'Arabalı Kurye',
    serviceLabel: 'arabalı kurye',
    deliveryPromise: 'hacimli gönderiler için araçlı yönlendirme',
    priceMultiplier: 1.52,
    usp: 'Koli, yedek parça ve hacimli paketler için motor yerine araçlı operasyon seçeneği sunar.'
  }
];

const coreSemts: ProgrammaticSemt[] = [
  { slug: 'kadikoy', name: 'Kadıköy', etaMinutes: 30, basePriceMin: 320, basePriceMax: 490, nearby: ['uskudar', 'atasehir', 'maltepe', 'kartal'], localAngle: 'Moda, Kozyatağı ve merkez aksındaki yoğun gönderi trafiği için hızlı pickup yapısı öne çıkar.', trustLine: 'Anadolu Yakası içinde hızlı pickup ve köprü geçişli teslimatlar için güçlü saha alışkanlığı bulunur.' },
  { slug: 'besiktas', name: 'Beşiktaş', etaMinutes: 30, basePriceMin: 340, basePriceMax: 520, nearby: ['sisli', 'sariyer', 'fatih', 'uskudar'], localAngle: 'Levent, Etiler ve Zincirlikuyu hattında kurumsal evrak ve express teslimat talepleri yoğunlaşır.', trustLine: 'Plaza çıkışlı teslimatlarda hız, ulaşılabilirlik ve direkt aksiyon mesajı dönüşümü artırır.' },
  { slug: 'sisli', name: 'Şişli', etaMinutes: 30, basePriceMin: 330, basePriceMax: 500, nearby: ['besiktas', 'fatih', 'kagithane', 'bakirkoy'], localAngle: 'Mecidiyeköy, Osmanbey ve Bomonti çevresinde express ve acil kurye ihtiyacı sürekli canlıdır.', trustLine: 'Merkezi lokasyon avantajı sayesinde kısa sürede pickup ve teslim planı kurulabilir.' },
  { slug: 'uskudar', name: 'Üsküdar', etaMinutes: 32, basePriceMin: 320, basePriceMax: 500, nearby: ['kadikoy', 'atasehir', 'maltepe', 'besiktas'], localAngle: 'Altunizade ve merkez hattında köprü geçişli teslimatlar için net karar verdiren içerik gerekir.', trustLine: 'Üsküdar çıkışlı gönderilerde hem Anadolu hem Avrupa Yakası teslimatları için hızlı yönlendirme mesajı çalışır.' },
  { slug: 'atasehir', name: 'Ataşehir', etaMinutes: 30, basePriceMin: 330, basePriceMax: 510, nearby: ['kadikoy', 'uskudar', 'umraniye', 'maltepe'], localAngle: 'Finans merkezi çevresinde acil evrak, VIP kurye ve kurumsal pickup talepleri yüksektir.', trustLine: 'Plaza ve finans bölgesi teslimatlarında hız kadar güven ve ulaşılabilirlik sinyali öne çıkar.' },
  { slug: 'bakirkoy', name: 'Bakırköy', etaMinutes: 35, basePriceMin: 330, basePriceMax: 500, nearby: ['zeytinburnu', 'bahcelievler', 'fatih', 'beylikduzu'], localAngle: 'Ofis, klinik ve bireysel gönderiler için aynı gün teslimat mesajı daha yüksek dönüşüm sağlar.', trustLine: 'Bakırköy çevresinde hem medikal hem evrak teslimlerinde hızlı pickup beklentisi güçlüdür.' },
  { slug: 'kagithane', name: 'Kağıthane', etaMinutes: 32, basePriceMin: 320, basePriceMax: 495, nearby: ['sisli', 'besiktas', 'eyupsultan', 'sariyer'], localAngle: 'Ofis bölgeleri, ajanslar ve teknik servis çıkışları için express ve acil kurye yoğun aranmaktadır.', trustLine: 'Merkezi konum sayesinde yakın bölgelere hızlı dağıtım mesajı satış tarafında güçlü çalışır.' },
  { slug: 'kartal', name: 'Kartal', etaMinutes: 35, basePriceMin: 330, basePriceMax: 510, nearby: ['maltepe', 'pendik', 'tuzla', 'kadikoy'], localAngle: 'Sanayi, ofis ve teknik servis çıkışlı parça teslimlerinde hızlı pickup ihtiyacı belirgindir.', trustLine: 'Kartal hattında özellikle yedek parça ve evrak teslimlerinde kısa karar veren kullanıcı yoğunluğu vardır.' },
  { slug: 'maltepe', name: 'Maltepe', etaMinutes: 34, basePriceMin: 325, basePriceMax: 500, nearby: ['kartal', 'kadikoy', 'atasehir', 'pendik'], localAngle: 'Sahil hattı ve merkez bölgede aynı gün kurye ve gece kurye aramaları güçlü trafik üretir.', trustLine: 'Maltepe çıkışlı gönderilerde hız, fiyat netliği ve WhatsApp kolaylığı dönüşümü yükseltir.' },
  { slug: 'umraniye', name: 'Ümraniye', etaMinutes: 34, basePriceMin: 320, basePriceMax: 490, nearby: ['atasehir', 'uskudar', 'sancaktepe', 'kadikoy'], localAngle: 'Dudullu ve ticari bölgelerde günlük şehir içi kurye ve express kurye talepleri öne çıkar.', trustLine: 'Kurumsal teslimatlar için doğrudan arama ve anında fiyat alma akışı daha hızlı sonuç verir.' },
  { slug: 'fatih', name: 'Fatih', etaMinutes: 35, basePriceMin: 330, basePriceMax: 505, nearby: ['sisli', 'bakirkoy', 'besiktas', 'zeytinburnu'], localAngle: 'Tarihi yarımada, Eminönü ve ticari hatlarda hızlı pickup ile net teslim bilgisi kritik önemdedir.', trustLine: 'Yoğun trafik ve dar sokak nedeniyle kullanıcılar uzun açıklama değil, direkt aksiyon görmek ister.' },
  { slug: 'beylikduzu', name: 'Beylikdüzü', etaMinutes: 40, basePriceMin: 360, basePriceMax: 560, nearby: ['esenyurt', 'kucukcekmece', 'bakirkoy', 'buyukcekmece'], localAngle: 'Batı aksında uzak mesafe teslimatlar için aynı gün planı ve araçlı/express mesajı daha iyi çalışır.', trustLine: 'Beylikdüzü çıkışlı teslimatlarda kullanıcı ilk olarak hız ve net fiyat görmek ister.' },
  { slug: 'basaksehir', name: 'Başakşehir', etaMinutes: 38, basePriceMin: 350, basePriceMax: 540, nearby: ['bagcilar', 'sultangazi', 'kucukcekmece', 'bahcelievler'], localAngle: 'İkitelli ve çevre sanayi hattında parça, evrak ve kurumsal dağıtım talepleri belirgin şekilde yüksektir.', trustLine: 'Başakşehir bölgesinde express ve aynı gün teslimat vurgusu kullanıcıyı daha hızlı harekete geçirir.' },
  { slug: 'eyupsultan', name: 'Eyüpsultan', etaMinutes: 36, basePriceMin: 340, basePriceMax: 520, nearby: ['kagithane', 'sultangazi', 'fatih', 'besiktas'], localAngle: 'Alibeyköy ve Göktürk hattında hem bireysel hem kurumsal teslimatlar için hızlı yönlendirme aranır.', trustLine: 'Eyüpsultan bölgesinde özellikle 7/24 ulaşılabilirlik ve WhatsApp kolaylığı güven sinyali üretir.' },
  { slug: 'sultangazi', name: 'Sultangazi', etaMinutes: 38, basePriceMin: 345, basePriceMax: 525, nearby: ['eyupsultan', 'basaksehir', 'bagcilar', 'fatih'], localAngle: 'Mahalle bazlı pickup ve şehir içi dağıtım aramalarında kısa, net ve satın alma odaklı içerik daha iyi performans verir.', trustLine: 'Sultangazi trafiğinde kullanıcıyı en hızlı aramaya ve siparişe taşıyan yapı daha fazla dönüşüm getirir.' },
  { slug: 'pendik', name: 'Pendik', etaMinutes: 38, basePriceMin: 345, basePriceMax: 530, nearby: ['kartal', 'maltepe', 'tuzla', 'sancaktepe'], localAngle: 'Lojistik ve sanayi çıkışlı gönderilerde express, gece ve acil kurye kombinasyonları güçlü aranır.', trustLine: 'Pendik içinde net fiyat aralığı ve teslim süresi bilgisi kullanıcının kararsızlığını düşürür.' },
  { slug: 'tuzla', name: 'Tuzla', etaMinutes: 42, basePriceMin: 370, basePriceMax: 580, nearby: ['pendik', 'kartal', 'maltepe', 'sancaktepe'], localAngle: 'Sanayi, tersane ve teknik servis ağı nedeniyle parça ve kritik evrak teslimlerinde hız öne çıkar.', trustLine: 'Tuzla bölgesinde kullanıcıların büyük kısmı net fiyat, hızlı pickup ve tek tık iletişim bekler.' },
  { slug: 'sariyer', name: 'Sarıyer', etaMinutes: 35, basePriceMin: 350, basePriceMax: 535, nearby: ['besiktas', 'kagithane', 'sisli', 'fatih'], localAngle: 'Maslak, İstinye ve çevresindeki ofis yoğunluğu express ve VIP kurye ihtiyacını güçlendirir.', trustLine: 'Kurumsal teslimatlarda güven, hız ve telefonla anında ulaşılabilirlik en etkili satış alanıdır.' },
  { slug: 'kucukcekmece', name: 'Küçükçekmece', etaMinutes: 37, basePriceMin: 345, basePriceMax: 530, nearby: ['bahcelievler', 'bakirkoy', 'basaksehir', 'beylikduzu'], localAngle: 'Halkalı ve Sefaköy çevresinde evrak, e-ticaret ve aynı gün kurye aramaları yüksek niyet taşır.', trustLine: 'Küçükçekmece bölgesinde acil kurye ve gece kurye içerikleri hızlı aksiyon doğurur.' },
  { slug: 'bahcelievler', name: 'Bahçelievler', etaMinutes: 35, basePriceMin: 335, basePriceMax: 510, nearby: ['bakirkoy', 'kucukcekmece', 'basaksehir', 'fatih'], localAngle: 'Yenibosna hattında kurumsal evrak, medikal ve şehir içi teslimat ihtiyacı çok yüksektir.', trustLine: 'Bahçelievler kullanıcıları için net teslim süresi, fiyat aralığı ve WhatsApp CTA en etkili kombinasyondur.' }
];

const introVariants = [
  (semt: ProgrammaticSemt, service: ProgrammaticService) => `${semt.name} bölgesinde ${service.serviceLabel} arayan kullanıcılar için hız, net fiyat ve tek tık iletişim aynı sayfada toplandı.`,
  (semt: ProgrammaticSemt, service: ProgrammaticService) => `${semt.name} içinde ${service.serviceLabel} ihtiyacı doğduğunda kullanıcıyı bekletmeyen kısa, ikna edici ve aksiyon odaklı yapı daha fazla dönüşüm üretir.`,
  (semt: ProgrammaticSemt, service: ProgrammaticService) => `${semt.name} çıkışlı gönderilerde ${service.serviceLabel} arayanlar için arama, WhatsApp ve sipariş akışı net biçimde kurgulandı.`
];

const secondaryVariants = [
  (semt: ProgrammaticSemt, service: ProgrammaticService) => `${semt.localAngle} ${service.usp}`,
  (semt: ProgrammaticSemt, service: ProgrammaticService) => `${service.usp} ${semt.trustLine}`,
  (semt: ProgrammaticSemt, service: ProgrammaticService) => `${semt.trustLine} ${service.deliveryPromise} mesajı bu yüzden içerikte doğrudan görünür tutulur.`
];

const urgencyVariants = [
  (semt: ProgrammaticSemt) => `${semt.name} içinde yoğunluk artmadan sipariş vermek, pickup süresini kısaltır ve teslim planını daha hızlı başlatır.`,
  (semt: ProgrammaticSemt) => `${semt.name} bölgesinde acil gönderiler bekledikçe süre uzar; bu yüzden telefon ve WhatsApp CTA'ları doğrudan aksiyon için öne alınır.`,
  (semt: ProgrammaticSemt) => `${semt.name} kullanıcıları için kararsızlığı azaltan mesaj nettir: şimdi kurye çağır, fiyatı öğren ve teslimatı başlat.`
];

const getVariant = <T,>(items: T[], index: number) => items[index % items.length];

const cleanNeighborhoodName = (value: string) =>
  value
    .replace(/\bmah\.?$/i, '')
    .replace(/\bmahallesi\b/i, '')
    .replace(/\s+/g, ' ')
    .trim();

const buildGeneratedSemts = (): ProgrammaticSemt[] =>
  districts.flatMap((district, districtIndex) =>
    district.neighborhoods.map((neighborhood, neighborhoodIndex, list) => {
      const nearbyNeighborhoodSlugs = list
        .filter((_, index) => Math.abs(index - neighborhoodIndex) > 0 && Math.abs(index - neighborhoodIndex) <= 2)
        .slice(0, 3)
        .map((item) => `${district.slug}-${item.slug}`);
      const basePriceMin = 290 + (districtIndex % 7) * 10 + (neighborhoodIndex % 5) * 5;
      const basePriceMax = basePriceMin + 150 + (neighborhoodIndex % 4) * 20;
      const semtName = `${cleanNeighborhoodName(neighborhood.name)}, ${district.name}`;

      return {
        slug: `${district.slug}-${neighborhood.slug}`,
        name: semtName,
        etaMinutes: 24 + ((districtIndex + neighborhoodIndex) % 19),
        basePriceMin,
        basePriceMax,
        nearby: [district.slug, ...nearbyNeighborhoodSlugs].slice(0, 4),
        localAngle: `${district.name} içinde ${cleanNeighborhoodName(neighborhood.name)} çevresinde lokal pickup, mahalle bazlı teslim ve yakın ilçe geçişli gönderi talepleri için mikro landing yapı kuruldu.`,
        trustLine: `${district.summary} ${neighborhood.summary}`
      };
    })
  );

const allSemts = [...coreSemts, ...buildGeneratedSemts()];
const semtIndexMap = new Map(allSemts.map((item, index) => [item.slug, index]));
const semtMap = new Map(allSemts.map((item) => [item.slug, item]));
const serviceIndexMap = new Map(programmaticServices.map((item, index) => [item.slug, index]));

const buildPriceRange = (semt: ProgrammaticSemt, service: ProgrammaticService) => {
  const min = Math.round(semt.basePriceMin * service.priceMultiplier);
  const max = Math.round(semt.basePriceMax * service.priceMultiplier);
  return `${formatPrice(min)} - ${formatPrice(max)}`;
};

export const getProgrammaticServices = () => programmaticServices;
export const getProgrammaticSemts = () => allSemts;

export const buildProgrammaticLanding = (semt: ProgrammaticSemt, service: ProgrammaticService): ProgrammaticLanding => {
  const comboIndex = (semtIndexMap.get(semt.slug) || 0) + (serviceIndexMap.get(service.slug) || 0);
  const priceRange = buildPriceRange(semt, service);
  const etaLabel = `${semt.etaMinutes} dakikada pickup hedefi`;
  const title = `${semt.name} ${service.serviceLabel} - hızlı kurye ve fiyat bilgisi`;
  const description = `${semt.name} bölgesinde hızlı ve güvenilir ${service.serviceLabel} hizmeti. ${etaLabel}, ${priceRange} fiyat aralığı ve tek tık WhatsApp veya arama aksiyonu.`;
  const intro = getVariant(introVariants, comboIndex)(semt, service);
  const secondary = getVariant(secondaryVariants, comboIndex + 1)(semt, service);
  const urgency = getVariant(urgencyVariants, comboIndex + 2)(semt);

  return {
    slug: `${semt.slug}-${service.slug}`,
    semt,
    service,
    title,
    description,
    etaLabel,
    priceRange,
    serviceType: service.name,
    intro,
    secondary,
    urgency,
    bullets: [
      `${semt.name} içinde ${service.serviceLabel} için ${etaLabel}`,
      `${priceRange} aralığında hızlı fiyat görünürlüğü`,
      'WhatsApp, telefon ve teklif formu ile üç kanallı dönüşüm akışı',
      `${service.deliveryPromise} ve 7/24 ulaşılabilir operasyon mesajı`
    ],
    faqs: [
      {
        question: `${semt.name} ${service.serviceLabel} ne kadar sürede gelir?`,
        answer: `${semt.name} bölgesinde yönlendirme süresi trafik ve yoğunluğa göre değişir; hedef ${etaLabel} ile kullanıcıyı en hızlı aksiyona taşımaktır.`
      },
      {
        question: `${semt.name} ${service.serviceLabel} fiyatı ne kadar?`,
        answer: `${semt.name} için ${service.serviceLabel} sayfasında görülen tahmini fiyat aralığı ${priceRange} bandındadır. Net fiyat pickup ve teslim noktasına göre belirlenir.`
      },
      {
        question: `${semt.name} bölgesinde nasıl sipariş verebilirim?`,
        answer: `Telefonla arayarak, WhatsApp'tan yazarak veya teklif al formunu doldurarak ${semt.name} için hızlı şekilde sipariş oluşturabilirsiniz.`
      }
    ]
  };
};

const allLandingsCache = allSemts.flatMap((semt) => programmaticServices.map((service) => buildProgrammaticLanding(semt, service)));
const landingMap = new Map(allLandingsCache.map((item) => [item.slug, item]));

export const getAllProgrammaticLandings = () => allLandingsCache;

export const getProgrammaticLandingBySlug = (slug: string) => landingMap.get(slug);

export const getNearbyLandings = (landing: ProgrammaticLanding) =>
  landing.semt.nearby
    .map((slug) => semtMap.get(slug))
    .filter((item): item is ProgrammaticSemt => Boolean(item))
    .map((semt) => buildProgrammaticLanding(semt, landing.service));

export const getSiblingServiceLandings = (landing: ProgrammaticLanding) =>
  programmaticServices
    .filter((service) => service.slug !== landing.service.slug)
    .map((service) => buildProgrammaticLanding(landing.semt, service));