/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Card from "../../utils/Cards";
import PostFilter from "../PostFilter";
import {
  CalendarIcon,
  ContactIcon,
  DotIcon,
  EyeIcon,
  CloudIcon,
} from "../../icons";

import NoResult from "../../utils/Error";

import NoImages from "../../assets/images/png/no-img.png";

import {
  getAllPostsAction,
  // getPostsDetailAction,
} from "../../store/actions/allPosts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  getUserProfiledetailsIdAction,
  getAccountdetailsAction,
} from "../../store/actions/account";
import { getUserProjectAction } from "../../store/actions/projects";
import { getFoldersAction } from "../../store/actions/folders";
import SettingModal from "../SettingModal";
import CardSkeleton from "../../utils/Cards/cardSkeleton";
// import { getPropertySettingsIdsAction } from "../store/actions/propertySetting";
// import { setActiveProjectDetail } from '../../store/reducers/projects';
import { setActiveProjectDetail } from "../../store/reducers/projects";
import { setActiveFolders } from "../../store/reducers/folders";

const Home = ({ searchQuery }: any) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenNewFolder, setIsOpenNewFolder] = useState("");

  const [allPostdata, setallPostdata] = useState<any>(null);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectfilter, setselectfilter] = useState<any>({
    id: "date",
    name: "Date",
  });
  const { accountDetails, posts, folders, projects }: any = useSelector(
    (state: RootState) => state,
  );
  const { userProfile } = accountDetails;
  const { allPost } = posts;
  const { allFolder, activeFolder } = folders;
  const { activeProject } = projects;
  const dispatch = useDispatch();
  const token = localStorage.getItem("access_token");
  const userId = localStorage.getItem("userId");
  const propertyId = localStorage.getItem("propertyId");
  useEffect(() => {
    if (allPost?.length > 0) {
      if (searchQuery) {
        setallPostdata(
          allPost?.filter((post: any) => post?.title.includes(searchQuery)),
        );
      } else {
        setallPostdata(allPost);
      }
    }
  }, [allPost, searchQuery]);
  useEffect(() => {
    (async () => {
      if (token) {
        getAccountdetailsAction(token);
        await getUserProfiledetailsIdAction(userProfile?.user?.id || userId);
        const res = await getUserProjectAction(userProfile?.user?.id || userId);
        if (res?.status === 200) {
          localStorage.setItem(
            "propertyId",
            res?.data?.projects?.[0]?.propertyId,
          );
          dispatch(setActiveProjectDetail(res?.data?.projects?.[0]));
          const result = await getFoldersAction(res?.data?.projects?.[0]?.id);
          if (result?.status === 200 && result?.data?.folders?.length) {
            localStorage.setItem(
              "activeFolder",
              result?.data?.folders?.[0]?.contains,
            );
            dispatch(setActiveFolders(result?.data?.folders?.[0]));
            // const response = await getAllPostsAction(token, result?.data?.folders?.[0]?.contains, res?.data?.projects?.[0]?.propertyId, {
            //   startDate: startDate,
            //   endDate: endDate,
            //   orderBy: selectfilter?.id,
            // });
            // if (response?.data?.length === 0) {
            //   setallPostdata([]);
            // }
          } else {
            setallPostdata([]);
          }
        }
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (activeProject?.id && allFolder?.folders[0]?.contains) {
        setallPostdata(null);
        const res = await getFoldersAction(activeProject?.id);
        if (res?.status === 200 && res?.data?.folders?.length) {
          const res = await getAllPostsAction(
            token,
            allFolder?.folders[0]?.contains,
            activeProject?.propertyId || propertyId,
            {
              startDate: startDate,
              endDate: endDate,
              orderBy: selectfilter?.id,
            },
          );
          if (res?.data?.length) {
            return;
          } else {
            setallPostdata([]);
          }
        } else {
          setallPostdata([]);
        }
      }
    })();
  }, [activeProject]);

  useEffect(() => {
    (async () => {
      if (activeFolder?.id) {
        setallPostdata(null);
        const res: any = await getAllPostsAction(
          token,
          activeFolder?.contains,
          activeProject?.propertyId || propertyId,
          {
            startDate: startDate,
            endDate: endDate,
            orderBy: selectfilter?.id,
          },
        );
        if (res?.data?.length) {
          return;
        } else {
          setallPostdata([]);
        }
      }
    })();
  }, [activeFolder, startDate, selectfilter]);
  console.log("selectfilter", selectfilter);
  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-10 sm:pb-16 px-5 pb-8 pt-0 ">
        <PostFilter
          allFolder={allFolder}
          setIsOpenModal={setIsOpenModal}
          setIsOpenNewFolder={setIsOpenNewFolder}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          selectfilter={selectfilter}
          setselectfilter={setselectfilter}
        />
        <div className="w-full flex items-center flex-wrap  gap-6">
          {allPostdata === null || allPostdata === undefined ? (
            <>
              {/* <img
              src={Loader}
              alt="loader"
              className="w-[145px] h-auto mx-auto"
            /> */}

              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
                <div key={i} className="">
                  <CardSkeleton />
                </div>
              ))}
            </>
          ) : allPostdata?.length > 0 ? (
            allPostdata?.map((data: any, index: number) => (
              <Card
                key={index}
                cardTitle={data?.title}
                calendarIcon1={<CalendarIcon color={""} />}
                date1="12 May, 2023"
                eyeIcon1={undefined}
                quantity1=""
                contactIcon1={undefined}
                quantity2=""
                openNewIcon={undefined}
                buttonText="View details"
                eyeIcon2={<EyeIcon />}
                quantity3={data?.views}
                contactIcon2={<ContactIcon />}
                dotImage1={undefined}
                dotImage2={undefined}
                dotImage3={<DotIcon />}
                quantity4={data?.users}
                backgroundImage={data?.image || NoImages}
                className="sm:w-[384px]"
                btnLink={`/post-details`}
                data={data}
                isCompare={false}
                selected={false}
              />
            ))
          ) : (
            <NoResult
              icon={<CloudIcon />}
              heading="Whoops, something went wrong."
              text="We can’t load your posts against this path. Try to reload this page. If issue is still there - check your project settings."
              textStyling={""}
              pathStyling={""}
              path={""}
              buttonText={""}
              onClick={() => {}}
              className={""}
              buttonStyling={""}
              disabled={false}
            />
          )}
        </div>
      </div>

      <SettingModal
        isOpen={isOpenModal}
        isOpenNewFolder={isOpenNewFolder}
        closeModal={() => setIsOpenModal(false)}
      />
    </>
  );
};

export default Home;
