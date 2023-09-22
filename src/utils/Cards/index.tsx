/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Button from "../Button/index";
import { TrophyIcon, IncreaseIcon } from "../../icons";
import { TextTag } from "../Typography";
import { Link } from "gatsby";
import { useDispatch } from "react-redux";
import {
  setSelectedPost,
  setSecondaPostdetail,
} from "../../store/reducers/allPosts";

interface IndexProps {
  className: string;
  backgroundImage: React.ReactNode;
  cardTitle: string;
  calendarIcon1: React.ReactNode;
  dotImage1: React.ReactNode;
  date1: string;
  eyeIcon1: React.ReactNode;
  dotImage2: React.ReactNode;
  quantity1: string;
  contactIcon1: React.ReactNode;
  quantity2: string;
  openNewIcon: React.ReactNode;
  buttonText: string;
  eyeIcon2: React.ReactNode;
  quantity3: string;
  dotImage3: React.ReactNode;
  contactIcon2: React.ReactNode;
  quantity4: string;
  btnLink: string;
  data: any;
  isCompare: boolean;
  selected: boolean;
}
const Index: React.FC<IndexProps> = ({
  className,
  backgroundImage,
  cardTitle,
  calendarIcon1,
  dotImage1,
  date1,
  eyeIcon1,
  quantity1,
  dotImage2,
  contactIcon1,
  quantity2,
  openNewIcon,
  buttonText,
  eyeIcon2,
  quantity3,
  dotImage3,
  contactIcon2,
  quantity4,
  btnLink,
  data,
  isCompare,
  selected,
}) => {
  const dispatch = useDispatch();

  const bgImgStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "242px",
  };
  return (
    <>
      <div
        className={`rounded-[20px] w-full overflow-hidden ${className} `}
        onClick={() => {
          if (isCompare) {
            dispatch(setSecondaPostdetail(data));
          }
        }}
      >
        <div className="flex justify-end p-3" style={bgImgStyle}>
          <div className="flex gap-2">
            <div className="bg-white rounded-full p-[7px] h-fit">
              <TrophyIcon />
            </div>
            <div className="flex items-center gap-1 px-2 py-[7px] bg-white rounded-2xl h-8 cursor-pointer">
              <span className="flex">
                <p className="text-primaryGray">#</p>1
              </span>
              <IncreaseIcon />
            </div>
          </div>
        </div>
        {/* text */}
        <div className="md:p-5 p-4 bg-white">
          <div className="flex justify-between">
            <div className="w-full">
              <TextTag
                as="h6"
                text={
                  cardTitle.length >= 55
                    ? `${cardTitle.slice(0, 55)}...`
                    : `${cardTitle}`
                }
                className={"text-xl mb-4 font-medium "}
                color={""}
              />
              <div className="flex items-center gap-2 flex-wrap">
                {calendarIcon1 && <span>{calendarIcon1}</span>}
                <TextTag
                  as="p"
                  text={date1}
                  className={"p-medium"}
                  color={"text-textGray"}
                />
                {dotImage1 && <span>{dotImage1}</span>}
                {/* eye */}
                <div className="flex gap-1 items-center">
                  {eyeIcon1 && <span>{eyeIcon1}</span>}
                  <TextTag
                    as="p"
                    text={quantity1}
                    className={"p-medium"}
                    color={""}
                  />
                </div>
                {dotImage2 && <span>{dotImage2}</span>}
                {/* Contact */}
                <div className="flex gap-1 items-center">
                  {contactIcon1 && <span>{contactIcon1}</span>}
                  <TextTag
                    as="p"
                    text={quantity2}
                    className={"p-medium"}
                    color={""}
                  />
                </div>
              </div>
            </div>
            {openNewIcon && (
              <div className="p-[10px] bg-lightGray rounded-full h-10">
                <span>{openNewIcon}</span>
              </div>
            )}
          </div>
          <div
            className={`flex justify-between sm:flex-row flex-col-reverse gap-4 ${
              buttonText && "md:mt-14 mt-10"
            }`}
          >
            {/* <div className="py-[14px] px-5 bg-lightBlue rounded-[20px]">
              <button className="text-blue-700">View details</button>
            </div> */}
            {buttonText && !isCompare && (
              <Link to={`${btnLink}?slug=${data?.pagePath}`}>
                <Button
                  text={buttonText}
                  onClick={() => {
                    dispatch(setSelectedPost(data));
                  }}
                  type={undefined}
                  className="text-tagBlue p-large !font-medium"
                />
              </Link>
            )}
            <div className="flex gap-2 items-center justify-end">
              {/* eye */}
              <div className="flex gap-1 items-center">
                {eyeIcon2 && <span>{eyeIcon2}</span>}
                {quantity3 && (
                  <TextTag
                    as="p"
                    text={quantity3}
                    className={"p-medium"}
                    color={""}
                  />
                )}
              </div>
              {dotImage3 && <span>{dotImage3}</span>}
              {/* Contact */}
              <div className="flex gap-1 items-center">
                {contactIcon2 && <span>{contactIcon2}</span>}
                {quantity3 && (
                  <TextTag
                    as="p"
                    text={quantity4}
                    className={"p-medium"}
                    color={""}
                  />
                )}
              </div>
            </div>

            {selected && (
              <Button
                text={"Selected"}
                onClick={() => {}}
                type={undefined}
                className="text-tagBlue p-large !px-[10x] !py-[7px] !rounded-md border border-blue-700 bg-blue-500 !font-medium"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
