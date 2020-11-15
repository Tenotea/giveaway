const express = require('express')
const app = express()
const APP = require('./routes')
let PORT = process.env.PORT || 3000
APP(app)
app.listen(PORT, () => {
  console.log('App running on port ' + PORT)
})