# @runebolt/types

TypeScript type definitions for RuneBolt framework.

## Installation

```bash
# npm
npm install @runebolt/types

# yarn
yarn add @runebolt/types

# pnpm
pnpm add @runebolt/types
```

## Usage

```typescript
import type { ApiRoute, ServerConfig } from '@runebolt/types';

const route: ApiRoute = {
  method: 'GET',
  path: '/api/health',
  handler: (req, res) => res.json({ status: 'ok' })
};
```
