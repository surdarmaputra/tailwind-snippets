# Next.js TS Tailwind Starter

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and packed with useful stuff to support your development workflow.

**Features**

- TypeScript
- Tailwind CSS with pre-configured colors
- Basic components following [atomic design](https://bradfrost.com/blog/post/atomic-web-design/) concept
- Storybook
- Access thousands of icons using [unplugin-icons](https://github.com/antfu/unplugin-icons)
- Make sure commit messages meet [conventional commit](https://www.conventionalcommits.org/) format using [commitlint](https://github.com/conventional-changelog/commitlint)
- Run formatters and linters within Git hooks using [lefthook](https://github.com/evilmartians/lefthook)
- Manage release using [standard-version](https://github.com/conventional-changelog/standard-version)

## Getting Started

Bootstrap the project using `create-next-app`:

```bash
# Use yarn because the starter kit already has yarn.lock
yarn create next-app -e https://github.com/surdarmaputra/next-ts-tailwind-starter
```

or use [degit](https://github.com/Rich-Harris/degit):

```bash
# Clone the repo
npx degit https://github.com/surdarmaputra/next-ts-tailwind-starter project_dir_name

# then install dependencies
cd project_dir_name
yarn
```

Run the development server:

```bash
# Run the app server
yarn dev

# Run the storybook server
yarn storybook
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

Open [http://localhost:6006](http://localhost:6006) to explore the storybook.

The page and storybook auto-update as you edit the file.

## API Routes

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Project Convention

- There's a pre-configured color palette that includes `primary`, `success`, `danger`, `warning` and `dark` colors (configured in `tailwind.config.js`). To reduce complexity in the app, it's recommended to use these colors instead of all colors provided by tailwind.
- Components are grouped using the `atomic-design` principle.
- Commit and PR titles use the conventional commit format.

## References

- [Next.js documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Next.js deployment documentation](https://nextjs.org/docs/deployment) - how to deploy Next.js.
- [Deploy to Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) - create a new deployment on Vercel.
- [Install icon set](https://github.com/antfu/unplugin-icons#install-by-icon-set) - install desired icon set using unplugin-icons.
- [Icons browser](https://icones.js.org/) - browse available icons.
