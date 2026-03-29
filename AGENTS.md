# Repository Guidelines

## Project Structure & Module Organization
This repository is a small React 18 + Vite todo app. Application code lives in `src/`. Use `src/main.jsx` for bootstrapping, `src/App.jsx` for the top-level shell, and `src/components/` for feature components such as `TodoWrapper.jsx`, `Todo.jsx`, `CreateForm.jsx`, and `EditForm.jsx`. Global styles are in `src/App.css`. Static entry files live at the repo root: `index.html`, `vite.config.js`, and `.eslintrc.cjs`.

## Build, Test, and Development Commands
Install dependencies with `npm install`.

- `npm run dev`: starts the Vite dev server for local development.
- `npm run build`: creates a production bundle in `dist/`.
- `npm run preview`: serves the built app locally for a production-style check.
- `npm run lint`: runs ESLint on all `.js` and `.jsx` files and fails on warnings.

Run `npm run lint` before opening a pull request. Use `npm run build` when a change affects rendering, imports, or bundling.

## Coding Style & Naming Conventions
Follow the existing style in `src/`: functional React components, ES modules, and JSX files with PascalCase names for components (`TodoWrapper.jsx`). Use camelCase for variables, props, and functions (`toggleCompleted`, `updateTodo`). Keep indentation at 2 spaces and prefer double quotes and semicolons to match the current codebase. Keep component logic close to the component that owns the state, and avoid adding new dependencies for small utility needs.

ESLint is the enforced style gate. The config includes `react`, `react-hooks`, and `react-refresh`.

## Testing Guidelines
There is no automated test suite yet. For now, treat linting and manual verification as required checks. After changes, verify the main flows in the browser: create a todo, edit it, toggle completion, and delete it. If you add tests later, keep them next to the component or in `src/__tests__/` and use `*.test.jsx` naming.

## Commit & Pull Request Guidelines
Recent commit messages are short and imperative, for example `complete updateTodo`. Keep commits focused and use concise present-tense summaries. For pull requests, include:

- a brief description of the change
- any linked issue or task reference
- screenshots or a short GIF for UI changes
- notes about manual testing performed

## Configuration Notes
Do not commit `dist/` or local environment files. Keep changes compatible with the existing Vite and ESLint setup unless the task explicitly requires tooling changes.
