# Magician ✨

A curated resource directory for aspiring magicians — magic organizations, essential books, starter kits, basic tricks, and professional tips. Available as a cross-platform Electron desktop app and as a self-contained web demo / installable PWA.

> 🪄 **Live demo:** <https://guildmasterdev.github.io/Magician>

## Features

- **Magic Organizations** — Connect with prestigious magic societies worldwide including IBM, SAM, The Magic Circle, Academy of Magical Arts (Magic Castle), and FISM
- **Essential Books** — Curated collection of must-read magic books from beginner to advanced
- **Starter Kits** — Recommended magic sets and bundles for different skill levels and budgets
- **Basic Tricks** — Fundamental sleights and routines that form the foundation of magic
- **Tips & Advice** — Professional guidance and best practices
- **Global Search** — Fuzzy-match across every resource in one place
- **Offline-ready PWA** — Installable on desktop and mobile, works offline after first load

## Live Demo & PWA

The web build at <https://guildmasterdev.github.io/Magician> is a single self-contained HTML file with an embedded resource catalog and inlined styles. It registers a service worker (`sw.js`) and ships a `manifest.json`, so browsers that support it will offer to install Magician as a Progressive Web App:

- Open the site in Chrome, Edge, Safari, or Firefox
- Look for the "Install" prompt in your browser's address bar, or use _File → Install Magician_ (Chromium) / _Share → Add to Home Screen_ (iOS Safari)
- Once installed, the app works fully offline

## Desktop App (Electron)

### Prerequisites
- Node.js 20 or newer
- npm

### Setup
```bash
git clone https://github.com/guildmasterdev/Magician.git
cd Magician
npm install
npm start
```

### Development
```bash
npm run dev
```

## Technology Stack

- **Electron 41** — Modern cross-platform desktop runtime with context isolation and sandboxing enabled
- **electron-builder 26** — Produces signed desktop installers for macOS, Windows, and Linux
- **Vanilla JavaScript** — No frameworks, no build step for the web demo
- **HTML5 / CSS3** — Modern layout with glassmorphism and gradient backgrounds
- **Service Worker + Web App Manifest** — Offline support and installability

## Project Structure

```
Magician/
├── .github/workflows/  # CI and GitHub Pages deployment
├── assets/             # Desktop app icons
├── web/                # Self-contained web demo / PWA
│   ├── index.html      # Single-file app (HTML + CSS + JS + data)
│   ├── manifest.json   # PWA manifest
│   ├── sw.js           # Cache-first service worker
│   └── icons/          # PWA icons (32/192/512)
├── main.js             # Electron main process
├── preload.js          # Context-isolated preload bridge
├── renderer.js         # Desktop renderer logic
├── index.html          # Desktop app window
├── styles.css          # Desktop app styling
├── data.js             # Magic resources data (shared source of truth)
└── package.json        # Project + electron-builder config
```

## Building Desktop Installers

```bash
npm run build           # current platform
npm run build:mac       # macOS .dmg + .zip (x64 + arm64)
npm run build:win       # Windows NSIS installer + portable .exe
npm run build:linux     # Linux AppImage + .deb
npm run dist            # all three platforms (requires signing setup on non-native)
```

Artifacts land in `dist/`.

## Continuous Integration

- `.github/workflows/ci.yml` — runs `node --check` on every JS file in the repo on push and pull request
- `.github/workflows/deploy-web.yml` — publishes `web/` to GitHub Pages on every push to `main`

## Contributing

Contributions are welcome! Please feel free to submit pull requests with:
- New or updated magic resources
- UI/UX improvements
- Bug fixes
- Additional features

## License

MIT — see [LICENSE](LICENSE).

## Author

David — [GuildMasterDev](https://github.com/GuildMasterDev)

## Acknowledgments

- The magic community for continuous inspiration
- All the legendary magicians whose work is featured in the resources
- The Electron team for the framework

---

**Remember the Magician's Code:** Never reveal the secret behind a trick. Keep the magic alive! 🎩✨
