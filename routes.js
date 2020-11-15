const express = require('express')
const urlEndcodedParser = express.json()
const Schema = require('./joi')
const Participants = require('./Participants')
const APIResponse = require('./Response')

const App = (app => {
  app.post('/submit', urlEndcodedParser, express.urlencoded({extended: false}), async (req, res) => {
    const { error, value } = Schema.validate(req.body)
    if(error){
      res.json( new APIResponse (false, 'Incorrect or incomplete credentials'))
    } else {
      const db = await Participants()
      const participants = db.collection('participants')
      let newParticipant = {
        participantNumber: (await participants.countDocuments({})) + 1,
        network: value.network,
        phone: value.phone
      }
      participants.insertOne(newParticipant)
      .then( docRef => {
        res.json( new APIResponse(true, 'Thanks for participating. Your info has been received!'))
      }).catch( error => {
        res.json(new APIResponse(false, 'Error storing your data. Please try again.'))
      })
    }
  })

  app.get('*', (req, res) => {
    res.sendStatus(403)
  })

  app.post('*', (req, res) => {
    res.sendStatus(403)
  })
})

module.exports = App