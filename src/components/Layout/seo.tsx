/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, type, url, imageUrl, keyword }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const ogType = type || `website`
  const imagePath =
    (imageUrl && `https://postrank-marketing.netlify.app${imageUrl}`) || ``
  const metaUrl = url && {
    property: `og:url`,
    content: `${site.siteMetadata.siteUrl}${url}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={"Postrank"}
      titleTemplate={`%s | ${"Marketing website"}`}
      meta={[
        {
          name: `keyword`,
          content: keyword,
        },
        {
          name: `description`,
          content: "Marketing website",
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:image`,
          content: imagePath,
        },
        {
          property: `og:description`,
          content: "Marketing website",
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          ...metaUrl,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:image`,
          content: imagePath,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: "Marketing website",
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default Seo
