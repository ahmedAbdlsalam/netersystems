# Neter Systems — Company Website

A responsive Astro + Tailwind CSS company homepage, designed for Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Prepare for launch

1. Replace the placeholder `hello@YOUR-DOMAIN.COM` in `src/pages/index.astro` with your real business email.
2. Replace the custom N-shaped placeholder mark in the header and hero with your final logo (and update `public/favicon.svg`).
3. Update `site` in `astro.config.mjs` to your actual domain.
4. Review the company's service statements and contact details before publishing.

## Deploy on Cloudflare Pages

1. Push this directory to a GitHub repository.
2. In Cloudflare, go to **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository. Framework preset: **Astro**. Build command: `npm run build`. Build output directory: `dist`.
4. Deploy, then open **Custom domains** and connect your registered domain.

No database or server is needed for this version. Contact is a `mailto:` link; it needs a real email address to be useful. If you need a contact form later, Cloudflare Workers or a third-party form service can be integrated.

## Note

Brand icon is an original placeholder, not the previously selected official Neter Systems logo.
