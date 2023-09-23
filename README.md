# Forum App

A Reddit-like forum app as final project submission for the [React Developer Expert Course](https://www.dicoding.com/academies/418) on Dicoding.

In this app user can create threads, upvote and downvote the threads, comment other user threads, and filtering the threads based on available categories.

Developed using [Create React App](https://github.com/facebook/create-react-app) and [Tailwind CSS](https://tailwindcss.com/) with Test Driven Development culture.

This project implements:
- Unit testing, integration testing, End-to-End testing, and automation testing using Jest, React Testing Library, and Cypress
- State management using Redux
- Component isolation environment using Storybook
- CI/CD using Vercel

Still not fully responsive yet due to lack of development time and not the main objective of the submission. \
Gonna to improve it soon tho.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run e2e`

Runs the end-to-end testing using Cypress.

### `npm run storybook`

Runs and starts the Storybook. \
Open [http://localhost:6006](http://localhost:6606) to view it in your browser.

### `npm run build-storybook`

Compile Storybook instance so it can be deployed.

### `npm run ci:test`

Do all testing for the CI/CD process.

## Installation

- Install all the dependencies `npm install`
- Run the app with `npm start`
- You can create your own account in register page
- Or you can use the dummy account, email: test177013@gmail.com | password: qwerty123