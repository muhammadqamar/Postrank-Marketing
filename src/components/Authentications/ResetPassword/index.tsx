import React, { useState } from "react";
import ResetPasswordEmail from "./resetPasswordEmail";
import ConfirmYourPassword from "./confirmPassword";

const Index = () => {
  const [activeTab, setActiveTab] = useState(true);
  return (
    <div>
      {activeTab ? (
        <ResetPasswordEmail setActiveTab={setActiveTab} />
      ) : (
        <ConfirmYourPassword />
      )}
    </div>
  );
};

export default Index;
