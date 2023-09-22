import React, { ChangeEventHandler, FocusEventHandler } from "react";

type InputProps = {
  label: string | undefined;
  type: string | undefined;
  name: string | undefined;
  placeholder: string | undefined;
  className: string | undefined;
  icon: React.ReactNode;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  onBlur: FocusEventHandler<HTMLInputElement> | undefined;
  value: string | undefined;
  error: string[] | string | undefined;
  touch: boolean | undefined;
  disabled: boolean;
};

const Index: React.FC<InputProps> = ({
  label,
  type,
  name,
  placeholder,
  className,
  icon,
  onChange,
  onBlur,
  value,
  error,
  touch,
  disabled,
}) => {
  return (
    <div className={`flex flex-col gap-1 mb-5 ${className}`}>
      {label ? (
        <label className="block text-xs font-normal text-textGray">
          {label}
        </label>
      ) : (
        ""
      )}
      <div className="relative flex items-center">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          disabled={disabled}
          className={`w-full p-medium !bg-white border border-solid border-commonGray rounded-[7px] focus:!ring-[0] ${className} ${
            error
              ? " border-primaryRed focus-visible:!border-primaryRed"
              : " focus:!border-customBlue focus-visible:!border-customBlue"
          } py-[10px] px-3 pr-9`}
        />
        {error && (
          <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none z-10">
            <span>{icon}</span>
          </div>
        )}
      </div>

      <p className="p-small text-secondaryRed">{error && touch && error}</p>
    </div>
  );
};

export default Index;
