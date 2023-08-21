import React from "react"
import { TextTag } from "../Typography"
import NewProject from "../../assets/images/icons/new-create.svg"
import AddIcon from "../../assets/images/icons/add.svg"
import RightIcon from "../../assets/images/icons/forward.svg"

const Index = ({ companeyLogo, companeyName, folderNum, AddNewProject }) => {
  return (
    <div className="w-full flex items-center justify-between gap-7 p-4 bg-white rounded-2xl cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={AddNewProject ? NewProject : companeyLogo}
            alt="icons"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="">
          <TextTag
            as="p"
            text={AddNewProject ? "Add new project" : companeyName}
            className={"p-medium !font-medium"}
            color={AddNewProject ? "text-Blue-500" : "text-black"}
          />
          {!AddNewProject && (
            <TextTag
              as="p"
              text={folderNum}
              className="p-small"
              color="text-Gray-700"
            />
          )}
        </div>
      </div>
      <div className="">
        <img src={AddNewProject ? AddIcon : RightIcon} alt="icons" />
      </div>
    </div>
  )
}

export default Index
