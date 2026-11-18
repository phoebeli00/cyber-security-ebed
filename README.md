# Student Employee Cybersecurity Onboarding Training

- GitHub: https://github.com/shuos-hci/ebed_cybersecurity
- Vercel project: https://vercel.com/shuo-is-the-best/ebed_cybersecurity
- Production: https://ebedcybersecurity.vercel.app/
- Production branch: `main`

## Edit and preview

The complete interactive course is in `public/training.html`. It was migrated from the existing Claude Code artifact, retaining its content, styles, scripts, and pixel illustrations. The home URL rewrites to this file without changing the address.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Before pushing, run `npm run build`.

Push changes to `main` to trigger the existing Vercel production deployment.

Open this repository folder in VS Code. The installed Claude Code and Codex extensions remain available; they do not need to be copied into the repository. Existing conversations in the original window remain there. Start future project work in this folder and edit `public/training.html`, rather than the previous temporary artifact.

## Activities

- Activity 1 — Consequence Mapping: `public/training.html`, available at `/`.
- Activity 2 — Choosing Among Tools: `public/choosing-tools.html`, available at `/choosing-tools.html`. See [the Activity 2 notes](README-activity2.md).
- Activity 3 — Tool Selection Simulation: `public/tool-selection.html`, available at `/tool-selection.html`.

All three pages include course navigation, with Back and Next controls for adjacent activities.
