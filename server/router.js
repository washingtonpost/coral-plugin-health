module.exports = (router) => router.get('/api/v1/health', (req, res, next) => res.sendStatus(200) );