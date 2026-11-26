# SchemeConnect AI

SchemeConnect AI is a bilingual, privacy-first government scheme discovery prototype for Indian citizens and CSC-style operators. It uses a guided eligibility questionnaire, central/state scheme filtering, official-source links, and live application-status alerts.

## Features

- Hindi and English interface
- Central and Madhya Pradesh scheme catalogue
- Search and category filters
- Four-step eligibility questionnaire
- “I don't know” handling for uncertain answers
- Ranked preliminary results
- Document checklists and official application links
- Scheme status badges: active, deadline, and closed
- Notification bell, notification drawer, and deadline toast
- Automatic status refresh every 60 seconds
- Responsive government-style UI

## Architecture

```text
Browser / PWA
  |
  |-- React-style vanilla UI (Phase I implementation)
  |-- HTML, CSS, and TypeScript-like JavaScript eligibility flow
  |-- Adaptive questionnaire and three-valued eligibility model
  |-- Browser-local answers; no Aadhaar or persistent personal profile
  |
  +--> Static scheme catalogue
  |      index.html, script.js, styles.css
  |
  +--> Status service boundary
         data/scheme-status.json
         Polled every 60 seconds
         Replace with authenticated REST API in Phase II
```

### Frontend

- `index.html`: accessible page structure, navigation, scheme sections, wizard, dialogs, and notifications
- `styles.css`: responsive government portal visual system and component states
- `script.js`: translations, filtering, eligibility wizard, scheme details, status polling, and alert rendering
- `data/scheme-status.json`: versionable status/deadline feed consumed at runtime

### Eligibility engine

The prototype uses explicit criteria and preserves uncertainty:

- **Eligible**: all required conditions are satisfied
- **Possibly eligible**: one or more answers are unknown
- **Not eligible**: at least one required condition fails

Unknown answers are not treated as negative answers. Personal answers remain in browser memory only and are not written to storage.

### Phase I versus Phase II

**Phase I**

- Offline-first client
- Local scheme catalogue
- Adaptive questionnaire
- Static or JSON status feed
- Traceable official links

**Phase II**

- FastAPI REST service
- PostgreSQL scheme and rule database
- Versioned JSON rules
- Consent and audit records
- Retrieval-based assistant
- BM25 + FAISS guideline search
- BHASHINI speech and translation
- Self-hosted open-weight language model

## Live status design

The browser polls `data/scheme-status.json` every 60 seconds. A status object contains:

```json
{
  "status": "deadline",
  "deadline": "2026-12-31T23:59:59+05:30",
  "message": "Verify the current deadline on the official portal."
}
```

Supported values are `active`, `deadline`, and `closed`. For production, the JSON endpoint should be replaced with an authenticated status API backed by a curator workflow and official-source verification.

> Important: deadline entries in this prototype are demonstration reminders, not legally verified application dates. Always verify against the official linked portal before applying.

## Run locally

Requirements: Node.js 18+.

```powershell
cd c:\Users\ameyc\Downloads\epics
npm start
```

Open `http://localhost:3000`.

For direct development:

```powershell
npx --yes serve .
```

## Deploy to Vercel

The project includes `vercel.json` and a static build script. No framework or environment variables are required for the prototype.

### Deploy from the Vercel CLI

```powershell
npm install --global vercel
vercel login
vercel
```

To deploy directly to production:

```powershell
vercel --prod
```

### Deploy from GitHub

1. Push this project to a GitHub repository.
2. Import the repository at `https://vercel.com/new`.
3. Vercel will detect the static project and use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

The `/data/scheme-status.json` endpoint is configured with `no-store` headers so application status updates are not cached.

## Verification checklist

- Run JavaScript syntax check:

```powershell
node --check script.js
```

- Open the status feed directly:

```text
http://localhost:3000/data/scheme-status.json
```

- Confirm:
  - mobile layout has no horizontal overflow
  - Hindi/English text switches
  - notification count reflects deadline statuses
  - status refresh updates after 60 seconds
  - scheme dialog links open official portals
  - browser console reports no errors

## Security and privacy

- No Aadhaar, personal identity, or banking data is collected
- Questionnaire answers are held in memory
- No analytics or personal-answer persistence is included in Phase I
- Every scheme status or deadline must link to an official source
- Status feeds should be signed or served by a trusted backend in production
- Curators should re-verify official rules every 90 days

## Official source types

- Central and state scheme portals
- National myScheme portal
- Press Information Bureau releases
- All India Radio announcements
- District and state application portals
