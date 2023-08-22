import React from "react"
import { TextTag } from "../../utils/Typography"
import MultiProjects from "../../utils/MultiProjects"

import Tags from "../../assets/images/icons/tags.svg"
import Category from "../../assets/images/icons/Category.svg"
import CitizenIcon from "../../assets/images/icons/citizenRemoteIcon.svg"
import RightArrowIcon from "../../assets/images/icons/rightArrowIcon.svg"
import WhaleIncIcon from "../../assets/images/icons/whaleIncIcon.svg"
import TeslaIcon from "../../assets/images/icons/teslaIcon.svg"
import AppleIcon from "../../assets/images/icons/appleIcon.svg"
import MastercardIcon from "../../assets/images/icons/masterCardIcon.svg"
import AddNewProjectIcon from "../../assets/images/icons/addNewProjectIcon.svg"
import AddIcon from "../../assets/images/icons/addIcon.svg"
import CloseIcon from "../../assets/images/icons/closeIcon.svg"

const OtherFeatures = () => {
  return (
    <div className="w-full margin-y">
      <TextTag
        as="h3"
        text="Other features"
        color="text-black"
        className="h3 mb-10 md:mb-16 text-center"
      />

      <div className="w-full flex items-center sm:flex-nowrap flex-wrap gap-6 justify-between ">
        {/* <div className="w-full">
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
        </div> */}
        <div className="w-full mb-8 flex justify-between gap-6">
          <div className="flex items-center flex-wrap gap-2 pt-11 px-10 pb-10 bg-Blue-50 rounded-[25px]">
            <MultiProjects
              classNames="max-w-full lg:max-w-[252px] w-full p-4 rounded-2xl"
              className="text-black text-sm font-medium"
              icon={CitizenIcon}
              newProjectTitle="Citizen Remote"
              newProjectText="4 folders"
              ArrowIcon={RightArrowIcon}
              newProjectTitleColor={""}
              newProjectTextColor={""}
              bg={""}
              onClick={() => {}}
              PlusIcon={undefined}
            />
            <MultiProjects
              classNames="max-w-full lg:max-w-[252px] w-full p-4 rounded-2xl"
              className="text-black text-sm font-medium"
              icon={WhaleIncIcon}
              newProjectTitle="WhaleINC"
              newProjectText="2 folders"
              ArrowIcon={RightArrowIcon}
              newProjectTitleColor={""}
              newProjectTextColor={""}
              bg={""}
              onClick={() => {}}
              PlusIcon={undefined}
            />
            <MultiProjects
              classNames="max-w-full lg:max-w-[252px] w-full p-4 rounded-2xl"
              className="text-black text-sm font-medium"
              icon={TeslaIcon}
              newProjectTitle="Tesla"
              newProjectText="1 folders"
              ArrowIcon={RightArrowIcon}
              newProjectTitleColor={""}
              newProjectTextColor={""}
              bg={""}
              onClick={() => {}}
              PlusIcon={undefined}
            />
            <MultiProjects
              classNames="max-w-full lg:max-w-[252px] w-full p-4 rounded-2xl"
              className="text-black text-sm font-medium"
              icon={AppleIcon}
              newProjectTitle="Apple"
              newProjectText="4 folders"
              ArrowIcon={RightArrowIcon}
              newProjectTitleColor={""}
              newProjectTextColor={""}
              bg={""}
              onClick={() => {}}
              PlusIcon={undefined}
            />
            <MultiProjects
              classNames="max-w-full lg:max-w-[252px] w-full p-4 rounded-2xl"
              className="text-black text-sm font-medium"
              icon={MastercardIcon}
              newProjectTitle="Mastercard"
              newProjectText="6 folders"
              ArrowIcon={RightArrowIcon}
              newProjectTitleColor={""}
              newProjectTextColor={""}
              bg={""}
              onClick={() => {}}
              PlusIcon={undefined}
            />
            <MultiProjects
              classNames="max-w-full lg:max-w-[252px] w-full p-4 rounded-2xl"
              className="text-[#2F67DD] text-sm font-medium"
              icon={AddNewProjectIcon}
              newProjectTitle="Add New Project"
              ArrowIcon={AddIcon}
              PlusIcon
              newProjectTitleColor={""}
              newProjectTextColor={""}
              bg={""}
              newProjectText={""}
              onClick={() => {}}
            />
          </div>
          <div className="w-full py-[72px] px-[54px] bg-Blue-50 rounded-[25px]">
            <div className="p-5 bg-white rounded-[20px]">
              <TextTag
                as="p"
                text={"Tags"}
                className={"p-small mb-2"}
                color={"text-Grey-700"}
              />
              {/* tag names */}
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] bg-Blue-50 rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Digital Nomad"}
                    className={"p-medium !font-medium"}
                    color={"text-Blue-700"}
                  />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <img src={CloseIcon} alt="close icon" />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] bg-Blue-50 rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Visa"}
                    className={"p-medium !font-medium"}
                    color={"text-Blue-700"}
                  />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <img src={CloseIcon} alt="close icon" />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] bg-Blue-50 rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Country"}
                    className={"p-medium !font-medium"}
                    color={"text-Blue-700"}
                  />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <img src={CloseIcon} alt="close icon" />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] bg-Blue-50 rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"List"}
                    className={"p-medium !font-medium"}
                    color={"text-Blue-700"}
                  />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <img src={CloseIcon} alt="close icon" />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] bg-Blue-50 rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Popular"}
                    className={"p-medium !font-medium"}
                    color={"text-Blue-700"}
                  />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <img src={CloseIcon} alt="close icon" />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] bg-Blue-50 rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Essentials"}
                    className={"p-medium !font-medium"}
                    color={"text-Blue-700"}
                  />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <img src={CloseIcon} alt="close icon" />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] bg-Blue-50 rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Travel"}
                    className={"p-medium !font-medium"}
                    color={"text-Blue-700"}
                  />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <img src={CloseIcon} alt="close icon" />
                  </button>
                </div>
                <div className="flex items-center gap-[6px] py-[7px] px-[10px] bg-Blue-50 rounded-md w-fit">
                  <TextTag
                    as="p"
                    text={"Explore"}
                    className={"p-medium !font-medium"}
                    color={"text-Blue-700"}
                  />
                  <button className="cursor-pointer" onClick={() => {}}>
                    <img src={CloseIcon} alt="close icon" />
                  </button>
                </div>
                <button className="py-[7px] px-3 text-Blue-500 p-medium font-medium">
                  Manage Tags
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full margin-y flex items-center ">
        <div className="w-full flex items-center gap-6">
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
            color="text-Black"
            className="h6 w-full sm:w-[272px]"
          />
        </div>
        <div className="w-full flex items-center gap-6">
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
            color="text-Black"
            className="h6 w-full sm:w-[272px]"
          />
        </div>
      </div>
    </div>
  )
}

export default OtherFeatures
