import React, { MouseEventHandler } from "react";

interface IndexProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon?: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Index: React.FC<IndexProps> = ({
  text,
  onClick,
  className,
  icon,
  type,
  disabled,
}) => {
  return (
    <button
      className={`flex  items-center gap-2 md:py-[14px] py-[10px] md:px-5 px-3 bg-lightBlue rounded-full text-customBlue ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Index;
