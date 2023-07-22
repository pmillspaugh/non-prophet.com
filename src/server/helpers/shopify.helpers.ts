import fetch from "node-fetch";

export async function postToShopify({
  query,
  variables = {},
}: {
  query: string;
  variables?: {
    [key: string]: string;
  };
}) {
  const STOREFRONT_API_URL = process.env.SHOPIFY_STORE_DOMAIN;
  const STOREFRONT_PUBLIC_ACCESS_TOKEN =
    process.env.SHOPIFY_STOREFRONT_PUBLIC_ACCESS_TOKEN;

  if (!STOREFRONT_API_URL || !STOREFRONT_PUBLIC_ACCESS_TOKEN) {
    throw new Error(
      `Missing Storefront API ${
        STOREFRONT_API_URL ? "public access token" : "base URL"
      }`
    );
  }

  try {
    const result = await fetch(STOREFRONT_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": STOREFRONT_PUBLIC_ACCESS_TOKEN,
      },
      body: JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error(error);

    return {
      status: 500,
      error,
    };
  }
}
