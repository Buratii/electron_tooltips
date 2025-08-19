# electron\_tooltips

A minimal Electron + React (Vite) desktop app that showcases a **tooltip guide / product tour** component. It ships with two simple JSON/TS mocks: a users list and a page‑aware guide definition (tooltips for a list page and a form page).

---

## ✨ Features

* **Tooltip guide** demo with step‑through actions (next / finish)
* Mocked **Users** list and **User Form**
* **Tailwind CSS v4** styling, Headless UI helpers
* TypeScript everywhere
* Packaging via **electron‑builder** (macOS, Windows, Linux)

---

## 📦 Scripts

From `package.json`:

| Script                       | Description                                                            |
| ---------------------------- | ---------------------------------------------------------------------- |
| `npm run dev`                | Run renderer (Vite) and Electron in parallel (development).            |
| `npm run dev:react`          | Start Vite dev server for React.                                       |
| `npm run dev:electron`       | Transpile Electron TS and launch Electron with `NODE_ENV=development`. |
| `npm run build`              | Type‑check & build renderer via Vite.                                  |
| `npm run preview`            | Preview Vite production build.                                         |
| `npm run transpile:electron` | Transpile Electron main process (`src/electron/tsconfig.json`).        |
| `npm run dist:mac`           | Package macOS (arm64) app via electron‑builder.                        |
| `npm run dist:win`           | Package Windows (x64) app via electron‑builder.                        |
| `npm run dist:linux`         | Package Linux (x64) app via electron‑builder.                          |
| `npm run test:e2e`           | Run Playwright end‑to‑end tests.                                       |
| `npm run test:unit`          | Run Vitest unit tests in `src`.                                        |

---

## 🚀 Getting Started

### Prerequisites

* **Node.js** ≥ 18 (LTS recommended)
* **npm** ≥ 9
* macOS / Windows / Linux supported

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

* Opens the Vite dev server for the renderer.
* Starts Electron pointing to the dev server.

### Production Build (Renderer only)

```bash
npm run build
```

### Package Desktop App

* **macOS (arm64 / Apple Silicon):**

  ```bash
  npm run dist:mac
  ```
* **Windows (x64):**

  ```bash
  npm run dist:win
  ```
* **Linux (x64):**

  ```bash
  npm run dist:linux
  ```

> Note: Code signing / notarization is **not** configured by default. If you need signed builds, add the appropriate configuration to `electron-builder.yml` or `package.json` per platform.

---

## 🧪 Mocks

### Users List Mock (`users.mock.ts`)

```ts
export const mockedData = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    birthday: "2025-08-01T21:26:06.102Z",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    birthday: "2025-08-01T21:26:06.102Z",
  },
];
```

### Tooltip Guide Mock (`guides.mock.ts`)

```ts
import type { Guide } from "../types/guide.interface";

export const guides: Guide[] = [
  {
    page: "list",
    tooltips: [
      { id: "input-search",  title: "User Search",       content: "Use this search bar to quickly find users by typing their name or email. Start typing to see filtered results instantly.", action: "next" },
      { id: "button-add",    title: "Add a New User",    content: "Click this button to navigate to the user registration form and add a new user to the list.", action: "next" },
      { id: "users-table",   title: "Users Table Header", content: "This is the header of the users table. Below, you'll find detailed information for each user in the list.", action: "next" },
      { id: "column-name",   title: "Name Column",       content: "This column displays the full name of each user. Click on a name to view more details (feature coming soon).", action: "next" },
      { id: "column-email",  title: "Email Column",      content: "This column shows the email address associated with each user. Ensure emails are unique and valid.", action: "next" },
      { id: "column-birthday", title: "Birthday Column", content: "This column displays the user's date of birth in DD/MM/YYYY format.", action: "finish" },
    ],
  },
  {
    page: "form",
    tooltips: [
      { id: "input-name",     title: "Full Name Field",     content: "Enter the complete name of the user here. This field is mandatory for creating a user profile.", action: "next" },
      { id: "input-email",    title: "Email Address Field", content: "Provide a valid email address for the user. Make sure there are no typos as this will be used for communication.", action: "next" },
      { id: "input-birthday", title: "Birthday Field",      content: "Enter the user's date of birth in DD/MM/YYYY format. The field has an input mask to guide you.", action: "next" },
      { id: "cancel-button",  title: "Cancel Button",       content: "If you wish to discard changes and go back to the previous page, click here.", action: "next" },
      { id: "submit-button",  title: "Save User",           content: "Once all fields are filled correctly, click here to save the new user into the system.", action: "finish" },
    ],
  },
];
```

---

## 🧭 How the Tooltip Guide Works

* The guide is **page‑aware** via the `page` field (e.g., `"list"`, `"form"`). Use your router location to pick the correct guide.
* Each tooltip targets a DOM element by **ID** (e.g., `id="input-search"`). Ensure your components render these IDs.
* `action` controls flow:

  * `"next"` → proceed to the next tooltip in the current page sequence
  * `"finish"` → closes the guide
* A small state machine/hook (e.g., `useGuide`) can:

  * Expose `currentStep`, `next()`, `finish()`
  * Handle visibility and focus/scroll‑into‑view of target elements
  * Optionally persist progress (localStorage) so the tour doesn’t restart every time

---

## 🙌 Acknowledgements

* Electron, Vite, React, Tailwind teams and community packages used in this demo.
