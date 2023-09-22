import React, { MouseEventHandler } from "react";
import Button from "../Button";
import { Link } from "gatsby";

interface IndexProps {
  icon: React.ReactNode;
  heading: string;
  textStyling: string;
  pathStyling: string;
  text: string;
  path: string | undefined;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className: string;
  buttonStyling: string;
  disabled: boolean;
}

const Index: React.FC<IndexProps> = ({
  className,
  icon,
  heading,
  textStyling,
  pathStyling,
  text,
  path,
  buttonText,
  onClick,
  buttonStyling,
  disabled,
}) => {
  console.log(path);
  return (
    <div
      className={`pt-4 md:px-0 px-5 flex justify-center items-center gap-16 w-full ${className}`}
    >
      <div className="flex flex-col gap-6 items-center m-auto">
        {icon}
        <div className="text-center w-full">
          <h6 className="h6 text-gray-900">{heading}</h6>
          <p className={`p-medium !leading-5 max-w-[390px]  ${textStyling}`}>
            {text}
          </p>
        </div>
        {buttonText && (
          <Link to={"#"} className={pathStyling}>
            <Button
              text={buttonText}
              onClick={onClick}
              className={` !bg-customBlue text-white flex justify-center mb-4 ${buttonStyling}`}
              type={undefined}
              disabled={disabled}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Index;
