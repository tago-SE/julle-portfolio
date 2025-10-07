# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Getting Started (for Node.js beginners)

### 1. Install Node.js

#### Windows users

- Download and install Node.js (which includes npm) from [https://nodejs.org/](https://nodejs.org/).
- After installation, open a new terminal (Command Prompt or PowerShell) and run:
  ```
  node --version
  npm --version
  ```
  to verify the installation.

#### macOS/Linux users

- Install [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) by following the instructions in the [nvm README](https://github.com/nvm-sh/nvm#installing-and-updating).
- Once `nvm` is installed, open a terminal and run:
  ```
  nvm install --lts
  nvm use --lts
  ```
- This will install and use the latest LTS version of Node.js (which includes npm).

### 2. Clone this repository  
   Open a terminal and run:
   ```
   git clone https://github.com/tago-se/julle-portfolio.git
   cd julle-portfolio
   ```

### 3. Install dependencies  
   In the project folder, run:
   ```
   npm install
   ```

### 4. Start the development server  
   ```
   npm run dev
   ```
   Then open the URL shown in your terminal (usually [http://localhost:5173](http://localhost:5173)) in your browser.

### 5. Build for production  
   ```
   npm run build
   ```

### 6. Preview the production build  
   ```
   npm run preview
   ```

### 7 Deploying to Github Pages

There is a GitHub Action which does this but if you need to do it manually run:
```
npm run deploy -- -m "DEPLOY_MESSAGE"
```
This will build and publish your site to the `gh-pages` branch.
