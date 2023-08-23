import React from "react"
import { TextTag } from "../../utils/Typography"

const workData = [
  {
    id: "1",
    text: "Connect your Google Account",
  },
  {
    id: "2",
    text: "Select types of pages you want to track",
  },
  {
    id: "3",
    text: "Analyze & compare your posts!",
  },
]

const HowItWork = () => {
  return (
    <div className="w-full margin-y">
      <TextTag
        as="h3"
        text="How it works?"
        color="text-black"
        className="sm:h3 h4 !leading-[48px] mb-10 md:mb-16 sm:text-center text-start"
      />

      <div className="w-full flex items-center justify-between gap-8 flex-wrap">
        {workData.map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <TextTag
              as="h6"
              text={item.id}
              color="text-Blue-500"
              className="w-[88px] h-auto h6 !italic text-center  py-[14px] rounded-full  bg-Blue-50"
            />
            <TextTag
              as="h6"
              text={item.text}
              color="text-black"
              className={`h6 ${
                item.id === "1" ? "w-[169px]" : "sm:w-[217px] w-[177px]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWork
