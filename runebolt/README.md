# runebolt

Meta-package for the RuneBolt framework. This package includes all core dependencies for building React applications with integrated Node.js API routes.

## Installation

```bash
# npm
npm install runebolt

# yarn
yarn add runebolt

# pnpm
pnpm add runebolt
```

## Usage

```typescript
import { createServer } from 'runebolt';

const server = createServer({
  port: 3000
});

server.start();
```

## Documentation

See the [main RuneBolt documentation](../README.md) for complete usage guide.
