/** @type {import('next').NextConfig} */
const blogList = require("./components/BlogList.js");

const nextConfig = {
  reactStrictMode: true,
  env: {
    blogList: blogList.get('posts/blog')
  }
}

module.exports = nextConfig
