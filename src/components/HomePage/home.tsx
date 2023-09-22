import React from "react";

import HeroSection from "./hero";
import Ranking from "./ranking";
import HowItWork from "./howItWork";
import OtherFeatures from "./otherFeatures";
import ComparePost from "./comparePost";
import UserTrends from "./userTrends";

import "../../assets/styles/tailwind.css";
import Footer from "../Layout/footer";
import PostRankLogo from "../../assets/images/postrank-logo.svg";

const Home = ({ login }: any) => {
  return (
    <>
      <div className="w-full px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <HeroSection login={login} />
          <HowItWork />
          <ComparePost />
          <UserTrends />
          <OtherFeatures />
        </div>
      </div>
      <Ranking login={login} />
      <Footer mainLogo={PostRankLogo} />
    </>
  );
};

export default Home;
