module.exports = {
  siteMetadata: {
    title: "JT1 Homepage",
    author: 'Oliver Schöttner'
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://www.jt1.rocks/graphql",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Schoettner Dev`,
        short_name: `JT1 Dev`,
        start_url: `/`,
        background_color: `#12355b`,
        theme_color: `#ff6978`,
        display: `standalone`,
        icon: `src/images/jt.png`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
        resolve: 'gatsby-source-instagram',
        options: {
            username: 21470876
        }
    },
  ],
};
