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
}) => {
  return (
    <div
      className={`w-full bg-customBlue md:p-4 p-3 rounded-2xl flex flex-col justify-center ${className}`}
    >
      <div>
        <TextTag
          as="p"
          text={trendLabel}
          className={"p-small max-sm:text-[6.673px] max-sm:leading-[8.898px]"}
          color={trendLabelColor}
        />
      </div>
      <div className="flex sm:gap-4 gap-[8.9px] items-center">
        <TextTag
          as="h4"
          text={trendNumbers}
          className={
            "h4 !font-bold max-sm:text-[17.796px] max-sm:leading-[23.357px]"
          }
          color={trendNumbersColor}
        />
        <div className="flex gap-1 items-center">
          <img src={IncreaseIcon} alt="" className={increaseIconStyle} />
          <TextTag
            as="p"
            text={trendMarkup}
            className={"p-small"}
            color={trendMarkupColor}
          />
        </div>
      </div>
    </div>
  )
}

export default Index
