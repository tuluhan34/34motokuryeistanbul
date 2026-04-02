# 34 Moto Kurye İstanbul

İstanbul içi moto kurye hizmetleri için hazırlanmış Pages Router tabanlı Next.js web sitesi.

## Özellikler

- Ana sayfa, hizmet sayfaları ve ilçe bazlı landing page yapısı
- CourierOrDeliveryService, Service, FAQ ve breadcrumb schema
- `sitemap.xml`, `robots.txt` ve `llms.txt` çıktıları
- Telefon ve WhatsApp dönüşümünü öne çıkaran arayüz

## Çalıştırma

```bash
npm install
npm run dev
```

## Production Deploy

Bu proje Next.js Pages Router ile Vercel veya Node.js sunucusunda calisacak sekilde hazirlandi.

Vercel icin:

```bash
npm install
npm run build
```

- Domain olarak `www.34motokuryeistanbul.com` ana host olmalidir.
- `34motokuryeistanbul.com` alan adi `www` surumune 301 yonlenmelidir.
- Canliya ciktiktan sonra asagidaki URL'lerin `200` dondugu dogrulanmalidir:
	- `/`
	- `/sitemap.xml`
	- `/robots.txt`
	- `/llms.txt`

Canli kontrol komutlari:

```bash
curl -I https://www.34motokuryeistanbul.com/
curl -I https://www.34motokuryeistanbul.com/sitemap.xml
curl -I https://www.34motokuryeistanbul.com/robots.txt
```