import React from "react"
import { TextTag } from "../../utils/Typography"
import Trading from "../../utils/Trading"
import Card from "../../utils/Card"

import IncreaseIcon from "../../assets/images/icons/increaseIcon.svg"

const ComparePost = () => {
  return (
    <div className="w-full margin-y flex justify-between items-center gap-[126px]">
      <div>
        <Card />
        <div className="flex justify-between items-start gap-5">
          {/* card */}

          <Trading
            className={"bg-Blue-50 md:p-4 p-3 min-w-[230px]"}
            trendLabel={"New users"}
            trendLabelColor={"text-Grey-700"}
            trendNumbersColor={"text-Black"}
            trendNumbers={"618"}
            trendMarkup={"-4.2%"}
            trendMarkupColor={"text-Red-500"}
            increaseIconStyle={"text-Blue-200 transform rotate-180"}
            IncreaseIcon={IncreaseIcon}
          />
        </div>
        <Trading
          className={"bg-Blue-50 md:p-4 p-3 min-w-[230px]"}
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
      <div className="max-w-[486px]">
        <TextTag
          as="h3"
          text={"Compare posts"}
          className={"h3 mb-4"}
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
