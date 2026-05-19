![Fabulous Design System](./fds.png)

# Fabulous Design System

*Oh, this? It is not "just another button library." It is a carefully orchestrated visual regime where spacing is intentional, typography is disciplined, and rogue hex values are quietly shown the door. If you still think design tokens are optional, that is all.*

This is a [Next.js](https://nextjs.org) app for exploring a pink-forward enterprise design system. The current landing page is an executive CRM dashboard with revenue metrics, pipeline health, priority accounts, activity, and team focus modules.

## What's Inside

- `src/app/page.tsx` - the main CRM dashboard landing page.
- `src/app/globals.css` - Tailwind CSS setup and semantic design tokens.
- `src/components/ui/` - reusable design system primitives, including `Button`, `Card`, `Badge`, `Input`, `Avatar`, and `Progress`.
- `src/lib/utils.ts` - shared class name merging helper.

## Design System Notes

The UI uses semantic tokens such as `background`, `card`, `primary`, `secondary`, `muted`, `border`, and `ring` instead of one-off color values. Components should prefer these tokens so new screens stay aligned with the theme.

The dashboard is intentionally built from small primitives:

- Cards for dashboard modules and metric tiles.
- Badges for state, trend, and segment labels.
- Buttons for primary actions and dashboard controls.
- Avatars for owners, deal desk coverage, and account identity.
- Progress bars for forecast confidence and pipeline stage health.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Editing The Dashboard

Start with `src/app/page.tsx`. Most dashboard content is driven by local arrays near the top of the file, so labels, metrics, pipeline stages, accounts, and activity items can be changed without digging through the JSX.

When adding new UI, check `src/components/ui/` first and compose existing primitives before creating a new component. If a new primitive is needed, keep it token-driven and colocate it in `src/components/ui/`.

## Learn More

Useful references:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)


