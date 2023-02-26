import Head from "next/head";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>non-prophet | About</title>
        <meta
          name="description"
          content="Independent clothing brand located in Brooklyn, NY. All profits are donated to the Equal Justice Initiative."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={inter.className}>
        <h1>About.</h1>
        <Link href="/">Home</Link>
      </main>
    </>
  );
}
