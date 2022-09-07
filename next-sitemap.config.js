/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.exetertinyhousecommunity.org',
  generateRobotsTxt: true, // (optional)
  exclude: ['/blog', '/blog/20220812-welcome']
  // ...other options
}
