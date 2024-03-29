

# NxDemoMonorepo

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/getting-started/intro)

[Interactive Tutorial](https://nx.dev/tutorial/01-create-application)

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`
- [React](https://reactjs.org)
  - `ng add @nrwl/react`
- Web (no framework frontends)
  - `ng add @nrwl/web`
- [Nest](https://nestjs.com)
  - `ng add @nrwl/nest`
- [Express](https://expressjs.com)
  - `ng add @nrwl/express`
- [Node](https://nodejs.org)
  - `ng add @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

## Generate an application

Run `ng g @nrwl/angular:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `ng g @nrwl/angular:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@nx-demo-monorepo/mylib`.

## Development server

Run `ng serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g component my-component --project=my-app` to generate a new component.

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev/angular) to learn more.






## ☁ Nx Cloud

### Distributed Computation Caching & Distributed Task Execution

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.


## Cheatsheet

1. create project
```
npx create-nx-workspace@latest
```
2. start application (https://nx.dev/angular-tutorial/01-create-application)
```
npx nx serve todos - запуск приложения todos
```
3. start e2e tests (https://nx.dev/angular-tutorial/02-add-e2e-test)
```
npx nx e2e todos-e2e --watch
```
4. nx plugins list
```
nx list
```
5. install plugin
```
npm install --save-dev @nrwl/nest
```
or
```
yarn add --dev @nrwl/nest
```
6. Create a NestJS application
```
npx nx g @nrwl/nest:app api --frontendProject=todos
```
commands:
```
npx nx serve api // to serve the application
npx nx build api // to build the application
npx nx test api // to test the application
```
7. Create library
```
npx nx g @nrwl/workspace:lib data
```
8. Create UI library
```
npx nx g @nrwl/angular:lib ui
```
9. Add component to library
```
npx nx g component todos --project=ui --export
```
10. Using the Project Graph
```
npx nx graph
```
11. Build todos app
```
npx nx build todos
```
12. Use the run-many command to rebuild the two applications
```
npx nx run-many --target=build --projects=todos,api
```
Add --parallel to any command, and Nx does most of the work in parallel.
13. Run the command to see affected apps
```
npx nx affected:apps
```
14. Run the command to see affected libraries
```
npx nx affected:libs
```
15. Test affected projects
```
npx nx affected:test
```
16. Run the command to retest the failed projects
```
npx nx affected:test -- --only-failed
```
17. You can run any target against the affected projects in the graph like this:
```
# The following are equivalent
npx nx affected --target=build
npx nx affected:build
```
