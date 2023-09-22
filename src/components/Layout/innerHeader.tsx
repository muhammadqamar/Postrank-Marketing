/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { navigate } from "gatsby";
import { Link } from "gatsby";
import Select from "../../utils/Select";
import SearchField from "../../utils/SearchField";
import SettingModal from "../SettingModal";
import { setActiveProjectDetail } from "../../store/reducers/projects";
// icons
import {
  SettingsIcon,
  CategoryIcon,
  LogoutIcon,
  AddIcon,
  GridIcon,
} from "../../icons";

import User from "../../assets/images/png/user.png";
import { TextTag } from "../../utils/Typography";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { getFoldersAction } from "../../store/actions/folders";

const InnerHeader = ({ setsearchQuery, searchQuery }: any) => {
  const { projects, accountDetails }: any = useSelector(
    (state: RootState) => state,
  );
  const { userProject } = projects;
  const { userProfile } = accountDetails;
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenNewFolder, setIsOpenNewFolder] = useState("");
  const [selectData, setSelectData] = useState<any>();
  const dispatch = useDispatch();

  return (
    <div className="max-w-[1280px] mx-auto px-10 py-4 flex items-center justify-between">
      <div className="flex items-center gap-[25px]">
        <Link to={"/home"}>
          <TextTag
            as="h6"
            text="postrank.io"
            color="text-black"
            className="p-medium !font-semibold"
          />
        </Link>

        <div className="md:block hidden">
          <Select
            className=""
            data={userProject?.projects || []}
            companiesDrop={false}
            addIcon={<AddIcon color="#ffffff" />}
            addText={"Add new Project"}
            leftIcon={<GridIcon />}
            rightIcon={undefined}
            leftText={""}
            onClick={() => {
              setIsOpenModal(true);
              setIsOpenNewFolder("addFolder");
            }}
            isDateM={false}
            simpleDropDown={false}
            dateOnCancel={() => {}}
            multiSelect={false}
            dateOnApply={() => {}}
            onChange={(e: any) => {
              setSelectData(e);
              localStorage.setItem("propertyId", e?.propertyId);
              dispatch(setActiveProjectDetail(e));
              getFoldersAction(selectData?.id);
            }}
            value={selectData}
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="md:flex hidden">
          <SearchField
            className=""
            value={searchQuery}
            onChange={setsearchQuery}
            placeholder={"Search..."}
            width={""}
          />
        </div>

        <div className="">
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <Menu.Button
                  className={`w-12 h-12 flex items-center justify-center bg-white rounded-full  border-[2px] border-solid border-white ${
                    open ? "ring-[2px] ring-blue-500" : ""
                  }`}
                >
                  <img
                    className="w-auto h-auto object-cover rounded-full focused"
                    src={userProfile?.user?.avatar || User}
                    alt="user photo"
                  />
                </Menu.Button>
                {open && (
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="dropdown-menu !shadow-mdShadow">
                      <Menu.Item>
                        <div
                          onClick={() => {
                            setIsOpenModal(true);
                            setIsOpenNewFolder("Account details");
                          }}
                          className="dropdown-item border-none cursor-pointer"
                        >
                          <SettingsIcon />
                          Settings
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <div
                          onClick={() => {
                            setIsOpenModal(true);
                            setIsOpenNewFolder("Project");
                          }}
                          className="dropdown-item border-none cursor-pointer"
                        >
                          <CategoryIcon color={""} />
                          My projects
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <div className="my-2 w-full " />
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="#"
                          className="dropdown-item border-none"
                          onClick={() => {
                            localStorage.removeItem("userId");
                            localStorage.removeItem("access_token");
                            navigate("/");
                          }}
                        >
                          <LogoutIcon />
                          Logout
                        </Link>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                )}
              </>
            )}
          </Menu>
        </div>
      </div>

      {/* test */}
      <SettingModal
        isOpen={isOpenModal}
        isOpenNewFolder={isOpenNewFolder}
        closeModal={() => setIsOpenModal(false)}
      />
    </div>
  );
};

export default InnerHeader;
