const joi = require('joi')

const Schema = joi.object({
  network: joi.string().required().min(3).max(7),
  phone: joi.string().required().min(11).max(14)
})

module.exports = Schema