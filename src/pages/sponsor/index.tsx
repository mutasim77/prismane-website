import Head from "next/head";
// Containers
import Hero from "../../containers/sponsor/Hero";
import Support from "../../containers/sponsor/Support";
import Start from "../../containers/Start";

export default function Sponsor() {
  return (
    <>
      <Head>
        <title>Prismane / Sponsor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Support />
      <Start />
    </>
  );
}
