# Prexty

Prexty is a frontend plugin for prext.js.

[**github**](https://github.com/do4ng/prext) • [**npm**](https://npmjs.com/package/prexty) • [**website**](https://prext.netlify.app/prexty/introduction)

---

## Usage

```sh
> npx create-prext-app my-app --react
```

or

```sh
> npm install --save-dev prext prexty
```

```ts
import { defineConfig } from 'prext/config';
import { react, prexty } from 'prexty';
export default defineConfig({
  plugins: [
    // adapter
    prexty(),
  ],
});
```

## License

MIT
