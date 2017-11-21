const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('/:portfolioEntry', 'portfolioEntry')
routes.add('index', '/')
routes.add('post', '/blog/:slug')
