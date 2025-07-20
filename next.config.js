/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.licdn.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'media.linkedin.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: '*.fbcdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'instagram.fblr20-3.fna.fbcdn.net',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'scontent.cdninstagram.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig
