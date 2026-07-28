# Solola Business

Site vitrine officiel de **Solola Business** — Kinshasa, République Démocratique du Congo.

Vente de téléphones iPhone, AirPods, chaussures (baskets, mocassins, derby/oxford), casquettes New Era, parfums, vêtements (cravates, vestes), location et achat de véhicules. Plateforme mettant en relation clients et jeunes professionnels qualifiés dans plus de 13 domaines.

## Démarrage rapide

```bash
npm install
npm run dev
```

Le site sera disponible sur [http://localhost:5173](http://localhost:5173)

## Build de production

```bash
npm run build
```

Le dossier `dist/` contient le site statique prêt à déployer.

## Déploiement sur Vercel (recommandé)

1. Créer un dépôt GitHub et y pousser ce projet
2. Aller sur [vercel.com](https://vercel.com) → **Add New Project**
3. Importer le dépôt GitHub
4. Vercel détecte automatiquement Vite — cliquer sur **Deploy**

Le fichier `vercel.json` à la racine configure automatiquement les rewrites SPA.

## Personnalisation

| Élément | Fichier |
|---|---|
| Numéro WhatsApp (boutique) | `src/components/Boutique.tsx` — constante `WHATSAPP_NUMBER` |
| Numéro WhatsApp (présentation) | `src/components/Presentation.tsx` — constante `WA` |
| Couleurs (marine + or) | `src/index.css` — variables CSS |
| Liste des produits | `src/components/Boutique.tsx` — tableau `PRODUCTS` |
| Domaines d'intervention | `src/components/Presentation.tsx` — section Domaines |
| SEO (titre, description) | `index.html` |
| URL canonique / sitemap | `index.html` et `public/sitemap.xml` |
| Réseaux sociaux | `src/components/Footer.tsx` et `src/components/Presentation.tsx` |
