export type PriorityLandingSection = {
  heading: string;
  paragraphs: string[];
};

export type PriorityLandingAnswer = {
  question: string;
  answer: string;
};

export type PriorityKeywordLanding = {
  slug: string;
  keyword: string;
  title: string;
  h1: string;
  description: string;
  districtFocus: string;
  promise: string;
  nearbyDistricts: string[];
  lsiKeywords: string[];
  sections: PriorityLandingSection[];
  faqs: PriorityLandingAnswer[];
  answerBlocks: PriorityLandingAnswer[];
};

type LandingSeed = {
  slug: string;
  keyword: string;
  districtFocus: string;
  promise: string;
  nearbyDistricts: string[];
  lsiKeywords: string[];
};

const buildPriorityLanding = (seed: LandingSeed): PriorityKeywordLanding => {
  const title = `${seed.keyword} | İstanbul moto kurye ve hızlı teslimat`;
  const h1 = `${seed.keyword} için hızlı moto kurye hizmeti`;
  const description = `${seed.keyword} arayanlar için ${seed.districtFocus} odaklı hızlı pickup, aynı gün teslimat, 7/24 WhatsApp ve hemen ara CTA yapısı. ${seed.promise}.`;
  const sectionIntro = `${seed.keyword} araması yapan kullanıcı çoğu zaman doğrudan çözüm ister; uzun ve belirsiz anlatım yerine net hız mesajı, teslim kapsamı ve tek tık iletişim görmek ister.`;
  const lsiList = seed.lsiKeywords.join(', ');

  return {
    slug: seed.slug,
    keyword: seed.keyword,
    title,
    h1,
    description,
    districtFocus: seed.districtFocus,
    promise: seed.promise,
    nearbyDistricts: seed.nearbyDistricts,
    lsiKeywords: seed.lsiKeywords,
    sections: [
      {
        heading: `${seed.keyword} hizmeti ne sunar?`,
        paragraphs: [
          `${sectionIntro} 34 Moto Kurye İstanbul, ${seed.keyword} ihtiyacını yalnızca bir anahtar kelime olarak değil, gerçek bir operasyon ihtiyacı olarak ele alır. Gönderi tipi, teslim süresi, ilçe yoğunluğu ve trafik yükü birlikte değerlendirilir. Böylece ${seed.keyword} talebi geldiğinde kullanıcıya sadece bilgi değil, doğrudan aksiyon alınabilecek net bir teklif ve yönlendirme akışı sunulur.`,
          `${seed.keyword} sayfasında amaç, telefon numarası, WhatsApp bağlantısı ve hizmet kapsamını ilk ekranda görünür kılmaktır. Çünkü İstanbul içi teslimat arayan kullanıcı için en kritik konu beklememek, fiyatı hızlı almak ve kurye yönlendirmesini anında başlatmaktır. ${seed.promise} mesajı bu yüzden yalnızca metin değil, dönüşüm kararını hızlandıran bir satış argümanıdır.`,
          `${seed.districtFocus} merkezli operasyonlarda ${seed.keyword} aramaları çoğunlukla acil evrak, paket, yedek parça, e-ticaret çıkışı veya kurumsal doküman taşımaya dönüşür. Bu sayfa; hızlı pickup, aynı gün teslimat, 7/24 iletişim ve yerel hizmet sinyallerini aynı yapıda birleştirerek hem arama motoru görünürlüğünü hem de telefon ve WhatsApp dönüşümünü güçlendirmek için hazırlandı.`
        ]
      },
      {
        heading: `${seed.districtFocus} ve yakın bölgelerde operasyon akışı`,
        paragraphs: [
          `${seed.keyword} talebinde lokasyon detayının net olması operasyon süresini ciddi biçimde kısaltır. ${seed.districtFocus} çıkışlı gönderilerde pickup adresi, teslim noktası ve gönderi tipi hızlıca doğrulanır; ardından moto kurye, express kurye, VIP kurye veya aynı gün teslimat modeli belirlenir. Bu yapı sayesinde kullanıcı ilk temas anında kararsızlık yaşamaz ve gönderi operasyonu beklemeden başlar.`,
          `${seed.nearbyDistricts.join(', ')} gibi yakın bölgelerle kurulan rota bağlantıları, ${seed.keyword} arayan kullanıcının aradığı “en hızlı kurye” hissini destekler. Sadece merkez ilçeye değil, çevre bağlantılı teslimat akışına da odaklanmak SEO tarafında daha güçlü lokal sinyal üretir. Aynı zamanda kullanıcıya bulunduğu bölgeye gerçekten hizmet verildiğini gösterir.`,
          `${seed.keyword} sayfasında yer alan mahalle, ilçe ve yakın teslimat bilgileri Google tarafında lokal alaka düzeyini artırırken, dönüşüm tarafında “adresime kurye gelir mi” sorusunu cevaplar. Bu nedenle içerik yalnızca genel İstanbul kurye anlatısı sunmaz; ${seed.districtFocus} ve çevresindeki yoğun iş merkezleri, konut alanları ve ticari noktalar için özel teslim mantığı da açık biçimde anlatılır.`
        ]
      },
      {
        heading: `Fiyat, hız ve güven beklentisi`,
        paragraphs: [
          `${seed.keyword} sorgusunda kullanıcıların büyük kısmı aynı anda üç şeyi merak eder: ne kadar hızlı kurye gelir, fiyat nasıl belirlenir ve süreç güvenilir midir. Bu nedenle içerikte belirsiz vaatler yerine net operasyon dili kullanılır. Telefonla arama, WhatsApp üzerinden konum paylaşma ve teklif formu ile talep açma seçeneklerinin birlikte sunulması dönüşümü ciddi biçimde artırır.`,
          `İstanbul içi moto kurye operasyonlarında fiyat; mesafe, gönderi hacmi, teslim süresi ve rota yoğunluğuna göre belirlenir. Ancak ${seed.keyword} sayfasında amaç fiyatı gizlemek değil, kullanıcının net teklif alabileceği kısa bir yolu görünür tutmaktır. “5 Dakikada Kurye Kapınızda” ve “Şimdi WhatsApp'tan Yaz” CTA'ları tam da bu karar anına hitap eder.`,
          `Güven tarafında ise 7/24 hizmet vurgusu, ilçe bazlı kapsam, hizmet türlerinin açık listesi ve schema destekli iletişim bilgileri birlikte çalışır. ${seed.keyword} arayan kullanıcı, karşısında gerçekten İstanbul merkezli çalışan, telefon numarasını açık gösteren ve hızlı cevap veren bir işletme gördüğünde arama yapma olasılığı belirgin biçimde yükselir.`
        ]
      },
      {
        heading: `${seed.keyword} için SEO ve dönüşüm dili`,
        paragraphs: [
          `Bu landing page yalnızca ana anahtar kelimeyi tekrar etmek için oluşturulmadı. ${seed.keyword} etrafında ${lsiList} gibi LSI terimleri de kullanılarak daha doğal, daha güçlü ve arama niyetine daha yakın bir içerik yapısı kuruldu. Böylece sayfa hem “tam eşleşme” aramalarında hem de benzer sorgularda daha geniş görünürlük elde eder.`,
          `${seed.keyword} sayfasındaki başlık yapısı H1, H2 ve H3 hiyerarşisine uygun biçimde ilerler. Soru-cevap blokları, kısa açıklamalar, bölge odaklı paragraflar ve CTA bantları birlikte kullanılır. Bu yapı Google AI sonuçlarında daha iyi özetlenebilen, kullanıcı için daha hızlı taranabilen ve mobilde daha rahat tüketilebilen bir içerik deneyimi sağlar.`,
          `Ayrıca içerik içinde sürekli olarak tek hedef korunur: kullanıcının aksiyon alması. Bu yüzden her bölümde arama, WhatsApp ve teklif akışı desteklenir. ${seed.keyword} aramasını yapan bir ziyaretçi, sayfa boyunca aynı hizmet vaadini daha net, daha lokal ve daha güvenli biçimde görür; bu da hemen çıkmayı azaltır ve dönüşüm ihtimalini artırır.`
        ]
      },
      {
        heading: `Neden 34 Moto Kurye İstanbul?`,
        paragraphs: [
          `34 Moto Kurye İstanbul, ${seed.keyword} gibi yüksek niyetli sorgularda kullanıcıyı bekletmeyen kısa karar akışına odaklanır. İstanbul geneline yayılmış ilçe ve mahalle sayfaları, hizmet sayfaları, blog içerikleri ve schema işaretlemeleri birlikte çalışarak sadece görünürlük değil, güven duygusu da üretir.`,
          `${seed.districtFocus} odaklı teslimatlar, yakın bölge geçişleri, aynı gün kurye senaryoları ve gece kurye ihtiyaçları tek marka dili altında toplanır. Bu sayede kullanıcı ayrı ayrı açıklama aramak zorunda kalmaz. ${seed.keyword} ihtiyacı doğduğu anda hangi numarayı arayacağını, hangi kanaldan yazacağını ve ne tür hizmet alacağını net biçimde görür.`,
          `Sonuç olarak bu sayfa, ${seed.keyword} aramalarında hem teknik SEO hem de dönüşüm optimizasyonu için tasarlandı. Amaç sadece sıralama almak değil; telefon, WhatsApp ve teklif formu üzerinden maksimum geri dönüşü üretmek, rakiplerden daha görünür ve daha ikna edici bir kurye deneyimi sunmaktır.`
        ]
      }
    ],
    faqs: [
      {
        question: `${seed.keyword} için kurye ne kadar sürede gelir?`,
        answer: `${seed.districtFocus} ve yakın bölgelerde yoğunluk ile trafik durumuna göre değişmekle birlikte amaç en kısa sürede pickup planı yapmak ve kullanıcıyı anında bilgilendirmektir.`
      },
      {
        question: `${seed.keyword} fiyatı nasıl belirlenir?`,
        answer: `Fiyat; alış noktası, teslim noktası, gönderinin hacmi, teslimat hızı ve seçilen hizmet tipine göre belirlenir. Net teklif telefon veya WhatsApp üzerinden kısa sürede paylaşılır.`
      },
      {
        question: `${seed.keyword} için WhatsApp'tan sipariş verebilir miyim?`,
        answer: `Evet. Pickup adresi, teslim adresi ve gönderi tipini WhatsApp üzerinden yazarak hızlı teklif alabilir, kurye yönlendirmesini başlatabilirsiniz.`
      }
    ],
    answerBlocks: [
      {
        question: `${seed.keyword} nedir?`,
        answer: `${seed.keyword}, İstanbul içinde hızlı pickup, net iletişim ve aynı gün teslimat beklentisi olan kullanıcılar için kurye ihtiyacını ifade eder.`
      },
      {
        question: `${seed.keyword} kimler için uygundur?`,
        answer: `Acil evrak, paket, yedek parça, e-ticaret siparişi ve kurumsal gönderi çıkışı olan bireysel ve kurumsal kullanıcılar için uygundur.`
      },
      {
        question: `${seed.keyword} için en hızlı iletişim yolu hangisi?`,
        answer: `Telefonla arama ve WhatsApp üzerinden kısa mesaj iletmek en hızlı teklif ve yönlendirme yoludur.`
      }
    ]
  };
};

const seeds: LandingSeed[] = [
  { slug: 'hit-kurye', keyword: 'hit kurye', districtFocus: 'Kadıköy', promise: 'Hızlı pickup ve net teslim planı ile anında fiyat akışı sunulur', nearbyDistricts: ['Üsküdar', 'Ataşehir', 'Maltepe'], lsiKeywords: ['hızlı kurye', 'aynı gün teslimat', 'moto kurye', 'İstanbul kurye'] },
  { slug: 'atasehir-kurye', keyword: 'Ataşehir kurye', districtFocus: 'Ataşehir', promise: 'Finans merkezi odaklı hızlı kurye ve plaza pickup desteği sağlanır', nearbyDistricts: ['Kadıköy', 'Ümraniye', 'Üsküdar'], lsiKeywords: ['Ataşehir moto kurye', 'plaza kurye', 'express kurye', 'hızlı teslimat'] },
  { slug: 'son-kurye', keyword: 'son kurye', districtFocus: 'Şişli', promise: 'Son dakika gönderiler için direkt iletişim ve express kurye kurgusu görünür tutulur', nearbyDistricts: ['Beşiktaş', 'Kağıthane', 'Fatih'], lsiKeywords: ['son dakika kurye', 'acil teslimat', 'hızlı pickup', 'telefonla kurye çağır'] },
  { slug: 'senin-kurye', keyword: 'senin kurye', districtFocus: 'Beşiktaş', promise: 'Kişisel ve kurumsal gönderiler için tek tık kurye çağırma deneyimi verilir', nearbyDistricts: ['Şişli', 'Sarıyer', 'Kağıthane'], lsiKeywords: ['özel kurye', 'VIP kurye', 'İstanbul moto kurye', 'kurye çağır'] },
  { slug: 'bugun-kurye', keyword: 'bugün kurye', districtFocus: 'Bakırköy', promise: 'Bugün teslim edilmesi gereken gönderiler için aynı gün kurye planı sunulur', nearbyDistricts: ['Bahçelievler', 'Zeytinburnu', 'Fatih'], lsiKeywords: ['aynı gün kurye', 'bugün teslimat', 'şehir içi kurye', 'hızlı kurye'] },
  { slug: 'jet-kurye-istanbul', keyword: 'jet kurye istanbul', districtFocus: 'İstanbul', promise: 'Şehir geneline yayılmış hızlı pickup ve express teslimat mesajı öne çıkar', nearbyDistricts: ['Ataşehir', 'Şişli', 'Kadıköy'], lsiKeywords: ['express kurye', 'acil kurye istanbul', 'motor kurye istanbul', 'en hızlı kurye'] },
  { slug: 'motor-kurye-istanbul', keyword: 'motor kurye istanbul', districtFocus: 'İstanbul', promise: 'Moto kurye ağı ile ilçe bazlı hızlı alım ve teslimat planı yapılır', nearbyDistricts: ['Kadıköy', 'Beşiktaş', 'Ataşehir'], lsiKeywords: ['moto kurye istanbul', 'şehir içi kurye', 'paket teslimatı', 'evrak kurye'] },
  { slug: 'acil-kurye', keyword: 'acil kurye', districtFocus: 'İstanbul', promise: 'Acil gönderiler için beklemeyi azaltan öncelikli rota kurgusu gösterilir', nearbyDistricts: ['Şişli', 'Kadıköy', 'Bakırköy'], lsiKeywords: ['acil kurye istanbul', 'jet kurye', 'anında kurye', 'express teslimat'] },
  { slug: 'ekspres-kurye', keyword: 'ekspres kurye', districtFocus: 'Beşiktaş', promise: 'Zaman kritik teslimatlar için kısa rota ve hızlı teklif akışı kurulur', nearbyDistricts: ['Şişli', 'Fatih', 'Sarıyer'], lsiKeywords: ['express kurye', 'hızlı kurye', 'öncelikli teslimat', 'VIP kurye'] },
  { slug: 'moto-kurye-atasehir', keyword: 'moto kurye Ataşehir', districtFocus: 'Ataşehir', promise: 'Ataşehir içi ve finans merkezi hattında hızlı pickup odaklı teslimat planı kurulur', nearbyDistricts: ['Ümraniye', 'Kadıköy', 'Üsküdar'], lsiKeywords: ['Ataşehir kurye', 'Ataşehir express kurye', 'plaza teslimatı', 'moto kurye'] },
  { slug: 'istanbul-kurye', keyword: 'istanbul kurye', districtFocus: 'İstanbul', promise: '39 ilçe ve mahalle bazlı kapsam ile şehir geneli görünür hizmet yapısı sunulur', nearbyDistricts: ['Kadıköy', 'Şişli', 'Bakırköy'], lsiKeywords: ['İstanbul moto kurye', 'şehir içi kurye', 'aynı gün teslimat', '7/24 kurye'] },
  { slug: 'adresime-kurye', keyword: 'adresime kurye', districtFocus: 'Üsküdar', promise: 'Adresten alım ve kapıya teslim akışı kısa ve net CTA’larla görünür tutulur', nearbyDistricts: ['Kadıköy', 'Ataşehir', 'Beşiktaş'], lsiKeywords: ['kapıdan kapıya kurye', 'evden kurye', 'adrese kurye çağır', 'hızlı pickup'] },
  { slug: 'gonderim-var-kurye', keyword: 'gönderim var kurye', districtFocus: 'Kağıthane', promise: 'Talebi hızlıca operasyona çeviren kısa mesaj, arama ve teklif akışı öne alınır', nearbyDistricts: ['Şişli', 'Eyüpsultan', 'Beşiktaş'], lsiKeywords: ['gönderi teslimatı', 'kurye çağır', 'paket gönderimi', 'hızlı kurye'] }
];

export const priorityKeywordLandings = seeds.map(buildPriorityLanding);

export const getPriorityKeywordLandingBySlug = (slug: string) => priorityKeywordLandings.find((item) => item.slug === slug);