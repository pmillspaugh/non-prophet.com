import Shop from "@components/Shop";
import Head from "next/head";

const ShopPage = () => {
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
