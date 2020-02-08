const express = require('express')
const app = express()
const PORT =1666
const cors = require('cors')
const unknownCntrl = require('./controllers/unknownController')
app.use(express.json())
app.use(cors())

app.get('/api/locales', unknownCntrl.monstersInLocale)
app.get('/api/hunters', hunterCntrl.hunterName)
// app.put()query(need to google ;())
// app.post()
// app.delete()

app.listen(PORT, () => console.log(`Listening on ${PORT}`) )