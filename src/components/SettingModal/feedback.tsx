import React from "react";
import { TextTag } from "../../utils/Typography";
import { Formik } from "formik";

import Button from "../../utils/Button";
import { Textarea } from "flowbite-react";
interface FormValues {
  email: string;
  password: string;
  currentPassword: string;
  newPassword: string;
  message: string;
}

interface FormErrors {
  email?: string;
  password?: string;
  currentPassword: string;
  newPassword: string;
  message: string;
}

const Feedback = () => {
  return (
    <div className="sm:pt-9 pt-4 sm:px-8 px-4 pb-8 rounded-[20px] bg-white mt-5">
      <TextTag as="h5" text={"Feedback"} className="h5 mb-5" color={""} />
      <Formik
        initialValues={{
          email: "",
          password: "",
          currentPassword: "",
          newPassword: "",
          message: "",
        }}
        validate={(values: FormValues) => {
          const errors: FormErrors = {
            currentPassword: "",
            newPassword: "",
            message: "",
          };
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Email doesn’t exist";
          }

          if (values.password !== "correctpassword") {
            errors.password = "Wrong password";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          // values,
          // errors,
          // touched,
          // handleChange,
          // handleBlur,
          handleSubmit,
          // isSubmitting,
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className="pt-8 max-w-[511px] flex flex-col gap-[42px]"
          >
            <div className="flex flex-col gap-[42px]">
              <TextTag as="h6" text={"Category"} className={"h6"} color={""} />
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <label htmlFor="Request" className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="Request"
                      className="mr-2 border-2 border-solid border-commonGray rounded cursor-pointer checked:bg-customBlue !outline-none focus:!ring-[-1]"
                    />
                    <TextTag
                      as="span"
                      text={"Request"}
                      className={"p-large !leading-5"}
                      color={""}
                    />
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="Bug" className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="Bug"
                      className="mr-2 border-2 border-solid border-commonGray rounded cursor-pointer checked:bg-customBlue !outline-none focus:!ring-[-1]"
                    />
                    <TextTag
                      as="span"
                      text={"Bug"}
                      className={"p-large !leading-5"}
                      color={""}
                    />
                  </label>
                </div>
                <div className="flex justify-between items-center">
                  <label htmlFor="Feedback" className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="Feedback"
                      className="mr-2 border-2 border-solid border-commonGray rounded cursor-pointer checked:bg-customBlue !outline-none focus:!ring-[-1]"
                    />
                    <TextTag
                      as="span"
                      text={"Feedback"}
                      className={"p-large !leading-5"}
                      color={""}
                    />
                  </label>
                </div>
              </div>
              <div className="">
                <TextTag
                  as="p"
                  text={"Message"}
                  className={"h6 mb-6"}
                  color={"text-textGray"}
                />
                <Textarea></Textarea>
              </div>
              <div>
                <Button
                  text={"Send feedback"}
                  onClick={() => {}}
                  type={undefined}
                  className="text-white !bg-customBlue !font-medium !leading-5"
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Feedback;
