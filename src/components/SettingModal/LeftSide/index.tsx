/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

import Button from "../../../utils/Button";
import {
  CloseIcon,
  Support,
  FeedBack,
  UserIcon,
  CategoryIcon,
} from "../../../icons";
import { TextTag } from "../../../utils/Typography";

const navigation = [
  {
    text: "Account details",
    icon: <UserIcon color={""} />,
    checked: true,
  },
  {
    text: "Projects",
    icon: <CategoryIcon color={""} />,
    checked: false,
  },

  {
    text: "Feedback",
    icon: <FeedBack color={""} />,
    checked: false,
  },
  {
    text: "Support",
    icon: <Support color={""} />,
    checked: false,
  },
];

const Index = ({ closeModal, setActiveTab, activeTab }: any) => {
  // const [hoverIcon, setHoverIcon] = useState<boolean | null>(false);
  // const [hoverIcon1, setHoverIcon1] = useState<boolean | null>(false);
  // const [hoverIcon2, setHoverIcon2] = useState<boolean | null>(false);
  // const [hoverIcon3, setHoverIcon3] = useState<boolean | null>(false);

  // Select

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const [navigationData, setNavigationData] = useState<any>([]);
  useEffect(() => {
    if (navigation) {
      setNavigationData(
        navigation?.map((navi) => {
          if (navi.text === activeTab) {
            return { ...navi, checked: true };
          } else {
            return { ...navi, checked: false };
          }
        }),
      );
    }
  }, []);

  return (
    <div className="w-[256px] flex-shrink-0 md:pt-0 pt-4 sm:pr-0 pr-4">
      <div className="flex items-center  gap-4 mb-[42px]">
        <Button
          text=""
          type={"button"}
          onClick={closeModal}
          className="!p-[10px] bg-lightBlue p-large !font-medium !leading-5"
          icon={<CloseIcon color="#274C9B" />}
        />

        <TextTag as="h5" text="Settings" color="text-black" className="h5" />
      </div>
      <div className=" w-full flex flex-col items-start gap-2 ">
        {navigationData?.map(
          (
            item: {
              text:
                | string
                | number
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | null
                | undefined;
              checked: any;
            },
            i: Key | null | undefined,
          ) => (
            <div
              key={i}
              className="w-full"
              onClick={() =>
                setNavigationData(
                  navigationData.map((menuItem: { text: any }) => {
                    if (menuItem.text === item.text) {
                      setActiveTab(item.text);
                      return {
                        ...menuItem,
                        checked: true,
                      };
                    } else {
                      return { ...menuItem, checked: false };
                    }
                  }),
                )
              }
            >
              <Button
                text={item.text}
                type="button"
                // onClick={() => {}}
                className={`!w-full !px-5 !py-[14px]  !gap-[10px] !font-medium bg-transparent ${
                  item.checked
                    ? "!text-tagBlue !bg-blue-100"
                    : "!text-black bg-transparent"
                } hover:bg-blue-100 hover:!text-tagBlue `}
                icon={
                  item.text === "Account details" ? (
                    <UserIcon color={item.checked ? "#274C9B" : "#000000"} />
                  ) : item.text === "Projects" ? (
                    <CategoryIcon
                      color={item.checked ? "#274C9B" : "#000000"}
                    />
                  ) : item.text === "Feedback" ? (
                    <FeedBack color={item.checked ? "#274C9B" : "#000000"} />
                  ) : (
                    <Support color={item.checked ? "#274C9B" : "#000000"} />
                  )
                }
                onClick={() => {}}
                // checked={item.checked}
              />
            </div>
          ),
        )}

        {/* <div onMouseEnter={() => setHoverIcon1(true)} onMouseLeave={() => setHoverIcon1(false)} className="w-full">
          <Button
            text="Projects"
            type="button"
            onClick={() => setSelect("projects")}
            className={`!w-full !px-5 !py-[14px] !gap-[10px] !font-medium ${
              select ? "!text-blue-700 !bg-blue-100" : "!text-black bg-transparent"
            } hover:bg-blue-100 hover:!text-blue-700`}
            icon={<CategoryIcon color={select || hoverIcon1 ? "#274C9B" : "#000000"} />}
          />
        </div>
        <div onMouseEnter={() => setHoverIcon2(true)} onMouseLeave={() => setHoverIcon2(false)} className="w-full">
          <Button
            text="Feedback"
            type="button"
            onClick={() => setSelect("feedback")}
            className={`!w-full !px-5 !py-[14px] !gap-[10px] bg-transparent !font-medium ${
              select ? "!text-blue-700 !bg-blue-100" : "!text-black bg-transparent"
            } hover:bg-blue-100 hover:!text-blue-700`}
            icon={<FeedBack color={select || hoverIcon2 ? "#274C9B" : "#000000"} />}
          />
        </div>
        <div onMouseEnter={() => setHoverIcon3(true)} onMouseLeave={() => setHoverIcon3(false)} className="w-full">
          <Button
            text="Support"
            type="button"
            onClick={() => setSelect("support")}
            className={`!w-full !px-5 !py-[14px] !gap-[10px] bg-transparent !font-medium ${
              select ? "!text-blue-700 !bg-blue-100" : "!text-black bg-transparent"
            } hover:bg-blue-100 hover:!text-blue-700 `}
            icon={<Support color={select || hoverIcon3 ? "#274C9B" : "#000000"} />}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Index;
