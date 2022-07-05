import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Content from "../components/Content";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Head>
        <title>Todo-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full min-h-screen bg-gray-800">
        <Header />
        <Content />
      </main>
    </div>
  );
};

export default Home;
