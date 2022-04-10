/* * @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://img.freepik.com/"],
  },
  env:{
    BASE_URL:'http://0.0.0.0:4000'
  }
}

module.exports = nextConfig
