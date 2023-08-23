import React from "react"

import { TextTag } from "../Typography"

import Dot from "../../assets/images/dot.png"
import EyeIcon from "../../assets/images/icons/eyeIcon.svg"
import ContactIcon from "../../assets/images/icons/contactIcon.svg"

interface IndexProps {
  backgroundImage: string
  trendIcon: React.ReactNode
  ranking: string
  increaseIcon: React.ReactNode
  title: string
  views: string
  contacts: string
  className: string
  position: string
}

const Index: React.FC<IndexProps> = ({
  backgroundImage,
  trendIcon,
  ranking,
  increaseIcon,
  title,
  views,
  contacts,
  className,
  position,
}) => {
  const bgImgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    // height: "242px",
    borderRadius: "25px",
  }
  return (
    <div
      className={`sm:p-5 px-[11.12px] py-[10.13px] flex flex-col justify-between md:!h-[516px] h-[333px] md:!max-w-[338px] !max-w-[185px]${className}`}
      style={bgImgStyle}
    >
      <div className="flex gap-2 !justify-end !items-center">
        <img
          src={trendIcon}
          alt="trend icon"
          className="bg-white rounded-full p-[7px]"
        />
        <div className="flex items-center gap-1 px-2 py-[7px] bg-white rounded-2xl h-8 cursor-pointer">
          <span className="flex items-center text-Black">
            <TextTag
              as="p"
              text={"#"}
              className="p-small"
              color="text-Grey-500"
            />
            {ranking}
          </span>
          <img src={increaseIcon} alt="increase icon" />
        </div>
      </div>
      <div
        className={`md:!p-5 p-[11.12px] !bg-White rounded-[20px] md:!w-[298px] w-[187px]${position}`}
      >
        <TextTag
          as="p"
          text={title}
          className={
            "sm:!mb-5 mb-[11.12px] md:text-[16px] md:leading-[24px] md:font-normal md:tracking-[-0.16px] text-[8px] leading-[11px] tracking-[-0.089px] font-medium"
          }
          color={""}
        />
        <div className="flex gap-2 items-center">
          <div className="flex items-center">
            <img src={EyeIcon} alt="Eye Icon" />
            <TextTag
              as="p"
              text={views}
              className={
                "sm:text-[14px] sm:leading-[18px] font-normal text-[7px] leading-[10px]"
              }
              color={"text-Grey-700"}
            />
          </div>
          <img src={Dot} alt="Dot" />
          <div className="flex items-center">
            <img src={ContactIcon} alt="Eye Icon" />
            <TextTag
              as="p"
              text={contacts}
              className={
                "sm:text-[14px] sm:leading-[18px] font-normal text-[7px] leading-[10px]"
              }
              color={"text-Grey-700"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
