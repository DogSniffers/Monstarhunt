const express = require('express')
const cors = require('cors')
const unknownCntrl = require('./controllers/unknownController')
const hunterCntrl = require('./controllers/hunterController')
const rewardsCaptureCntrl = require('./controllers/rewardsController')
const app = express()
const PORT = 1666

app.use(express.json())
app.use(cors())

app.get('/api/locales', unknownCntrl.monstersInLocale);
app.get('/api/hunters', hunterCntrl.hunterName)
// app.put()query(need to google ;())
app.post('/api/rewards', rewardsCaptureCntrl.reward);
app.delete('/api/rewards',)

app.listen(PORT, () => console.log(`Listening on ${PORT}`) )