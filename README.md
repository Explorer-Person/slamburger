# SlamBurger Projeleri

Bu depo iki ayrı Next.js uygulaması içerir:

- **slam-admin-panel** – Yönetim paneli
- **slamburger_client** – Müşteri tarafı web uygulaması

## Kurulum
1. Node.js (sürüm 18 veya üzeri) sisteminizde yüklü olmalıdır.
2. Her proje dizininde `npm install` komutunu çalıştırarak bağımlılıkları kurun.

## slam-admin-panel
- Geliştirme için: `npm run dev`  
  Varsayılan port: **3005**
- Üretim için:
  1. `npm run build`
  2. `npm run start`  
     Varsayılan port: **3000** (isteğe bağlı `PORT` değişkeni ile değiştirilebilir)

## slamburger_client
- Geliştirme için: `npm run dev`  
  Varsayılan port: **3000**
- Üretim için:
  1. `npm run build`
  2. `npm run start`  
     Varsayılan port: **3000** (isteğe bağlı `PORT` değişkeni ile değiştirilebilir)

## Dizin Yapısı (Özet)

# Proje Dizin Yapısı

## Root (`/`)

- `.git/`  
  Git metadata klasörü.

### `slam-admin-panel/`  
Yönetici paneli (Next.js + TypeScript) uygulaması.

- `README.md`  
  Uygulama ile ilgili temel bilgiler.
- `eslint.config.mjs`  
  Lint ayarları.
- `next.config.ts`  
  Next.js yapılandırması.
- `package.json`, `package-lock.json`  
  Bağımlılıklar ve betikler.
- `postcss.config.mjs`  
  PostCSS yapılandırması.
- `tsconfig.json`  
  TypeScript yapılandırma dosyası.
- `public/`  
  Ortak statik dosyalar:
  - `6.1-login/` – Giriş sayfası görselleri.
  - `6.2-menuedit/` – Menü düzenleme ekranına ait içerikler.
- `src/app/`  
  Sayfa ve yönlendirme yapısı:
  - `category/` – Kategori yönetimi.
  - `dashboard/` – Yönetim paneli ana ekranı.
  - `login/` – Giriş sayfası.
  - `menu/` – Menü düzenleme sayfası.
  - `orders/` – Sipariş yönetimi.
  - `settings/` – Ayarlar bölümü.

### `slamburger_client/`  
Kullanıcı arayüzü (Vite + React) uygulaması.

- `README.md`  
  Uygulama hakkında temel açıklamalar.
- `eslint.config.mjs`  
  Lint ayarları.
- `next.config.ts`  
  Next.js yapılandırma dosyası.
- `package.json`, `package-lock.json`  
  Proje bağımlılıkları.
- `postcss.config.mjs`  
  PostCSS yapılandırması.
- `tsconfig.json`  
  TypeScript konfigürasyonu.
- `public/`  
  Statik sayfa görselleri:
  - `1-landing/` – Ana sayfa içerikleri.
  - `2-menu/` – Menü listesi sayfası.
  - `3-item/` – Ürün detay sayfası.
  - `4-about/` – Hakkımızda sayfası.
  - `5-contact/` – İletişim sayfası.
- `app/`  
  Uygulama sayfaları:
  - `about_us/` – Hakkımızda bölümü.
  - `contact/` – İletişim sayfası.
  - `gallery/` – Galeri sayfası.
  - `menu/` – Menü sayfası.




Her proje kendi içinde bir `README.md` dosyası içerir. Projeler Next.js 15 ve React 19 kullanır. 
Üretim ortamına Vercel veya Node.js destekleyen diğer sunucular üzerinden dağıtılabilir.
