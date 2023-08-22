import React from "react"
import { TextTag } from "../../utils/Typography"
import Trading from "../../utils/Trading"
import Charts from "../GraphChart/chart"
import IncreaseIcon from "../../assets/images/icons/increaseIcon.svg"

const UserTrends = () => {
  return (
    <div className="w-full margin-y flex justify-between items-center gap-[126px]">
      <div className="max-w-[486px]">
        <TextTag
          as="h3"
          text={"Cut through the noise"}
          className={"h3 mb-4"}
          color={"text-Black"}
        />
        <TextTag
          as="p"
          text="Pull in all your Google Analytics & Search Console data and see how specific posts perform over time."
          className={"p-large"}
          color={"text-Grey-700"}
        />
      </div>
      <div className="w-full p-8 rounded-[20px] bg-Blue-50">
        <div className="flex justify-between items-center mb-4">
          <TextTag
            as="h5"
            text={"User trends"}
            className={"h5"}
            color={"text-Black"}
          />
          <TextTag
            as="p"
            text={"30 days"}
            className={"p-medium"}
            color={"text-Black"}
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
