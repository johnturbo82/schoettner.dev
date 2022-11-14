module.exports = {
    siteMetadata: {
        title: "schoettner.dev",
        author: 'Oliver Schöttner',
        street: "Steigerwaldstr. 33",
        postal_code: "85049",
        city: "Ingolstadt",
        email: "oliver@schoettner.dev",
        mailto: "mailto:oliver@schoettner.dev",
        mobile: "+49 170 / TURBO ON",
        mobileto: "tel:+491708872666",
        siteUrl: "https://schoettner.dev",
        siteGithubUrl: "https://github.com/johnturbo82/schoettner.dev",
        lang: "de",
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-gatsby-cloud",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-smoothscroll",
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
            resolve: 'gatsby-source-instagram-all',
            options: {
                access_token: "IGQVJWU1dqT0c1RS1TWVlWeXVyY1MyY2hvbTRsZATJ4S3hOZA1VZAOERRamdrNk5WUFJnVjg5dS16a0ZAwdDRWMjAtNVBhRGF1c0dtek1xN1pHbGpHWktiTXZAQdmlaLTVBbzRreVpkalI2czl4akpLeWpjNAZDZD"
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-DQN4Z8BTXG", // Google Analytics / GA
                ],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                },
            },
        },
    ],
};