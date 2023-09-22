import React from "react";
import { TextTag } from "../../utils/Typography";

import Button from "../../utils/Button";

const Support = () => {
  return (
    <div className="sm:pt-9 pt-4 sm:px-8 px-4 sm:pb-8 pb-4 rounded-[20px] bg-white mt-5">
      <TextTag as="h5" text={"Support"} className="h5 mb-5" color={""} />
      <div className="pt-8 sm:pb-16 pb-8 max-w-[457px] flex flex-col gap-[42px]">
        <div className="flex flex-col gap-[24px] max-w-[127px]">
          <TextTag as="h6" text={"Contact us"} className={"h6"} color={""} />
          <Button
            text={"Send email"}
            onClick={() => {}}
            type={undefined}
            className="text-white !bg-customBlue font-medium justify-center !leading-5"
          />
        </div>
        <div className="flex flex-col gap-4 max-w-[457px]">
          <TextTag
            as="h6"
            text={"Question title #1"}
            className={"h6"}
            color={""}
          />
          <TextTag
            as="p"
            text={
              "In “new wizard” flow when user selects a country, we need to show visas that have “match” badge at the begining and then everything else"
            }
            className={"p-large"}
            color={""}
          />
        </div>
        <div className="flex flex-col gap-4 max-w-[457px]">
          <TextTag
            as="h6"
            text={"Question title #2"}
            className={"h6"}
            color={""}
          />
          <TextTag
            as="p"
            text={
              "In “new wizard” flow when user selects a country, we need to show visas that have “match” badge at the begining and then everything else"
            }
            className={"p-large"}
            color={""}
          />
        </div>
        <div className="flex flex-col gap-4 max-w-[457px]">
          <TextTag
            as="h6"
            text={"Question title #3"}
            className={"h6"}
            color={""}
          />
          <TextTag
            as="p"
            text={
              "In “new wizard” flow when user selects a country, we need to show visas that have “match” badge at the begining and then everything else"
            }
            className={"p-large"}
            color={""}
          />
        </div>
        <div className="flex flex-col gap-4 max-w-[457px]">
          <TextTag
            as="h6"
            text={"Question title #4"}
            className={"h6"}
            color={""}
          />
          <TextTag
            as="p"
            text={
              "In “new wizard” flow when user selects a country, we need to show visas that have “match” badge at the begining and then everything else"
            }
            className={"p-large"}
            color={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
