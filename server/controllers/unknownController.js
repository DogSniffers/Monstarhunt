
const monsters = require('../monsters').monsters


module.exports = {
    monstersInLocale: (req,res) => {
        console.log(monsters)
    res.status(200).send(monsters)}}