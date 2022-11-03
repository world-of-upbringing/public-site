import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Header from "./header/header";
import Body from "./home/body";

const Home: NextPage = () => {
  return (
    <div className="bg-background flex flex-col">
      <Head>
        <title>World of Upbringing</title>
        <meta
          name="description"
          content="World of Upbringing - Nurturing Values"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Body />
    </div>
  );
};

export default Home;
