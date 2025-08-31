# @runebolt/dev-server

Development server with hot reloading for RuneBolt framework.

## Features

- Hot module replacement
- Live reloading
- Development middleware
- Error overlay

## Installation

```bash
# npm
npm install @runebolt/dev-server

# yarn
yarn add @runebolt/dev-server

# pnpm
pnpm add @runebolt/dev-server
```

## Usage

```typescript
import { createDevServer } from '@runebolt/dev-server';

const server = createDevServer({
  port: 3000,
  hot: true
});
```
