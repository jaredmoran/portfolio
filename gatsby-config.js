module.exports = {
  siteMetadata: {
    title: `Jared Moran`,
    description: `This is my personal portfolio. I'm an engineer based in Visalia, California USA.`,
    author: `@jaredmoran`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Raleway:900|Roboto']
        }
      }
    },
    `gatsby-transformer-sharp`
  ],
}
