/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";

import Select from "../../../utils/Select";
import Button from "../../../utils/Button";
import InputField from "../../../utils/InputField";
import { TextTag } from "../../../utils/Typography";
import { CheckRounded, CloseIcon } from "../../../icons";
import { RightArrowIcon } from "../../../icons";
import { Formik } from "formik";
// import { RootState } from "../../../store";
// import { useSelector } from "react-redux";
import DeleteMOdal from "../../../utils/DeleteModal";
import {
  createNewFolderAction,
  deleteFolderAction,
  getFoldersAction,
  // getFoldersAction,
} from "../../../store/actions/folders";
import { Spinner } from "../../../utils/Spinner";
import {
  deleteProjectAction,
  getUserProjectAction,
} from "../../../store/actions/projects";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setActiveFolders } from "../../../store/reducers/folders";

const postData = [
  {
    name: "",
  },
  {
    name: "First Field",
  },
  {
    name: "Second Field",
  },
  {
    name: "Third Field",
  },
  {
    name: "Fourth Field",
  },
  {
    name: "Five Field",
  },
];

type props = {
  setAddProject: (value: string) => void;
  activeProject: any;
  allFolder: any;
};
const CreatedProject = ({ setAddProject, activeProject, allFolder }: props) => {
  const { accountDetails }: any = useSelector((state: RootState) => state);
  const { userProfile } = accountDetails;
  const userId = localStorage.getItem("userId");
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [headingText, setheadingText] = useState("");
  const [confirmText, setconfirmText] = useState("");
  const [deleteCTA, setdeleteCTA] = useState<any>();
  const fileInputRef: any = useRef(null);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState<any>(
    activeProject?.projectImage,
  );
  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="px-8 pt-8 pb-16 bg-white rounded-[20px] w-full">
      <div className="flex flex-col gap-[42px] w-full">
        <div className="flex items-center gap-4">
          <div
            className="p-[10px] bg-[#E0E9FA] w-10 h-10 rounded-full cursor-pointer rotate-180"
            onClick={() => setAddProject("projects")}
          >
            <RightArrowIcon />
          </div>
          <TextTag
            as="label"
            text={activeProject?.name}
            className={
              "text-[25px] leading-[32px] font-medium tracking-[-0.4px]"
            }
            color={"text-[#000000]"}
          />
        </div>
        <Formik
          initialValues={{
            folderName: "",
            contains: "",
          }}
          validate={(values: any) => {
            const errors: any = {};
            if (!values.folderName) {
              errors.folderName = "Required";
            }
            if (!values.contains) {
              errors.contains = "Required";
            }

            return errors;
          }}
          onSubmit={(values: any, { setSubmitting, resetForm }) => {
            setTimeout(async () => {
              const res = await createNewFolderAction(
                activeProject?.id,
                values,
              );
              if (res.status === 201) {
                await getUserProjectAction(userProfile?.user?.id || userId);
                await getFoldersAction(activeProject?.id);
                dispatch(setActiveFolders(res?.data));
                setSubmitting(false);
                resetForm();
              }
            }, 600);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            isSubmitting /* and other goodies */,
          }: any) => (
            <form onSubmit={handleSubmit} className="flex flex-col gap-[42px]">
              <div className="flex flex-col gap-6">
                <h6 className="tracking-[ -0.2px] font-medium">
                  Project information
                </h6>

                <div className="flex items-center gap-8 pt-[10px]">
                  <TextTag
                    as="label"
                    text={"Project name"}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <InputField
                    className="max-w-[300px] w-full"
                    label=""
                    type="text"
                    name="projectName"
                    placeholder=""
                    icon=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={activeProject?.name}
                    error={errors?.projectName}
                    touch={touched.projectName}
                    disabled={true}
                  />
                </div>
                <div className="flex sm:flex-nowrap flex-wrap items-center justify-start gap-[32px] mb-[8px]">
                  <div className="w-[180px] flex items-center gap-8">
                    <TextTag
                      as="p"
                      text={"Logo"}
                      className={"p-small"}
                      color={"text-textGray"}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={selectedImage || ""}
                      alt=""
                      className="rounded-full w-10 h-10 bg-secondaryGray mr-7"
                    />
                    <Button
                      text="Upload new"
                      onClick={handleImageUpload}
                      className="p-medium !font-medium bg-white border-2 border-solid border-customBlue !py-[7px] !px-3 flex justify-center "
                      type={"button"}
                    />
                    <input
                      type="file"
                      name="projectImage"
                      value={undefined}
                      className="hidden"
                      accept="image/*"
                      onBlur={handleBlur}
                      ref={fileInputRef}
                      onChange={(e: any) => {
                        const file = e.target.files[0];
                        if (file) {
                          setFieldValue("projectImage", file);
                          const reader = new FileReader();
                          reader.onload = (event: any) => {
                            setSelectedImage(event.target.result);
                          };
                          reader.readAsDataURL(file);
                        }

                        console.log("file", e.target.files[0]);
                      }}
                    />
                    <Button
                      text="Delete"
                      onClick={() => setSelectedImage(null)}
                      className="p-medium !font-medium bg-white text-gray-900 !py-[7px] !px-3  flex justify-center "
                      type={undefined}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h6 className="tracking-[ -0.2px] font-medium">Connections</h6>

                <div className="flex items-center gap-8 pt-[10px]">
                  <TextTag
                    as="label"
                    text={"Google Analytics"}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  {/* check Connected */}
                  <div className="flex gap-2 items-center">
                    <CheckRounded />
                    <TextTag
                      as="span"
                      text={"Connected"}
                      className={"text-base font-medium tracking-[-0.16px]"}
                      color={"text-[#55A63F]"}
                    />
                  </div>

                  <TextTag
                    as="p"
                    text={"Disconnect"}
                    className={"text-sm font-medium px-[12px]"}
                    color={"text-[#000000]"}
                  />
                </div>

                <div className="flex w-full items-center gap-8 pt-[10px]">
                  <TextTag
                    as="label"
                    text={"Account"}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />

                  <TextTag
                    as="p"
                    text={activeProject?.accountId}
                    className={"text-base font-medium tracking-[-0.16px]"}
                    color={"text-[#000000]"}
                  />
                </div>

                <div className="flex w-full items-center gap-8 pt-[10px]">
                  <TextTag
                    as="label"
                    text={"Property"}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <TextTag
                    as="p"
                    text={activeProject?.propertyId}
                    className={"text-base font-medium tracking-[-0.16px]"}
                    color={"text-[#000000]"}
                  />
                </div>

                <div className="flex w-full items-center gap-8 pt-[10px]">
                  <TextTag
                    as="label"
                    text={"Google Search Console"}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  {/* check Connected */}
                  <div className="flex gap-2 items-center">
                    <CheckRounded />
                    <TextTag
                      as="span"
                      text={
                        activeProject?.viewId ? "Connected" : "Not Connected"
                      }
                      className={"text-base font-medium tracking-[-0.16px]"}
                      color={"text-[#55A63F]"}
                    />
                  </div>
                </div>

                <div className="flex w-full items-center gap-8 py-[10px]">
                  <TextTag
                    as="label"
                    text={"Property"}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <TextTag
                    as="p"
                    text={activeProject?.viewId || "N/A"}
                    className={"text-base font-medium tracking-[-0.16px]"}
                    color={"text-[#000000]"}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <h6 className="tracking-[ -0.2px] h6 font-medium">
                  Add new folder
                </h6>
                <div className="flex w-full items-baseline gap-8">
                  <TextTag
                    as="label"
                    text={"Folder name"}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <InputField
                    className="max-w-[300px] w-full"
                    label=""
                    type="text"
                    name="folderName"
                    placeholder=""
                    icon=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.folderName}
                    error={errors?.folderName}
                    touch={touched.folderName}
                    disabled={false}
                  />
                </div>

                <div className="flex w-full items-center gap-8">
                  <TextTag
                    as="label"
                    text={"Folder location"}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <Select
                    className="max-w-[300px] w-full"
                    data={postData}
                    companiesDrop={false}
                    addIcon={""}
                    addText={""}
                    leftIcon={""}
                    rightIcon={""}
                    leftText={""}
                    onClick={() => {}}
                    isDateM={false}
                    simpleDropDown
                    dateOnCancel={() => {}}
                    multiSelect={false}
                    dateOnApply={() => {}}
                    value={undefined}
                  />
                </div>

                <div className="flex w-full items-center gap-8">
                  <TextTag
                    as="label"
                    text={""}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />

                  <InputField
                    className="max-w-[300px] w-full"
                    label=""
                    type="text"
                    name="contains"
                    placeholder=""
                    icon=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.contains}
                    error={errors?.contains}
                    touch={touched.contains}
                    disabled={false}
                  />
                </div>

                <div className="flex w-full items-center gap-8">
                  <TextTag
                    as="label"
                    text={""}
                    className={"text-sm font-normal max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <Button
                    text={
                      isSubmitting ? (
                        <Spinner className="!border-t-blue-700 !border-l-blue-700 !border-b-blue-700" />
                      ) : (
                        "Add folder"
                      )
                    }
                    className="!h-[40px] !w-[114px] flex items-center justify-center !py-[10px] !px-[16px] font-medium tracking-[-0.16px] bg-[#E0E9FA]"
                    onClick={() => {}}
                    type="submit"
                  />
                </div>
              </div>

              {allFolder?.folders.map((item: any, index: any) => (
                <div key={index} className="flex flex-col gap-6">
                  <div className="flex w-full items-baseline  gap-8">
                    <h6 className="tracking-[ -0.2px] h6 font-medium w-[180px]">
                      Folder {index + 1}
                    </h6>
                    <div className="w-[300px] flex justify-end">
                      <Button
                        text={""}
                        className="!p-[7px] font-medium tracking-[-0.16px] bg-[#E0E9FA]"
                        onClick={async () => {
                          // setdeleteCTA(null);
                          // setIsOpenDelete(true);
                          // setheadingText('Delete Folder');
                          // setconfirmText('Are u sure, You want to delete this folder');
                          // setdeleteCTA(() => async () => {
                          await deleteFolderAction(item?.id);
                          await getUserProjectAction(
                            userProfile?.user?.id || userId,
                          );
                          await getFoldersAction(activeProject?.id);
                          // });
                        }}
                        icon={<CloseIcon color={""} />}
                        type="button"
                      />
                    </div>
                  </div>
                  <div className="flex w-full items-baseline gap-8">
                    <TextTag
                      as="label"
                      text={"Folder name"}
                      className={"text-sm font-normal max-w-[180px] w-full"}
                      color={"text-[#464646]"}
                    />
                    <InputField
                      className="max-w-[300px] w-full"
                      label=""
                      type="text"
                      name="foldername"
                      placeholder=""
                      icon=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={item?.folderName}
                      error={undefined}
                      touch={undefined}
                      disabled={true}
                    />
                  </div>

                  <div className="flex w-full items-center gap-8">
                    <TextTag
                      as="label"
                      text={"Folder location"}
                      className={"text-sm font-normal max-w-[180px] w-full"}
                      color={"text-[#464646]"}
                    />
                    <Select
                      className="max-w-[300px] w-full"
                      data={postData}
                      companiesDrop={false}
                      addIcon={""}
                      addText={""}
                      leftIcon={""}
                      rightIcon={""}
                      leftText={""}
                      onClick={() => {}}
                      isDateM={false}
                      simpleDropDown
                      dateOnCancel={() => {}}
                      multiSelect={false}
                      dateOnApply={() => {}}
                      value={undefined}
                    />
                  </div>

                  <div className="flex w-full items-center gap-8">
                    <TextTag
                      as="label"
                      text={""}
                      className={"text-sm font-normal max-w-[180px] w-full"}
                      color={"text-[#464646]"}
                    />

                    <InputField
                      className="max-w-[300px] w-full"
                      label=""
                      type="text"
                      name="containstext"
                      placeholder=""
                      icon=""
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={item?.contains}
                      error={undefined}
                      touch={undefined}
                      disabled={true}
                    />
                  </div>
                </div>
              ))}

              <div className="flex items-center justify-between">
                <Button
                  text="Save"
                  className="!py-[14px] !px-[20px] font-medium tracking-[-0.16px] text-white !bg-[#2F67DD]"
                  onClick={() => setAddProject("projects")}
                  type="button"
                />
                <Button
                  text="Delete project"
                  className="!py-[10px] !px-0 font-medium tracking-[-0.16px] text-[#464646] bg-transparent"
                  onClick={async () => {
                    setIsOpenDelete(true);
                    setheadingText("Delete Project");
                    setconfirmText(
                      allFolder?.folders?.length > 0
                        ? "Remove folders first to delete the project!!"
                        : "Are you sure, You want to delete this Project.?",
                    );
                    setdeleteCTA(async () => {
                      if (allFolder?.folders?.length === 0) {
                        const result = await deleteProjectAction(
                          activeProject?.id,
                        );
                        if (result.status === 200) {
                          setAddProject("projects");
                        }
                        await getUserProjectAction(
                          userProfile?.user?.id || userId,
                        );
                      }
                    });
                  }}
                  type={"button"}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
      <DeleteMOdal
        isOpenDelete={isOpenDelete}
        setIsOpenDelete={setIsOpenDelete}
        onDelete={deleteCTA}
        tagName={"tag named"}
        headingText={headingText}
        confirmText={confirmText}
      />
      ;
    </div>
  );
};

export default CreatedProject;
