# zoran.pecic.dev

Personal portfolio. Nuxt 4, static generation, no runtime server and no UI dependencies.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build and deploy

```bash
npm run generate   # static site in dist/
```

Deployment is manual: run the "Manual Nuxt SSG Build and Deploy" workflow in GitHub Actions. It generates the site, gzips it and copies `dist/` to the VPS.

## Where things live

- `app/components/sections/` one component per page section, content inline in each
- `app/assets/css/main.css` tokens, type, buttons and the scroll-reveal classes
- `app/composables/useScrollAnimation.ts` IntersectionObserver that reveals `.animate-on-scroll` elements; served HTML stays visible without JS
- `public/images/` portrait, logo, tech logos and project screenshots
