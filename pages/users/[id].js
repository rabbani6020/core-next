import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();
  return {
    props: {
      user: data,
    },
  };
};

const UserDeatils = ({ user }) => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>First App || User Deatils for user id {user.id} </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-20 flex items-center">
        <div className="container mx-auto">
          <h2 className="text-center text-5xl font-bold mb-8">
            User Profile for - {user.name}
          </h2>
          <div className="bg-white p-10 shadow-xl w-auto inline-block rounded">
            <h3 className="text-xl font-bold black ">Name:{user.name}</h3>
            <h3 className="text-xl font-bold black ">Emal:{user.email}</h3>
            <h3 className="text-xl font-bold black ">Website:{user.website}</h3>
            <h3 className="text-xl font-bold black ">
              Address (City):{user.address.city}
            </h3>
            <h3 className="text-xl font-bold black ">
              Company Name:{user.company.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDeatils;