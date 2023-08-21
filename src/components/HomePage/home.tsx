import React from "react"

import HeroSection from "./hero"

import Tranking from "./tranking"
import HowItWork from "./howItWork"

const Home = () => {
  return (
    <>
      <div className="w-full px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <HeroSection />
          <HowItWork />
        </div>
      </div>

      <Tranking />
    </>
  )
}

export default Home
