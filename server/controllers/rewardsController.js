const reward = require('../rewards')
const rewards = []
module.exports = {
    reward:(req,res) =>{
        const {selectedMonsterCaptureReward} = req.body
        rewards.push(selectedMonsterCaptureReward)
        res.status(200).send(rewards)
    },
    deletewReward:(req,res)=>{
        
    }
}