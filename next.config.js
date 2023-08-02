/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns:
            [
                {
                    protocol: 'https',
                    hostname: 'images.unsplash.com',
                },
                {
                    protocol: 'https',
                    hostname: 'd1kq2dqeox7x40.cloudfront.net',
                },
                {
                    protocol: 'https',
                    hostname: 'lh3.googleusercontent.com',
                },
                {
                    protocol: 'https',
                    hostname: 'res.cloudinary.com',
                }


            ]
    }
}

module.exports = nextConfig
