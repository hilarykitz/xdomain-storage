import Link from "next/link";
import Head from "next/head";
import { consentClient } from "./consentClient";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/page2">Page 2</Link>
          <Link href="/page3">Page 3</Link>
        </nav>
      </header>
      <main>
        {children}
        {consentClient()}
      </main>
    </>
  );
};
