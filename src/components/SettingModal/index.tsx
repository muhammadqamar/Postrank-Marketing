/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Fragment, MouseEventHandler, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import AccountDetails from "./accountDetails";
import Feedback from "./feedback";
import Supports from "./support";
import AddProjects from "./AddProject";
import LeftSide from "./LeftSide/index";
// import AddNewProject from "./AddProject/addNewProject";

type modalProps = {
  isOpen: boolean;
  closeModal: MouseEventHandler<HTMLButtonElement>;
  isOpenNewFolder: string;
};

const Index = ({ isOpen, closeModal, isOpenNewFolder }: modalProps) => {
  const [activeTab, setActiveTab] = useState<string | boolean | null>(
    "Account details",
  );

  useEffect(() => {
    if (isOpenNewFolder === "Account details") {
      setActiveTab("Account details");
    } else {
      setActiveTab("Projects");
    }
  }, [isOpenNewFolder]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={() => {}}>
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
              <Dialog.Panel className="w-full max-w-[1200px] transform overflow-hidden rounded-[20px] common-bg-color sm:p-8 p-4 text-left align-middle shadow-xl transition-all">
                <div className="flex items-start  gap-[42px] md:flex-nowrap flex-wrap">
                  <LeftSide
                    setActiveTab={setActiveTab}
                    closeModal={closeModal}
                    activeTab={activeTab}
                  />
                  <div className="w-full bg-white rounded-[20px] ">
                    {activeTab === "Account details" && <AccountDetails />}
                    {activeTab === "Projects" && <AddProjects />}

                    {/* {isOpenNewFolder === "addFolder" && (
                      <AddNewProject
                        setAddProject={() => {}}
                        property={property}
                      />
                    )} */}
                    {activeTab === "Feedback" && <Feedback />}
                    {activeTab === "Support" && <Supports />}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Index;
