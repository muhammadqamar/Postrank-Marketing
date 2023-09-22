import React from "react";
import ConfirmPassword from "../../../utils/Error";

const ConfirmYourPassword = () => {
  return (
    <div className="bg-white h-screen sm:pt-[132px] pt-20 sm:pb-16 pb-8 flex justify-center items-start">
      <ConfirmPassword
        icon={undefined}
        heading={"Link has been sent."}
        textStyling={"text-textGray"}
        text={"We just sent a link with a temporary password to your email."}
        buttonText={"Back to login"}
        onClick={() => {}}
        className={"max-w-xs"}
        buttonStyling={"!w-full !font-medium !leading-5"}
        path={"/login"}
        pathStyling={"w-full"}
        disabled={false}
      />
    </div>
  );
};

export default ConfirmYourPassword;
