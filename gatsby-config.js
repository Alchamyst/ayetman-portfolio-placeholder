module.exports = {
  siteMetadata: {
    siteUrl: "https://www.ashley-yetman.co.uk",
    title: "Ashley Yetman Portfolio",
  },
  pathPrefix: "/ayetman-portfolio",
  plugins: [
      "gatsby-plugin-gatsby-cloud", 
      "gatsby-plugin-react-helmet",
      {
        resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://www.ashley-yetman.co.uk`,
          stripQueryString: true,
       }  
      },
    ]
};
