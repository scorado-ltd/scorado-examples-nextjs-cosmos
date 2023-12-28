import withPlaiceholder from "@plaiceholder/next";

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

export default withPlaiceholder(nextConfig);
