import Head from "next/head";
import Home from "@components/Home";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>non-prophet</title>
        <meta
          name="description"
          content="Independent clothing brand located in Brooklyn, NY. All profits are donated to the Equal Justice Initiative."
        />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
