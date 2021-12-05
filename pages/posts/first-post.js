import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>first post</title>
      </Head>
      <h2>First Post</h2>
      <h4>
        Got to the <Link href="/">Home page</Link>
      </h4>
    </>
  );
}
