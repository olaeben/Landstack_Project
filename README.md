# Landstack Testing Project

This project contains end-to-end test for navigating and interacting with Google and the Landstack website using Cypress Framework and TypeScript Programming Language. The test involves Navigating to Google UK page,
Searching for "Landstack", 
Finding and selecting the Landstack website from search results, 
Navigating to the "People" page on the Landstack website, and 
Retrieving bio content for the MD Jos Pink.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Install [Node.js](https://nodejs.org/) (version 18 or higher recommended).

## Project Setup

### Cloning the Repository

Clone the repository to your local machine
   ```sh
   git clone <repository_url>
   cd <repository_directory>
   ```

## Installing Dependencies
#### Install the necessary npm dependencies

```sh
npm install
```

## Running Tests
#### Run the Test in Headless Mode

```sh
npm run test
```

#### Run the Test in Headed Mode (with the Cypress Test Runner UI)

```sh
npm run testui
```
- Select E2E Testing
- Select any Browser displayed
- Click Start E2E Testing (Browser) Button
- Click on googleLandstack.cy.ts file under cypress/e2e folder

This `README.md` file provides all the necessary information to set up, configure, and run the Cypress tests for your project. 

