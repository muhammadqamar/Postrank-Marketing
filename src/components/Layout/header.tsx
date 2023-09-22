import * as React from "react";
import { Link } from "gatsby";
import Button from "../../utils/Button";

import GoogleLogo from "../../assets/images/icons/google-logo.svg";
import "../../assets/styles/tailwind.css";

const Header = ({ mainLogo, activeTab, login }: any) => (
  <header className="max-w-[1280px] mx-auto px-6 md:py-6 py-[17px] flex items-center justify-between">
    <Link to="/" className="no-underline">
      <img src={mainLogo} alt="postrank" className="md:w-full w-[94px]" />
    </Link>

    {activeTab === "email" && (
      <Button
        type="button"
        disabled={false}
        onClick={() => {
          login();
        }}
        text="Sign in with Google"
        icon={
          <img src={GoogleLogo} alt="google logo" className="w-auto h-auto" />
        }
        className="md:min-w-[200px] w-[170px] !bg-white !font-[Roboto] p-medium text-Blue-400 border-2 border-solid border-Blue-400 rounded-sm !px-2 !py-[11px] flex items-center !justify-start md:gap-6 gap-5 shadow-small-shadow"
      />
    )}
  </header>
);

export default Header;
