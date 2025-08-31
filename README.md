# RuneBolt

A framework combining React frontend with Node.js API routes in a single process.

## Features

- **Unified Development** - Single process for frontend and backend
- **Hidden APIs** - Server-side routes not exposed to client
- **TypeScript First** - Full type safety across the stack
- **Hot Reloading** - Fast development experience
- **Zero Config** - Sensible defaults, customisable when needed

## Quick Start

```bash
# npm
npm install runebolt
npx runebolt create my-app
cd my-app
npm run dev

# yarn
yarn add runebolt
yarn runebolt create my-app
cd my-app
yarn dev

# pnpm
pnpm add runebolt
pnpm runebolt create my-app
cd my-app
pnpm dev
```

## Packages

- [`runebolt`](./runebolt) - Meta-package with all dependencies
- [`@runebolt/core`](./packages/core) - Core server functionality
- [`@runebolt/cli`](./packages/cli) - Command line interface
- [`@runebolt/build`](./packages/build) - Build system and webpack config
- [`@runebolt/dev-server`](./packages/dev-server) - Development server
- [`@runebolt/types`](./packages/types) - TypeScript type definitions

## License

MIT © [Keira Hopkins](https://github.com/NotKeira)
