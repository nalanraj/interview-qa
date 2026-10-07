# QA Engineer Interview Exercise

A small local shop with three browser scenarios written in Gherkin and automated with Playwright. The suite is intentionally imperfect; treat it as code to review, not as a model implementation.

## Candidate task

1. Install dependencies and the Playwright Chromium browser.
2. Run the scenarios and inspect the feature files, page objects, step definitions, support code, and demo application.
3. Explain what each scenario is intended to verify.
4. Identify test design, reliability, maintainability, and coverage risks. Be ready to prioritize the issues and suggest improvements.

Do not change the code during the initial review. This exercise is intentionally self-contained and uses a local demo site rather than an external service.

## Setup

Requires Node.js 20 or later and npm.

```sh
npm install
npx playwright install chromium
npm test
```

For a visible browser, run `npm run test:headed`. The suite starts and stops its own local demo server; the app is available at `http://127.0.0.1:4173` while scenarios run.

The private interviewer notes are kept in `ANSWER_KEY.md`, which is excluded by `.gitignore`. Keep that file untracked and do not share it with candidates.
