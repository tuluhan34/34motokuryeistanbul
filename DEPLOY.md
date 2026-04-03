# Hızlı Deploy

Bu proje için öncelikli akış cPanel'e manuel yüklemeye uygun statik export paketidir.

## Seçenek 1: cPanel Statik Upload

1. Localde `npm run build:cpanel` çalıştır.
2. Oluşan `out/` klasörünü zipleyip `public_html/` veya bağlı domain klasörüne yükle.
3. Mevcut içerikleri temizleyip `out/` içeriğini kök dizine çıkar.
4. `robots.txt`, `sitemap.xml`, `llms.txt` ve tüm alt dizinlerin kökte kaldığını doğrula.
5. Domain yönlendirmesi varsa `www.34motokuryeistanbul.com` ana host olacak şekilde 301 uygula.

Not:

- Statik export akışında zorunlu environment variable yoktur.
- Görseller statik export sırasında fallback ile üretildiği için Unsplash anahtarı olmadan build alınabilir.
- Teklif akışı WhatsApp ve e-posta taslağı ile çalışır; SMTP zorunlu değildir.

## Seçenek 2: cPanel Node.js App

1. cPanel içinde `Setup Node.js App` aç.
2. Node sürümünü `20` seç.
3. Uygulama kökü olarak boş bir klasör belirle. Örnek: `app/34motokuryeistanbul`
4. Bu projeden üretilen standalone paketi o klasöre yükle ve çıkart.
5. Startup File olarak `server.js` veya dağıtım yapınıza göre `app.js` seç.
6. Uygulamayı başlat veya yeniden başlat.

## Deploy sonrası kontrol

- `/`
- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`
- `/sektorler`
- `/hizmetler/sehirler-arasi-kurye`
- `/istanbul/atasehir`

## İsteğe bağlı environment variable'lar

- `UNSPLASH_APPLICATION_ID`
- `UNSPLASH_ACCESS_KEY`
- `UNSPLASH_SECRET_KEY`

## Canlı kontrol komutları

```bash
curl -I https://www.34motokuryeistanbul.com/
curl -I https://www.34motokuryeistanbul.com/sitemap.xml
curl -I https://www.34motokuryeistanbul.com/robots.txt
curl -I https://www.34motokuryeistanbul.com/llms.txt
```