const emoji = require("remark-emoji");

module.exports = {
  pathPrefix: "/pristine-typescript-gatsby-react-material-ui",
  siteMetadata: {
    title: `Pristine`,
    description: `typescript-gatsby-react-material-ui`,
    author: ``,
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'page2',
        link: '/page-2'
      },
      {
        name: 'page3',
        link: '/page-3'
      }
    ]
  },
  plugins: [
    "gatsby-remark-draw",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        remarkPlugins: [emoji],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-draw",
            options: {
              strategy: "img"
            }
          }
        ],
      },
    },
    "gatsby-plugin-material-ui",
    "gatsby-plugin-layout",
    "gatsby-plugin-offline",
    "gatsby-plugin-typescript",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pristine-site`,
        short_name: `pristine-site`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `transparent`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-use-dark-mode"
  ],
}
