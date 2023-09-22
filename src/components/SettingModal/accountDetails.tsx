/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import { TextTag } from "../../utils/Typography";
import { Formik } from "formik";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import InputField from "../../utils/InputField";
import Button from "../../utils/Button";
import {
  deleteUserProfileAction,
  updateUserProfileAction,
} from "../../store/actions/account";
// import User from "../../assets/images/png/user.png";
import { getUserProjectAction } from "../../store/actions/projects";
import { navigate } from "gatsby";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  repeatNewPassword: string;
  userProfileImage: object | any;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
  repeatNewPassword?: string;
}

const AccountDetails = () => {
  const { accountDetails }: any = useSelector((state: RootState) => state);
  const { userProfile } = accountDetails;

  // const dispatch = useDispatch();

  const fileInputRef: any = useRef(null);

  const [selectedImage, setSelectedImage] = useState<any>(
    userProfile?.user?.avatar,
  );
  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const DeleteAccount = async () => {
    const res = await deleteUserProfileAction(userProfile?.user?.id);
    if (res.status === 200) {
      navigate("/");
    }
  };

  useEffect(() => {
    getUserProjectAction(userProfile?.user?.id);
  }, []);

  return (
    <div className="sm:pt-9 pt-6 sm:px-8 px-4 sm:pb-16 pb-8 rounded-[20px] bg-white">
      <TextTag as="h5" text={"Account details"} className="h5" color={""} />
      <Formik
        initialValues={{
          firstName: userProfile?.user?.firstName || "",
          lastName: userProfile?.user?.lastName || "",
          email: userProfile?.user?.email || "",
          currentPassword: userProfile?.user?.password || "",
          newPassword: "",
          repeatNewPassword: "",
          userProfileImage: {},
        }}
        validate={(values: FormValues) => {
          const errors: FormErrors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email doesn’t exist";
          }

          if (!values.currentPassword) {
            errors.currentPassword = "Required";
          }
          if (!values.newPassword) {
            errors.newPassword = "Required";
          }
          if (!values.repeatNewPassword) {
            errors.repeatNewPassword = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          (async () => {
            const formData = new FormData();

            formData.append("image", values.userProfileImage);

            await fetch(`${process.env.REACT_APP_API_URL}/uploads/image`, {
              method: "POST",
              body: formData,
            })
              .then((response: any) => {
                if (response.ok) {
                  console.log("Image uploaded successfully");
                } else {
                  console.error("Image upload failed");
                }
              })
              .catch((error) => {
                console.error("Network error:", error);
              });

            await updateUserProfileAction(userProfile?.user?.id, {
              firstName: values.firstName || "",
              lastName: values.lastName || "",
              email: values.email || "",
              password: values.newPassword || "",
            });
          })();
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
          // isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="pt-8 max-w-[512px] flex flex-col gap-[42px]"
          >
            <div className="flex flex-col gap-6 ">
              <TextTag
                as="h6"
                text={"Personal information"}
                className={"h6"}
                color={""}
              />
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"First name"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="text"
                  name="firstName"
                  placeholder=""
                  className={"lg:w-[300px] max-w-[300px] !mb-0"}
                  icon=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  error={errors.firstName}
                  touch={touched.firstName}
                  disabled={false}
                />
              </div>
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"Last name"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="text"
                  name="lastName"
                  placeholder=""
                  className={"lg:w-[300px] max-w-[300px] !mb-0"}
                  icon=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  error={errors.lastName}
                  touch={touched.lastName}
                  disabled={false}
                />
              </div>
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
                  name="userProfileImage"
                  value={undefined}
                  className="hidden"
                  accept="image/*"
                  onBlur={handleBlur}
                  ref={fileInputRef}
                  onChange={(e: any) => {
                    const file = e.target.files[0];
                    if (file) {
                      setFieldValue("userProfileImage", file);
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
            <div className="flex flex-col gap-6">
              <TextTag as="h6" text={"Email"} className={"h6"} color={""} />
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"Email"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors?.email}
                  touch={touched.email}
                  icon=""
                  placeholder={""}
                  className={"lg:w-[300px] max-w-[300px] !mb-0 "}
                  disabled={true}
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <TextTag as="h6" text={"Password"} className={"h6"} color={""} />
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"Current password"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="password"
                  name="currentPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPassword}
                  error={errors?.currentPassword}
                  touch={touched.currentPassword}
                  icon=""
                  placeholder={""}
                  className={"lg:w-[300px] max-w-[300px] !mb-0"}
                  disabled={false}
                />
              </div>
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"New password"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="password"
                  name="newPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values?.newPassword}
                  error={errors?.newPassword}
                  touch={touched.newPassword}
                  icon=""
                  placeholder={""}
                  className={"lg:w-[300px] max-w-[300px] !mb-0"}
                  disabled={false}
                />
              </div>
              <div className="flex justify-between items-center sm:flex-nowrap flex-wrap gap-[2px]">
                <TextTag
                  as="p"
                  text={"Repeat new password"}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                <InputField
                  label=""
                  type="password"
                  name="repeatNewPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatNewPassword}
                  error={errors?.repeatNewPassword}
                  touch={touched.repeatNewPassword}
                  icon=""
                  placeholder={""}
                  className={"lg:w-[300px] max-w-[300px] !mb-0"}
                  disabled={false}
                />
              </div>
            </div>
            <div className="flex justify-between flex-wrap">
              <Button
                text="Save"
                onClick={() => {}}
                className="p-large !font-medium !leading-5 text-white !bg-customBlue !py-[14px] !px-5 flex justify-center "
                type={"submit"}
              />
              <Button
                text="Delete account"
                onClick={DeleteAccount}
                className="p-large !font-medium !leading-5 bg-white text-gray-900 !py-[10px] !px-[0px] flex justify-center"
                type={"button"}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AccountDetails;
