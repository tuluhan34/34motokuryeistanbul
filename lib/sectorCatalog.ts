export type SectorCatalogItem = {
  slug: string;
  name: string;
  short: string;
  focus: string;
  imageQuery: string;
  note?: string;
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

const buildImageQuery = (name: string, note?: string) => `${name} ${note || ''} package logistics courier no people`;

const sector = (name: string, short: string, focus: string, note?: string): SectorCatalogItem => ({
  slug: slugify(name),
  name,
  short,
  focus,
  note,
  imageQuery: buildImageQuery(name, note)
});

export const sectorCatalog: SectorCatalogItem[] = [
  sector('Diş klinikleri', 'Randevu evrakı, laboratuvar işi ve hassas paket akışı gerektiren sağlık teslimatları.', 'Hız, dikkatli taşıma ve düzenli bilgilendirme öne çıkar.', 'dental clinic'),
  sector('Veteriner klinikleri', 'Numune, ilaç, evrak ve klinik içi acil teslimat akışı gerektiren operasyonlar.', 'Zaman hassasiyeti ve doğru teslim bilgisi önemlidir.', 'veterinary clinic'),
  sector('Eczaneler', 'Reçete evrakı, ilaç transferi ve acil ürün çıkışları için hızlı şehir içi destek.', 'Saat kritik ve dikkatli taşıma gereklidir.', 'pharmacy'),
  sector('Medikal laboratuvarlar', 'Numune, rapor ve medikal paket taşımalarında kontrollü şehir içi teslimat.', 'Numune sürekliliği ve bilgilendirme ön plandadır.', 'medical laboratory'),
  sector('Özel hastaneler', 'Evrak, numune ve kurum içi acil gönderiler için planlı kurye desteği.', 'Kurumsal akış, gizlilik ve zamanlama birlikte yönetilir.', 'private hospital evrak numune'),
  sector('Hukuk büroları', 'Sözleşme, dava dosyası ve adliye evraklarında güvenli teslimat desteği.', 'Gizlilik, imza süreci ve teslim teyidi önemlidir.', 'law office documents'),
  sector('Noterlikler', 'Resmi belge, sözleşme ve acil onay süreçleri için hızlı evrak taşımacılığı.', 'Doğru teslim kişisi ve zaman baskısı öne çıkar.', 'notary documents'),
  sector('Muhasebe ofisleri', 'Fatura, klasör, sözleşme ve şirket evrakı için düzenli kurye akışı.', 'Günlük tekrar eden pickup senaryolarına uygundur.', 'accounting office documents'),
  sector('Mali müşavirler', 'Defter, beyanname ve şirket evrakının zamanında ulaştırılması için kurye desteği.', 'Teslim takibi ve gizlilik ön plandadır.', 'financial advisor documents'),
  sector('Gümrük müşavirleri', 'Beyanname, taşıma belgesi ve liman bağlantılı evrak akışı için hızlı teslimat.', 'Zaman kritik dış ticaret evrakı taşınır.', 'customs broker documents'),
  sector('Dış ticaret firmaları', 'İhracat ve ithalat süreçlerine bağlı belge ve numune teslimatları.', 'Kurumsal koordinasyon ve aynı gün teslim gereksinimi öne çıkar.', 'foreign trade documents'),
  sector('İthalat/ihracat yapan KOBİ’ler', 'Numune, sözleşme ve ticari evrak akışı için esnek şehir içi kurye desteği.', 'KOBİ ölçeğinde hızlı pickup ve net fiyat beklentisi yüksektir.', 'import export small business'),
  sector('Yedek parça satıcıları', 'Teknik parça, küçük koli ve acil servis teslimleri için kurye çözümü.', 'Hızlı pickup ve hasarsız teslim önemlidir.', 'spare parts boxes'),
  sector('Oto servisler', 'Araç parçaları, servis evrakı ve acil teknik teslimatlar için kurye desteği.', 'Aynı gün ve acil parça akışı sık görülür.', 'auto service spare parts'),
  sector('Kuyumcular', 'Değerli ürün ve evrak teslimleri için kontrollü ve dikkatli kurye süreci.', 'Gizlilik ve güven vurgusu öne çıkar.', 'jewelry package luxury box'),
  sector('Saat tamircileri', 'Hassas ürün, parça ve müşteri teslimleri için dikkatli taşıma gerektiren akış.', 'Kırılabilir ve küçük ürün taşımaya uygundur.', 'watch repair package'),
  sector('Optik mağazalar', 'Gözlük siparişi, lens kutusu ve evrak teslimleri için hızlı şehir içi servis.', 'Küçük fakat hassas ürün akışı yönetilir.', 'optical store package'),
  sector('Tekstil atölyeleri', 'Numune, kumaş, küçük koli ve üretim evrakı taşımaları için hızlı destek.', 'Merter, Osmanbey ve üretim akslarında tekrar eden teslimatlar öne çıkar.', 'textile workshop packages'),
  sector('Terziler', 'Özel dikim ürün, prova paketi ve evrak teslimleri için esnek kurye akışı.', 'Saatli teslim ve müşteri memnuniyeti ön plandadır.', 'tailor package garment'),
  sector('Numune üreticileri', 'Ürün numunesi ve prototip paketlerinin gün içi ulaştırılması için kurye çözümü.', 'Hasarsız teslim ve hız birlikte gerekir.', 'sample production packages'),
  sector('Moda tasarımcıları', 'Koleksiyon parçası, çizim dosyası ve numune taşımalarında dikkatli teslimat.', 'Özel ve zamanlı ürün akışı baskındır.', 'fashion design samples'),
  sector('Reklam ajansları', 'Sunum materyali, prodüksiyon evrakı ve müşteri teslimleri için şehir içi kurye desteği.', 'Son dakika teslimat ihtiyacı sık yaşanır.', 'advertising agency package'),
  sector('Matbaalar', 'Baskı örneği, evrak ve sipariş paketlerinin hızlı dağıtımı için operasyon desteği.', 'Toplu ve aynı gün teslim talepleri yüksektir.', 'printing house packages'),
  sector('Mimarlık ofisleri', 'Proje paftası, sözleşme ve numune teslimatlarında dikkatli taşıma.', 'Evrak ve proje materyali aynı akışta yönetilir.', 'architecture office blueprint documents'),
  sector('Mühendislik ofisleri', 'Teknik çizim, proje evrakı ve parça teslimatları için kurye desteği.', 'Resmi evrak ve proje materyali birlikte taşınır.', 'engineering office documents'),
  sector('İnşaat şantiyeleri', 'Evrak ve numune teslimatları için saha odaklı kurye planı.', 'Şantiye giriş bilgisi ve teslim kişisi netliği önemlidir.', 'construction site documents samples'),
  sector('Emlak ofisleri', 'Sözleşme, tapu evrakı ve anahtar teslim süreçleri için hızlı şehir içi akış.', 'Acil ve imzalı belge taşımaları öne çıkar.', 'real estate office documents'),
  sector('Fotoğraf stüdyoları', 'Ekipman parçası, baskı ve müşteri teslimleri için hassas kurye desteği.', 'Kırılabilir ve özel paket akışı yönetilir.', 'photo studio package'),
  sector('Organizasyon firmaları', 'Etkinlik evrakı, numune ve son dakika ekipman paketleri için hızlı kurye.', 'Saatli teslim ve son dakika değişiklikleri sık görülür.', 'event company package'),
  sector('Çiçekçiler', 'Özel teslimat ve zaman hassasiyetli siparişler için dikkatli kurye akışı.', 'Sunum kalitesi ve teslim saatine uyum önemlidir.', 'florist flower package'),
  sector('Pastaneler', 'Özel sipariş kutuları ve zamanlı teslimat gerektiren ürün akışı.', 'Kırılmadan ve gecikmeden teslim kritik önemdedir.', 'pastry special order box'),
  sector('Catering firmaları', 'Numune ve operasyon evrakı ile özel sipariş paketlerinde hızlı şehir içi dağıtım.', 'Saatli teslim planlaması önemlidir.', 'catering package'),
  sector('Sanat galerileri', 'Eser evrakı, davetiye ve küçük sanat işi teslimlerinde dikkatli kurye süreci.', 'Hassas ürün ve gizlilik ihtiyacı birlikte yönetilir.', 'art gallery package'),
  sector('Antikacılar', 'Değerli ve hassas ürün paketleri için kontrollü teslimat desteği.', 'Kırılabilirlik ve güven duygusu ön plandadır.', 'antique shop package'),
  sector('Elektronik tamircileri', 'Cihaz, parça ve teknik servis evrakı için hızlı kurye akışı.', 'Parça lojistiği ve müşteri teslimleri önemlidir.', 'electronics repair package'),
  sector('Bilgisayar teknik servisleri', 'Donanım, yedek parça ve servis teslimatları için şehir içi kurye desteği.', 'Hasarsız teslim ve teknik parça önceliği öne çıkar.', 'computer repair hardware package'),
  sector('Telefon tamircileri', 'Yedek parça, cihaz ve servis evrakı akışı için hızlı pickup desteği.', 'Küçük ama değerli ürünler taşınır.', 'phone repair package'),
  sector('Küçük e-ticaret satıcıları', 'Instagram ve benzeri kanallardan çıkan siparişler için aynı gün teslimat akışı.', 'Müşteri memnuniyeti ve hızlı çıkış beklentisi yüksektir.', 'small ecommerce parcel'),
  sector('Butik üreticiler', 'El yapımı veya küçük hacimli üretim siparişleri için esnek kurye desteği.', 'Özel paketleme ve hassas teslim öne çıkar.', 'boutique production package'),
  sector('Kozmetik üreticileri', 'Ürün numunesi, sipariş kutusu ve evrak teslimleri için dikkatli lojistik akış.', 'Sızıntı ve ambalaj koruması önemlidir.', 'cosmetic products package'),
  sector('Dövme stüdyoları', 'Sarf malzeme, numune ve evrak akışı için küçük paket kurye desteği.', 'Hızlı ve düzenli tedarik teslimleri gerekir.', 'tattoo studio supplies package'),
  sector('Güzellik merkezleri', 'Ürün, evrak ve sarf malzeme teslimleri için şehir içi kurye akışı.', 'Düzenli operasyon ve küçük paket taşımaları öne çıkar.', 'beauty center products package'),
  sector('Spor salonları', 'Ekipman parçası, evrak ve ürün teslimlerinde hızlı lojistik destek.', 'Hacimli veya acil ekipman akışı olabilir.', 'gym equipment package'),
  sector('Eğitim kurumları', 'Sertifika, kayıt evrakı ve materyal teslimatları için düzenli kurye desteği.', 'Resmi evrak ve saatli teslim önemlidir.', 'education institution documents'),
  sector('Özel ders verenler', 'Materyal, kitap ve eğitim dokümanı teslimleri için esnek şehir içi servis.', 'Bireysel ama zamanlı gönderiler öne çıkar.', 'private tutoring materials'),
  sector('Yayınevleri', 'Kitap prova, sözleşme ve baskı örneği teslimlerinde kurye desteği.', 'Evrak ve basılı ürün taşımaları birlikte yürür.', 'publishing house books documents'),
  sector('Kitapçılar', 'Özel sipariş ve küçük hacimli kitap teslimatları için hızlı akış.', 'Müşteri teslim süresi önemlidir.', 'bookstore package'),
  sector('Müzik stüdyoları', 'Kayıt medyası, ekipman parçası ve sözleşme teslimleri için hassas kurye desteği.', 'Teknik malzeme ve evrak akışı birleşir.', 'music studio equipment package'),
  sector('Film prodüksiyon ekipleri', 'Set evrakı, teknik ekipman parçası ve son dakika lojistik ihtiyaçları için kurye çözümü.', 'Saatli ve acil teslimat sık görülür.', 'film production equipment case'),
  sector('Freelance çalışanlar', 'Evrak, materyal ve özel müşteri teslimatları için esnek kurye desteği.', 'Bireysel kullanıcı için hızlı ve basit akış gerekir.', 'freelance package documents'),
  sector('Danışmanlık ofisleri', 'Sözleşme, sunum ve proje evrakı teslimleri için kurumsal kurye desteği.', 'Zamanında teslim ve profesyonel iletişim önemlidir.', 'consulting office documents'),
  sector('İnsan kaynakları firmaları', 'Aday evrakı, sözleşme ve kurum içi dosya teslimleri için düzenli akış.', 'Gizlilik ve zaman baskısı yüksektir.', 'human resources documents'),
  sector('Sigorta acenteleri', 'Poliçe, sözleşme ve hasar evrakı için şehir içi teslimat desteği.', 'İmzalı ve resmi belge akışı öne çıkar.', 'insurance agency documents'),
  sector('Turizm acenteleri', 'Rezervasyon evrakı, vize dosyası ve müşteri belgeleri için hızlı kurye akışı.', 'Zaman kritik evrak teslimleri sık yaşanır.', 'travel agency documents'),
  sector('Oteller', 'Unutulan eşya, evrak ve hızlı misafir teslimatları için özel kurye çözümü.', 'Misafir memnuniyeti ve dikkatli taşıma önemlidir.', 'hotel forgotten item package'),
  sector('Airbnb ev sahipleri', 'Anahtar, unutulan eşya ve evrak teslimleri için esnek şehir içi destek.', 'Hızlı pickup ve bireysel teslim planı gerekir.', 'airbnb key package'),
  sector('Restoranlar', 'Özel paket, numune ve operasyon evrakı için zamanlı kurye desteği.', 'Kısa teslim süresi kritik önemdedir.', 'restaurant special package'),
  sector('Kafeler', 'Numune, ürün ve küçük tedarik paketlerinde hızlı şehir içi teslimat.', 'Aynı gün ve saatli akış sık görülür.', 'cafe product sample package'),
  sector('Balıkçılar', 'Taze ürün ve özel sipariş paketleri için hız odaklı teslimat desteği.', 'Süre ve paketleme hassasiyeti yüksektir.', 'fish market fresh product box'),
  sector('Kasaplar', 'Özel sipariş ve ürün teslimleri için dikkatli şehir içi kurye akışı.', 'Hızlı ve kontrollü teslim gerekir.', 'butcher special order package'),
  sector('Organik ürün satıcıları', 'Doğal ürün kutuları ve özel siparişlerde zamanlı teslimat desteği.', 'Ürün bütünlüğü ve teslim süresi önemlidir.', 'organic products box'),
  sector('Çiftlikten satış yapanlar', 'Taze ürün, koli ve özel sipariş taşımalarında esnek kurye desteği.', 'Tarladan veya depodan hızlı çıkış gereklidir.', 'farm products package'),
  sector('Pet shoplar', 'Mama, aksesuar ve küçük canlı olmayan ürün teslimleri için şehir içi kurye akışı.', 'Hız ve paket güvenliği önemlidir.', 'pet shop package'),
  sector('Akvaryumcular', 'Aksesuar, ekipman ve hassas ürün kutuları için dikkatli teslimat.', 'Kırılabilir ürün ve ekipman akışı öne çıkar.', 'aquarium store package'),
  sector('Sanatçılar', 'Eser teslimi, davetiye ve üretim materyallerinde özenli kurye desteği.', 'Özel iş ve hassas paket akışı yönetilir.', 'artist artwork package'),
  sector('El işi üreticileri', 'Özel yapım ürün ve sipariş kutularında esnek şehir içi teslimat desteği.', 'Kişiselleştirilmiş ürün ve müşteri teslimleri önemlidir.', 'handmade products package'),
  sector('Hediyelik eşya üreticileri', 'Özel sipariş kutuları ve mağaza teslimlerinde hızlı kurye akışı.', 'Sunum kalitesi ve paket güvenliği önemlidir.', 'gift items package'),
  sector('3D baskı hizmeti verenler', 'Üretilen parça, prototip ve teknik evrak teslimleri için kurye çözümü.', 'Kırılabilir prototiplerin dikkatli taşınması gerekir.', '3d printing prototype package'),
  sector('Yazılım firmaları', 'Donanım, evrak ve sözleşme teslimleri için kurumsal şehir içi akış.', 'Donanım paketleri ve resmi evraklar birlikte taşınabilir.', 'software company hardware documents'),
  sector('Startup ofisleri', 'Numune, evrak, cihaz ve yatırım sunumu materyallerinde esnek kurye desteği.', 'Hızlı ve yalın operasyon beklentisi yüksektir.', 'startup office package'),
  sector('Coworking alanları', 'Üye evrakı, küçük paket ve ofis içi teslimatlar için şehir içi kurye akışı.', 'Dağıtık ekipler için pickup kolaylığı önemlidir.', 'coworking office package'),
  sector('Dernekler', 'Resmi evrak, etkinlik dosyası ve bağış materyali teslimlerinde kurye desteği.', 'Zamanlı evrak akışı öne çıkar.', 'association documents'),
  sector('Vakıflar', 'Kurumsal evrak, etkinlik materyali ve resmi dosyalar için teslimat desteği.', 'Güven ve düzenli iletişim önemlidir.', 'foundation documents'),
  sector('Siyasi ofisler', 'Broşür, evrak ve saha materyali teslimleri için zamanlı kurye akışı.', 'Yoğun dönemlerde hızlı dağıtım gerekir.', 'political office documents'),
  sector('Konsolosluk işlemleri yapan aracı firmalar', 'Vize ve konsolosluk evrakı süreçlerinde hızlı ve dikkatli teslimat desteği.', 'Resmi belge takibi ve zaman baskısı çok yüksektir.', 'consulate visa documents')
];

export const getSectorBySlug = (slug: string) => sectorCatalog.find((item) => item.slug === slug);
