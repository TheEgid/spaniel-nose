export default {
    experimental: { webpackBuildWorker: true },
    reactStrictMode: true,
    distDir: "build",
    onDemandEntries: { maxInactiveAge: 25 * 10000 },
};
