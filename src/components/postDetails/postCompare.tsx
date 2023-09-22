/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../utils/Button";
// import { CloseIcon } from "../../icons";
import { TextTag } from "../../utils/Typography";
import Search from "../../utils/SearchField";
import Card from "../../utils/Cards";

import NoImages from "../../assets/images/png/no-img.png";
import {
  CalendarIcon,
  CloseIcon,
  // CloseIcon,
  ContactIcon,
  DotIcon,
  EyeIcon,
} from "../../icons";
import { Link } from "gatsby";

type modalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  posts: any;
};

const PostCompare = ({ isOpen, setIsOpen, posts }: modalProps) => {
  const [searchQuery, setsearchQuery] = useState<any>("");
  const [allpostdata, setallpostdata] = useState<any>([]);

  useEffect(() => {
    if (posts?.allPost?.length > 0) {
      if (searchQuery) {
        setallpostdata(
          posts?.allPost?.filter(
            (post: any) => post?.title.includes(searchQuery),
          ),
        );
      } else {
        setallpostdata(posts?.allPost);
      }
    }
  }, [posts?.allPost, searchQuery]);
  return (
    <div className="">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center sm:p-10 p-5 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[1280px] transform overflow-hidden rounded-[20px] common-bg-color sm:p-8 p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h4"
                    className="!max-w-7xl !mx-auto flex items-center justify-between gap-2"
                  >
                    <div className="flex justify-between items-center md:flex-nowrap flex-wrap max-sm:gap-2">
                      <div className="flex gap-4 items-center sm:w-[380px] w-60">
                        <div className="rounded-full bg-lightBlue cursor-pointer">
                          <Button
                            text=""
                            type={"button"}
                            onClick={() => setIsOpen(false)}
                            className="!p-[10px] bg-lightBlue"
                            icon={<CloseIcon color="#274C9B" />}
                          />
                        </div>
                        <TextTag
                          as="h5"
                          text={"Add post to compare"}
                          className={"h5 "}
                          color={""}
                        />
                      </div>
                      <div className="sm:block hidden">
                        <Search
                          onChange={setsearchQuery}
                          placeholder={"Search..."}
                          className={""}
                          width={"w-[435px]"}
                          value={searchQuery}
                        />
                      </div>
                      <div className="w-60 md:w-[383px] flex justify-end">
                        <Link
                          to={`/compare?slug=${posts?.selectedPost?.pagePath}&slug1=${posts?.secondPost?.pagePath}`}
                        >
                          <Button
                            text={"Add post"}
                            onClick={() => {}}
                            type={undefined}
                            className="!text-white !bg-customBlue p-large !py-[10px] !px-3 "
                          />
                        </Link>
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="w-full flex items-center flex-wrap  gap-6 pt-8">
                    {allpostdata?.map((data: any, index: number) => (
                      <div
                        className={`cursor-pointer border-[2px] border-solid rounded-[20px] ${
                          posts?.secondPost?.title === data?.title
                            ? "border-blue-500"
                            : "border-[#f1f6fd]"
                        }`}
                        key={index}
                      >
                        <Card
                          cardTitle={data?.title}
                          calendarIcon1={<CalendarIcon color={""} />}
                          date1="12 May, 2023"
                          eyeIcon1={undefined}
                          quantity1=""
                          contactIcon1={undefined}
                          quantity2=""
                          openNewIcon={undefined}
                          buttonText="View details"
                          eyeIcon2={<EyeIcon />}
                          quantity3="2,168"
                          contactIcon2={<ContactIcon />}
                          dotImage1={undefined}
                          dotImage2={undefined}
                          dotImage3={<DotIcon />}
                          quantity4="1,352"
                          backgroundImage={data?.image || NoImages}
                          className="sm:w-[384px]"
                          btnLink={`/post-details`}
                          data={data}
                          isCompare={true}
                          selected={
                            posts?.secondPost?.pagePath === data?.pagePath
                              ? true
                              : false
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default PostCompare;
