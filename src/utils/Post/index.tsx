import React, { MouseEventHandler } from "react";
import { TextTag } from "../Typography";
import { CloseIcon } from "../../icons";

interface IndexProps {
  listColor: string;
  className: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  postText: string;
}

const Index: React.FC<IndexProps> = ({
  listColor,
  postText,
  onClick,
  className,
}) => {
  return (
    <div
      className={`flex justify-between items-center p-4 bg-white rounded-[20px] ${className}`}
    >
      <div className="flex gap-2 items-center">
        <TextTag
          as="span"
          text={""}
          className={"w-5 h-5 rounded-full"}
          color={listColor}
        />
        <TextTag text={postText} className={"h6"} color={""} />
      </div>
      <button className="p-[7px] rounded-full bg-lightGray" onClick={onClick}>
        <CloseIcon color={""} />
      </button>
    </div>
  );
};

export default Index;
