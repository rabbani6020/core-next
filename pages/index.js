import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";



const Home = ({ users }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>First App || Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-20 flex items-center">
        <div className="container mx-auto">
          <h2 className="text-center text-5xl font-bold mb-8">
            This is Home Page
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
