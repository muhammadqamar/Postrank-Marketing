/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Listbox } from "@headlessui/react";

import { ExpandIcon, Check } from "../../../icons";
import { TextTag } from "../../../utils/Typography";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface arrayProps {
  // avatar?: string | undefined;
  name?: string;
  id: number;
}

interface SelectedType {
  name: string;
  id: number;
}

type dropdownProps = {
  data: Array<arrayProps>;
  className: string;
  name?: string;
  value: string | unknown;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  disabledValue: string | number | any;
};

const Index = ({
  data,
  className,
  name,
  value,
  onChange,
  disabled,
  disabledValue,
}: dropdownProps) => {
  const [selected, setSelected] = useState<SelectedType | any>(value);

  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  return (
    <div className={` ${className}`}>
      <Listbox
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {({ open }) => (
          <div className={`relative ${className}`}>
            <Listbox.Button
              className={`relative cursor-default w-full py-[10px] px-3 rounded-[7px] border border-solid h-10 bg-white   text-left text-gray-900  ring-1 ring-inset ring-commonGray focus:outline-none focus:ring-0 focus:ring-indigo-500 ${
                open && "ring-indigo-500"
              } sm:text-sm sm:leading-6 `}
            >
              <div className="flex items-center">
                {selected?.name && (
                  <TextTag
                    as="p"
                    text={(selected as { name: string }).name}
                    color="text-black"
                    className="ml-3 block truncate p-medium"
                  />
                )}
                {disabledValue && (
                  <TextTag
                    as="p"
                    text={disabledValue}
                    color="text-black"
                    className="ml-3 block truncate p-medium"
                  />
                )}
              </div>
              <div className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ExpandIcon />
              </div>
            </Listbox.Button>
            {open && (
              <Listbox.Options
                className={`absolute z-10  min-h-56  rounded-2xl w-full bg-white mt-2  py-2 overflow-hidden shadow-mdShadow`}
              >
                {data?.map((item, index: number) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "text-black" : "text-black",
                        `relative cursor-pointer select-none w-full py-[11px] px-[10px] hover:text-white hover:bg-customBlue`,
                      )
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center">
                          {selected ? (
                            <div>
                              <Check />
                            </div>
                          ) : (
                            <div className="w-[18px] h-[18px]" />
                          )}
                          <TextTag
                            as="p"
                            text={item.name}
                            color=""
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate p-medium ",
                            )}
                          />
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default Index;
