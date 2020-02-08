const hunterNames = require('../hunterLlamo').hunter

module.exports = {
    hunterName: (res) => {
        console.log(hunterNames)
        res.status(200).send(hunterNames)
    }
}