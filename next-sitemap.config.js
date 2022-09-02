// https://www.npmjs.com/package/next-sitemap
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_SITE_DOMAIN_ROOT || 'https://aarush-narang.github.io/rivian-summer-project',
    generateRobotsTxt: true, // (optional)
    // ...other options
};
