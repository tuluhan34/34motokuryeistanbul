export type ServiceItem = {
  slug: string;
  name: string;
  short: string;
  hero: string;
  intent: string[];
  bullets: string[];
  faqs: Array<{ question: string; answer: string }>;
};

export type DistrictItem = {
  slug: string;
  name: string;
  summary: string;
  highlights: string[];
};

export const siteConfig = {
  brand: '34 Moto Kurye İstanbul',
  domain: 'https://www.34motokuryeistanbul.com',
  phoneDisplay: '0530 321 90 04',
  phoneHref: 'tel:+905303219004',
  whatsappHref: 'https://wa.me/905303219004?text=Merhaba%2C%20gonderim%20detayini%20paylasiyorum.%20Hemen%20fiyat%20almak%20istiyorum.',
  city: 'İstanbul',
  email: 'bilgi@34kurye.com',
  mapEmbedUrl: 'https://storage.googleapis.com/maps-solutions-uqtp8x8eyn/commutes/oika/commutes.html'
};

export const coreKeywords = [
  'moto kurye istanbul',
  'acil kurye istanbul',
  'hemen kurye',
  'en hızlı kurye',
  'express kurye istanbul',
  'aynı gün kurye istanbul',
  'gece kurye istanbul',
  'gece açık kurye',
  'vip kurye istanbul',
  'istanbul kurye',
  'şehir içi kurye',
  'kapıdan kapıya kurye',
  'evrak kurye',
  'hızlı kurye istanbul',
  'özel kurye',
  'güvenilir kurye',
  'arabalı kurye istanbul',
  'aynı gün teslim kurye',
  '7/24 kurye istanbul',
  'fiyat hesapla kurye',
  'e-ticaret kurye',
  'medikal kurye'
];

export const services: ServiceItem[] = [
  {
    slug: 'acil-kurye',
    name: 'Acil Kurye',
    short: 'Dakikalar içinde kurye yönlendirme ve öncelikli teslim akışı.',
    hero: 'Acil evrak, paket ve kurumsal gönderiler için İstanbul genelinde hızlı yönlendirme sağlıyoruz.',
    intent: ['acil kurye istanbul', 'hızlı kurye', 'anında kurye', 'jet kurye'],
    bullets: ['15-30 dakika içinde kurye atama hedefi', 'Kurumsal evrak ve numune taşımaya uygun süreç', 'WhatsApp üzerinden net fiyat ve teslim teyidi'],
    faqs: [
      { question: 'Acil kurye ne kadar sürede çıkar?', answer: 'Yoğunluk ve lokasyona göre değişir; hedefimiz kısa sürede kurye yönlendirmek ve müşteriyi anlık bilgilendirmektir.' },
      { question: 'Acil kurye ile hangi gönderiler taşınır?', answer: 'Evrak, küçük paket, medikal numune, yedek parça ve e-ticaret çıkışları öncelikli olarak planlanır.' }
    ]
  },
  {
    slug: 'express-kurye',
    name: 'Express Kurye',
    short: 'Zaman kritik teslimatlar için kesintisiz rota ve takip odaklı servis.',
    hero: 'Express kurye hizmeti ile operasyonu bekletmeden kritik teslimatları gün içinde sonuçlandırın.',
    intent: ['express kurye istanbul', 'ultrahızlı kurye', 'özel kurye'],
    bullets: ['Direkt rota planlama', 'Öncelikli pickup ve teslimat', 'Kurumsal operasyonlar için düzenli akış'],
    faqs: [
      { question: 'Express kurye ile standart kurye farkı nedir?', answer: 'Express modelde teslimat zincirine başka durak eklenmeden öncelikli rota çalıştırılır.' },
      { question: 'Kurumsal firmalar için uygun mu?', answer: 'Evet. Evrak, ihale dosyası, banka evrakı ve operasyonel gönderiler için sık tercih edilir.' }
    ]
  },
  {
    slug: 'gece-kurye',
    name: 'Gece Kurye',
    short: 'Mesai dışı teslimatlar için 7/24 ulaşılabilir gece operasyonu.',
    hero: 'Gece express kurye ihtiyacı olan işletmeler için İstanbul içinde planlı ve güvenli teslimat akışı kuruyoruz.',
    intent: ['gece kurye istanbul', '7/24 kurye', 'mesai dışı kurye'],
    bullets: ['Mesai dışı teslimat planı', 'Gece operasyonları için net iletişim', 'Evrak ve küçük paket taşımaya uygun yapı'],
    faqs: [
      { question: 'Gece kurye hangi saatlerde çalışır?', answer: 'İş modeline göre gece saatlerinde de teslimat planı oluşturulur ve uygun operasyon ekibi devreye girer.' },
      { question: 'Gece kurye güvenli mi?', answer: 'Teslim noktası doğrulaması, sürücü iletişimi ve operasyon kaydı ile süreç kontrollü yürütülür.' }
    ]
  },
  {
    slug: 'vip-kurye',
    name: 'VIP Kurye',
    short: 'Tek gönderiye odaklı, gizlilik ve hız odaklı kurye modeli.',
    hero: 'Önemli evrak, sözleşme, pasaport ve hassas gönderiler için VIP kurye planı sunuyoruz.',
    intent: ['vip kurye istanbul', 'özel kurye', 'güvenilir kurye'],
    bullets: ['Tek müşteri odaklı rota', 'Gizlilik ve dikkat gerektiren gönderiler', 'Kurumsal yöneticiler ve hukuk ofisleri için uygun'],
    faqs: [
      { question: 'VIP kurye kimler için uygundur?', answer: 'Hukuk büroları, finans ekipleri, konsolosluk süreçleri ve zaman kritik özel teslimatlar için idealdir.' },
      { question: 'VIP kurye takip edilebilir mi?', answer: 'Teslim süreci operasyon ekibi üzerinden anlık bilgilendirme ile yönetilir.' }
    ]
  },
  {
    slug: 'evrak-kurye',
    name: 'Evrak Kurye',
    short: 'Noter, banka, ihale ve resmi evrak teslimatlarında süreç odaklı hizmet.',
    hero: 'Resmi ve kurumsal evrak akışında teslim doğruluğu, zamanlama ve takip en kritik başlıklardır.',
    intent: ['evrak kurye', 'noter evrak kurye', 'banka evrak kurye', 'sözleşme kurye'],
    bullets: ['Teslim belgesi odaklı süreç', 'Kurumsal evrak akışına uygun planlama', 'Gün içi hızlı yönlendirme'],
    faqs: [
      { question: 'Evrak kurye için en önemli kriter nedir?', answer: 'Doğru teslim kişisi, teslim zamanı ve belge güvenliğinin birlikte yönetilmesidir.' },
      { question: 'Aynı gün resmi evrak teslimi olur mu?', answer: 'Lokasyon ve saat uygunluğuna göre aynı gün teslim planı yapılabilir.' }
    ]
  },
  {
    slug: 'medikal-kurye',
    name: 'Medikal Kurye',
    short: 'Hastane, klinik ve laboratuvar gönderileri için hassas operasyon planı.',
    hero: 'Medikal kurye hizmetinde hız kadar prosedür, iletişim ve teslim doğruluğu da kritik önemdedir.',
    intent: ['medikal kurye', 'ilaç kurye', 'laboratuvar kurye', 'numune kurye'],
    bullets: ['Sağlık kuruluşları için düzenli rota imkanı', 'Hassas paketleme uyarılarına uygun akış', 'Anlık bilgi paylaşımı'],
    faqs: [
      { question: 'Medikal kurye hizmeti kimler için?', answer: 'Klinikler, laboratuvarlar, eczaneler ve sağlık tedarik zincirine dahil işletmeler için uygundur.' },
      { question: 'Numune taşımada nasıl süreç işler?', answer: 'Operasyon, gönderi hassasiyetine göre planlanır; teslim süresi ve iletişim baştan netleştirilir.' }
    ]
  },
  {
    slug: 'e-ticaret-kurye',
    name: 'E-Ticaret Kurye',
    short: 'Aynı gün teslimat beklentisi olan markalar için şehir içi dağıtım modeli.',
    hero: 'E-ticaret siparişlerinde hızlı çıkış, müşteri memnuniyeti ve teslim şeffaflığı için özel şehir içi kurye kurgusu kuruyoruz.',
    intent: ['e-ticaret kurye', 'online sipariş kurye', 'aynı gün teslim kurye istanbul'],
    bullets: ['Marka bazlı günlük operasyon desteği', 'Aynı gün teslim senaryoları', 'Müşteri iletişimine uygun teslim akışı'],
    faqs: [
      { question: 'E-ticaret için aynı gün teslim yapılır mı?', answer: 'İstanbul içi yoğun bölgelerde aynı gün teslim senaryosu operasyon hacmine göre planlanabilir.' },
      { question: 'Küçük işletmeler de faydalanabilir mi?', answer: 'Evet. Butik markalar ve büyüme aşamasındaki e-ticaret firmaları için uygundur.' }
    ]
  },
  {
    slug: 'sehir-ici-kurye',
    name: 'Şehir İçi Kurye',
    short: 'Avrupa ve Anadolu Yakası arasında düzenli, esnek ve lokal teslimat modeli.',
    hero: 'İstanbul şehir içi kurye hizmeti ile günlük kurumsal ve bireysel gönderileri daha hızlı yönetin.',
    intent: ['şehir içi kurye', 'istanbul kurye', 'istanbul avrupa yakası kurye', 'istanbul anadolu yakası kurye'],
    bullets: ['İlçe bazlı hızlı planlama', 'Yoğun lokasyonlarda düzenli teslim akışı', 'Telefon ve WhatsApp ile kolay teklif'],
    faqs: [
      { question: 'Şehir içi kurye hangi bölgeleri kapsar?', answer: 'İstanbul merkezli taleplerde Avrupa ve Anadolu Yakası dahil ilçe bazlı planlama yapılır.' },
      { question: 'Bireysel kullanıcılar da hizmet alabilir mi?', answer: 'Evet. Evrak, hediye, küçük paket ve kişisel teslimatlar için uygundur.' }
    ]
  },
  {
    slug: 'arabalı-kurye',
    name: 'Arabalı Kurye',
    short: 'Büyük paket, koli ve çoklu gönderiler için araç destekli İstanbul içi teslimat.',
    hero: 'Arabalı kurye hizmeti, motorlu taşımaya uygun olmayan hacimli veya çoklu gönderiler için güvenli şehir içi çözüm sunar.',
    intent: ['arabalı kurye istanbul', 'büyük paket kurye', 'koli kurye', 'kurye fiyat hesapla'],
    bullets: ['Hacimli paketler için uygun taşıma modeli', 'Kurumsal toplu teslimat senaryoları', 'Avrupa ve Anadolu Yakası arasında planlı araç operasyonu'],
    faqs: [
      { question: 'Arabalı kurye ne zaman gerekir?', answer: 'Büyük koli, kırılabilir malzeme, çoklu sipariş veya motorla taşınması uygun olmayan gönderilerde tercih edilir.' },
      { question: 'Arabalı kurye aynı gün teslim yapar mı?', answer: 'Bölge, trafik ve operasyon planına göre aynı gün teslimat senaryosu oluşturulabilir.' }
    ]
  },
  {
    slug: 'ayni-gun-kurye',
    name: 'Aynı Gün Kurye',
    short: 'Gün içinde teslim edilmesi gereken gönderiler için hız ve rota optimizasyonu.',
    hero: 'Aynı gün kurye hizmeti, İstanbul içinde gün bitmeden teslim edilmesi gereken gönderiler için net planlama sağlar.',
    intent: ['aynı gün kurye istanbul', 'aynı gün teslim kurye', 'hızlı kurye istanbul', 'kurye firması'],
    bullets: ['Aynı gün teslim odaklı operasyon', 'E-ticaret, evrak ve özel gönderiler için uygun', 'Telefon, WhatsApp ve teklif formu ile hızlı başlatma'],
    faqs: [
      { question: 'Aynı gün kurye hangi gönderiler için uygundur?', answer: 'Evrak, küçük paket, e-ticaret siparişi, sözleşme ve acil kurumsal gönderiler için uygundur.' },
      { question: 'Teslim süresi garanti edilir mi?', answer: 'Net süre; pickup noktası, teslim noktası, trafik ve saat bilgisine göre operasyon başlangıcında belirlenir.' }
    ]
  }
];

export const districts: DistrictItem[] = [
  { slug: 'kadikoy', name: 'Kadıköy', summary: 'Kadıköy içinde hızlı pickup ve Avrupa Yakası geçişli teslimat senaryoları.', highlights: ['Moda, Kozyatağı, Göztepe çıkışları', 'Evrak ve e-ticaret teslimleri', 'Anadolu Yakası odaklı hızlı rota'] },
  { slug: 'besiktas', name: 'Beşiktaş', summary: 'Levent, Etiler ve Zincirlikuyu çevresinde yoğun kurumsal kurye ihtiyacına uygun yapı.', highlights: ['Plaza ve hukuk ofisi teslimleri', 'VIP kurye talepleri', 'Trafik yoğunluğuna göre öncelikli rota'] },
  { slug: 'sisli', name: 'Şişli', summary: 'Mecidiyeköy, Osmanbey ve Bomonti çevresinde express kurye ağırlıklı operasyon.', highlights: ['Tekstil ve showroom gönderileri', 'Evrak ve numune taşımaları', 'Merkezi lokasyon avantajı'] },
  { slug: 'uskudar', name: 'Üsküdar', summary: 'Üsküdar merkezli Anadolu Yakası dağıtım ve köprü geçişli teslimat planları.', highlights: ['Hızlı çıkış noktaları', 'Resmi evrak teslimleri', 'Bireysel ve kurumsal talep dengesi'] },
  { slug: 'bakirkoy', name: 'Bakırköy', summary: 'Bakırköy ve çevresinde medikal, evrak ve butik teslimat ihtiyaçları için uygun akış.', highlights: ['Klinik ve ofis teslimleri', 'Ataköy bağlantılı rotalar', 'Aynı gün teslim odaklı hizmet'] },
  { slug: 'beylikduzu', name: 'Beylikdüzü', summary: 'Batı aksında yer alan firmalar için uzun mesafeli İstanbul içi teslim planı.', highlights: ['E-ticaret çıkışları', 'Parça ve paket teslimleri', 'Avrupa Yakası çapraz rota'] },
  { slug: 'sariyer', name: 'Sarıyer', summary: 'Maslak ve çevresinde kurumsal yoğunluk için planlanan hızlı kurye akışı.', highlights: ['Maslak ofis teslimleri', 'Banka ve sözleşme evrakı', 'Kurumsal müşteri ağırlıklı talepler'] },
  { slug: 'maltepe', name: 'Maltepe', summary: 'Maltepe ve Kartal hattında Anadolu Yakası teslim ağı için optimize rota.', highlights: ['Hızlı şehir içi kurye', 'Numune ve evrak taşıma', 'Aynı gün çıkış senaryoları'] },
  { slug: 'atasehir', name: 'Ataşehir', summary: 'Finans merkezi çevresinde kritik evrak ve hızlı kurye operasyonları.', highlights: ['Plaza teslimleri', 'VIP ve express ihtiyaçlar', 'Yoğun saatlerde öncelikli çıkış'] },
  { slug: 'fatih', name: 'Fatih', summary: 'Tarihi yarımada ve Eminönü hattında dar sokak ve yoğun trafik odaklı çevik kurye modeli.', highlights: ['Ticari bölge teslimleri', 'Kapıdan kapıya hızlı çözüm', 'Yoğun lokasyonda rota uzmanlığı'] },
  { slug: 'pendik', name: 'Pendik', summary: 'Pendik, Tuzla ve çevresinde parça, medikal ve e-ticaret gönderilerine uygun operasyon.', highlights: ['Sanayi ve lojistik hattı', 'Uzak mesafe planlama', 'Anadolu Yakası dağıtım ağı'] },
  { slug: 'umraniye', name: 'Ümraniye', summary: 'Ümraniye merkezli ticari bölgelerde düzenli şehir içi kurye hizmeti.', highlights: ['Günlük kurumsal teslimatlar', 'Teknik servis ve parça gönderileri', 'Yakın ilçe bağlantıları'] }
];

export const homepageFaqs = [
  {
    question: 'İstanbul içinde aynı gün kurye hizmeti veriyor musunuz?',
    answer: 'Evet. Lokasyon, trafik ve operasyon yoğunluğuna göre aynı gün teslim odaklı planlama yapılıyor.'
  },
  {
    question: 'Fiyat teklifi nasıl alabilirim?',
    answer: 'Telefon veya WhatsApp üzerinden pickup noktası, teslim noktası ve gönderi türünü ileterek hızlı teklif alabilirsiniz.'
  },
  {
    question: 'Hangi sektörlere hizmet veriyorsunuz?',
    answer: 'Hukuk, sağlık, e-ticaret, tekstil, teknik servis, restoran ve kurumsal ofis operasyonlarına uygun senaryolar sunuluyor.'
  },
  {
    question: 'Gece kurye talebi oluşturabilir miyim?',
    answer: 'Mesai dışı kurye ihtiyaçları için gece operasyon planı oluşturulabilir. Detaylar talebin saatine ve bölgesine göre netleştirilir.'
  }
];

export const valuePoints = [
  '15+ yillik saha tecrubesi ve hizli operasyon yonetimi',
  'Telefon ve WhatsApp uzerinden hizli erisim ve net bilgilendirme',
  'Acil, express, gece, VIP ve arabalı kurye secenekleri',
  'Istanbul genelinde ilce ve mahalle bazli hizmet kapsami',
  'Evrak, paket, numune ve kurumsal teslimatlar icin uygun surec',
  'Fiyat, surec ve teslimat adimlarini netlestiren basit iletisim akisi',
  'Sektore gore uyarlanabilen esnek kurye planlamasi',
  'Kurumsal guven, surec netligi ve sik sorulan sorular destegi'
];

export const competitorPatterns = [
  'Rakipler başlıklarında doğrudan anahtar kelime ve telefon numarasını birlikte kullanıyor.',
  '7/24, aynı gün teslim, acil çıkış ve fiyat alma çağrıları sık tekrar ediyor.',
  'Arabalı kurye, e-ticaret dağıtımı ve ilçe kapsaması gibi alt hizmet kümeleri ayrı ayrı işleniyor.',
  'Google İşletme görünürlüğü, harita sonuçları ve işletme telefonu karar anında öne çıkıyor.',
  'Rakipler blog, referans, sık sorulan sorular ve hizmet süreci anlatılarıyla güven bariyerini düşürüyor.',
  'Ataşehir, Kağıthane, Şişli, Kartal ve Eyüpsultan gibi yoğun bölgeler için ayrı lokal içerikler kullanılıyor.',
  'Bing Copilot ve benzeri AI yüzeylerinde açık hizmet tanımı, sık güncellenen içerik ve güçlü yerel sinyaller avantaj sağlıyor.'
];