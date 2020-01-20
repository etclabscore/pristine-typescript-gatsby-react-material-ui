const emoji = require("remark-emoji");

module.exports = {
  pathPrefix: "/pristine-typescript-gatsby-react-material-ui",
  siteMetadata: {
    title: `Pristine`,
    description: ``,
    logoUrl: `https://github.com/etclabscore/pristine-media-assets/blob/master/pristine-logo-dark/pristine-logo-dark%20(PNG)/256x256.png?raw=true`,
    author: ``,
    menuLinks: [
      {
        name: 'home',
        link: '/',
        ignoreNextPrev: true
      },
      {
        name: 'page3',
        link: '/page-3'
      },
      {
        name: 'page4',
        link: '/page-4'
      },
      {
        name: 'page5',
        link: '/page-5'
      }
    ],
    footerLinks: [
      {
        name: 'Github',
        link: 'https://github.com/etclabscore/pristine-typescript-gatsby-react-material-ui'
      }
    ]
  },
  plugins: [
    "@etclabscore/gatsby-theme-pristine",
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
    }
  ],
}
