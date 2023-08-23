import React from "react"

import HeroSection from "./hero"

import Tranking from "./tranking"
import HowItWork from "./howItWork"
import OtherFeatures from "./otherFeatures"
import ComparePost from "./comparePost"
import UserTrends from "./userTrends"

const Home = () => {
  return (
    <>
      <div className="w-full px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <HeroSection />
          <HowItWork />
          <ComparePost />
          <UserTrends />
          <OtherFeatures />
          <Tranking />
        </div>
      </div>
    </>
  )
}

export default Home
