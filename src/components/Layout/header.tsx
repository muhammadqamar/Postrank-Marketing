import * as React from "react"
import { Link } from "gatsby"
import Button from "../../utils/Button"

import GoogleLogo from "../../assets/images/icons/google-logo.svg"

const Header = ({ mainLogo }) => (
  <header className="max-w-[1280px] mx-auto px-6 md:px-10px py-6 flex items-center justify-between  ">
    <Link to="/" className="no-underline">
      <img src={mainLogo} alt="postrank" />
    </Link>

    <Button
      type="button"
      disabled={false}
      onClick={() => {}}
      text="Sign in with Google"
      icon={
        <img src={GoogleLogo} alt="google logo" className="w-auto h-auto" />
      }
      className="w-[200px] font-medium text-[14px] !leading-[normal] !tracking-normal text-Blue-400 border border-solid border-Blue-400  rounded-sm px-2 py-[11px] flex items-center justify-start gap-6 shadow-small-shadow"
    />
  </header>
)

export default Header
