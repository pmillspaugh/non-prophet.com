import type { NextApiRequest, NextApiResponse } from "next";
import { postToShopify } from "@server/helpers/shopify.helpers";

export default async function fetchAllProducts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await postToShopify({
    query: `{
      products(sortKey: TITLE, first: 100) {
        edges{
          node {
            id
            title
            description
          }
        }
      }
    }`,
  });

  res.status(200).json(response);
}
