const hunterNames = require('../hunterLlamo')

module.exports = {
    hunterName: (res,req) =>{
        res.status(200).send(hunterNames)
    }
}