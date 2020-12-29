module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'A.S. Accounting',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'A.S. Accounting',
        short_name: 'A.S. Accounting',
        start_url: `/`,
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/assets/images/avatar.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
