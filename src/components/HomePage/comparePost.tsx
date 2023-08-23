import React from "react"
import { TextTag } from "../../utils/Typography"
import Trading from "../../utils/Trading"
import Card from "../../utils/Card"

import IncreaseIcon from "../../assets/images/icons/increaseIcon.svg"
import CameraImg from "../../assets/images/camera.png"
import TrendIcon from "../../assets/images/icons/trendIcon.svg"
import GirlImg from "../../assets/images/girlImg.png"
import TrophyIcon from "../../assets/images/icons/trophyIcon.svg"

const ComparePost = () => {
  return (
    <div className="w-full margin-y flex !xl:flex-nowrap flex-wrap justify-between items-center sm:gap-[126px] gap-[41.9px]">
      <div className="flex relative">
        <div className="flex flex-col gap-5">
          <Card
            className=""
            backgroundImage={GirlImg}
            trendIcon={TrophyIcon}
            ranking={"1"}
            position=""
            title={
              "How To Stay Productive During The Day - My Step-By-Step Guide "
            }
            views={"2,168"}
            contacts={"1,352"}
            increaseIcon={IncreaseIcon}
          />
          <Trading
            className={"bg-Blue-50 md:p-4 p-3 sm:!max-w-[234px] max-w-[130px]"}
            trendLabel={"Average time on page"}
            trendLabelColor={"text-Grey-700"}
            trendNumbersColor={"text-Black"}
            trendNumbers={"2m 47s"}
            trendMarkup={"12.5%"}
            trendMarkupColor={"text-Green-500"}
            increaseIconStyle={"text-Blue-200"}
            IncreaseIcon={IncreaseIcon}
          />
        </div>
        <div className="flex flex-col items-end gap-5 !z-1 absolute left-[254px]">
          <Trading
            className={"bg-Blue-50 md:p-4 p-3 sm:!max-w-[234px] max-w-[130px]"}
            trendLabel={"New users"}
            trendLabelColor={"text-Grey-700"}
            trendNumbersColor={"text-Black"}
            trendNumbers={"618"}
            trendMarkup={"-4.2%"}
            trendMarkupColor={"text-Red-500"}
            increaseIconStyle={"text-Blue-200 transform rotate-180"}
            IncreaseIcon={IncreaseIcon}
          />
          <Card
            className="relative before:absolute before:left-[-26px] before:max-w-[208px] before:w-full before:min-h-[368px] before:bg-black before:opacity-[0.34] before:blur-[32px]"
            backgroundImage={CameraImg}
            trendIcon={TrendIcon}
            ranking={"2"}
            position="relative z-[1]"
            title={
              "Choose The Best Camera In 2023 - Complete Checklist For Seow"
            }
            views={"1,819"}
            contacts={"988"}
            increaseIcon={IncreaseIcon}
          />
        </div>
      </div>
      <div className="max-w-[486px]">
        <TextTag
          as="h3"
          text={"Compare posts"}
          className={"h3 mb-4 max-sm:leading-[42px]"}
          color={"text-Black"}
        />
        <TextTag
          as="p"
          text="Create direct comparisons between posts to see how they stack up against each other."
          className={"p-large"}
          color={"text-Grey-700"}
        />
      </div>
    </div>
  )
}

export default ComparePost
