import Head from "next/head";
const About = () => {
  return (
    <>
      <div className="container mx-auto">
        <Head>
          <title>First App || About</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-96 flex items-center">
          <div className="container mx-auto">
            <h2 className="text-center text-5xl font-bold">
              This is About Page
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
