const captureReward = require('../rewards')
const rewards = []
module.exports = {
    reward:(req,res) =>{
        const {selectedMonsterCaptureReward} = req.body
        rewards.push(selectedMonsterCaptureReward)
        // console.log(rewards)
        res.status(200).send(rewards)
    
    },
    
    updateReward:(req,res)=>{
        const {name} = req.params
        const {newReward} = req.body
        // console.log(name)
        // console.log(newReward)
        let index = rewards.findIndex((e) =>{
            if(name === e ){
                return e 
                // console.log(e)
            }
        })
        rewards.splice(index,1,newReward)
        res.status(200).send(rewards)
    }
}