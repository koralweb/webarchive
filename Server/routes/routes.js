const Router = require('express')
const router = new Router()
const controllers = require('../controllers/controllers')

router.post('/fullSiteList', controllers.fullSiteList)
router.post('/deleteSite', controllers.deleteSite)

module.exports = router
