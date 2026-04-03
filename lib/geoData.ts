export type NeighborhoodItem = {
  slug: string;
  name: string;
  summary: string;
};

export type DistrictSeoItem = {
  slug: string;
  name: string;
  summary: string;
  highlights: string[];
  neighborhoods: NeighborhoodItem[];
};

type TurkeyNeighbourhoodsPackage = {
  getDistrictsAndNeighbourhoodsByCityCode: (cityCode: number) => Record<string, string[]>;
};

const turkeyNeighbourhoods = require('turkey-neighbourhoods') as TurkeyNeighbourhoodsPackage;

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

const isPlaceholderNeighborhood = (value: string) => {
  const normalized = value.trim().toLocaleLowerCase('tr-TR');

  return normalized === 'örnek mah' || normalized === 'ornek mah' || normalized.startsWith('örnek ') || normalized.startsWith('ornek ');
};

const neighborhood = (name: string, district: string): NeighborhoodItem => ({
  slug: slugify(name),
  name,
  summary: `${name} mahallesi ve ${district} çevresinde evrak, paket, express ve aynı gün kurye ihtiyaçları için lokal teslimat odaklı sayfa.`
});

const district = (name: string, summary: string, highlights: string[], neighborhoods: string[]): DistrictSeoItem => ({
  slug: slugify(name),
  name,
  summary,
  highlights,
  neighborhoods: neighborhoods.map((item) => neighborhood(item, name))
});

const manualDistricts: DistrictSeoItem[] = [
  district('Adalar', 'Adalar içinde planlı pickup ve vapur bağlantılı teslim senaryoları için özel rota kurgusu.', ['Büyükada, Heybeliada ve Kınalıada teslimleri', 'Özel evrak ve küçük paket akışı', 'Planlı saatli teslimat ihtiyacı'], ['Büyükada', 'Heybeliada', 'Kınalıada']),
  district('Arnavutköy', 'Arnavutköy ve havalimanı aksında uzun mesafeli İstanbul içi kurye planları.', ['Havalimanı çevresi teslimatları', 'Avrupa Yakası uç bölge planlaması', 'Parça ve koli taşımaları'], ['Hadımköy', 'Bolluca', 'Taşoluk']),
  district('Ataşehir', 'Finans merkezi çevresinde kritik evrak ve hızlı kurye operasyonları.', ['Plaza teslimleri', 'VIP ve express ihtiyaçlar', 'Yoğun saatlerde öncelikli çıkış'], ['İçerenköy', 'Kayışdağı', 'Küçükbakkalköy']),
  district('Avcılar', 'Avcılar ve üniversite hattında bireysel ve kurumsal kurye talepleri için güçlü saha erişimi.', ['Ambarlı ve deniz limanı bağlantıları', 'Öğrenci ve evrak taşımaları', 'Batı aksı teslimatları'], ['Ambarlı', 'Denizköşkler', 'Cihangir']),
  district('Bağcılar', 'Bağcılar ticari bölgelerinde hızlı pickup ve yoğun kurye dağıtım ihtiyaçlarına uygun yapı.', ['Merkez ve Güneşli çıkışları', 'Tekstil ve parça teslimleri', 'Yoğun trafik saatlerine uygun planlama'], ['Güneşli', 'Mahmutbey', 'Yüzyıl']),
  district('Bahçelievler', 'Bahçelievler ve çevresinde şehir içi kurye, evrak ve medikal teslimat ağı.', ['Yenibosna iş merkezi bağlantıları', 'Hastane ve klinik çıkışları', 'Aynı gün teslimat senaryoları'], ['Yenibosna', 'Şirinevler', 'Soğanlı']),
  district('Bakırköy', 'Bakırköy ve çevresinde medikal, evrak ve butik teslimat ihtiyaçları için uygun akış.', ['Klinik ve ofis teslimleri', 'Ataköy bağlantılı rotalar', 'Aynı gün teslim odaklı hizmet'], ['Ataköy', 'Yeşilköy', 'Osmaniye']),
  district('Başakşehir', 'Başakşehir ve İkitelli organize bölgelerinde kurumsal dağıtım ve parça kurye ihtiyacı için uygun yapı.', ['Sanayi ve depo çıkışları', 'Kurumsal toplu teslimler', 'Geniş araç ve motorlu kurye kombinasyonu'], ['İkitelli', 'Kayaşehir', 'Bahçeşehir']),
  district('Bayrampaşa', 'Bayrampaşa çevresinde lojistik, sanayi ve şehir içi dağıtım rotaları için merkezi konum avantajı.', ['Otogar çevresi bağlantıları', 'Sanayi teslimleri', 'Merkezi Avrupa Yakası erişimi'], ['Kocatepe', 'Yıldırım', 'Altıntepsi']),
  district('Beşiktaş', 'Levent, Etiler ve Zincirlikuyu çevresinde yoğun kurumsal kurye ihtiyacına uygun yapı.', ['Plaza ve hukuk ofisi teslimleri', 'VIP kurye talepleri', 'Trafik yoğunluğuna göre öncelikli rota'], ['Levent', 'Etiler', 'Ortaköy']),
  district('Beykoz', 'Beykoz ve Kavacık hattında Anadolu Yakası çıkışlı kurumsal ve bireysel teslim akışı.', ['Köprü bağlantılı teslimatlar', 'Beykoz içi özel kurye senaryoları', 'Kavacık ofis çıkışları'], ['Kavacık', 'Çubuklu', 'Rüzgarlıbahçe']),
  district('Beylikdüzü', 'Batı aksında yer alan firmalar için uzun mesafeli İstanbul içi teslim planı.', ['E-ticaret çıkışları', 'Parça ve paket teslimleri', 'Avrupa Yakası çapraz rota'], ['Adnan Kahveci', 'Yakuplu', 'Gürpınar']),
  district('Beyoğlu', 'Beyoğlu içinde yoğun trafik, dar sokak ve ticari bölge teslimleri için çevik kurye modeli.', ['Taksim ve Şişhane çevresi', 'Turistik ve ticari bölge teslimleri', 'Hızlı evrak akışı'], ['Taksim', 'Cihangir', 'Kasımpaşa']),
  district('Büyükçekmece', 'Büyükçekmece çevresinde uzak mesafeli pickup ve planlı teslimat ihtiyaçları için optimize rota.', ['Uzun mesafeli aynı gün teslimatlar', 'Batı koridoru erişimi', 'Araçlı kurye ihtiyaçları'], ['Mimaroba', 'Alkent 2000', 'Kumburgaz']),
  district('Çatalca', 'Çatalca ve çevre bölgelerde planlı pickup ile uzak mesafe teslimat gerektiren operasyonlar.', ['Kırsal ve geniş saha planlaması', 'Araçlı kurye ihtiyacı', 'Önceden planlanan kurumsal çıkışlar'], ['Merkez', 'Subaşı', 'Çiftlikköy']),
  district('Çekmeköy', 'Çekmeköy çevresinde Anadolu Yakası dağıtım ve mahalle bazlı hızlı teslimat ağı.', ['Orman bölgesi çevresi rota planı', 'Konut yoğunluklu teslimatlar', 'Anadolu Yakası iç dağıtım'], ['Taşdelen', 'Madenler', 'Alemdağ']),
  district('Esenler', 'Esenler içinde şehir içi kurye, parça ve ticari teslimatlar için merkezi bağlantı avantajı.', ['Otogar ve çevre sanayi hattı', 'Merkezi geçiş kolaylığı', 'Küçük paket ve evrak teslimleri'], ['Menderes', 'Tuna', 'Nine Hatun']),
  district('Esenyurt', 'Esenyurt ve çevresinde yüksek hacimli e-ticaret ve paket kurye ihtiyaçları için güçlü saha yapısı.', ['Depo ve toplu teslimat çıkışları', 'Uzak mesafe şehir içi planlama', 'Geniş hacimli teslimatlar'], ['Cumhuriyet', 'Saadetdere', 'Mehterçeşme']),
  district('Eyüpsultan', 'Eyüpsultan ve Alibeyköy hattında kurumsal, lojistik ve hızlı şehir içi teslim operasyonu.', ['Alibeyköy merkezi rotalar', 'İşletme ve ofis teslimleri', 'Geniş Avrupa Yakası bağlantısı'], ['Alibeyköy', 'Göktürk', 'Kemerburgaz']),
  district('Fatih', 'Tarihi yarımada ve Eminönü hattında dar sokak ve yoğun trafik odaklı çevik kurye modeli.', ['Ticari bölge teslimleri', 'Kapıdan kapıya hızlı çözüm', 'Yoğun lokasyonda rota uzmanlığı'], ['Aksaray', 'Eminönü', 'Sultanahmet']),
  district('Gaziosmanpaşa', 'Gaziosmanpaşa bölgesinde ticari alanlar ve konut yoğunluğu için dengeli kurye akışı.', ['Hızlı pickup noktaları', 'Evrak ve küçük paket teslimleri', 'Avrupa Yakası geçiş kolaylığı'], ['Karadeniz', 'Merkez', 'Küçükköy']),
  district('Güngören', 'Güngören ve tekstil hattında numune, paket ve butik teslimat ihtiyaçları için uygun yapı.', ['Tekstil işletmeleri', 'Küçük paket taşımaları', 'Merter bağlantılı rota'], ['Merter', 'Sanayi', 'Haznedar']),
  district('Kadıköy', 'Kadıköy içinde hızlı pickup ve Avrupa Yakası geçişli teslimat senaryoları.', ['Moda, Kozyatağı, Göztepe çıkışları', 'Evrak ve e-ticaret teslimleri', 'Anadolu Yakası odaklı hızlı rota'], ['Moda', 'Kozyatağı', 'Fenerbahçe']),
  district('Kağıthane', 'Kağıthane ve ofis bölgelerinde express kurye, teknik servis ve parça teslimleri için yoğun talep odaklı yapı.', ['Ofis ve ajans teslimleri', 'Merkezi konum avantajı', 'Levent ve Şişli bağlantısı'], ['Seyrantepe', 'Çağlayan', 'Hamidiye']),
  district('Kartal', 'Kartal ve sanayi çevresinde parça, evrak ve teknik servis teslimatları için uygun saha ağı.', ['Anadolu Yakası sanayi çıkışları', 'Hızlı parça taşıma', 'Tuzla ve Pendik bağlantıları'], ['Soğanlık', 'Yakacık', 'Cevizli']),
  district('Küçükçekmece', 'Küçükçekmece ve Sefaköy hattında şehir içi dağıtım, evrak ve butik gönderi akışı.', ['Göl çevresi yoğun konut teslimleri', 'Sefaköy ticari bölgesi', 'Havalimanı hattı bağlantısı'], ['Sefaköy', 'Halkalı', 'Atakent']),
  district('Maltepe', 'Maltepe ve Kartal hattında Anadolu Yakası teslim ağı için optimize rota.', ['Hızlı şehir içi kurye', 'Numune ve evrak taşıma', 'Aynı gün çıkış senaryoları'], ['Altayçeşme', 'İdealtepe', 'Cevizli']),
  district('Pendik', 'Pendik, Tuzla ve çevresinde parça, medikal ve e-ticaret gönderilerine uygun operasyon.', ['Sanayi ve lojistik hattı', 'Uzak mesafe planlama', 'Anadolu Yakası dağıtım ağı'], ['Kurtköy', 'Yenişehir', 'Kaynarca']),
  district('Sancaktepe', 'Sancaktepe bölgesinde geniş konut alanları ve sanayi noktaları için esnek dağıtım modeli.', ['Anadolu Yakası iç rota dağılımı', 'Parça ve evrak akışı', 'Konut ve işyeri teslim dengesi'], ['Samandıra', 'Sarıgazi', 'Yenidoğan']),
  district('Sarıyer', 'Maslak ve çevresinde kurumsal yoğunluk için planlanan hızlı kurye akışı.', ['Maslak ofis teslimleri', 'Banka ve sözleşme evrakı', 'Kurumsal müşteri ağırlıklı talepler'], ['Maslak', 'Tarabya', 'İstinye']),
  district('Silivri', 'Silivri ve çevresinde uzak mesafeli teslimat ve planlı çıkış gerektiren kurye ihtiyaçları için yapı.', ['Uzun menzil teslim planı', 'Araçlı kurye ağırlığı', 'Batı hattı dağıtım modeli'], ['Alibey', 'Selimpaşa', 'Mimarsinan']),
  district('Şişli', 'Mecidiyeköy, Osmanbey ve Bomonti çevresinde express kurye ağırlıklı operasyon.', ['Tekstil ve showroom gönderileri', 'Evrak ve numune taşımaları', 'Merkezi lokasyon avantajı'], ['Mecidiyeköy', 'Osmanbey', 'Bomonti']),
  district('Sultanbeyli', 'Sultanbeyli ve çevresinde Anadolu Yakası iç dağıtım ve uzun mesafe geçişleri için uyumlu kurye akışı.', ['Sanayi ve konut dengesi', 'Uzak mesafe planlama', 'Parça teslimleri'], ['Adil', 'Mecidiye', 'Battalgazi']),
  district('Sultangazi', 'Sultangazi bölgesinde mahalle bazlı hızlı pickup ve şehir içi teslim çözümleri.', ['Yoğun konut alanı teslimleri', 'Evrak ve küçük paket ihtiyaçları', 'Gaziosmanpaşa ve Başakşehir bağlantısı'], ['Cebeci', '50. Yıl', 'Uğur Mumcu']),
  district('Tuzla', 'Tuzla sanayi ve tersane aksında teknik servis, yedek parça ve medikal teslimatlar için uygun yapı.', ['Organize sanayi teslimleri', 'Parça ve ekipman taşımaları', 'Pendik bağlantılı rota'], ['Aydınlı', 'İçmeler', 'Orhanlı']),
  district('Ümraniye', 'Ümraniye merkezli ticari bölgelerde düzenli şehir içi kurye hizmeti.', ['Günlük kurumsal teslimatlar', 'Teknik servis ve parça gönderileri', 'Yakın ilçe bağlantıları'], ['Dudullu', 'Yamanevler', 'Ihlamurkuyu']),
  district('Üsküdar', 'Üsküdar merkezli Anadolu Yakası dağıtım ve köprü geçişli teslimat planları.', ['Hızlı çıkış noktaları', 'Resmi evrak teslimleri', 'Bireysel ve kurumsal talep dengesi'], ['Altunizade', 'Çengelköy', 'Acıbadem']),
  district('Zeytinburnu', 'Zeytinburnu ve Merter hattında tekstil, parça ve ticari teslimat ihtiyaçları için hızlı kurye altyapısı.', ['Tekstil ve showroom akışı', 'Merkezi Avrupa Yakası bağlantısı', 'Küçük paket ve numune teslimleri'], ['Merter', 'Kazlıçeşme', 'Seyitnizam'])
];

const manualDistrictMap = Object.fromEntries(
  manualDistricts.map((item) => [item.name, { summary: item.summary, highlights: item.highlights }])
);

const rawIstanbulDistricts = turkeyNeighbourhoods.getDistrictsAndNeighbourhoodsByCityCode(34);

export const districts: DistrictSeoItem[] = Object.entries(rawIstanbulDistricts)
  .map(([name, neighborhoods]) => {
    const manual = manualDistrictMap[name] || {
      summary: `${name} bölgesinde şehir içi kurye, express teslimat ve aynı gün gönderiler için lokal SEO odaklı teslimat sayfası.`,
      highlights: ['İlçe bazlı hızlı pickup', 'Evrak ve paket teslim akışı', 'Telefon ve WhatsApp ile hızlı teklif']
    };

    const filteredNeighborhoods = neighborhoods.filter((item) => !isPlaceholderNeighborhood(item));

    return {
      slug: slugify(name),
      name,
      summary: manual.summary,
      highlights: manual.highlights,
      neighborhoods: filteredNeighborhoods.map((item) => neighborhood(item, name))
    };
  })
  .sort((left, right) => left.name.localeCompare(right.name, 'tr'));

export const getDistrictBySlug = (slug: string) => districts.find((item) => item.slug === slug);

export const getNeighborhoodBySlug = (districtSlug: string, neighborhoodSlug: string) => {
  const districtItem = getDistrictBySlug(districtSlug);
  const neighborhoodItem = districtItem?.neighborhoods.find((item) => item.slug === neighborhoodSlug);

  if (!districtItem || !neighborhoodItem) {
    return null;
  }

  return {
    district: districtItem,
    neighborhood: neighborhoodItem
  };
};