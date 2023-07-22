import Head from "next/head";
import About from "@components/About";

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>non-prophet | About</title>
        <meta
          name="description"
          content="Independent clothing brand located in Brooklyn, NY. All profits are donated to the Equal Justice Initiative."
        />
      </Head>
      <About />
    </>
  );
};

export default AboutPage;
