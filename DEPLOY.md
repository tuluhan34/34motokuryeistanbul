# Hızlı Deploy

Ana hedef cPanel ise en doğru yol: Node.js App ile standalone deploy.

## Seçenek 1: cPanel Node.js App

1. cPanel içinde `Setup Node.js App` aç.
2. Node sürümünü `20` seç.
3. Uygulama kökü olarak boş bir klasör belirle. Örnek: `app/34motokuryeistanbul`
4. Bu projeden üretilen `cpanel-release.zip` paketini o klasöre yükle ve çıkart.
5. Environment Variables alanına `.env.example` içindeki değerleri gir.
6. Startup File olarak `server.js` seç.
7. Uygulamayı başlat veya yeniden başlat.

Not:

- Standalone paket içinde gerekli Node çalışma dosyaları bulunur.
- `public` ve `.next/static` klasörleri pakete dahil edilmelidir.
- Ana domain veya subdomain Node.js App'e bağlı olmalıdır.

## Seçenek 2: Vercel

1. Projeyi GitHub reposuna gönder.
2. Vercel'de `Add New Project` ile repoyu içe aktar.
3. Framework olarak `Next.js` otomatik algılanır.
4. Environment Variables alanına `.env.example` içindeki gerekli değerleri gir.
5. İlk deploy'u çalıştır.
6. Domain olarak `www.34motokuryeistanbul.com` ekle.
7. Apex domain `34motokuryeistanbul.com` adresini `www` sürümüne yönlendir.

Gerekli environment variable'lar:

- `UNSPLASH_APPLICATION_ID`
- `UNSPLASH_ACCESS_KEY`
- `UNSPLASH_SECRET_KEY`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

Deploy sonrası kontrol:

- `/`
- `/sitemap.xml`
- `/robots.txt`
- `/llms.txt`
- `/sektorler`
- `/sektorler/dis-klinikleri`

## cPanel için gerekli environment variable'lar

- `UNSPLASH_APPLICATION_ID`
- `UNSPLASH_ACCESS_KEY`
- `UNSPLASH_SECRET_KEY`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`

## Canlı kontrol komutları

```bash
curl -I https://www.34motokuryeistanbul.com/
curl -I https://www.34motokuryeistanbul.com/sitemap.xml
curl -I https://www.34motokuryeistanbul.com/robots.txt
curl -I https://www.34motokuryeistanbul.com/llms.txt
```