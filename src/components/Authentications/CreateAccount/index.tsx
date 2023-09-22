import React, { useState } from "react";
import ConnectProject from "./connectProject";
import AddNewFolder from "./addNewFolder";
import Success from "./success";
import CreateNewProject from "./createNewProject";
import CreateAnAccountEmail from "./createAnAccountEmail";
import Header from "../../Layout/header";
import PostRankLogo from "../../../assets/images/postrank-logo.svg";

import { navigate } from "gatsby";
import { useGoogleLogin } from "@react-oauth/google";
import {
  getAccountdetailsAction,
  createNewUserAccoutnAction,
} from "../../../store/actions/account";
import axios from "axios";

const Index = () => {
  const [activeTab, setActiveTab] = useState<string | null>("email");

  const [errorMsg, seteerrorMsg] = useState("");
  console.log(errorMsg);
  const login = useGoogleLogin({
    onSuccess: async (codeResponse: any) => {
      console.log(codeResponse);
      try {
        const result = await getAccountdetailsAction(
          codeResponse?.access_token,
        );
        console.log("res", result);
        if (result.data.status === "active") {
          const response = await axios.get(
            "https://www.googleapis.com/oauth2/v3/userinfo",
            {
              headers: {
                Authorization: `Bearer ${codeResponse?.access_token}`,
              },
            },
          );
          const profileData = response.data;
          const res = await createNewUserAccoutnAction({
            email: profileData?.email,
            firstName: profileData?.given_name,
            lastName: profileData?.family_name,
            avatar: profileData?.picture,
          });
          if (res.status === 201) {
            localStorage.setItem("access_token", codeResponse?.access_token);
            localStorage.setItem("userId", res.data?.user?.id);
            if (res.data?.user?.isNew) {
              setActiveTab("connectProject");
            } else {
              navigate("/app/");
            }
          }
        } else {
          seteerrorMsg(result.data.message);
        }
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    },
    onError: (error) => console.log("Login Failed:", error),
    scope:
      "https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/analytics.readonly",
    // scope?: CodeResponse['https://www.googleapis.com/auth/userinfo.email'];
    // scope={[
    //   'https://www.googleapis.com/auth/userinfo.email',
    //   'https://www.googleapis.com/auth/userinfo.profile',
    // ]}
  });

  return (
    <div className="w-full mx-auto bg-white">
      {activeTab === "email" ||
      activeTab === "connectProject" ||
      activeTab === "addNewFolder" ? (
        <Header mainLogo={PostRankLogo} activeTab={activeTab} login={login} />
      ) : (
        ""
      )}
      {activeTab === "email" && <CreateAnAccountEmail login={login} />}
      {activeTab === "connectProject" && (
        <ConnectProject setActiveTab={setActiveTab} />
      )}
      {activeTab === "createNewProject" && (
        <CreateNewProject setActiveTab={setActiveTab} />
      )}
      {activeTab === "addNewFolder" && (
        <AddNewFolder setActiveTab={setActiveTab} />
      )}
      {activeTab === "success" && <Success />}
    </div>
  );
};

export default Index;
