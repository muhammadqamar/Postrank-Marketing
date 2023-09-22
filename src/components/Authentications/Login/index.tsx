/* eslint-disable */
import React from "react";
import { Formik } from "formik";
import InputField from "../../../utils/InputField";
import Button from "../../../utils/Button/index";
// import { useGoogleLogin } from '@react-oauth/google';
import { EyeIcon, GoogleIcon, WarningIcon } from "../../../icons";
import { TextTag } from "../../../utils/Typography";
import { Link } from "react-router-dom";
import { getAccountdetailsAction } from "../../../store/actions/account";
interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const LoginForm = () => {
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => {
  //     console.log(codeResponse);
  //     const res = getAccountdetailsAction(codeResponse?.access_token);
  //   },
  //   onError: (error) => console.log('Login Failed:', error),
  // });
  return (
    <div className="bg-white h-screen flex flex-col !justify-between items-center sm:pt-[132px] pt-20 sm:pb-16 pb-8 px-5">
      <div className="sm:w-80 w-full">
        <TextTag
          as="h6"
          text={"Login to your account"}
          className={"h6 mb-[42px]"}
          color={""}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values: FormValues) => {
            const errors: FormErrors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Email doesn’t exist";
            }

            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {}}
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
                icon={<WarningIcon />}
                placeholder={""}
                className={""}
                disabled={false}
              />
              <InputField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors?.password}
                touch={touched.password}
                icon={<EyeIcon />}
                placeholder=""
                className=""
                disabled={false}
              />
              <div className="flex items-center justify-between mb-[42px] sm:flex-nowrap flex-wrap gap-2">
                <label htmlFor="rememberMe" className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="mr-2 border-2 border-solid border-commonGray rounded cursor-pointer checked:bg-customBlue !outline-none focus:!ring-[-1]"
                  />
                  <TextTag
                    as="span"
                    text={"Remember me"}
                    className={"p-medium"}
                    color={""}
                  />
                </label>
                <Link
                  to="/reset-password"
                  className="!text-customBlue p-small !font-medium"
                >
                  Reset Password
                </Link>
              </div>
              <Button
                text="Login"
                onClick={() => {}}
                className="w-full !bg-customBlue !text-white flex justify-center mb-4 !font-medium !leading-5"
                type={undefined}
              />
              <Button
                text="Continue with Google"
                onClick={() => {}}
                className="w-full p-large !font-medium !leading-5 !bg-white !text-gray-900 flex gap-x-[40.4px] border-[2px] border-solid rounded-full"
                icon={<GoogleIcon />}
                type="button"
              />
            </form>
          )}
        </Formik>
      </div>
      <div className="flex gap-2 sm:flex-nowrap flex-wrap justify-evenly">
        <TextTag
          as="p"
          text={"Don’t have an account?"}
          className={"p-small !leading-[18px]"}
          color={""}
        />
        <Link to={"/create-account"}>
          <TextTag
            as="p"
            text={"Create now"}
            className={"p-small !font-medium"}
            color={"!text-customBlue"}
          />
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
