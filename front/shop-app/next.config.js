/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '7187',
                pathname: '/images/**',
            },
            {
                protocol: 'http',
                hostname: 'shop-next-api.somee.com',
                port: '',
                pathname: '/images/**',
            },
        ],
    },
    experimental: {
        serverActions: true,
        enableUndici: true
    },
}

module.exports = nextConfig
