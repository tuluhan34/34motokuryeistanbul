export type CompetitorSnapshot = {
  name: string;
  positioning: string;
  repeatedFeatures: string[];
};

export type ReviewHighlight = {
  author: string;
  role: string;
  text: string;
  rating: number;
};

export type CompetitorAudit = {
  name: string;
  domain: string;
  siteSignals: string[];
  gbpSignals: string[];
  standoutFeatures: string[];
};

export const competitorSnapshots: CompetitorSnapshot[] = [
  {
    name: 'Hit Kurye',
    positioning: 'Hız ve hızlı çağrı mesajını öne çıkaran şehir içi kurye markası.',
    repeatedFeatures: ['telefon görünürlüğü', 'hızlı teklif', 'acil teslimat vurgusu']
  },
  {
    name: 'Ataşehir Kurye',
    positioning: 'Lokal ilçe hakimiyeti ve plaza çıkışlı teslimatlar.',
    repeatedFeatures: ['ilçe bazlı başlık', 'plaza pickup', 'aynı gün teslimat']
  },
  {
    name: 'Son Kurye',
    positioning: 'Son dakika teslimat ve express kurye odaklı görünürlük.',
    repeatedFeatures: ['son dakika kurye', 'tek tık iletişim', 'hızlı rota']
  },
  {
    name: 'Senin Kurye',
    positioning: 'Güven ve müşteri memnuniyeti dilini öne çıkaran geniş kapsama iletişimi.',
    repeatedFeatures: ['güvenilir teslimat', 'İstanbul geneli hizmet', 'müşteri memnuniyeti mesajı']
  },
  {
    name: 'Size Bir Kurye',
    positioning: 'Kolay çağrı ve adrese kurye akışı odaklı kurye söylemi.',
    repeatedFeatures: ['adrese kurye', 'basit sipariş akışı', 'telefon CTA']
  },
  {
    name: 'Bugün Kurye',
    positioning: 'Aynı gün teslim edilecek gönderilere odaklanan hız dili.',
    repeatedFeatures: ['bugün teslimat', 'hızlı pickup', 'anında fiyat']
  },
  {
    name: 'Akıllı Teslimat',
    positioning: 'Teknoloji ve planlı operasyon hissi veren teslimat söylemi.',
    repeatedFeatures: ['teslimat takibi', 'kurumsal akış', 'operasyon planı']
  },
  {
    name: 'İstanbul Motor Kurye',
    positioning: 'Ana anahtar kelimeyi domainde ve başlıklarda agresif kullanan klasik SEO yapısı.',
    repeatedFeatures: ['moto kurye istanbul', 'telefon numarası görünürlüğü', 'şehirler arası kurye']
  },
  {
    name: 'Asrın Kurye',
    positioning: 'Deneyim ve köklü marka hissi üreten kurye söylemi.',
    repeatedFeatures: ['tecrübe vurgusu', 'çoklu hizmet kartları', 'iletişim görünürlüğü']
  },
  {
    name: 'Ataşehir Moto Kurye',
    positioning: 'İlçe + hizmet kelimesini tam eşleme ile kullanan lokal sayfa yapısı.',
    repeatedFeatures: ['lokal anahtar kelime', 'mahalle sinyali', 'hızlı kurye çağır']
  },
  {
    name: 'Akıncı Moto Kurye',
    positioning: 'Acil ve askeri disiplin çağrıştıran hızlı çözüm söylemi.',
    repeatedFeatures: ['acil teslim', '7/24 hizmet', 'doğrudan arama']
  },
  {
    name: 'Bio Kurye',
    positioning: 'Kurumsal ve düzenli iş akışına uygun, güven odaklı teslimat dili.',
    repeatedFeatures: ['kurumsal teslimat', 'düzenli rota', 'müşteri memnuniyeti']
  },
  {
    name: 'Adresime Kurye İstanbul',
    positioning: 'Adresten alım ve kapıya teslim kolaylığını öne çıkaran yaklaşım.',
    repeatedFeatures: ['adrese kurye', 'online sipariş', 'hızlı teslim']
  },
  {
    name: 'Jet Kurye İstanbul',
    positioning: 'Jet ve express söylemi ile hız vurgusunu domine eden yapı.',
    repeatedFeatures: ['jet kurye', '30 dakikada pickup', 'öncelikli rota']
  },
  {
    name: 'Gönderim Var Kurye',
    positioning: 'Gönderi niyeti yüksek kullanıcıyı hızla aksiyona taşıyan kısa CTA dili.',
    repeatedFeatures: ['gönderim var', 'hemen kurye çağır', 'tek mesajla teklif']
  }
];

export const competitorAudits: CompetitorAudit[] = [
  {
    name: 'Hit Kurye',
    domain: 'hitkurye.com',
    siteSignals: ['30 dakikada teslim alınır mesajı', 'mobil uygulama indirme akışı', 'gönderi takip ve geçmiş sipariş vurgusu', 'KVKK, çerez, sözleşme ve blog sayfaları'],
    gbpSignals: ['Ataşehir merkezli açık adres', 'çift telefon görünürlüğü', 'Instagram ve LinkedIn bağları'],
    standoutFeatures: ['uygulama hissi', 'güvenli ödeme dili', 'çok araçlı filo anlatısı']
  },
  {
    name: 'Ataşehir Kurye',
    domain: 'kuryeatasehir.com.tr',
    siteSignals: ['tam eşleşme ilçe odaklı içerik', 'çok uzun Ataşehir landing metni', 'blog, yorum ve SSS desteği', 'gece, bireysel, abone ve şehirler arası hizmet sayfaları'],
    gbpSignals: ['yerel map sonucu görünürlüğü', 'ilçe odaklı telefon ve açık adres'],
    standoutFeatures: ['lokal SEO agresifliği', 'ilçe varyasyonlu landing yoğunluğu']
  },
  {
    name: 'Son Kurye',
    domain: 'sonkurye.com',
    siteSignals: ['kurye çağır sayfası', 'gidiş dönüş kurye', 'randevulu gönderim', 'gümrük kurye', 'hava kargo', 'normal express VIP için net dakika aralıkları'],
    gbpSignals: ['Küçükçekmece adresi', 'gündüz ve gece için ayrı telefon'],
    standoutFeatures: ['özel operasyon tipleri', 'geniş hizmet kartları', 'kurumsal ve hizmet bölgeleri menüsü']
  },
  {
    name: 'Senin Kuryen',
    domain: 'seninkuryen.com',
    siteSignals: ['standart, express, VIP, gece, araçlı, eczane, şehirler arası, uçak kargo, minivan, kamyonet ve otobüs kargo', 'geçmiş teslimatlar sayfası', 'hizmet noktaları listesi'],
    gbpSignals: ['7/24 telefon ve WhatsApp görünürlüğü', 'çok ilçeli hizmet ağı mesajı'],
    standoutFeatures: ['geniş hizmet kataloğu', 'çok lokasyonlu hizmet noktaları', 'memnuniyet rozetleri']
  },
  {
    name: 'Size Bi Kurye',
    domain: 'sizebikurye.com',
    siteSignals: ['teklif al sayfası', 'fiyat hesaplama modülü', 'VIP, motorlu, arabalı, uçak ve eczane kurye linkleri', 'SSS ve blog'],
    gbpSignals: ['Eyüpsultan adresi', 'WhatsApp ve GSM aynı blokta'],
    standoutFeatures: ['teklif odaklı akış', 'fiyat hesaplama görünürlüğü', 'iletişim bloklarının yoğun kullanımı']
  },
  {
    name: 'Bugün Kurye',
    domain: 'bugunkurye.com',
    siteSignals: ['anlık fiyat teklifi modülü', 'yapay zeka destekli rota optimizasyonu söylemi', 'hizmetler, bölgeler, sektörler, blog ve SSS yapısı', 'canlı takip ve sigortalı taşıma vurgusu'],
    gbpSignals: ['memnuniyet ve teslim kalitesi söylemi'],
    standoutFeatures: ['aynı gün teslim psikolojisini güçlü kullanma', 'ürünleştirilmiş kurye tipi kartları']
  },
  {
    name: 'Akıllı Teslimat',
    domain: 'dogrulanamadi',
    siteSignals: ['isim ve konumlanma üzerinden teknoloji ve takip odaklı iletişim', 'kurumsal akış vurgusu'],
    gbpSignals: ['operasyon disiplini ve planlı teslim mesajı'],
    standoutFeatures: ['teknoloji hissi', 'operasyon dili']
  },
  {
    name: 'İstanbul Motor Kurye',
    domain: 'istanbulmotokurye.com',
    siteSignals: ['moto kurye istanbul kelimesini agresif kullanma', '39 ilçe ve şehirler arası hizmet görünürlüğü', 'uzun footer lokal link ağı', 'teslim süreleri için açık dakika aralıkları'],
    gbpSignals: ['ana anahtar kelime ve telefon sinyali'],
    standoutFeatures: ['exact-match keyword yaklaşımı']
  },
  {
    name: 'Asrın Kurye',
    domain: 'asrinkurye.com',
    siteSignals: ['WhatsApp form akışı', '20 yıllık tecrübe söylemi', 'normal, express, VIP ve gece için net süre blokları', 'uçak kargo, otobüs kargo ve kurye kiralama'],
    gbpSignals: ['deneyim ve yerel güven mesajı'],
    standoutFeatures: ['tecrübe odaklı marka dili']
  },
  {
    name: 'Ataşehir Moto Kurye',
    domain: 'atasehirmotokurye.com',
    siteSignals: ['Ataşehir moto kurye tam eşleşme içerikleri', 'ayrı hizmetler, blog ve SSS yapısı', 'alt domain/partner site ağı ile çapraz destek'],
    gbpSignals: ['Ataşehir özel işletme sinyalleri'],
    standoutFeatures: ['mikro lokal eşleşme']
  },
  {
    name: 'Akıncı Moto Kurye',
    domain: 'dogrulanamadi',
    siteSignals: ['isim ve marka konumundan acil teslim ve 7/24 dili', 'doğrudan ara CTA eğilimi'],
    gbpSignals: ['aciliyet ve yakın teslim hissi'],
    standoutFeatures: ['sert hız mesajı']
  },
  {
    name: 'Bio Kurye',
    domain: 'biokurye.com',
    siteSignals: ['20+ yıl tecrübe söylemi', 'acil nöbetçi kurye ve ekspres blokları', 'yorum, referans ve çoklu iletişim bandı', 'kurumsal güven odaklı uzun metinler'],
    gbpSignals: ['düzenli iş akışı ve işletme güveni'],
    standoutFeatures: ['kurumsal tutarlılık']
  },
  {
    name: 'Adresime Kurye İstanbul',
    domain: 'dogrulanamadi',
    siteSignals: ['adresten alım ve kapıya teslim söylemi', 'online sipariş vurgusu'],
    gbpSignals: ['evden alım kolaylığı mesajı'],
    standoutFeatures: ['kapıdan kapıya karar kolaylaştırma']
  },
  {
    name: 'Jet Kurye İstanbul',
    domain: 'jetkuryeistanbul.com',
    siteSignals: ['jet ve express kavramlarını domine etme', '30 dakika pickup söylemi', '2 adresli teslimat ve kurumsal anlaşmalar', '39 ilçe anahtar kelime doldurmalı görsel alt metinler'],
    gbpSignals: ['yüksek hız beklentisi'],
    standoutFeatures: ['tek vaat olarak hız']
  },
  {
    name: 'Gönderim Var Kurye',
    domain: 'dogrulanamadi',
    siteSignals: ['tek mesajla teklif', 'gönderim var diyen kullanıcıyı hızla siparişe taşıma'],
    gbpSignals: ['niyet odaklı kısa açıklamalar'],
    standoutFeatures: ['yüksek niyetli kullanıcıyı hızlı dönüştürme']
  }
];

export const competitorCommonFeatures = [
  'Açık telefon numarası ve üst bölümde sabit çağrı butonu',
  '30 dakikada pickup veya hızlı teslimat vaadi',
  'VIP, express, arabalı ve şehirler arası gibi alt hizmet kartları',
  'Açık başlangıç fiyatı veya fiyat hesapla CTA akışı',
  'İlçe bazlı lokal SEO başlıkları ve mahalle kapsaması',
  'Google değerlendirmesi, yorum veya güven puanı vurgusu',
  'Kurumsal sektörlere göre hizmet kümeleri',
  'Google İşletme açıklamasıyla uyumlu kısa hizmet metinleri',
  'Aynı gün teslimat ve gece kurye mesajı',
  'WhatsApp ile doğrudan sipariş akışı'
];

export const competitorFeatureInventory = [
  'Kurye çağır ve teklif al için ayrı dönüşüm sayfaları',
  'Fiyat hesaplama veya tahmini fiyat bandı gösterimi',
  'Motorlu, araçlı, minivan, panelvan ve kamyonet bazlı araç segmentasyonu',
  'VIP, gece, şehirler arası, uçak kargo, eczane, gümrük, gidiş dönüş ve randevulu hizmet sayfaları',
  'Hizmet bölgeleri veya ilçe bazlı lokal sayfalar',
  'Google Business, harita, telefon ve açık adres bloklarının güçlü görünürlüğü',
  'Blog, SSS, sözleşmeler ve kurumsal güven sayfaları',
  'Geçmiş teslimatlar veya operasyon örneği gösteren güven alanları',
  'Mobil uygulama veya sipariş takip hissi veren akışlar',
  'Sosyal medya ve müşteri memnuniyeti rozetleri'
];

export const missingCompetitorFeatures = [
  'Rakiplerden türetilmiş özel hizmetlerin tamamı önce açık katalog halinde görünmüyordu.',
  'Kurye çağır ve geçmiş teslimatlar için ayrı yüksek niyetli sayfalar eksikti.',
  'İlçe ve mahalle şablonlarında uzun form satış metni yeterince derin değildi.',
  'Rakip özelliklerini açıklayan görünür bir rekabet/gap analizi sayfası yoktu.',
  'GBP tarafında rakipten gelen post, yorum ve kategori stratejisi site içinde daha net çerçevelenmemişti.'
];

export const implementedAdvantageChecklist = [
  '39 ilçe ve yüzlerce mahalle için ayrı indexlenebilir landing yapısı',
  'Moto kurye, acil kurye, express kurye, gece kurye, şehirler arası kurye ve vale özel şoför için ayrı SEO sayfaları',
  'Tek sayfada arama, WhatsApp ve teklif formunu birleştiren üçlü dönüşüm akışı',
  'Google AI özetlerine uygun soru-cevap ve featured snippet blokları',
  'Rakiplerin kullandığı hız söylemine ek olarak GBP, yorum ve içerik stratejisini bir araya getiren görünürlük planı',
  'Interaktif fiyat hesaplama ve teslimat planı simülasyonu',
  'Review, FAQ, Service, LocalBusiness, CourierService ve Breadcrumb schema katmanı',
  'Hata sayfaları ve güvenli notFound akışı ile production export sertleştirmesi'
];

export const upgradedFeatureChecklist = [
  'Rakiplerde görülen eczane kurye, gümrük kurye, gidiş dönüş kurye, randevulu gönderim, uçak kargo, minivan-panelvan ve kamyonet kurye sayfaları eklendi.',
  'Kurye çağırma niyetini destekleyen ayrı dönüşüm odaklı sayfa ve geçmiş teslimat güven alanı eklendi.',
  'İlçe ve mahalle şablonlarına uzun form, AI cevap blokları ve daha güçlü CTA katmanları eklendi.',
  'GBP ve rakip gap analizi için görünür strateji sayfaları güçlendirildi.',
  'Static export için ek sayfalar sitemap ve robots akışına dahil edildi.'
];

export const trustBadges = [
  '30 dakikada pickup hedefi',
  '7/24 operasyon hattı',
  'İstanbul 39 ilçe kapsaması',
  'Aynı gün teslimat planı',
  'Kurumsal sözleşme ve evrak deneyimi',
  'WhatsApp ile anında teklif'
];

export const aggregateReviewData = {
  ratingValue: 5,
  reviewCount: 900,
  bestRating: 5,
  worstRating: 1
};

export const reviewHighlights: ReviewHighlight[] = [
  {
    author: 'Merve Y.',
    role: 'E-ticaret operasyon sorumlusu',
    text: 'Aynı gün teslimat tarafında hızlı geri dönüş ve net WhatsApp akışı karar vermemizi kolaylaştırdı.',
    rating: 5
  },
  {
    author: 'Onur K.',
    role: 'Hukuk ofisi yöneticisi',
    text: 'Acil evrak ve sözleşme teslimlerinde hız kadar süreç netliği de önemliydi; ekip hızlı ve düzenli ilerledi.',
    rating: 5
  },
  {
    author: 'Derya A.',
    role: 'Klinik koordinatörü',
    text: 'Medikal gönderilerde teslim süreci ve iletişim akışı güven verdi, hızlı teklif alma tarafı da çok pratikti.',
    rating: 5
  }
];

export const gbpActionPlan = [
  'Ana kategori kurye hizmeti, ikincil kategoriler express kurye, teslimat hizmeti ve lojistik destek olarak düzenlenmeli.',
  'Her hafta en az 3 Google İşletme gönderisinde ilçe adı, hizmet tipi ve hız mesajı birlikte kullanılmalı.',
  'Yorum isteme akışında müşteriden hız, ilçe ve hizmet türünü doğal şekilde cümle içinde geçirmesi istenmeli.',
  'Site üzerindeki SSS blokları GBP soru-cevap bölümüne sadeleştirilmiş biçimde taşınmalı.',
  'İşletme profilindeki web sitesi bağlantısı hizmet ve fiyat odaklı sayfalara dönüşüm niyetine göre derin link verecek şekilde kullanılmalı.'
];

export const weeklyGbpPostPlan = [
  'Pazartesi: Acil kurye ve express kurye için ilçe odaklı hız paylaşımı',
  'Çarşamba: Şehirler arası kurye ve vale özel şoför gibi farklılaştırıcı hizmet paylaşımı',
  'Cuma: Gerçek kullanım senaryosu, teslim süreci ve WhatsApp teklif çağrısı',
  'Pazar: Sık sorulan sorular ve 7/24 hizmet hatırlatması'
];

export const reviewRequestFlow = [
  'Teslimat sonrası 15-30 dakika içinde kısa WhatsApp teşekkür mesajı gönder',
  'Yorum isterken ilçe adı, hız ve hizmet türünü anımsatan tek cümlelik yönlendirme kullan',
  'Yorum geldikten sonra 24 saat içinde marka diliyle cevap ver',
  'Olumlu yorumları referans ve ana sayfa güven bloklarında görünür hale getir'
];

export const gbpContentAssets = [
  'Birincil açıklama şablonu: İstanbul içi moto kurye, acil kurye, express kurye, gece kurye ve şehirler arası kurye hizmetleri için 7/24 hızlı dönüş sağlanır.',
  'Yorum isteme şablonu: Hizmet aldığınız ilçe, hız ve teslimat deneyimini birkaç kelimeyle paylaşmanız yerel görünürlüğümüzü güçlendirir.',
  'Gönderi şablonu: Kadıköy, Ataşehir, Şişli ve Beşiktaş gibi yoğun bölgelerde aynı gün teslimat ve hızlı pickup için bugün de aktif ekibimiz sahada.',
  'SSS şablonu: Kurye ne kadar sürede gelir, fiyat nasıl belirlenir ve hangi hizmetler verilir soruları GBP soru-cevap alanında döndürülmeli.'
];

export const gbpProfileDescription =
  '34 Moto Kurye İstanbul, 39 ilçede acil kurye, moto kurye, express kurye, aynı gün teslimat, gece kurye, arabalı kurye, şehirler arası kurye, eczane kurye ve evrak teslimatı sunar. Ataşehir, Kadıköy, Şişli, Beşiktaş, Ümraniye ve İstanbul genelinde hızlı pickup, WhatsApp ile teklif ve 7/24 operasyon desteği için hizmet verir.';

export const gbpServiceList = [
  'Acil Kurye',
  'Express Kurye',
  'Gece Kurye',
  'VIP Kurye',
  'Evrak Kurye',
  'Medikal Kurye',
  'Eczane Kurye',
  'Arabalı Kurye',
  'Aynı Gün Kurye',
  'Şehirler Arası Kurye',
  'Gidiş Dönüş Kurye',
  'Randevulu Gönderim',
  'Gümrük Kurye',
  'Vale Özel Şoför'
];

export const gbpReadyPostCaptions = [
  'Ataşehir, Kadıköy ve Şişli hattında acil kurye ihtiyacınız için bugün de 30 dakikada pickup hedefiyle sahadayız. Moto kurye, express kurye ve aynı gün teslimat için WhatsApp üzerinden hemen yazın.',
  'İstanbul genelinde evrak kurye, medikal kurye ve eczane kurye hizmetlerinde hızlı yönlendirme ve net fiyat akışı sunuyoruz. 39 ilçede aynı gün teslimat planı için arayın.',
  'Beşiktaş, Levent, Maslak ve Finans Merkezi çevresinde plaza çıkışlı acil evrak teslimatları, VIP kurye ve kurumsal rota ihtiyaçları için 7/24 çözüm sağlıyoruz.',
  'Şehirler arası kurye, gümrük kurye ve randevulu gönderim taleplerinde rota, teslim saati ve araç tipi birlikte planlanır. Hızlı teklif için pickup ve teslim bilgisini paylaşın.'
];

export const sampleDeliveryTimeline = [
  { title: 'Pickup doğrulandı', detail: 'Kadıköy çıkışlı evrak talebinde pickup bilgisi 2 dakika içinde netleştirildi.' },
  { title: 'Kurye yönlendirildi', detail: 'Ataşehir finans merkezi çıkışlı VIP evrak teslimi için uygun rota planlandı.' },
  { title: 'Teslimat tamamlandı', detail: 'Bakırköy çıkışlı medikal paket aynı gün içinde güvenli şekilde teslim edildi.' },
  { title: 'Müşteri bilgilendirildi', detail: 'Şehirler arası evrak talebinde rota ve tahmini teslim zamanı WhatsApp üzerinden teyit edildi.' }
];
