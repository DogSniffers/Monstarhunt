const captureReward = require('../rewards')
const rewards = []
module.exports = {
    reward:(req,res) =>{
        const {selectedMonsterCaptureReward} = req.body
        rewards.push(selectedMonsterCaptureReward)
        console.log(rewards)
        res.status(200).send(rewards)
    
    },
    
    deleteReward:(req,res)=>{

    }
}