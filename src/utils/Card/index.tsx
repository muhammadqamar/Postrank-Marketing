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
}

const Index: React.FC<IndexProps> = ({
  backgroundImage,
  trendIcon,
  ranking,
  increaseIcon,
  title,
  views,
  contacts,
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
      className="sm:p-5 px-[11.12px] py-[10.13px] flex flex-col justify-between sm:!h-[516px] h-[333px] sm:!max-w-[338px] !max-w-[231px]"
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
      <div className="sm:!p-5 p-[11.12px] !bg-White rounded-[20px] sm:!w-[298px] w-[165.72px]">
        <TextTag
          as="p"
          text={title}
          className={"sm:!mb-5 mb-[11.12px] sm:!p-large !p-xsmall font-medium"}
          color={""}
        />
        <div className="flex gap-2 items-center">
          <div className="flex items-center">
            <img src={EyeIcon} alt="Eye Icon" />
            <TextTag
              as="p"
              text={views}
              className={"sm:p-medium !p-xxsmall"}
              color={"text-Grey-700"}
            />
          </div>
          <img src={Dot} alt="Dot" />
          <div className="flex items-center">
            <img src={ContactIcon} alt="Eye Icon" />
            <TextTag
              as="p"
              text={contacts}
              className={"!sm:p-medium !p-xxsmall"}
              color={"text-Grey-700"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
