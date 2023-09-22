import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../utils/Button";
import { CloseIcon } from "../../icons";
import { TextTag } from "../../utils/Typography";
import SearchField from "../../utils/SearchField";
import DeleteModal from "../../utils/DeleteModal";

type modalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const TagsModal = ({ isOpen, setIsOpen }: modalProps) => {
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  return (
    <div>
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
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[444px] transform overflow-hidden rounded-[20px] common-bg-color p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h4"
                    className="w-full flex items-center justify-between gap-2"
                  >
                    <div className="flex items-center  gap-4">
                      <Button
                        text=""
                        type={"button"}
                        onClick={() => setIsOpen(false)}
                        className="!p-[10px] bg-lightBlue"
                        icon={<CloseIcon color="#274C9B" />}
                      />
                      <TextTag
                        as="h5"
                        text="Manage tags"
                        color="text-black"
                        className="h5"
                      />
                    </div>

                    <Button
                      text="Save"
                      type={"button"}
                      onClick={() => {}}
                      className="!w-fit !py-[10px] !px-4 !bg-customBlue text-white flex justify-center"
                    />
                  </Dialog.Title>
                  <div className="my-8">
                    <SearchField
                      className=""
                      onChange={() => {}}
                      placeholder={"Search..."}
                      width={""}
                    />
                  </div>
                  <div className="w-full h-auto rounded-2xl bg-white p-4 flex flex-col gap-4 items-start">
                    <div className="w-full flex items-center justify-between gap-4">
                      <TextTag
                        as="p"
                        text="Digital Nomad"
                        color="text-black"
                        className="p-large"
                      />
                      <Button
                        text=""
                        type={"button"}
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                        className="!p-[10px] bg-white"
                        icon={<CloseIcon color="#274C9B" />}
                      />
                    </div>
                  </div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <DeleteModal
        isOpenDelete={isOpenDelete}
        setIsOpenDelete={setIsOpenDelete}
        onDelete={() => {}}
        tagName={"tag named"}
      />
    </div>
  );
};

export default TagsModal;
