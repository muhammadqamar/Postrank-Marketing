import React from "react"
import { TextTag } from "../../utils/Typography"
import MultiProjects from "../../utils/MultiProjects"

import Category from "../../assets/images/icons/Category.svg"
import Tags from "../../assets/images/icons/tags.svg"

const OtherFeatures = () => {
  return (
    <div className="w-full margin-y">
      <TextTag
        as="h3"
        text="Other features"
        color="text-black"
        className="h3 mb-10 md:mb-16 text-center"
      />

      <div className="w-full flex items-center gap-6 justify-between ">
        <div className="w-full">
          <div className="w-full flex items-center justify-center flex-wrap gap-2 py-11 px-[35px] md:px-10 rounded-[25px] bg-Blue-50 mb-8">
            <MultiProjects
              AddNewProject={true}
              companeyLogo={undefined}
              companeyName={undefined}
              folderNum={undefined}
            />
            <MultiProjects
              AddNewProject={false}
              companeyLogo={undefined}
              companeyName={"apple"}
              folderNum={"4 folders"}
            />
          </div>
          <div className="flex items-center gap-6">
            <div className="w-[88px] h-auto  flex items-center justify-between border border-solid border-Blue-500 px-[30px]  py-[14px] rounded-full">
              <img
                src={Category}
                alt="Category"
                className="w-auto h-auto object-contain"
              />
            </div>
            <TextTag
              as="h6"
              text="Manage multiple projects from one account"
              color="text-black"
              className="h6 w-full sm:w-[272px]"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-full flex items-center justify-center gap-2 py-8 md:py-[74px] px-[29px] md:px-[54px] rounded-[25px] bg-Blue-50 mb-8"></div>
          <div className="flex items-center gap-6">
            <div className="w-[88px] h-auto flex items-center justify-between border border-solid border-Blue-500 px-[30px]  py-[14px] rounded-full">
              <img
                src={Tags}
                alt="Category"
                className="w-auto h-auto object-contain"
              />
            </div>
            <TextTag
              as="h6"
              text="Add tags to post and categorize them"
              color="text-black"
              className="h6 w-full sm:w-[272px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OtherFeatures
