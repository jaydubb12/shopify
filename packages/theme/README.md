# Vue Storefron Shopify Template

Vue Storefront 2 template for Shopify.

> Please keep in mind this project is in beta phase. Please report all bugs you will spot on GitHub or help us by reolving them by yourself. It will help us to resolve them faster and make this project production-ready sooner!

## Setup

1. Create a `.env` inline with `middleware.config.js` file and fill the following required variables

```bash
SHOPIFY_STOREFRONT_TOKEN=<SHOPIFY_ACCESS_TOKEN>
SHOPIFY_DOMAIN=<SHOPIFY_DOMAIN> # example: vsf-next-pwa.myshopify.com
```

2. Run the project

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org) / [Vue Storefront Docs](https://docs.vuestorefront.io/v2/).

## Contributing

This repository is autogenerated. If you want to contribute to Shopify integration please use https://github.com/vuestorefront/shopify.
