
const monsters = require('../monsters').monsters

const caughtMonsters = [];
let id = 0;

module.exports = {
    monstersInLocale: (req, res) => {
    return res.status(200).send(monsters).monsters},

    captureMonster: (req, res) =>{
        const {monstersCaught} = req.body
        monstersCaught.id = id
        id++

        caughtMonsters.push(monstersCaught)
        res.status(200).send(caughtMonsters)

    }
}