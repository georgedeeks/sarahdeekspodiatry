const path = require(`path`);

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sarah Deeks Podiatry - Foot Care in Finchley`,
        short_name: `Foot Care Finchley`,
        start_url: `/`,
        icon: `src/images/logo_symbol.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-154466988-1",
      },
    },
  ],
};
