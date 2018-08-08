const express = require('express')

module.exports = function(server){
  //API Routers
  const router = express.Router()
  server.use('/api', router)

  const billingCycleService = require('../api/BillingCycle/billingCycleService')
  billingCycleService.register(router,'/billingcycles')
//  router.route('/test').get(function(req, res, next){
//      res.send("funcionou")
//  })
}
