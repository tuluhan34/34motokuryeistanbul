34 Moto Kurye Istanbul - cPanel Yukleme

Oncelikli kurulum: statik export paketini manuel upload etmek.

Statik upload:
1. Localde npm run build:cpanel calistir.
2. out klasorunu zipleyip cPanel File Manager ile public_html dizinine yukle.
3. Zip icerigini public_html kokune cikar.
4. robots.txt, sitemap.xml, llms.txt ve hizmet/lokasyon klasorlerinin kokte oldugunu kontrol et.
5. Domaini bu dizine bagla ve cache varsa temizle.

Node.js App alternatifi:
1. cPanel > Setup Node.js App ac.
2. Node.js surumu olarak 20 sec.
3. Application root olarak ornegin /home/u2629744/34motokuryeistanbul sec.
4. Startup file olarak app.js veya server.js sec.
5. Standalone paket icerigini yukle ve cikar.
6. App'i restart et.
7. Domaini uygulamaya bagla.

Notlar:
- Statik export icin zorunlu env degiskeni yoktur.
- Teklif formu WhatsApp/mailto fallback ile calisir.
- SMTP ya da Unsplash anahtari olmadan statik paket alinabilir.
