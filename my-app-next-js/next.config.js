/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.alias['swiper'] = require.resolve('swiper/react');
        }
        return config;
    },
};
