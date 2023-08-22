import React from "react"

import { TextTag } from "../Typography"

import BackgroundImage from "../../assets/images/camera.png"
import Dot from "../../assets/images/dot.png"
import IncreaseIcon from "../../assets/images/icons/increaseIcon.svg"
import TrendIcon from "../../assets/images/icons/trendIcon.svg"
import EyeIcon from "../../assets/images/icons/eyeIcon.svg"
import ContactIcon from "../../assets/images/icons/contactIcon.svg"

const Index = () => {
  const bgImgStyle = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "242px",
    borderRadius: "25px",
  }
  return (
    <div
      className="p-5 flex flex-col justify-end sm:h-[516px] !h-[400px] sm:!max-w-[338px] !max-w-[300px]"
      style={bgImgStyle}
    >
      <div className="flex gap-2 !justify-end !items-center">
        <img
          src={TrendIcon}
          alt="trend icon"
          className="bg-white rounded-full p-[7px]"
        />
        <div className="flex items-center gap-1 px-2 py-[7px] bg-white rounded-2xl h-8 cursor-pointer">
          <span className="flex">
            <p className="text-primaryGray">#</p>1
          </span>
          <img src={IncreaseIcon} alt="trend icon" />
        </div>
      </div>
      <div className="p-5 !bg-White rounded-[20px] !w-[298px]">
        <TextTag
          as="p"
          text={"Choose The Best Camera In 2023 - Complete Checklist For Seow"}
          className={"mb-5 p-large font-medium"}
          color={""}
        />
        <div className="flex gap-2 items-center">
          <div className="flex items-center">
            <img src={EyeIcon} alt="Eye Icon" />
            <TextTag
              as="p"
              text={"1,819"}
              className={"p-medium"}
              color={"text-Grey-700"}
            />
          </div>
          <img src={Dot} alt="Dot" />
          <div className="flex items-center">
            <img src={ContactIcon} alt="Eye Icon" />
            <TextTag
              as="p"
              text={"988"}
              className={"p-medium"}
              color={"text-Grey-700"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
