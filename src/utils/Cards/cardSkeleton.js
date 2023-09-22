import React from "react";

const CardSkeleton = () => {
  return (
    <div
      role="status"
      className="w-[384px] rounded-[20px] shadow animate-pulse overflow-hidden   "
    >
      <div className="w-full h-[242px] bg-gray-300" />
      <div className="w-full p-5">
        <div className="h-2 bg-gray-300 rounded-full mb-2" />
        <div className="h-2 bg-gray-300 rounded-full mb-4" />
        <div className="flex items-center gap-3 mb-[56px]">
          <div className="w-7 h-7 bg-gray-300 rounded-full" />
          <div className="h-2 w-20 bg-gray-300 rounded-full " />
        </div>

        <div className="flex items-center justify-between mt-4 space-x-3">
          <div className="w-[136px] h-[48px] bg-gray-300 rounded-full" />
          <div className="flex items-center gap-3 ">
            <div className="w-5 h-5 bg-gray-300 rounded-full" />
            <div className="h-2 w-10 bg-gray-300 rounded-full " />
          </div>
          <div className="flex items-center gap-3 ">
            <div className="w-5 h-5 bg-gray-300 rounded-full" />
            <div className="h-2 w-10 bg-gray-300 rounded-full " />
          </div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default CardSkeleton;
