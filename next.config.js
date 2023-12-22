/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        }
    },
    images: {
        domains: [
            'localhost',
            'media.dev.scorado.dev'
        ],
    },
}

module.exports = nextConfig
