# Maabo Institut — Site web vitrine

Site web multi-pages (HTML/CSS/JS) pour **Maabo Institut**, institut de beauté.

## Pages
- `index.html` — accueil
- `services.html` — prestations et tarifs indicatifs
- `galerie.html` — photos intérieur + avant/après
- `apropos.html` — histoire, mission, équipe
- `contact.html` — formulaire + WhatsApp + carte

## Structure
```bash
.
├── index.html
├── services.html
├── galerie.html
├── apropos.html
├── contact.html
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/style.css
    ├── js/main.js
    ├── js/contact.js
    └── README.md
```

## Personnalisation rapide
1. **Logo**: mettez votre logo dans `assets/images/logo/logo-maabo.png`
2. **Photos**: ajoutez les images intérieures et avant/après dans les dossiers indiqués dans `assets/README.md`
3. **Coordonnées**: mettez à jour téléphone, email, adresse, lien WhatsApp (`wa.me`) dans toutes les pages
4. **SEO local**: adaptez le JSON-LD (adresse exacte, horaires, téléphone)
5. **Google Maps**: remplacez l'iframe par l'adresse exacte de l'institut

## Déploiement GitHub Pages
1. Pousser le code sur la branche `main`
2. Dans GitHub → **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` / folder `/ (root)`
5. URL attendue: `https://boobacar.github.io/Maabo-institut/`

## Prochaine amélioration conseillée
- Connecter le formulaire à un backend (Formspree, EmailJS, ou API Node/PHP)
- Compresser et renommer les images pour SEO (`soin-visage-dakar.jpg`, etc.)
- Ajouter Google Analytics / Search Console
