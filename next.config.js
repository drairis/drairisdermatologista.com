/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    PRISMIC_ENDPOINT: process.env.PRISMIC_ENDPOINT,
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN,
    MAIL_USERNAME: process.env.MAIL_USERNAME,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    ADMIN_MAIL: process.env.ADMIN_MAIL,
    WPP_NUMBER: process.env.WPP_NUMBER,
    CRM_HOST: process.env.CRM_HOST,
    CRM_TOKEN: process.env.CRM_TOKEN,
  },
};

module.exports = nextConfig;
