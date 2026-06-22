# fbweb

## dev

```sh
npm run docs:dev
```

## Build and Deploy

1. build

   ```sh
   npm run docs:build
   ```

   output: ./docs/.vitepress/dist

2. manuell test dist

   ```sh
   npm run docs:preview
   ```

   starts a local server with content from `./docs/.vitepress/dist`

3.1. chack firebase Account

```sh
firebase login:list
```

maybe change account. with `firebase login:use xxx@gmail.com`

3.2.

```sh
firebase deploy
```
