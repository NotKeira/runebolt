# @runebolt/build

Build system and webpack configuration for RuneBolt framework.

## Features

- Webpack configuration for React applications
- TypeScript compilation
- Production optimisations
- Development builds

## Installation

```bash
# npm
npm install @runebolt/build

# yarn
yarn add @runebolt/build

# pnpm
pnpm add @runebolt/build
```

## Usage

```typescript
import { createWebpackConfig } from '@runebolt/build';

const config = createWebpackConfig({
  entry: './src/client/index.tsx',
  outputPath: './dist'
});
```
