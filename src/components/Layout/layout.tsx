/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header"
import Footer from "./footer"
import "../../assets/styles/tailwind.css"
import PostRankLogo from "../../assets/images/postrank-logo.svg"

const Layout = ({ children }) => {
  return (
    <>
      <Header mainLogo={PostRankLogo} />
      <div>
        <main>{children}</main>
      </div>
      <Footer mainLogo={PostRankLogo} />
    </>
  )
}

export default Layout
