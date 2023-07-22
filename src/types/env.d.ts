declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SHOPIFY_STORE_DOMAIN: string;
      SHOPIFY_STOREFRONT_PUBLIC_ACCESS_TOKEN: string;
    }
  }
}

export {};
