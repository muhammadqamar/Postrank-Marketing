import React, { Fragment, MouseEventHandler } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TextTag } from "../Typography";
import Button from "../Button";

type modalProps = {
  isOpenDelete: boolean;
  setIsOpenDelete: (value: boolean) => void;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  tagName: string;
  headingText?: string;
  confirmText?: string;
};
const Index = ({
  isOpenDelete,
  setIsOpenDelete,
  tagName,
  onDelete,
  headingText,
  confirmText,
}: modalProps) => {
  return (
    <div>
      <Transition appear show={isOpenDelete} as={Fragment}>
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
            <div className="fixed inset-0 bg-black bg-opacity-20" />
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
                <Dialog.Panel className="w-full max-w-[380px] transform overflow-hidden rounded-[20px] bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h6" className="h6">
                    {headingText ? headingText : "Delete tag?"}
                  </Dialog.Title>
                  <div className="mt-4">
                    <TextTag
                      as="p"
                      text={
                        confirmText
                          ? confirmText
                          : `You’re about to delete tag “${tagName}” Are you sure? This action is permanent.`
                      }
                      color="text-textGray"
                      className="!font-normal mb-8"
                    />

                    <div className="w-full flex items-start justify-end gap-4">
                      <Button
                        text="Cancel"
                        type={"button"}
                        onClick={() => setIsOpenDelete(false)}
                        className="!w-fit !py-[14px] !px-5 bg-lightGray text-textGray flex items-center justify-center"
                      />
                      <Button
                        text="Delete"
                        type={"button"}
                        onClick={() => onDelete}
                        className="!w-fit !py-[14px] !px-5 !bg-black text-white flex items-center justify-center"
                      />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Index;
