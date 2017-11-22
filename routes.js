const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('portfolioEntry', '/portfolioEntry/:portfolioEntry')
routes.add('index', '/')
routes.add('about', '/about')
