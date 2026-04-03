type KeywordIntent = 'ticari' | 'lokal' | 'bilgi';

export type KeywordEntry = {
  keyword: string;
  intent: KeywordIntent;
  targetPath: string;
};

const commercialKeywords = [
  'kurye',
  'moto kurye',
  'express kurye',
  'acil kurye',
  'hızlı kurye',
  'aynı gün kurye',
  'gece kurye',
  'vip kurye',
  'özel kurye',
  'şehir içi kurye',
  'en hızlı kurye',
  'ucuz kurye',
  'uygun fiyatlı kurye',
  'ekonomik kurye',
  'güvenilir kurye',
  'sigortalı kurye',
  'kapıdan kapıya kurye',
  'adresten adrese kurye',
  'evrak kurye',
  'dosya kurye',
  'paket kurye',
  'küçük paket kurye',
  'büyük paket kurye',
  'e-ticaret kurye',
  'online sipariş kurye',
  'restoran kurye',
  'yemek kurye',
  'ilaç kurye',
  'medikal kurye',
  'hastane kurye',
  'laboratuvar kurye',
  'numune kurye',
  'teknik servis kurye',
  'parça kurye',
  'yedek parça kurye',
  'tekstil kurye',
  'butik kurye',
  'çiçek kurye',
  'hediye kurye',
  'noter evrak kurye',
  'banka evrak kurye',
  'resmi evrak kurye',
  'ihale dosyası kurye',
  'sözleşme kurye',
  'pasaport kurye',
  'vize evrak kurye',
  'gece express kurye',
  'ultrahızlı kurye',
  'jet kurye',
  'dakik kurye',
  'anında kurye',
  'motorlu kurye hizmeti',
  'istanbul motor kurye',
  'jet kurye istanbul',
  'adresime kurye istanbul',
  'gönderim var kurye',
  'şehirler arası kurye',
  'şehirler arası teslimat',
  'şehir dışı kurye',
  'istanbul çıkışlı kurye',
  'vale özel şoför',
  'özel şoför istanbul',
  'vale hizmeti',
  'şoför destek hizmeti',
  'eczane kurye',
  'gümrük kurye',
  'ordino kurye',
  'gidiş dönüş kurye',
  'randevulu gönderim',
  'uçak kargo',
  'uçak kurye',
  'minivan kurye',
  'panelvan kurye',
  'kamyonet kurye',
  'kurye firması',
  'kurye şirketi',
  'bireysel kurye',
  'freelance kurye',
  'yerel kurye'
];

const localKeywords = [
  'istanbul kurye',
  'moto kurye istanbul',
  'acil kurye istanbul',
  'express kurye istanbul',
  'hızlı kurye istanbul',
  'aynı gün teslim kurye istanbul',
  'gece kurye istanbul',
  'vip kurye istanbul',
  'ataşehir kurye',
  'ataşehir moto kurye',
  'en yakın kurye',
  'istanbul avrupa yakası kurye',
  'istanbul anadolu yakası kurye'
];

const informationalKeywords = [
  'kurye fiyatları',
  'kurye kaç dakikada gelir',
  'kurye nasıl çağrılır',
  'aynı gün teslimat nasıl çalışır',
  'kurye ile kargo farkı',
  'arabalı kurye ne zaman gerekir',
  'google işletme kurye görünürlüğü',
  'ai görünürlüğü kurye sitesi',
  'istanbul kurye teslim süresi',
  'kurye hizmet bölgeleri'
];

const mapCommercialPath = (keyword: string) => {
  if (keyword.includes('eczane')) return '/hizmetler/eczane-kurye';
  if (keyword.includes('gümrük') || keyword.includes('gumruk') || keyword.includes('ordino') || keyword.includes('atr')) return '/hizmetler/gumruk-kurye';
  if (keyword.includes('gidiş dönüş') || keyword.includes('gidis donus') || keyword.includes('dönüşlü') || keyword.includes('donuslu')) return '/hizmetler/gidis-donus-kurye';
  if (keyword.includes('randevulu') || keyword.includes('saatli teslimat') || keyword.includes('planlı kurye') || keyword.includes('planli kurye')) return '/hizmetler/randevulu-gonderim';
  if (keyword.includes('uçak') || keyword.includes('ucak') || keyword.includes('hava kargo')) return '/hizmetler/ucak-kargo';
  if (keyword.includes('minivan') || keyword.includes('panelvan')) return '/hizmetler/minivan-panelvan';
  if (keyword.includes('kamyonet')) return '/hizmetler/kamyonet-kurye';
  if (keyword.includes('şehirler arası') || keyword.includes('şehir dışı') || keyword.includes('istanbul çıkışlı')) return '/hizmetler/sehirler-arasi-kurye';
  if (keyword.includes('vale') || keyword.includes('şoför') || keyword.includes('sofor')) return '/hizmetler/vale-ozel-sofor';
  if (keyword.includes('express')) return '/hizmetler/express-kurye';
  if (keyword.includes('acil') || keyword.includes('jet') || keyword.includes('anında') || keyword.includes('dakik')) return '/hizmetler/acil-kurye';
  if (keyword.includes('gece')) return '/hizmetler/gece-kurye';
  if (keyword.includes('vip') || keyword.includes('özel')) return '/hizmetler/vip-kurye';
  if (keyword.includes('evrak') || keyword.includes('dosya') || keyword.includes('noter') || keyword.includes('banka') || keyword.includes('resmi') || keyword.includes('ihale') || keyword.includes('sözleşme') || keyword.includes('pasaport') || keyword.includes('vize')) return '/hizmetler/evrak-kurye';
  if (keyword.includes('medikal') || keyword.includes('ilaç') || keyword.includes('hastane') || keyword.includes('laboratuvar') || keyword.includes('numune')) return '/hizmetler/medikal-kurye';
  if (keyword.includes('e-ticaret') || keyword.includes('online sipariş') || keyword.includes('restoran') || keyword.includes('yemek') || keyword.includes('butik')) return '/hizmetler/e-ticaret-kurye';
  if (keyword.includes('büyük paket') || keyword.includes('arabalı')) return '/hizmetler/arabalı-kurye';
  if (keyword.includes('aynı gün')) return '/hizmetler/ayni-gun-kurye';
  return '/hizmetler/sehir-ici-kurye';
};

export const keywordEntries: KeywordEntry[] = [
  ...commercialKeywords.map((keyword) => ({ keyword, intent: 'ticari' as const, targetPath: mapCommercialPath(keyword) })),
  ...localKeywords.map((keyword) => ({ keyword, intent: 'lokal' as const, targetPath: '/anahtar-kelime-haritasi' })),
  ...informationalKeywords.map((keyword) => ({ keyword, intent: 'bilgi' as const, targetPath: '/kurye-fiyatlari' }))
];

export const keywordClusters = [
  {
    title: 'Ticari Anahtar Kelimeler',
    intent: 'ticari' as const,
    items: keywordEntries.filter((item) => item.intent === 'ticari')
  },
  {
    title: 'Lokal Anahtar Kelimeler',
    intent: 'lokal' as const,
    items: keywordEntries.filter((item) => item.intent === 'lokal')
  },
  {
    title: 'Bilgi Amaçlı Anahtar Kelimeler',
    intent: 'bilgi' as const,
    items: keywordEntries.filter((item) => item.intent === 'bilgi')
  }
];

export const keywordString = keywordEntries.map((item) => item.keyword).join(', ');

export const buildKeywordSet = (...groups: Array<Array<string | undefined | null>>) => {
  const seen = new Set<string>();

  for (const group of groups) {
    for (const item of group) {
      const normalized = String(item || '').trim();

      if (!normalized) {
        continue;
      }

      seen.add(normalized);
    }
  }

  return Array.from(seen);
};