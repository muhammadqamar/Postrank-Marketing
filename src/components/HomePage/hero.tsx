import React from "react";
import { TextTag } from "../../utils/Typography";
import Button from "../../utils/Button";

import GoogleLogo from "../../assets/images/icons/google-logo.svg";
import BroserImage from "../../assets/images/Browser.png";

const hero = ({ login }: any) => {
  return (
    <div className="w-full mt-14 md:mt-16 mb-[112px] md:mb-[164px] ">
      <div className=" w-full text-center">
        <h1 className="h1 mb-3 md:mb-4 text-Black">
          Analyze Your Content <span className=" italic">Visually</span>
        </h1>
        <TextTag
          as="p"
          color="text-Grey-700"
          text="Postrank connects with your Google Analytics and shows you how your content stacks up against each other."
          className="md:w-[441px] w-full p-large mb-8 mx-auto"
        />

        <Button
          type="button"
          disabled={false}
          onClick={() => {
            login();
          }}
          text="Sign in with Google"
          icon={
            <img src={GoogleLogo} alt="google logo" className="w-auto h-auto" />
          }
          className="!min-w-[200px] !font-['Roboto'] mx-auto mb-[35px] md:mb-[67px] p-medium !text-[14px] text-Blue-400 border-2 border-solid border-Blue-400  rounded-sm !px-2 !py-[11px] flex items-center justify-start gap-6 !bg-white shadow-small-shadow"
        />
      </div>

      <div className="w-full">
        <img src={BroserImage} alt="BroserImage" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default hero;
