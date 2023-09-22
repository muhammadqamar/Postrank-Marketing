/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

function Seo({ description, title }: any) {
  return (
    <>
      <title>{title ? `${title} | ${"Marketing website"}` : title}</title>
      <meta name="description" content={"Marketing website"} />
      <meta property="og:title" content={"Postrank"} />
      <meta property="og:description" content={"Marketing website"} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={title || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}

export default Seo
