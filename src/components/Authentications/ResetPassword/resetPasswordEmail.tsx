import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button";
import { TextTag } from "../../../utils/Typography";
import { Link } from "react-router-dom";

type props = {
  setActiveTab: (value: boolean) => void;
};
interface FormValues {
  email: string;
}

interface FormErrors {
  email?: string;
}

const ResetPasswordEmail = ({ setActiveTab }: props) => {
  return (
    <div className="bg-white h-screen flex flex-col justify-between items-center sm:pt-[132px] pt-20 sm:pb-16 pb-8 px-5">
      <div className="sm:w-80 w-full">
        <TextTag
          as="h6"
          text={"Reset password"}
          className={"h6 mb-[42px]"}
          color={""}
        />
        <Formik
          initialValues={{ email: "" }}
          validate={(values: FormValues) => {
            const errors: FormErrors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
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
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            // isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <InputField
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors?.email}
                touch={touched.email}
                icon={""}
                placeholder={""}
                className={""}
                disabled={false}
              />

              <Button
                text="Reset password"
                onClick={() => {
                  setActiveTab(false);
                }}
                className="w-full !bg-customBlue !text-white flex justify-center mt-[42px] sm:font-medium !leading-5"
                type="submit"
              />
              {/* <div className="fixed inset-0 flex justify-center items-baseline pt-[132px] bg-white">
                <ConfirmPassword />
              </div> */}
            </form>
          )}
        </Formik>
      </div>
      <div className="flex sm:flex-nowrap flex-wrap gap-2 justify-evenly">
        <TextTag
          as="p"
          text={"Already a member?"}
          className={"p-small !leading-[18px]"}
          color={""}
        />
        <Link to={"/login"}>
          <TextTag
            as="p"
            text={"Login now!"}
            className={"p-small !font-medium"}
            color={"text-customBlue"}
          />
        </Link>
      </div>
    </div>
  );
};

export default ResetPasswordEmail;
