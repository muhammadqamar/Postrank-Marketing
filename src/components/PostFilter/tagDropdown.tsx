import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChangeEventHandler, Fragment, MouseEventHandler } from "react";
import { TagIcon, AddContactIcon, AddIcon } from "../../icons";
import Button from "../../utils/Button";
import { TextTag } from "../../utils/Typography";
import SearchField from "../../utils/SearchField";

type DropdownProps = {
  onclick: MouseEventHandler<HTMLButtonElement>;
  onClear: MouseEventHandler<HTMLButtonElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  addTagDropdown: boolean;
  createTag: string;
};

const TagDrapdown = ({
  onclick,
  onClear,
  onChange,
  addTagDropdown,
}: DropdownProps) => {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <div>
              <Menu.Button
                className={
                  addTagDropdown
                    ? `w-fit py-[7px] px-[10px] flex items-center gap-2 hover:bg-lightBlue rounded-full ${
                        open ? "bg-lightBlue" : ""
                      }`
                    : `w-fit py-[10px] px-4 flex items-center gap-2 hover:bg-lightBlue rounded-full ${
                        open ? "bg-lightBlue" : ""
                      }`
                }
              >
                <TextTag
                  as="p"
                  text={addTagDropdown ? "Add Tags" : "Tags"}
                  color="text-blue-700"
                  className={
                    addTagDropdown ? "p-medium !font-medium" : "p-large"
                  }
                />

                {!addTagDropdown && <TagIcon />}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={`${
                  !addTagDropdown
                    ? "dropdown-menu !w-[263px]"
                    : "dropdown-menu !w-[263px] shadow-lgShadow"
                }`}
              >
                <div className="border-none px-4 w-full">
                  {!addTagDropdown && (
                    <div className="w-full flex items-center justify-between py-[6px] mb-3">
                      <TextTag
                        as="h6"
                        text="My tags"
                        color="text-black"
                        className="p-larg !font-medium"
                      />
                      <Button
                        text="Clear all"
                        type={"button"}
                        onClick={onClear}
                        className="!p-0 bg-white"
                      />
                    </div>
                  )}
                  <div className="mb-4">
                    <SearchField
                      className={`${
                        addTagDropdown
                          ? "!border-b !border-solid !border-t-[0] !border-x-[0] !border-commonGray !rounded-none"
                          : "!border !border-solid !border-commonGray "
                      }`}
                      onChange={onChange}
                      placeholder={addTagDropdown ? "Search Tag" : "Search..."}
                      width={""}
                    />
                  </div>
                </div>

                <Menu.Item>
                  <TextTag
                    as="p"
                    text={addTagDropdown ? "" : "My projects"}
                    color="text-black"
                    className={
                      addTagDropdown
                        ? "border-none"
                        : "dropdown-item !border-none !pl-7"
                    }
                  />
                </Menu.Item>
                <div
                  className={
                    addTagDropdown ? "!border-none " : "!border-mediumGray"
                  }
                >
                  <Button
                    text={`${
                      addTagDropdown ? "Create new: sdad" : "Manage tags"
                    }`}
                    type={"button"}
                    onClick={onclick}
                    className={
                      addTagDropdown
                        ? "!py-[10px] !px-[10px] bg-white !border-none dropdown-item !rounded-none !w-full"
                        : "!py-[11px] !px-[10px] gap-[10px] bg-white !border-none dropdown-item !rounded-none !w-full"
                    }
                    icon={
                      !addTagDropdown ? (
                        <AddContactIcon />
                      ) : (
                        <AddIcon color={""} />
                      )
                    }
                  />
                </div>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
    </div>
  );
};

export default TagDrapdown;
