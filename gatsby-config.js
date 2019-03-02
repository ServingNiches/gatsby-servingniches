module.exports = {
  siteMetadata: {
    title: 'Anup Vasudevan',
    url: 'https://servingniches.com',
    description: 'Anup Vasudevan is a software developer who blogs about online marketing, blockchain, ',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve(`${__dirname}/src/components/layouts/index.jsx`),
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-XXXXXXXX-X',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-images',
        ],
      },
    },
    {
      resolve: 'gatsby-remark-images',
    },
  ],
};
