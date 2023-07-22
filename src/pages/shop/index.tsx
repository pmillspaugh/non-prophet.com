import { GetStaticProps } from "next";
import Shop from "@components/Shop";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async (context) => {
  const url = new URL(process.env.URL || "http://localhost:3000");
  url.pathname = "/api/shop";

  const response = await fetch(url.toString());
  const { status, body } = await response.json();
  const products = body.data.products.edges;

  return {
    props: {
      products,
    },
  };
};

const ShopPage = ({ products }: { products: any }) => {
  products.map((product: any) => console.log(product.node));

  return (
    <>
      <Head>
        <title>non-prophet | Shop</title>
        <meta
          name="description"
          content="Shop the 2023 Launch — The Beanie, The Hoodie, & The Shirt."
        />
      </Head>
      <Shop />
    </>
  );
};

export default ShopPage;
