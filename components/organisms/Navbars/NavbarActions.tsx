import { WHITE, BLACK } from "@constants/styleConstants/colors.constants";
import { connectLinks } from "@data/connect";
import { Popover, Transition } from "@headlessui/react";
import Button from "components/atoms/Button/Button";
import { ChevronDown } from "components/icons";
import CustomSwitch from "components/molecules/Switch/Switch";
import React, { Fragment } from "react";
import {useTheme} from 'next-themes'
import { useRouter } from "next/router";

interface NavbarActionsProps {}

const NavbarActions: React.FC<NavbarActionsProps> = () => {
  const {theme} = useTheme();
  const router = useRouter();

  const isHome = router.asPath === '/';
  return (
    <div className="flex items-center">
      <div>
        <Popover className="relative">
          {({ open }) => (
            <React.Fragment>
              <Popover.Button
                className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md bg-orange-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <div className={`mr-12 flex items-center ${isHome? 'text-white':'text-black dark:text-white'} !text-lg !font-semibold !p-0`}>
                  connect{" "}
                  <ChevronDown
                    className="ml-2"
                    width={16}
                    height={16}
                    color={theme === 'dark' || isHome? WHITE: BLACK}
                  />
                </div>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                      {connectLinks.map((connect) => (
                        <a
                          key={connect.id}
                          href={connect.url}
                          className="flex col-span-2 items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                          {/* <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                          
                        </div> */}
                          <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">
                              {connect.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {connect.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </React.Fragment>
          )}
        </Popover>
      </div>
      <CustomSwitch />
    </div>
  );
};

NavbarActions.displayName = "NavbarActions";

export default NavbarActions;
