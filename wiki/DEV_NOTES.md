# Developer Notes

- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

- [Deploying GH-Pages with custom hostname (gh-pages package)](https://github.com/tschaub/gh-pages#deploying-to-github-pages-with-custom-domain)

- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Finding Unused npm Packages

To find unused npm packages in your project, use [depcheck](https://www.npmjs.com/package/depcheck):

1. Install depcheck:
   ```
   npm install --save-dev depcheck
   ```
2. Run depcheck:
   ```
   npx depcheck
   ```
This will list unused dependencies and devDependencies in your project.