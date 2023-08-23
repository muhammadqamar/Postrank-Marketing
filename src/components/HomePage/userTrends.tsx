import React from "react"
import { TextTag } from "../../utils/Typography"
import Trading from "../../utils/Trading"
import Charts from "../GraphChart/chart"
import IncreaseIcon from "../../assets/images/icons/increaseIcon.svg"

const UserTrends = () => {
  return (
    <div className="w-full margin-y flex flex-wrap lg:flex-nowrap justify-between flex-col-reverse lg:flex-row items-start lg:items-center gap-[40px] lg:gap-0">
      <div className="max-w-full lg:max-w-[486px]">
        <TextTag
          as="h3"
          text={"Cut through the noise"}
          className={
            "font-medium md:text-[38px] md:leading-[48px] md:tracking-[-0.72px] text-[32px] tracking-[-0.48px] mb-4 leading-[42px]"
          }
          color={"text-Black"}
        />
        <TextTag
          as="p"
          text="Pull in all your Google Analytics & Search Console data and see how specific posts perform over time."
          className={"p-large"}
          color={"text-Grey-700"}
        />
      </div>
      <div className="max-w-full lg:max-w-[524px] w-full sm:p-8 p-[17.8px] rounded-[20px] bg-Blue-50">
        <div className="flex justify-between items-center mb-4">
          <TextTag
            as="h5"
            text={"User trends"}
            className={"h5 max-sm:text-[13.9px] max-sm:leading-[17.796px]"}
            color={"text-Black"}
          />
          <TextTag
            as="p"
            text={"30 days"}
            className={"sm:p-medium p-xxsmall max-sm:font-medium"}
            color={"text-[#6C6C6C]"}
          />
        </div>
        <div className="flex justify-between gap-4 items-center">
          <Trading
            className={"bg-Blue-500 md:p-4 p-3"}
            trendLabel={"Users"}
            trendLabelColor={"text-Blue-200"}
            trendNumbersColor={"text-White"}
            trendNumbers={"1,352"}
            trendMarkup={"12.5%"}
            trendMarkupColor={"text-Blue-200"}
            increaseIconStyle={"text-Blue-200"}
            IncreaseIcon={IncreaseIcon}
          />
          <Trading
            className={"bg-Orange-500 md:p-4 p-3"}
            trendLabel={"Users"}
            trendLabelColor={"text-Orange-200"}
            trendNumbersColor={"text-White"}
            trendNumbers={"918"}
            trendMarkup={"12.5%"}
            trendMarkupColor={"text-Orange-200"}
            increaseIconStyle={"text-Orange-200"}
            IncreaseIcon={IncreaseIcon}
          />
        </div>
        <Charts />
      </div>
    </div>
  )
}

export default UserTrends
