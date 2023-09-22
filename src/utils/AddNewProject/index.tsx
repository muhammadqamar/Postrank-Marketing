/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { TextTag } from "../Typography";
import { AddIcon, NewProjectIcon, RightArrowIcon } from "../../icons";

interface IndexProps {
  companeyName: string | undefined;
  companeyLogo: string | undefined;
  folderNum: string | number | undefined;
  AddNewProject: boolean;
  onClick: any;
}

const Index: React.FC<IndexProps> = ({
  companeyLogo,
  companeyName,
  folderNum,
  AddNewProject,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`max-w-full lg:max-w-[252px] w-full common-bg-color flex-nowrap flex items-center justify-between gap-7 p-4  rounded-2xl cursor-pointer`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          {AddNewProject ? (
            <NewProjectIcon />
          ) : (
            <img
              src={companeyLogo}
              alt="icons"
              className="w-full h-auto object-contain"
            />
          )}
        </div>
        <div className="">
          <TextTag
            as="p"
            text={AddNewProject ? "Add new project" : companeyName}
            className={"p-medium !font-medium mb-[2px]"}
            color={AddNewProject ? "text-customBlue" : "text-black"}
          />
          {!AddNewProject && (
            <TextTag
              as="p"
              text={`${folderNum} folders`}
              className="p-small"
              color="text-Gray-700"
            />
          )}
        </div>
      </div>
      <div className="">
        {AddNewProject ? <AddIcon color="" /> : <RightArrowIcon />}
      </div>
    </div>
  );
};

export default Index;
