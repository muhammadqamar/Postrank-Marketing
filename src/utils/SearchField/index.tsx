import React, { ChangeEventHandler } from "react";
import { SearchIcon } from "../../icons";

type searchProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className: string;
  width: string;
  value: string;
};

const Index = ({
  onChange,
  placeholder = "Search...",
  className,
  width = "w-full",
  value,
}: searchProps) => {
  return (
    <div className={`relative  h-auto ${width}`}>
      <input
        onChange={(e: any) => onChange(e.target.value)}
        type="text"
        value={value}
        placeholder={placeholder}
        className={`w-full py-[10px] pl-3 pr-9 bg-white rounded-full border-none outline-none h-auto p-medium text-primaryGray focus:!ring-[0] focus:!border-blue-700  ${className}`}
      />
      <div className="absolute top-[10px] right-3 cursor-pointer">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Index;
