const path = require('path')

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config

    // Important: return the modified config
    // config.resolve.modules = [path.resolve(__dirname, "components"), "node_modules"]
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  },
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/portfolioEntry/europe': { page: '/portfolioEntry', query: { portfolioEntry: 'europe' } },
      '/portfolioEntry/kebabtallrik-lund': { page: '/portfolioEntry', query: { portfolioEntry: 'kebabtallrik-lund' } },
      '/portfolioEntry/streetstyle-ios': { page: '/portfolioEntry', query: { portfolioEntry: 'streetstyle-ios' } },
      '/portfolioEntry/designed-and-sewed-by-me': { page: '/portfolioEntry', query: { portfolioEntry: 'designed-and-sewed-by-me' } },
      '/portfolioEntry/future-clothing-designs': { page: '/portfolioEntry', query: { portfolioEntry: 'future-clothing-designs' } },
      '/portfolioEntry/sketches-designer-chairs': { page: '/portfolioEntry', query: { portfolioEntry: 'sketches-designer-chairs' } },
    }
  }
}
