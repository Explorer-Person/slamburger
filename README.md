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

/ (repo root)
├── slam-admin-panel/
│   ├── README.md
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── tsconfig.json
│   ├── public/
│   │   ├── 6.1-login/
│   │   └── 6.2-menuedit/
│   └── src/
│       └── app/
│           ├── category/
│           ├── dashboard/
│           ├── login/
│           ├── menu/
│           ├── orders/
│           └── settings/
├── slamburger_client/
│   ├── README.md
│   ├── eslint.config.mjs
│   ├── next.config.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── tsconfig.json
│   ├── public/
│   │   ├── 1-landing/
│   │   ├── 2-menu/
│   │   ├── 3-item/
│   │   ├── 4-about/
│   │   └── 5-contact/
│   └── app/
│       ├── about_us/
│       ├── contact/
│       ├── gallery/
│       └── menu/
└── .git/   (Git metadata)



Her proje kendi içinde bir `README.md` dosyası içerir. Projeler Next.js 15 ve React 19 kullanır. 
Üretim ortamına Vercel veya Node.js destekleyen diğer sunucular üzerinden dağıtılabilir.
