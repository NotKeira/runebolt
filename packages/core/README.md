# @runebolt/core

Core server functionality for RuneBolt framework.

## Features

- HTTP server with route handling
- API route registration
- Static file serving
- Middleware support

## Installation

```bash
# npm
npm install @runebolt/core

# yarn
yarn add @runebolt/core

# pnpm
pnpm add @runebolt/core
```

## Usage

```typescript
import { createServer } from '@runebolt/core';

const server = createServer({
  port: 3000,
  apiRoutes: './api'
});
```
