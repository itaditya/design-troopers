## Design Troopers

Made to understand how different tools can be used to build a Design System.

### Tools Used-

* Tailwind + PostCSS for styling.
* [Birla](https://www.npmjs.com/package/birla) for generating components from template.
* Rollup for bundling lib.
* Styleguidist + Webpack for docs.
* Jest for component testing.
* Cypress for E2E testing.
* Percy for Visual testing.
* Flow for adding types.

### Setup Guide-

1. Download yarn and this repo run `yarn install`.
1. Open docs in dev (watch) mode via `yarn docs:dev`.
1. Run E2E tests on docs with `yarn cy:open`.

### Visual Testing.

#### Chromatic
Get the `CHROMATIC_APP_CODE` from Chromatic website then run

```sh
CHROMATIC_APP_CODE=XXXXX yarn chromatic
```
