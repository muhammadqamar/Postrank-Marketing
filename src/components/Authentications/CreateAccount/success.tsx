/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";

import NoResult from "../../../utils/Error";
import {
  CalendarIcon,
  ContactIcon,
  DotIcon,
  EyeIcon,
  PostLoadedIcon,
} from "../../../icons";
import Card from "../../../utils/Cards";

import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import NoImages from "../../../assets/images/png/no-img.png";
import Loader from "../../../assets/images/loading.gif";
import {
  getAllPostsAction,
  // getPostsDetailAction,
} from "../../../store/actions/allPosts";
import CardSkeleton from "../../../utils/Cards/cardSkeleton";

const Success = () => {
  const posts: any = useSelector((state: RootState) => state?.posts?.allPost);
  const { folders, projects }: any = useSelector((state: RootState) => state);

  const { activeFolder } = folders;
  const { activeProject } = projects;

  const handleSubmit = () => {
    console.log("Success");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      getAllPostsAction(
        token,
        activeFolder?.contains,
        activeProject?.propertyId,
        {},
      );
      // getPostsDetailAction(token, "/blog/ransomware-kill-switch", userProfile?.user?.id || userId,);
    }
  }, []);

  return (
    <div className="w-full sm:py-16 py-10 sm:px-10 px-5 flex flex-col gap-16 common-bg-color">
      <NoResult
        icon={
          posts === null || posts.error || posts.length === 0 ? (
            <img
              src={Loader}
              alt="loader"
              className="w-[100px] h-auto mx-auto"
            />
          ) : (
            <PostLoadedIcon />
          )
        }
        heading={
          posts === null || posts.error || posts.length === 0
            ? "Your posts has been fetching..."
            : "Your posts has been loaded!"
        }
        text="Now you can go to your dashboard and start exploring!"
        buttonText="To dashboard"
        onClick={handleSubmit}
        className={"!m-0"}
        textStyling={""}
        path={"/app/"}
        pathStyling={""}
        disabled={
          posts === null || posts.error || posts.length === 0 ? true : false
        }
        buttonStyling={` !font-medium !leading-5   !bg-customBlue !text-white`}
      />
      <div className="flex flex-wrap justify-center gap-6">
        {posts === null || posts.error || posts.length === 0 ? (
          <>
            {[1, 2, 3].map((e, i) => (
              <div key={i} className="">
                <CardSkeleton />
              </div>
            ))}
          </>
        ) : (
          posts
            ?.slice(0, 3)
            ?.map((data: any, index: number) => (
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
                quantity3="2,168"
                contactIcon2={<ContactIcon />}
                dotImage1={undefined}
                dotImage2={undefined}
                dotImage3={<DotIcon />}
                quantity4="1,352"
                backgroundImage={data?.image || NoImages}
                className="sm:w-[384px]"
                btnLink={`/post-details`}
                data={undefined}
                isCompare={false}
                selected={false}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Success;
