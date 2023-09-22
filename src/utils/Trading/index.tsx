import React from "react"
import { TextTag } from "../Typography"

const Index = ({
  className,
  trendLabel,
  trendLabelColor,
  trendNumbers,
  trendNumbersColor,
  IncreaseIcon,
  increaseIconStyle,
  trendMarkup,
  trendMarkupColor,
}: any) => {
  return (
    <div
      className={`w-full  md:p-4 p-[8.9px] rounded-2xl flex flex-col justify-center ${className}`}
    >
      <div>
        <TextTag
          as="p"
          text={trendLabel}
          className={"p-small1"}
          color={trendLabelColor}
        />
      </div>
      <div className="flex md:gap-4 gap-[8.9px] items-center">
        <TextTag
          as="h4"
          text={trendNumbers}
          className={"h4"}
          color={trendNumbersColor}
        />
        <div className="flex gap-1 items-center">
          <img src={IncreaseIcon} alt="" className={increaseIconStyle} />
          <TextTag
            as="p"
            text={trendMarkup}
            className={"p-medium1"}
            color={trendMarkupColor}
          />
        </div>
      </div>
    </div>
  )
}

export default Index
