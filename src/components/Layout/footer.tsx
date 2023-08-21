import React from "react"
import { Link } from "gatsby"

const Footer = ({ mainLogo }) => {
  return (
    <footer className="max-w-[1280px] mx-auto px-6 py-[120px] md:py-[164px] ">
      <div className="w-[125px] mx-auto">
        <Link to="/" className=" no-underline ">
          <img src={mainLogo} alt="postrank" className="w-auto h-auto" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
