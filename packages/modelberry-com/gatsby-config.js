const packageJson = require('./package.json')
const envPath = `.env.${process.env.NODE_ENV}`
require(`dotenv`).config({
  path: envPath,
})
const graphqEndpoint = process.env.GATSBY_CONTENTFUL_GRAPHQL_ENDPOINT

if (process.env.NODE_ENV === 'production' && !graphqEndpoint) {
  console.log(
    `Could not find a valid graphq endpoint, did you configure one in ${envPath}?`
  )
  process.exit(1)
}

module.exports = {
  siteMetadata: {
    siteVersion: packageJson.version,
    siteUrl: 'https://www.modelberry.com',
    legal: {
      version: packageJson.modelberry.version,
      description: 'Made with Modelberry',
      url: 'https://www.modelberry.com',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Contentful`,
        fieldName: `contentful`,
        url: `${graphqEndpoint}`,
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_CONTENTFUL_DELIVERY_TOKEN}`,
        },
      },
    },
  ],
}
