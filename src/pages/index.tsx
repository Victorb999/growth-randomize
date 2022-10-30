import type { NextPage } from "next";
import Head from "next/head";
import { Randomize } from "../components/Randomize";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Growth Randomize</title>
      </Head>
      <div className="welcomeContainer">
        <Randomize />   
      </div>
    </>
  );
};

export default Home;
