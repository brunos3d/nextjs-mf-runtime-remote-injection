const { withNx } = require('@nrwl/next/plugins/with-nx');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        extraOptions: {},
        exposes: {
          './HomePage': './pages/index',
          './useAuthHook': './hooks/useAuth',
        },
        shared: {},
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
