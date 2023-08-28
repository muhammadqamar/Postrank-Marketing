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
      className={`md:p-5 p-[11.12px] flex flex-col justify-between md:min-h-[516px] min-h-[333px] md:w-[338px] w-[185px]${className}`}
      style={bgImgStyle}
    >
      <div className="flex md:gap-2 gap-[4.45px] !justify-end !items-center">
        <img
          src={trendIcon}
          alt="trend icon"
          className="bg-white rounded-full md:p-[7px] p-[3.89px] md:min-h-[18px] min-h-[10px]"
        />
        <div className="flex items-center gap-1 md:px-2 px-[4.45px] md:py-[7px] py-[3.89px] bg-white rounded-2xl h-8 cursor-pointer">
          <span className="flex items-center text-Black p-medium !text-[14px] !leading-[18px]">
            <TextTag as="p" text={"#"} className="" color="text-Grey-500" />
            {ranking}
          </span>
          <img
            src={increaseIcon}
            alt="increase icon"
            className="md:min-h-[18px] min-h-[10px]"
          />
        </div>
      </div>
      <div
        className={`md:!p-5 p-[11.12px] !bg-White rounded-[20px] md:!w-[298px] w-full${position}`}
      >
        <TextTag
          as="p"
          text={title}
          className={"md:mb-5 mb-[11.12px]"}
          color={""}
        />
        <div className="flex gap-2 items-center">
          <div className="flex items-center md:gap-1 gap-[2.22px]">
            <img
              src={EyeIcon}
              alt="Eye Icon"
              className="md:min-h-[18px] h-[10px]"
            />
            <TextTag
              as="p"
              text={views}
              className={"p-medium1 !font-normal"}
              color={"text-Grey-700"}
            />
          </div>
          <img src={Dot} alt="Dot" />
          <div className="flex items-center md:gap-1 gap-[2.22px]">
            <img
              src={ContactIcon}
              alt="Eye Icon"
              className="md:min-h-[18px] h-[10px]"
            />
            <TextTag
              as="p"
              text={contacts}
              className={"p-medium1 !font-normal"}
              color={"text-Grey-700"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
