# zoho.les4h.fr — Site Astro Solutions Zoho Antilles

Site officiel présentant les solutions logicielles **Zoho** distribuées et intégrées par **LES4H** (Jean-Christophe Hutin, agent certifié Zoho depuis 12 ans) en **Guadeloupe, Martinique, Guyane et Saint-Martin**.

Basé sur le thème **Lexington ProFolioX** (Astro 5 + Tailwind CSS v4), 100% statique et optimisé pour **Cloudflare Workers / Pages**.

---

## 🚀 Démarrage rapide

```bash
npm install
npm run dev      # Serveur de développement : http://localhost:4321
npm run build    # Génération du site statique dans ./dist
npm run preview  # Prévisualisation locale du build
npm run deploy   # Déploiement Cloudflare
```

---

## 📁 Architecture du projet

```
zoho.les4h/
├── public/                     # Favicon, og-image, _headers Cloudflare
├── src/
│   ├── components/
│   │   ├── assets/             # Logo LES4H avec badge Zoho, ThemeToggle
│   │   ├── fundations/         # BaseHead, scripts thème sombre, boutons
│   │   ├── global/             # Footer, SalesIQ chat widget, WhatsApp flottant
│   │   ├── home/               # Sections Hero, Pourquoi Antilles, Zoho One, Outils, Méthode, FAQ, CTA
│   │   └── navigation/         # Sidebar gauche DesktopNav (ProFolioX) & MobileNav
│   ├── config/
│   │   └── site.ts             # Coordonnées, booking, entité légale, réseaux, SalesIQ
│   ├── data/
│   │   ├── solutions.ts        # Catalogue Zoho One, briques logicielles, ROI & comparatifs
│   │   └── audiences.ts        # 4 segments sectoriels Antilles (Commerce, Services, Tourisme, BTP)
│   ├── images/                 # Logos et portrait officiel optimisés WebP
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout racine ProFolioX avec sidebar et drawer mobile
│   ├── pages/
│   │   ├── index.astro         # Page d'accueil complète
│   │   ├── zoho-one.astro      # Page dédiée Zoho One (ERP tout-en-un TPE/PME)
│   │   ├── zoho-crm.astro      # Page dédiée Zoho CRM & Bigin (Pipeline et vente)
│   │   ├── audiences.astro     # Page des solutions sectorielles & cas d'usage
│   │   ├── contact.astro       # Diagnostic 30 min offert & réservation Zoho Bookings
│   │   ├── mentions-legales.astro # Mentions légales & RGPD conformes LES4H
│   │   └── 404.astro           # Page d'erreur 404
│   └── styles/
│       └── global.css          # Tailwind CSS v4, charte LES4H, thème sombre/clair
├── astro.config.mjs            # Configuration Astro 5 + Tailwind + Sitemap
├── wrangler.jsonc              # Configuration Cloudflare Workers Custom Domain
└── package.json
```

---

## 🎯 Contenu et spécificités Antilles

1. **Expérience & Réassurance** : Mise en avant des 12 ans d'expérience de Jean-Christophe Hutin comme agent Zoho sur le terrain antillais.
2. **Fuseau horaire UTC-4** : Support et échanges directs sans le décalage horaire avec l'Hexagone (+5h/6h) ou l'Asie.
3. **Fiscalité locale** : Prise en compte de la TVA locale à 8.5%, des exonérations Guyane/Saint-Martin et du suivi de l'Octroi de mer dans Zoho Books & Inventory.
4. **Zoho One en vedette** : Remplacement de 7 à 10 abonnements SaaS coûteux par une licence unique à 37 € / mois / salarié (économie moyenne de 2 800 € / an / collaborateur).
5. **4 Audiences prioritaires** :
   - *Commerces, Grossistes & Import-Export* (Approvisionnement maritime, stocks tampon).
   - *Services & Conseil / Professions libérales* (Devis, signature en ligne Zoho Sign, facturation récurrente).
   - *Tourisme, Hôtellerie & Location Saisonnière* (Relations voyageurs 24/7, réservations directes).
   - *BTP, Artisans & Entreprises de terrain* (Devis et signatures sur tablette en direct sur chantier, factures d'avancement).

---

## 🌐 Déploiement Cloudflare

Le fichier `wrangler.jsonc` est pré-configuré pour la zone DNS `les4h.fr` avec la route `zoho.les4h.fr/*`.
Pour déployer :
```bash
npm run deploy
```

