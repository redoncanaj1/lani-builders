/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://lani-builders.verce.app",
  generateRobotsTxt: true // (optional)
  // ...other options
};
