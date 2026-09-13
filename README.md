# Polash Research Portfolio 

A bright, motion-rich React + Vite research portfolio for Md. Saymon Hosen Polash.

- Bright warm visual system: cream, amber, coral, green and lime. No blue-gradient theme.
- The homepage cutout portrait is tightly cropped from the supplied transparent PNG so the person appears much larger without changing the photograph.
- `SAYMON HOSEN` is layered behind the transparent portrait, so the body naturally covers part of the name.
- Professional homepage summary rewritten around applied computer vision, low-resource agricultural AI, medical imaging, cybersecurity analytics, big-data handling, M.Sc. study and Ph.D. goals.
- Current international role: Remote Research Assistant at the Multimedia Signal & Image Processing (MSIP) Research Group, Woosong University, South Korea.
- Current GTA role at East West University under Dr. Pintu Chandra Shill, supporting Python Learning Lab, AI and Deep Learning labs.
- Former Undergraduate Teaching Assistant experience (1 year 8 months) under Dr. Afsana Al Sharmin.
- Supervisor/mentor photographs restored in the homepage People section and professional-profile page.
- Bangladesh ↔ South Korea international-research identity added.
- Personal-life images are NOT shown in the homepage pipeline. They appear only on the ordered Personal Life page, once each.
- Certificates page includes direct verification links supplied by the portfolio owner.
- GitHub, LinkedIn, Codeforces and LeetCode profiles added.
- Portfolio assistant added: a fast local RAG-lite knowledge retriever for questions about the portfolio and a small AI glossary. It does not require an external API key.
- Green leaves, clouds, falling research tokens, animated medical-scan visual, motion toggle, theme toggle and Bangladesh mission visual added.
- Dedicated Professional Profile page and Outlook & Opportunities page added.

## Run locally in VS Code

```bash
npm install
npm run dev
```

Open the Local URL printed by Vite, usually:

```text
http://localhost:5173/
```

## Production build

```bash
npm run build
npm run preview
```

## Main files

- `src/data/site.js` — profile, roles, publications, research areas, people, life moments, certificates and links
- `src/pages/Home.jsx` — long research-first homepage
- `src/pages/Profile.jsx` — professional/research summary and teaching/research appointments
- `src/pages/Life.jsx` — ordered non-repeating personal gallery
- `src/pages/Achievements.jsx` — certificates and verification links
- `src/pages/Outlook.jsx` — dedication, opportunities and future direction
- `src/components/PortfolioAssistant.jsx` — local portfolio RAG-lite assistant
- `src/components/Layout.jsx` — navigation, toggles and ambient motion
- `src/styles.css` — full V5 visual system

## GitHub Pages

The app uses `HashRouter` and Vite `base: './'`, which makes it suitable for GitHub Pages. The included GitHub Actions workflow builds and deploys the `dist/` folder.


<img width="948" height="440" alt="image" src="https://github.com/user-attachments/assets/b4c2aa8f-001a-4ae9-b6d7-a9a2aea5af9f" />

