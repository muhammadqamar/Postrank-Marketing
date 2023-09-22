/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Select from "../../utils/Select";
import { useLocation } from "@reach/router";
import ComparePost from "../../utils/Error";
import Trading from "../../utils/Trading";
import DeleteModal from "../../utils/DeleteModal";
import Chart from "../GraphChart/charts";
import {
  AddPostIcon,
  BackIcon,
  CalendarIcon,
  CloseIcon,
  ContactIcon,
  DotIcon,
  EyeIcon,
  IncreaseIcon,
  OpenNewIcon,
} from "../../icons";
import { TextTag } from "../../utils/Typography";

import NoImages from "../../assets/images/png/no-img.png";
import PostCompare from "./postCompare";
import TagDrapdown from "../PostFilter/tagDropdown";
import { Link } from "gatsby";
import SEO from "../Layout/seo";
import {
  getAllPostsAction,
  getPostsDetailAction,
} from "../../store/actions/allPosts";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import Layout from "../Layout/layout";

// import Loader from "../../assets/images/loading.gif";

import Card from "../../utils/Cards";
import { getUserProfiledetailsIdAction } from "../../store/actions/account";
import { getUserProjectAction } from "../../store/actions/projects";
import { getFoldersAction } from "../../store/actions/folders";

const dateData = [
  {
    name: "7 days",
    id: 7,
  },
  {
    name: "14 days",
    id: 14,
  },
  {
    name: "30 days",
    id: 30,
  },
  {
    name: "60 days",
    id: 60,
  },
  {
    name: "90 days",
    id: 90,
  },
];

const Index = () => {
  const [isDateM, setIsDateM] = useState<boolean>(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userGraph, setUserGraph] = useState("user");
  const [pageViewGraph, setPageViewGraph] = useState("pageviews");
  const [graphData, setGraphData] = useState<any>();
  const [selectedPost, setselectedPost] = useState<any>();
  const [selectDate, setSelectDate] = useState<any>({
    name: "30 days",
    id: 30,
  });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const { posts, projects, accountDetails }: any = useSelector(
    (state: RootState) => state,
  );

  const { userProfile } = accountDetails;
  const { activeProject } = projects;
  const location = useLocation();

  // Function to format a date as "YYYY-MM-DD"
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

  // Extract the slug query parameter from location.search
  const searchParams = new URLSearchParams(location.search);
  const slug: any = searchParams.get("slug");
  // Log the slug to the console
  const token = localStorage.getItem("access_token");
  const userId = localStorage.getItem("userId");
  const activeFolder: any = localStorage.getItem("activeFolder");
  const propertyId: any = localStorage.getItem("propertyId");

  useEffect(() => {
    (async () => {
      await getUserProfiledetailsIdAction(userProfile?.user?.id || userId);
      const ress = await getUserProjectAction(userProfile?.user?.id || userId);
      await getFoldersAction(ress?.data?.projects?.[0]?.id);
      const response = await getAllPostsAction(
        token,
        activeFolder,
        activeProject?.propertyId || propertyId,
        {},
      );

      if (response?.status === 201) {
        const singlePost = response?.data?.filter(
          (f: any) => f.pagePath === slug,
        )?.[0];
        setselectedPost(singlePost);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const res = await getPostsDetailAction(
        token,
        slug,
        activeProject?.propertyId || propertyId,
        { startDate: startDate, endDate: endDate },
      );
      if (res.status) {
        setGraphData(res?.data[0]);
      }
    })();
  }, [startDate]);

  // user graph
  const usersGraph = {
    title: {
      text: "",
    },

    series: [
      {
        type: "line",
        data: graphData?.usersGraph.map((i: any) => Number(i.entity)),
      },
    ],
  };

  //new user graph
  const newUsersGraph = {
    title: {
      text: "",
    },
    series: [
      {
        type: "line",
        data: graphData?.newUsersGraph.map((i: any) => Number(i.entity)),
      },
    ],
  };
  //new user graph
  const avrgEngDurationGraph = {
    title: {
      text: "",
    },
    series: [
      {
        type: "line",
        data: graphData?.avrgEngDuration.map((i: any) => Number(i.entity)),
      },
    ],
  };

  //Page view graph
  const pageViewsGraph = {
    title: {
      text: "",
    },
    series: [
      {
        type: "line",
        data: graphData?.pageViewsGraph.map((i: any) => Number(i.entity)),
      },
    ],
  };
  //unique Page view graph
  const uniquePageViewsGraph = {
    title: {
      text: "",
    },
    series: [
      {
        type: "line",
        data: graphData?.uPageViewsGraph.map((i: any) => Number(i.entity)),
      },
    ],
  };

  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-10 sm:pb-16 px-5 pb-8 pt-0">
        <div className="common-bg-color">
          <div className="flex justify-between flex-wrap sm:flex-nowrap items-center">
            <div className="flex gap-2 justify-between items-center py-6">
              <Link
                to={"/app/"}
                className="rounded-full !p-[10px] bg-lightBlue"
              >
                <BackIcon />
              </Link>
              <TextTag
                as="h5"
                text={"Post details"}
                className={"h4"}
                color={""}
              />
            </div>
            <div>
              <Select
                data={dateData}
                className=""
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
                multiSelect={true}
                dateOnApply={() => {
                  setIsDateM(false);
                }}
                onChange={(e) => setSelectDate(e)}
                value={selectDate}
                setDateStarter={setStartDate}
                setEnderDate={setEndDate}
              />
            </div>
          </div>

          {/* add post to compare */}
          {selectedPost === undefined ||
          selectedPost === null ||
          selectedPost?.error ||
          selectedPost?.length === 0 ? (
            <div className="w-full flex  gap-6 mb-11 animate-pulse">
              <div className="flex flex-col gap-3 w-full">
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
              </div>
            </div>
          ) : (
            <div className="flex lg:flex-nowrap flex-wrap gap-6 mb-6 pt-6">
              <div className="flex flex-col w-full">
                <Card
                  cardTitle={selectedPost?.title}
                  calendarIcon1={<CalendarIcon color={""} />}
                  date1={"12 May, 2023"}
                  eyeIcon1={<EyeIcon />}
                  quantity1={"23"}
                  contactIcon1={<ContactIcon />}
                  quantity2={"76"}
                  openNewIcon={<OpenNewIcon />}
                  buttonText={""}
                  eyeIcon2={undefined}
                  quantity3={""}
                  contactIcon2={undefined}
                  dotImage1={<DotIcon />}
                  dotImage2={<DotIcon />}
                  dotImage3={undefined}
                  quantity4={""}
                  backgroundImage={selectedPost?.image || NoImages}
                  className={""}
                  btnLink={""}
                  data={undefined}
                  isCompare={false}
                  selected={false}
                />

                {/* tags */}
                <div className="p-5 bg-white rounded-[20px] mt-6">
                  <TextTag
                    as="p"
                    text={"Tags"}
                    className={"p-small mb-2"}
                    color={"text-textGray"}
                  />
                  {/* tag names */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                      <TextTag
                        as="p"
                        text={"Digital Nomad"}
                        className={"p-medium !font-medium"}
                        color={"text-tagBlue"}
                      />
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                      >
                        <CloseIcon color={"#274C9B"} />
                      </button>
                    </div>
                    <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                      <TextTag
                        as="p"
                        text={"Visa"}
                        className={"p-medium !font-medium"}
                        color={"text-tagBlue"}
                      />
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                      >
                        <CloseIcon color={"#274C9B"} />
                      </button>
                    </div>
                    <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                      <TextTag
                        as="p"
                        text={"Country"}
                        className={"p-medium !font-medium"}
                        color={"text-tagBlue"}
                      />
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                      >
                        <CloseIcon color={"#274C9B"} />
                      </button>
                    </div>
                    <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                      <TextTag
                        as="p"
                        text={"List"}
                        className={"p-medium !font-medium"}
                        color={"text-tagBlue"}
                      />
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                      >
                        <CloseIcon color={"#274C9B"} />
                      </button>
                    </div>
                    <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                      <TextTag
                        as="p"
                        text={"Popular"}
                        className={"p-medium !font-medium"}
                        color={"text-tagBlue"}
                      />
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                      >
                        <CloseIcon color={"#274C9B"} />
                      </button>
                    </div>
                    <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                      <TextTag
                        as="p"
                        text={"Essentials"}
                        className={"p-medium !font-medium"}
                        color={"text-tagBlue"}
                      />
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                      >
                        <CloseIcon color={"#274C9B"} />
                      </button>
                    </div>
                    <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                      <TextTag
                        as="p"
                        text={"Travel"}
                        className={"p-medium !font-medium"}
                        color={"text-tagBlue"}
                      />
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                      >
                        <CloseIcon color={"#274C9B"} />
                      </button>
                    </div>
                    <div className="flex items-center gap-[6px] py-[7px] px-[10px] common-bg-color rounded-md w-fit">
                      <TextTag
                        as="p"
                        text={"Explore"}
                        className={"p-medium !font-medium"}
                        color={"text-tagBlue"}
                      />
                      <button
                        className="cursor-pointer"
                        onClick={() => {
                          setIsOpenDelete(true);
                        }}
                      >
                        <CloseIcon color={"#274C9B"} />
                      </button>
                    </div>
                    <TagDrapdown
                      onclick={() => setIsOpen(true)}
                      onClear={() => {}}
                      onChange={() => {}}
                      addTagDropdown={true}
                      createTag={""}
                    />
                  </div>
                </div>
              </div>
              <ComparePost
                icon={<AddPostIcon />}
                heading={"Compare with another post!"}
                text={"Add another post and compare performance."}
                buttonText={"Add post to compare"}
                onClick={() => {
                  setIsOpen(true);
                }}
                className={"bg-lightBlue rounded-[20px] lg:py-0 !py-[75px]"}
                textStyling={"!mt-1 !bg-lightBlue"}
                buttonStyling={
                  "!text-customBlue !bg-lightBlue border-2 border-solid !border-customBlue !font-medium !leading-5"
                }
                path={""}
                pathStyling={""}
                disabled={false}
              />
            </div>
          )}
          {graphData === undefined ||
          graphData === null ||
          graphData?.error ||
          graphData?.length === 0 ? (
            <div className="w-full flex flex-col gap-7 animate-pulse">
              <div className="flex flex-col gap-3 w-full">
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
                <div className="h-6 w-full bg-gray-300 rounded-full " />
              </div>
            </div>
          ) : (
            <>
              {/* User trends */}
              <div className="md:p-8 p-5 mb-6 bg-white rounded-[20px] ">
                <div className="flex justify-between md:items-center items-baseline mb-6">
                  <TextTag
                    as="h5"
                    text={"User trends"}
                    className={"h5"}
                    color={""}
                  />
                  <TextTag
                    as="p"
                    text={"30 days"}
                    className={"p-medium !font-medium"}
                    color={"text-primaryGray"}
                  />
                </div>

                <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
                  <Trading
                    trendLabel={"User"}
                    className={`!bg-commonBlue group hover:!bg-customBlue ${
                      userGraph === "user" && "!bg-customBlue"
                    }`}
                    trendNumbers={graphData?.users}
                    trendMarkup={"12.5%"}
                    trendLabelColor={`text-textGray group-hover:!text-blue-200 ${
                      userGraph === "user" && "!text-blue-200"
                    }`}
                    trendNumbersColor={`text-black group-hover:!text-white ${
                      userGraph === "user" && "!text-white"
                    }`}
                    trendMarkupColor={`text-success-300 group-hover:!text-blue-200 ${
                      userGraph === "user" && "!text-blue-200"
                    }`}
                    onClick={() => setUserGraph("user")}
                  />
                  <Trading
                    trendLabel={"New users"}
                    className={`!bg-commonBlue group hover:!bg-customBlue ${
                      userGraph === "newUser" && "!bg-customBlue"
                    }`}
                    trendNumbers={graphData?.newUsers}
                    trendMarkup={"12.5%"}
                    trendLabelColor={`text-textGray group-hover:!text-blue-200 ${
                      userGraph === "newUser" && "!text-blue-200"
                    }`}
                    trendNumbersColor={`text-black group-hover:!text-white ${
                      userGraph === "newUser" && "!text-white"
                    }`}
                    trendMarkupColor={`text-success-300 group-hover:!text-blue-200 ${
                      userGraph === "newUser" && "!text-blue-200"
                    }`}
                    onClick={() => setUserGraph("newUser")}
                  />
                  <Trading
                    trendLabel={"Average engagement time"}
                    className={`!bg-commonBlue group hover:!bg-customBlue ${
                      userGraph === "avergeEngTime" && "!bg-customBlue"
                    }`}
                    trendNumbers={`${parseInt(graphData?.avgEngDuration)}m ${(
                      graphData?.avgEngDuration % 1
                    )
                      .toFixed(2)
                      .slice(2)}s`}
                    trendMarkup={"12.5%"}
                    trendLabelColor={`text-textGray group-hover:!text-blue-200 ${
                      userGraph === "avergeEngTime" && "!text-blue-200"
                    }`}
                    trendNumbersColor={`text-black group-hover:!text-white ${
                      userGraph === "avergeEngTime" && "!text-white"
                    }`}
                    trendMarkupColor={`text-success-300 group-hover:!text-blue-200 ${
                      userGraph === "avergeEngTime" && "!text-blue-200"
                    }`}
                    onClick={() => setUserGraph("avergeEngTime")}
                  />
                </div>
                {/* Graph */}
                {userGraph === "user" ? (
                  <Chart data={usersGraph} />
                ) : userGraph === "newUser" ? (
                  <Chart data={newUsersGraph} />
                ) : userGraph === "avergeEngTime" ? (
                  <Chart data={avrgEngDurationGraph} />
                ) : null}
              </div>
              {/* Page view trends */}
              <div className="md:p-8 p-5 mb-6 bg-white rounded-[20px]">
                <div className="flex justify-between md:items-center items-baseline mb-6">
                  <TextTag
                    as="h5"
                    text={"Page view trends"}
                    className={"h5"}
                    color={""}
                  />
                  <TextTag
                    as="p"
                    text={"30 days"}
                    className={"p-medium !font-medium"}
                    color={"text-primaryGray"}
                  />
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
                  <Trading
                    trendLabel={"Pageviews"}
                    className={`!bg-commonBlue group hover:!bg-customBlue ${
                      pageViewGraph === "pageviews" && "!bg-customBlue"
                    }`}
                    trendNumbers={graphData?.pageViews}
                    trendMarkup={"12.5%"}
                    trendLabelColor={`text-textGray group-hover:!text-blue-200 ${
                      pageViewGraph === "pageviews" && "!text-blue-200"
                    }`}
                    trendNumbersColor={`text-black group-hover:!text-white ${
                      pageViewGraph === "pageviews" && "!text-white"
                    }`}
                    trendMarkupColor={`text-success-300 group-hover:!text-blue-200 ${
                      pageViewGraph === "pageviews" && "!text-blue-200"
                    }`}
                    onClick={() => setPageViewGraph("pageviews")}
                  />
                  <Trading
                    trendLabel={"Unique pageviews"}
                    className={`!bg-commonBlue group hover:!bg-customBlue ${
                      pageViewGraph === "uniquePageViews" && "!bg-customBlue"
                    }`}
                    trendNumbers={graphData?.uniquePageViews}
                    trendMarkup={"12.5%"}
                    trendLabelColor={`text-textGray group-hover:!text-blue-200 ${
                      pageViewGraph === "uniquePageViews" && "!text-blue-200"
                    }`}
                    trendNumbersColor={`text-black group-hover:!text-white ${
                      pageViewGraph === "uniquePageViews" && "!text-white"
                    }`}
                    trendMarkupColor={`text-success-300 group-hover:!text-blue-200 ${
                      pageViewGraph === "uniquePageViews" && "!text-blue-200"
                    }`}
                    onClick={() => setPageViewGraph("uniquePageViews")}
                  />
                  <Trading
                    trendLabel={"Average time on page"}
                    className={`!bg-commonBlue group hover:!bg-customBlue ${
                      pageViewGraph === "avergePageTime" && "!bg-customBlue"
                    }`}
                    trendNumbers={`${parseInt(graphData?.avgEngDuration)}m ${(
                      graphData?.avgEngDuration % 1
                    )
                      .toFixed(2)
                      .slice(2)}s`}
                    trendMarkup={"12.5%"}
                    trendLabelColor={`text-textGray group-hover:!text-blue-200 ${
                      pageViewGraph === "avergePageTime" && "!text-blue-200"
                    }`}
                    trendNumbersColor={`text-black group-hover:!text-white ${
                      pageViewGraph === "avergePageTime" && "!text-white"
                    }`}
                    trendMarkupColor={`text-success-300 group-hover:!text-blue-200 ${
                      pageViewGraph === "avergePageTime" && "!text-blue-200"
                    }`}
                    onClick={() => setPageViewGraph("avergePageTime")}
                  />
                </div>
                {/* Graph */}

                {pageViewGraph === "pageviews" ? (
                  <Chart data={pageViewsGraph} />
                ) : pageViewGraph === "uniquePageViews" ? (
                  <Chart data={uniquePageViewsGraph} />
                ) : pageViewGraph === "avergePageTime" ? (
                  <Chart data={avrgEngDurationGraph} />
                ) : null}
              </div>

              {/* Queries */}
              <div className="md:p-8 p-5  bg-white rounded-[20px]">
                <div className="flex justify-between md:items-center items-baseline mb-6">
                  <TextTag
                    as="h5"
                    text={"Queries"}
                    className={"h5"}
                    color={""}
                  />
                  <TextTag
                    as="p"
                    text={"30 days"}
                    className={"p-medium !font-medium"}
                    color={"text-primaryGray"}
                  />
                </div>
                <div className="flex flex-wrap md:flex-nowrap justify-between gap-4 mb-8">
                  <Trading
                    trendLabel={"Total keywords"}
                    className={"!bg-commonBlue"}
                    trendNumbers={"16"}
                    trendMarkup={"12.5%"}
                    trendLabelColor={"text-textGray"}
                    trendNumbersColor={""}
                    trendMarkupColor={"text-success-300"}
                    onClick={() => {}}
                  />
                  <Trading
                    trendLabel={"Best keyword"}
                    className={"!bg-commonBlue"}
                    trendNumbers={"Keyword"}
                    trendMarkup={"12.5%"}
                    trendLabelColor={"text-textGray"}
                    trendNumbersColor={""}
                    trendMarkupColor={"text-success-300"}
                    onClick={() => {}}
                  />
                </div>
                {/* Table */}
                <div className="!rounded-2xl md:overflow-hidden overflow-scroll">
                  <table className="w-full">
                    {/* 1st row */}
                    <tr className=" text-end ">
                      <th
                        scope="row"
                        className="w-[50%] p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 !text-start border-r border-b common-bg-color"
                      >
                        Keyword
                      </th>
                      <th
                        scope="row"
                        className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-r border-b common-bg-color"
                      >
                        Pos. 25 June
                      </th>
                      <th
                        scope="row"
                        className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-r border-b common-bg-color"
                      >
                        Pos. 25 July
                      </th>
                      <th
                        scope="row"
                        className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-r border-b common-bg-color"
                      >
                        Diff
                      </th>
                      <th
                        scope="row"
                        className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-r border-b common-bg-color"
                      >
                        {" "}
                        Est. traffic
                      </th>
                      <th
                        scope="row"
                        className=" p-small text-textGray bg-commonBlue focus:bg-lightBlue p-3 border-b common-bg-color"
                      >
                        Vol.
                      </th>
                    </tr>
                    {/* 2nd row */}
                    <tr className="text-end">
                      <td
                        scope="row"
                        className="w-[52.5%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                      >
                        Keyword
                      </td>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3  border-r border-b border-lightBlue"
                      >
                        3
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue"
                      >
                        1
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue"
                      >
                        <span className="flex gap-1 items-center justify-end">
                          2<IncreaseIcon />
                        </span>
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue"
                      >
                        15.77
                      </th>
                      <th
                        scope="row"
                        className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue"
                      >
                        1,300
                      </th>
                    </tr>
                    {/* 3rd row */}
                    <tr className="text-end">
                      <td
                        scope="row"
                        className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                      >
                        Keyword
                      </td>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        3
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        1
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        <span className="flex gap-1 items-center justify-end">
                          2<IncreaseIcon />
                        </span>
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        15.77
                      </th>
                      <th
                        scope="row"
                        className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue "
                      >
                        1,300
                      </th>
                    </tr>
                    {/* 4th row */}
                    <tr className="text-end">
                      <td
                        scope="row"
                        className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                      >
                        Keyword
                      </td>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        3
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        1
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        <span className="flex gap-1 items-center justify-end">
                          2<IncreaseIcon />
                        </span>
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        15.77
                      </th>
                      <th
                        scope="row"
                        className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue "
                      >
                        1,300
                      </th>
                    </tr>
                    {/* 5th row */}
                    <tr className="text-end">
                      <td
                        scope="row"
                        className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                      >
                        Keyword
                      </td>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        3
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        1
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        <span className="flex gap-1 items-center justify-end">
                          2<IncreaseIcon />
                        </span>
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        15.77
                      </th>
                      <th
                        scope="row"
                        className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue "
                      >
                        1,300
                      </th>
                    </tr>
                    {/* 6th row */}
                    <tr className="text-end">
                      <td
                        scope="row"
                        className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-b border-lightBlue"
                      >
                        Keyword
                      </td>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        3
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        1
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        <span className="flex gap-1 items-center justify-end">
                          2<IncreaseIcon />
                        </span>
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-b border-lightBlue "
                      >
                        15.77
                      </th>
                      <th
                        scope="row"
                        className=" p-medium focus:bg-lightBlue p-3 border-b border-lightBlue "
                      >
                        1,300
                      </th>
                    </tr>
                    {/* 7th row */}
                    <tr className="text-end">
                      <td
                        scope="row"
                        className="w-[50%] p-medium  focus:bg-lightBlue  !text-start p-3 border-r border-lightBlue "
                      >
                        Keyword
                      </td>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-lightBlue "
                      >
                        3
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-lightBlue "
                      >
                        1
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-lightBlue "
                      >
                        <span className="flex gap-1 items-center justify-end">
                          2<IncreaseIcon />
                        </span>
                      </th>
                      <th
                        scope="row"
                        className=" p-medium  focus:bg-lightBlue p-3 border-r border-lightBlue "
                      >
                        15.77
                      </th>
                      <th
                        scope="row"
                        className=" p-medium focus:bg-lightBlue p-3 border-lightBlue "
                      >
                        1,300
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>

        <PostCompare isOpen={isOpen} setIsOpen={setIsOpen} posts={posts} />
        <DeleteModal
          isOpenDelete={isOpenDelete}
          setIsOpenDelete={setIsOpenDelete}
          onDelete={() => {}}
          tagName={"tag named"}
        />
      </div>
    </>
  );
};

export default Index;
