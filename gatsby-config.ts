/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Postrank`,
    description: `Marketing website`,
    author: `@postrank-marketing`,
    siteUrl: `https://postrank-marketing.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    // require("dotenv").config({
    //   path: `.env.${process.env.NODE_ENV}`,
    // })`gatsby-transformer-sharp`,
    // In your gatsby-config.js

    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NZFWS39C",

        includeInDevelopment: false,

        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        enableWebVitalsTracking: true,
      },
    },

    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Postrank`,
        short_name: `Postrank`,
        start_url: `https://postrank-marketing.netlify.app`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/icons/postrank-logo.svg`, // This path is relative to the root of the site.
      },
    },
  ],
};
