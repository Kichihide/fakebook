module.exports = {
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-typescript`,
        `gatsby-transformer-json`,
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-graphql-codegen',
            options: {
                fileName: `graphql-types/graphql-types.d.ts`,
                codegenDelay: 5000,
                documentPaths: ['./src/**/*.{ts,tsx}', './node_modules/gatsby-*/**/*.js'],
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['material icons'],
            },
        },
        {
            resolve: `gatsby-source-filesystem/`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `postData`,
                path: `${__dirname}/src/pages/post/`,
            },
        },
    ],
};
