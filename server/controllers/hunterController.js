const {hunter} = require(`../hunterLlamo`)
const hunters = []

module.exports = {
    hunterName: (req, res) => {
        // hunters.push(res.data)
        // console.log(hunters)
        return res.status(200).send(hunter)},
    changeHunterName:(req,res)=>{
    }
}