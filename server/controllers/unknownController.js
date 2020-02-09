
const monsters = require('../monsters').monsters


module.exports = {
    monstersInLocale: (req, res) => {
    return res.status(200).send(monsters)}}