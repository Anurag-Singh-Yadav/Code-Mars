import React from 'react'
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
function IdeMobileNavbar({currTab,setCurrTab}) {
  return (
    <div className="">
    <Popover className="bg-[#e4ecff]">
      <div className="px-2 py-3  flex justify-between lg:hidden">
        
        <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
          <span className="absolute -inset-0.5" />
          <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
        </Popover.Button>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="z-10 absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
        >
          <div id="overlay"></div>
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
            <div className="px-5 pb-0 pt-2">
              <div className="flex items-center justify-between">
                <div className="mr-auto flex gap-2 items-center justify-center text-[1.3rem] font-bold text-[#415082]">
                    Code-Mars
                </div>
                <div className="mr-2">
                  <Popover.Button className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="absolute -inset-0.5" />
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="px-5 py-2">
              <div className="grid grid-cols-1 gap-3  text-[1rem] font-[500]">
                  <div onClick={() => setCurrTab("description")} className={`${
            currTab === "description"
              ? "active"
              : "hover:bg-gray-500 hover:text-white"
          }`}>Descriptions</div>
                  <div onClick={() => setCurrTab("discuss")}
                    className={`currTab === "discuss"
                    ? "active"
                    : "hover:bg-gray-500 hover:text-white"
                }`}
                  >Discuss</div>
                  <div onClick={() => setCurrTab("mySubmission")} 
                    className={`${
                        currTab === "mySubmission"
                          ? "active"
                          : "hover:bg-gray-500 hover:text-white"
                      }`}
                  >My Submission</div>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  </div>
  )
}

export default IdeMobileNavbar
