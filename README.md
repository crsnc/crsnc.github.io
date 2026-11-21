# Ahmet Can SARAÇ — Portfolyo

React ve Vite ile hazırlanmış Türkçe kişisel portfolyo. Dönen bir Canvas rölyefi ve Long Beach ve MTN projeleri içerir.

## Yerelde çalıştırma

Node.js 22.12+ ile `npm ci` ve `npm run dev` çalıştırın. Üretim çıktısı için `npm run build`, çıktıyı yerelde görmek için `npm run preview` kullanın.

## İçerik düzenleme

[src/portfolio.js](src/portfolio.js) profil metnini, iletişim bağlantılarını ve sıralı proje listesini içerir. Yeni iş eklemek için listeye bir kayıt ekleyip kapak görselini [public/work](public/work) altına koyun. Masaüstü görseli için `desktop`, telefon ekranı için `mobile` biçimini kullanın. Proje sayıları listeden hesaplanır.

## GitHub Pages

Dosyaları GitHub deponuzun `main` dalına gönderin. Deponun **Settings → Pages → Build and deployment → Source** alanında **GitHub Actions** seçin. Ardından **Actions → Publish portfolio to GitHub Pages → Run workflow** ile ilk yayını başlatabilirsiniz. Sonraki `main` gönderimleri otomatik yayımlanır. Göreli varlık yolları hem kullanıcı hem proje Pages adreslerini destekler.

[Tasarım referanslarının ayrıntılı incelemesi](docs/referanslar.md)
