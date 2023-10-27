module.exports = {
  siteMetadata: {
    title: `Jared Moran`,
    description: `This is my personal portfolio. I'm an engineer based in Visalia, California USA.`,
    author: `@jaredmoran`,
    siteUrl: `https://jaredmoran.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-709WJZ6QW5", // Google Analytics / GA
        ],
      },
    }`gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Raleway:900|Roboto"],
        },
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
