/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useLocation } from "@reach/router"

import InnerHeader from "./innerHeader"
import "../../assets/styles/main.css"

const Layout = ({ children, setsearchQuery, searchQuery }: any) => {
  const { pathname } = useLocation()

  return (
    <>
      {pathname !== "/" && (
        <InnerHeader
          setsearchQuery={setsearchQuery}
          searchQuery={searchQuery}
        />
      )}
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
