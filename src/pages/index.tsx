import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>non-prophet</title>
        <meta
          name="description"
          content="Independent clothing brand located in Brooklyn, NY. All profits are donated to the Equal Justice Initiative."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={inter.className}>non-prophet</main>
    </>
  );
}
