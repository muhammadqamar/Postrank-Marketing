/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from "react";

import AddNewProject from "./addNewProject";
import CreatedProject from "./createdProject";
import AddedProject from "../../../utils/AddNewProject";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { getPropertySettingsIdsAction } from "../../../store/actions/propertySetting";
import { getFoldersAction } from "../../../store/actions/folders";
import { setActiveProjectDetail } from "../../../store/reducers/projects";

const AddProjects = () => {
  const [addProject, setAddProject] = useState("projects");
  const dispatch = useDispatch();

  const { propertys, folders, projects }: any = useSelector(
    (state: RootState) => state,
  );

  const { property } = propertys;
  const { allFolder } = folders;
  const { activeProject, userProject } = projects;

  // useEffect(() => {
  //   getPropertySettingsIdsAction(1);
  // }, []);

  // const projectProperties = async (id: number) => {
  //   setAddProject("addProject");
  //   dispatch(await getPropertySettingsIdsAction(id));
  // };

  return (
    <div className="sm:px-8 px-4 sm:pt-8 pt-4 sm:pb-16 pb-8 bg-white rounded-[20px] w-full">
      <div
        className={`flex flex-col gap-[42px] w-full ${
          addProject && "max-w-full"
        }`}
      >
        {addProject === "projects" ? (
          <div className="flex flex-col">
            <h6 className="text-[25px] leading-[32px] font-medium text-black pb-5">
              Projects
            </h6>
            <div className="flex items-center flex-wrap gap-2 pt-8">
              {userProject?.projects?.map((item: any, index: number) => (
                <AddedProject
                  key={index}
                  AddNewProject={false}
                  companeyLogo={
                    item?.projectImage ||
                    "https://postrank-marketing.netlify.app/static/citizenRemoteIcon-8d2aef65e28d5cd2f3f165d2e2f6691c.svg"
                  }
                  companeyName={item?.name}
                  folderNum={item?.folderCount}
                  onClick={() => {
                    setAddProject("createProject");
                    getPropertySettingsIdsAction(item.id);
                    getFoldersAction(item.id);
                    dispatch(setActiveProjectDetail(item));
                  }}
                />
              ))}

              <AddedProject
                AddNewProject={true}
                companeyLogo={undefined}
                companeyName={undefined}
                folderNum={undefined}
                onClick={() => setAddProject("addProject")}
              />
            </div>
          </div>
        ) : addProject === "addProject" ? (
          <AddNewProject
            setAddProject={setAddProject}
            property={property}
            allFolder={allFolder}
          />
        ) : (
          addProject === "createProject" && (
            <CreatedProject
              setAddProject={setAddProject}
              activeProject={activeProject}
              allFolder={allFolder}
            />
          )
        )}
      </div>
    </div>
  );
};

export default AddProjects;
