const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

const nextConfig = {
    target: "server",
    webpack: (config, { dev }) => {
        if (!dev) {
            config.module.rules.push({
                test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: "raw-loader",
            });
            if (config.optimization.splitChunks) {
                config.optimization.splitChunks.cacheGroups.shared.enforce = true;
            }
        }
        return config;
    }
};
module.exports = withPlugins([withSvgr], nextConfig);
