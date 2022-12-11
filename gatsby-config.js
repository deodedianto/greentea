module.exports = {
  siteMetadata: {
    title: 'Vie',
    description: 'Vie - Multi-Purpose React.js Gatsby Template',
    author: 'ThemesCamp'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 3255383,
        sv: 6,
      },
      },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5GGPZFR",
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-resolve-src',
  ],
  trailingSlash: "always"
}