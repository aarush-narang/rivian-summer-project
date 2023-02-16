// https://www.npmjs.com/package/next-sitemap
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_SITE_DOMAIN_ROOT || 'https://rivian-project.aarushnarang.com',
    generateRobotsTxt: true, // (optional)
    // ...other options
};
