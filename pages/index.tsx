import type { NextPage } from "next";
import React from "react";
import HomePageBody from "../components/home/homePageBody";
import PageWrapper from "../components/header/pageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <HomePageBody />
    </PageWrapper>
  );
};

export default Home;
