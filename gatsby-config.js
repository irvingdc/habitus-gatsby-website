const path = require("path")
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-117334884-2",
        head: true
      }
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        images: path.join(__dirname, "src/images"),
        components: path.join(__dirname, "src/components"),
        styles: path.join(__dirname, "src/styles"),
      },
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c39900`,
        display: `minimal-ui`,
        icon: `static/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
