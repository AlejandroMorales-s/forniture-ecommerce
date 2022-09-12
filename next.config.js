/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      'images.unsplash.com', 
      'lh3.googleusercontent.com', 
      'graph.facebook.com',
      'avatars.githubusercontent.com'
    ]
  }
}

module.exports = nextConfig
