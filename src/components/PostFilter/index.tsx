/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Select from "../../utils/Select";
import TagDrapdown from "./tagDropdown";
import TagsModal from "./tagsModal";
import { AddIcon, CalendarIcon, GridIcon, SortIcon } from "../../icons";
import { setActiveFolders } from "../../store/reducers/folders";

const sortData = [
  {
    id: "screenPageViews",
    name: "Ranking",
  },
  {
    id: "date",
    name: "Date",
  },
  {
    id: "screenPageViews",
    name: "Views",
  },
  {
    id: "totalUsers",
    name: "Users",
  },
];

const dateData = [
  {
    name: "Today",
    id: 0,
  },
  {
    name: "Yesterday",
    id: 1,
  },
  {
    name: "Last week",
    id: 7,
  },
  {
    name: "Last month",
    id: 30,
  },
  {
    name: "Last year",
    id: 365,
  },
];

const index = ({
  allFolder,
  setIsOpenModal,
  setIsOpenNewFolder,
  setStartDate,
  setEndDate,
  selectfilter,
  setselectfilter,
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDateM, setIsDateM] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [selectData, setSelectData] = useState<any>();

  const [selectDate, setSelectDate] = useState<any>({
    name: "Last month",
    id: 30,
  });

  function formatDate(date: any) {
    const year = date?.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  useEffect(() => {
    // Get today's date
    const today = new Date();
    // Get the date 7 days ago
    const starterdate = new Date();
    starterdate.setDate(today.getDate() - selectDate?.id);

    // Format the dates as strings (e.g., "YYYY-MM-DD")
    const enddate: any = formatDate(today);

    const startdate: any = formatDate(starterdate);
    setStartDate(startdate);
    setEndDate(enddate);
  }, [selectDate]);
  return (
    <>
      <div className="w-full my-[42px] flex items-center justify-between flex-wrap gap-5">
        <div className="">
          <Select
            className=""
            data={allFolder?.folders}
            companiesDrop={true}
            addIcon={<AddIcon color={""} />}
            addText={"Add new folder"}
            leftIcon={<GridIcon />}
            rightIcon={undefined}
            leftText={""}
            onClick={() => {
              setIsOpenModal(true);
              setIsOpenNewFolder("addFolder");
            }}
            isDateM={false}
            simpleDropDown={false}
            dateOnCancel={() => {}}
            multiSelect={false}
            dateOnApply={() => {}}
            onChange={(e: any) => {
              setSelectData(e);
              dispatch(setActiveFolders(e));
              localStorage.setItem("activeFolder", e?.contains);
            }}
            value={selectData}
          />
        </div>
        <div className="flex items-center flex-wrap">
          <div className="">
            <Select
              className=""
              data={dateData}
              companiesDrop={true}
              addIcon={<CalendarIcon color="" />}
              addText={"Custom date"}
              leftIcon={""}
              rightIcon={<CalendarIcon color="#274C9B" />}
              leftText={"Date:"}
              onClick={() => setIsDateM(true)}
              isDateM={isDateM}
              simpleDropDown={false}
              dateOnCancel={() => setIsDateM(false)}
              multiSelect={false}
              dateOnApply={() => setIsDateM(false)}
              value={selectDate}
              onChange={(e) => setSelectDate(e)}
              setDateStarter={setStartDate}
              setEnderDate={setEndDate}
            />
          </div>
          <div className="">
            <Select
              className=""
              data={sortData}
              companiesDrop={true}
              addIcon={""}
              addText={""}
              leftIcon={""}
              rightIcon={<SortIcon />}
              leftText={"Sort by:"}
              onClick={() => {}}
              isDateM={false}
              onChange={(e: any) => {
                setselectfilter(e);
              }}
              simpleDropDown={false}
              dateOnCancel={() => {}}
              multiSelect={false}
              dateOnApply={() => {}}
              value={selectfilter}
            />
          </div>

          <div className="">
            <TagDrapdown
              onclick={() => setIsOpen(true)}
              onClear={() => {}}
              onChange={() => {}}
              addTagDropdown={false}
              createTag={""}
            />
          </div>
        </div>
      </div>
      <TagsModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  );
};

export default index;
