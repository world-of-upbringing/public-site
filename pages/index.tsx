import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Header from "./header/header";
import Body from "./home/body";

const Home: NextPage = () => {
  return (
    <div className="bg-background flex flex-col">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <Body/>
    </div>
  );
};

export default Home;
