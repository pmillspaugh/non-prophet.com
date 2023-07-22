import Link from "next/link";

const Home = () => {
  return (
    <main>
      <h1>Home.</h1>
      <ul>
        <li>
          <Link href="/about">About →</Link>
        </li>
        <li>
          <Link href="/shop">Shop →</Link>
        </li>
      </ul>
    </main>
  );
};

export default Home;
