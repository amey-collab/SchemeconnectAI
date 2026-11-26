# SchemeConnect AI

SchemeConnect AI is a citizen-facing prototype for discovering Indian central and state government schemes. It combines a bilingual landing page, scheme catalogue, guided questionnaire, official portal links, and application-status notifications.

> **Prototype notice:** This repository currently contains a static frontend. It does not connect to a government database or verify a citizen's eligibility. Scheme status entries and deadlines are sample data; always confirm details on the linked official portal.

## Contents

- [Start here](#start-here)
- [What works today](#what-works-today-phase-i)
- [Architecture](#architecture-today)
- [Project structure](#project-structure)
- [Scheme status feed](#scheme-status-feed)
- [Phase II plan](#phase-ii-plan)
- [Development and deployment](#development-and-deployment)
- [Privacy, security, and trust](#privacy-security-and-trust)
- [Sources and verification](#sources-and-verification)

## Start here

### For citizens and reviewers

1. Open the home page and select a support category, or choose **Check my eligibility**.
2. Answer the questionnaire. “I don't know” is available for uncertain answers.
3. Browse the suggested schemes, search by name, or filter by category and government level.
4. Open a scheme for its benefit, document checklist, and official portal link.
5. Use the notification bell to see deadline reminders.
6. Verify current eligibility, status, documents, and dates with the official scheme portal before acting.

The questionnaire is a demonstration flow, not an official application or a definitive eligibility decision. Answers are held in page memory and are not submitted to a server.

### For developers

Requirements: Node.js 18+.

```powershell
cd c:\Users\ameyc\Downloads\epics
npm start
```

Open `http://localhost:3000`. The development command serves the project root so edits are visible without a build.

## What works today (Phase I)

- Responsive, government-inspired frontend with English and Hindi text for the main page.
- Category browsing, keyword search, and Central/State filtering.
- A four-step questionnaire with “I don't know” options.
- Scheme detail dialogs with benefit descriptions, document examples, and external links.
- Scheme status badges and a notification drawer/toast.
- Status JSON is fetched with `cache: "no-store"` at page load and polled every 60 seconds.
- Static build output for Vercel.

### Important implementation limits

- The questionnaire currently uses broad support-category matching to suggest catalogue entries. It does **not** evaluate each scheme's age, income, land, caste, or other official eligibility rules.
- “Likely matches” and “Possibly eligible” are prototype labels. Do not treat them as confirmed eligibility.
- `data/scheme-status.json` is a static file. Polling it again only reads the latest deployed file; it does not fetch updates from government portals. A deployment or another live backend is needed for status changes to reach users.
- Some portal links, scheme details, and deadline reminders are sample/reference content and need curator verification before public use.
- There is no backend, account system, admin console, database, push-notification service, or automated government data integration yet.

## Architecture today

```text
                         Static hosting (Vercel)
                                  |
                                  v
┌──────────────────────────────────────────────────────────┐
│ Browser                                                  │
│                                                          │
│ index.html                                               │
│   Page structure, navigation, dialogs, alert regions     │
│       |                                                  │
│       +--> styles.css                                    │
│       |    Responsive visual system                      │
│       |                                                  │
│       +--> script.js                                     │
│            Catalogue, filters, translations, wizard,     │
│            status polling, notifications                 │
└───────────────────────────┬──────────────────────────────┘
                            |
                            | GET /data/scheme-status.json
                            | every 60 seconds (same-origin)
                            v
                  Static JSON status feed
```

This is a static HTML/CSS/JavaScript application, not a React application or installable PWA. No personal questionnaire answers are stored in local storage or sent to a service.

### Main user flow

```text
Select support goal -> answer profile questions -> see broad catalogue matches
       -> inspect scheme details -> open official portal to verify/apply
```

### Status notification flow

```text
Load page -> fetch status JSON -> render badges and alert count
         -> show one deadline toast -> repeat fetch every 60 seconds
```

The browser computes deadline countdown text from the feed's ISO timestamp. The feed itself must be maintained; no source is polled automatically.

## Project structure

```text
.
├── index.html                 Main page and accessible UI structure
├── styles.css                 Layout, responsive styling, dialogs, and alerts
├── script.js                  Catalogue, filtering, wizard, language, and status UI
├── data/
│   └── scheme-status.json     Static status/deadline feed
├── scripts/
│   └── build.js               Copies the static site to dist/
├── package.json               Local commands and build script
├── vercel.json                Vercel build, output, headers, and route configuration
├── .gitignore
└── .vercelignore
```

### Frontend modules in `script.js`

- **Catalogue:** scheme records, categories, links, benefits, and document examples.
- **Translations:** English/Hindi dictionary for page content.
- **Browsing:** category selection, search, and level filters.
- **Questionnaire:** in-memory answers and result rendering.
- **Details:** scheme modal with the official application link.
- **Status UI:** status-feed fetch, deadline presentation, and notification components.

The current script is a single browser module with no bundler or runtime dependency.

## Scheme status feed

The data file is `data/scheme-status.json`. Every status key must match a scheme `id` in `script.js`.

```json
{
  "updatedAt": "2026-11-26T16:54:00+05:30",
  "source": "Official portal links; demo status feed",
  "statuses": {
    "post-matric": {
      "status": "deadline",
      "deadline": "2026-12-31T23:59:59+05:30",
      "message": "Prototype reminder. Verify the current date on the official portal."
    }
  }
}
```

Supported `status` values:

| Value | Meaning in the interface |
|---|---|
| `active` | Applications or service appear available; verify on official portal |
| `deadline` | Show a deadline badge and alert |
| `closed` | Show a closed badge |

`deadline` should be an ISO 8601 timestamp with timezone, or `null` when not applicable. `message` should explain the status and disclose uncertainty. Missing scheme status currently falls back to an active-looking badge, so maintain complete records and do not interpret a missing record as verified.

### Updating statuses safely

1. Check the scheme's official source and current notice.
2. Update the matching entry and `updatedAt`.
3. Keep the official source URL in the scheme record, and explain special conditions in `message`.
4. Verify the JSON parses and the deployed endpoint returns the new data.
5. Record who verified the entry and when as part of the future curation workflow.

The included scholarship deadlines are **demonstration dates, not confirmed deadlines**. Replace them with verified data or remove the deadline status before relying on the alerts.

## Phase II plan

Phase II is planned work; it is **not implemented in this repository yet**. The goal is to replace static/demo data and broad matching with a traceable, maintainable eligibility and status service.

### Proposed architecture

```text
Citizen / CSC browser
        |
        | HTTPS JSON API
        v
FastAPI service
  ├── Eligibility evaluator (versioned rules; true/false/unknown)
  ├── Scheme catalogue and status API
  ├── Source/verification metadata
  ├── Consent and audit endpoints
  └── Optional retrieval assistant (answers cite approved sources)
        |
        +--> PostgreSQL: schemes, rules, sources, status history
        +--> Guideline index: BM25 + FAISS (only reviewed documents)
        +--> Translation/speech integration: BHASHINI, after consent
        +--> Curator/admin workflow: review, publish, and expiry tracking
```

### Phase II workstreams and acceptance outcomes

1. **Data model and provenance**
   - Store schemes, jurisdiction, benefits, criteria, exclusions, documents, application route, source URLs, verification date, and rule version.
   - Keep source and verification metadata for every user-visible claim.
   - Reject publication when required source or verification fields are missing.

2. **Eligibility rules engine**
   - Encode explicit scheme conditions as versioned data, not scattered UI checks.
   - Evaluate conditions using `true`, `false`, and `unknown`; never silently treat unknown as false.
   - Return a result per scheme with matched conditions, failed conditions, unknown answers, plain-language reasons, and rule version.
   - Add boundary tests for ages, income limits, dates, and missing answers before publishing a rule set.

3. **FastAPI service and PostgreSQL**
   - Define an OpenAPI contract and versioned endpoints for scheme search, scheme details, screening, and status.
   - Validate API inputs and outputs, add migrations, and provide health/readiness endpoints.
   - Add rate limits, structured errors, request IDs, and operational logging without logging sensitive answers.

4. **Live status and notification pipeline**
   - Add a reviewed curator source for status changes; never scrape or infer a deadline without validation.
   - Store status history, source URL, verified-at timestamp, effective date, and optional expiry.
   - Serve cache-controlled status API responses; use server-sent events or WebSockets only if there is a measured need.
   - Add browser notifications only after explicit user permission; keep in-page notifications as the default.

5. **Curator/admin workflow**
   - Create draft → second-person review → publish → re-verify/expire workflow.
   - Flag records that have not been verified within 90 days.
   - Maintain an audit trail for edits and publish actions, with role-based access.

6. **Guideline search and assistant (optional)**
   - Index approved official circulars and guidelines using BM25 and FAISS.
   - Return source citations and page/section references with generated explanations.
   - Refuse to invent eligibility criteria when supporting evidence is missing.
   - Consider a self-hosted open-weight model only after privacy, safety, quality, and operating-cost evaluation.

7. **Accessibility, localization, and operations**
   - Complete Hindi translations and test with native speakers; add other languages based on user research.
   - Add keyboard/screen-reader checks and mobile/low-bandwidth testing.
   - Add automated tests, dependency/security checks, backups, monitoring, and documented incident procedures.
   - Complete privacy/legal review before handling any personal data.

### Suggested delivery sequence

| Milestone | Outcome | Depends on |
|---|---|---|
| P2.1 Contract and data model | Reviewed API schema and source/provenance model | Existing catalogue audit |
| P2.2 Rules and tests | Versioned rules with boundary and unknown-answer tests | P2.1 |
| P2.3 API and database | Search, details, screening, status endpoints | P2.1, P2.2 |
| P2.4 Curator publishing | Two-person approval and expiry/verification tracking | P2.3 |
| P2.5 Frontend integration | Replace static status feed and broad-match results with API responses | P2.3 |
| P2.6 Assistant and language services | Evidence-grounded retrieval and opt-in language features | P2.3, P2.4, privacy review |

### Phase II is complete only when

- Every published scheme condition has an official, reviewable source and a version.
- Eligibility outputs explain pass/fail/unknown conditions and have automated boundary tests.
- Status updates carry a verification timestamp and cannot be presented as confirmed when stale.
- The UI clearly distinguishes guidance from official decisions.
- Privacy, accessibility, security, and operations reviews pass before launch.

## Development and deployment

### Build

```powershell
npm run build
```

The build copies the static app and `data/` directory into `dist/`. Vercel is configured to run this command and publish `dist`.

### Deploy to Vercel

The GitHub repository is configured for Vercel import. From the Vercel dashboard:

1. Import the repository.
2. Use build command `npm run build`.
3. Use output directory `dist`.
4. Deploy.

CLI alternative:

```powershell
npm install --global vercel
vercel login
vercel --prod
```

`vercel.json` sets security headers and a `no-store` cache policy for `/data/*`. That prevents browser/CDN caching of the static endpoint but **does not make the file live**; live updates require a new deployment or a Phase II status API.

### Validation

```powershell
node --check script.js
node --check scripts/build.js
npm run build
```

After deployment, verify the homepage, static assets, `/data/scheme-status.json`, language toggle, filters, scheme links, and notification panel. Check browser console and network failures.

## Privacy, security, and trust

- The Phase I questionnaire does not ask for Aadhaar and does not transmit or persist answers.
- Scheme content can mention documents that applicants may need, but the prototype does not collect those documents.
- External application links should use official scheme portals; verify every link before public launch.
- Demo status is not authoritative. Do not advertise estimated dates as official deadlines.
- Phase II must minimize personal data, obtain consent for any optional processing, and avoid logging sensitive answers.
- Protect curator write access, validate status feed data, and maintain review/audit records.
- Never ask citizens to share OTPs, bank credentials, or Aadhaar details through this discovery tool.

## Sources and verification

Use the scheme's official guideline/portal as the authority. Discovery and cross-checking may use myScheme; policy changes may be cross-checked against official government releases such as PIB. State and district portals may define local application windows and implementation details.

**Last documentation update:** 2026-11-26
