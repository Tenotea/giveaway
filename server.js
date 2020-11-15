const express = require('express')
const app = express()
const APP = require('./routes')
const cors = require('cors')
let PORT = process.env.PORT || 3000

app.use(cors())
APP(app)
app.listen(PORT, () => {
  console.log('App running on port ' + PORT)
})