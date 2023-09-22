/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from "react";
import axios from "axios";
import Select from "../../../utils/Select";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../utils/Button";
import { RootState } from "../../../store";
import InputField from "../../../utils/InputField";
import { TextTag } from "../../../utils/Typography";
import { BackIcon } from "../../../icons";
import DropDown from "../../Authentications/CreateAccount/projectSelect";
import { createNewProjectAction } from "../../../store/actions/projects";
import { Formik } from "formik";
import { Spinner } from "../../../utils/Spinner";

import { setActiveProjectDetail } from "../../../store/reducers/projects";

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
  property: any | undefined;
  allFolder: any;
};

const AddNewProject = ({ setAddProject, property, allFolder }: props) => {
  const accountDetails: any = useSelector(
    (state: RootState) => state.accountDetails,
  );
  const dispatch = useDispatch();
  const fileInputRef: any = useRef(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const { userAccountDetails } = accountDetails;
  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="sm:px-8 px-0 sm:pt-8 pt-2 sm:pb-16 pb-0 bg-white rounded-[20px] w-full">
      <div className="flex flex-col gap-[42px] w-full">
        <div className="flex items-center gap-4">
          <div
            className="p-[10px] bg-lightBlue w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setAddProject("projects")}
          >
            <BackIcon />
          </div>
          <TextTag
            as="label"
            text={"Add new project"}
            className={
              "text-[25px] leading-[32px] font-medium max-sm:text-xl tracking-[-0.4px]"
            }
            color={"text-[#000000]"}
          />
        </div>

        <Formik
          initialValues={{
            account: "",
            viewProperty: "",
            GSCProperty: "",
            projectName: "",
            projectImage: {},
          }}
          validate={(values: any) => {
            const errors: any = {};
            if (!values.projectName) {
              errors.projectName = "Required";
            }
            if (!values.account) {
              errors.account = "Required";
            }
            if (!values.viewProperty) {
              errors.viewProperty = "Required";
            }

            return errors;
          }}
          onSubmit={(values: any, { setSubmitting }) => {
            localStorage.getItem("userId");
            setTimeout(async () => {
              const formData = new FormData();

              formData.append("image", values.projectImage);

              await axios
                .post(
                  `${process.env.REACT_APP_API_URL}/uploads/image`,
                  formData,
                )
                .then(async (response) => {
                  if (response.status === 201) {
                    const res = await createNewProjectAction(
                      accountDetails?.userProfile?.user?.id ||
                        localStorage.getItem("userId"),
                      {
                        name: values.projectName,
                        projectImage: response?.data?.imagePath || null,
                        accountId: values?.account?.name,
                        propertyId: values?.viewProperty?.property,
                        viewId: values?.GSCProperty?.id,
                      },
                    );
                    if (res.status === 201) {
                      setSubmitting(false);
                      dispatch(setActiveProjectDetail(res?.data));
                      setAddProject("createProject");
                    }
                  } else {
                    console.error("Image upload failed");
                  }
                })
                .catch((error) => {
                  console.error("Network error:", error);
                });
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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6 sm:pt-8 pt-0">
                <h6 className="tracking-[-0.2px] h6">Connections</h6>
                <div className="flex items-start lg:items-center gap-5 lg:gap-8 flex-col lg:flex-row">
                  <TextTag
                    as="label"
                    text={"Google Analytics"}
                    className={"p-medium max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <Button
                    text="Connected"
                    className="!py-[7px] !px-[12px] p-medium !font-medium bg-transparent border-[2px]  border-customBlue"
                    onClick={() => {}}
                    type={undefined}
                  />
                </div>
                <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
                  <TextTag
                    as="label"
                    text={"Account"}
                    className={"p-medium max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <div className="flex flex-col w-full">
                    <DropDown
                      data={userAccountDetails?.accountSummaries}
                      className="max-w-[300px] w-full"
                      name="account"
                      value={values.account}
                      onChange={(e) => {
                        setFieldValue("account", e);
                        setFieldValue("viewProperty", "");
                      }}
                      disabled={false}
                      disabledValue={undefined}
                    />

                    {errors?.account && touched.account && (
                      <p className="p-small text-secondaryRed">
                        {errors.account}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
                  <TextTag
                    as="label"
                    text={"Property"}
                    className={"p-medium max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <div className="w-full flex flex-col">
                    <DropDown
                      data={values?.account?.propertySummaries}
                      className="max-w-[300px] w-full"
                      name="viewProperty"
                      value={values.viewProperty}
                      onChange={(e) => {
                        setFieldValue("viewProperty", e);
                        setFieldValue("GSCProperty", "");
                      }}
                      disabled={false}
                      disabledValue={undefined}
                    />
                    {errors?.viewProperty && touched.viewProperty && (
                      <p className="p-small text-secondaryRed">
                        {errors.viewProperty}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
                  <TextTag
                    as="label"
                    text={"GSC property"}
                    className={"p-medium max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <DropDown
                    data={values?.viewProperty?.profiles}
                    className="max-w-[300px] w-full"
                    name="GSCProperty"
                    value={values.GSCProperty}
                    onChange={(e) => {
                      setFieldValue("GSCProperty", e);
                    }}
                    disabled={false}
                    disabledValue={undefined}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <h6 className="tracking-[-0.2px] h6 font-medium mt-[30px]">
                  Add new Project
                </h6>
                <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
                  <TextTag
                    as="label"
                    text={"Project name"}
                    className={"p-medium max-w-[180px] w-full"}
                    color={"text-[#464646]"}
                  />
                  <InputField
                    className="max-w-[300px] w-full"
                    label=""
                    type="text"
                    name="projectName"
                    placeholder="Enter Folder name"
                    icon=""
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.projectName}
                    error={errors?.projectName}
                    touch={touched.projectName}
                    disabled={false}
                  />
                </div>

                <div className="flex sm:flex-nowrap flex-wrap items-center justify-start gap-[32px] mb-6">
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

                {/* <div className="flex w-full items-start lg:items-center sm:gap-5 gap-1 lg:gap-8 flex-col lg:flex-row">
                  <TextTag as="label" text={''} className={'text-sm font-normal max-w-[180px] w-full'} color={'text-[#464646]'} />
                  <Button
                    text="Add Project"
                    className="!py-[10px] !px-[16px] !leading-5 !font-medium tracking-[-0.16px] bg-lightBlue text-tagBlue"
                    onClick={() => {}}
                    type={undefined}
                  />
                </div> */}
              </div>
              <div className="">
                <Button
                  text={isSubmitting ? <Spinner className="" /> : "Add Project"}
                  className="!h-[48px] !w-[132px] flex items-center justify-center !py-[14px] !px-[20px] !leading-5 font-medium tracking-[-0.16px] text-white !bg-customBlue"
                  onClick={() => {}}
                  type={"submit"}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewProject;
