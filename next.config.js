/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-2115bce7adca49dba7376460f5f52e47.r2.dev',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    reactStrictMode: true
};

export default config;
