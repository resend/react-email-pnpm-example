# React Email with pnpm workspaces

This example shows how to use [React Email](https://github.com/resendlabs/react-email) 
with [pnpm](https://pnpm.io/) workspaces sharing components, emails and still being able to use the preview client.

## Overview

### At a glance

If you try running the main part of the example, (`apps/next-app`), you will be met with
a page that has a centered button that will send you the email from 
`packages/transactional` when clicking a button using your [resend](https://resend.com/home) API key.

### Structure

This monorepo includes the following workspaces:

```
├── apps
|  └── next-app: A Next.JS app
└── packages
   ├── components: A package that exports components to be re-used across the monorepo
   └── transactional: A package containing the emails for the application
```

Besides this, you can also see from `pnpm-workspace.yaml` that we have included the `.react-email`
folder as well. This folder is for the preview client that the CLI for React Email downloads and sets
up for you. For it to work properly this is currently necessary and is the recommended way of using it
with pnpm monorepos.

## Instructions

1. Add your resend API key to the `.env.local` on `apps/next-app`

2. Install dependencies:

  ```sh
pnpm install
  ```

3. Run locally:
    - NextJS App: 
    ```sh
    cd apps/next-app
    pnpm dev
    ```
    - Transactional emails preview:
    ```sh
    cd packages/transactional
    pnpm dev
    ```

4. Open URL in the browser for the respective part you are running:
    - http://localhost:3000

## License

MIT License

