# @prext/plugin-kit

::: info
This package is a test plugin. Not for production.
:::

::: warning
This package has a lot of bugs.
:::

## Installation

```bash
> npm install --save-dev @prext/plugin-kit
```

## Usage

```ts
import { defineConfig } from 'prext/config';
import { kit } from '@prext/plugin-kit';

export default defineConfig({
  plugins: [kit()],
});
```
