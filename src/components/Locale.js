import React, { Component } from 'react'
import Quest from './Quest'
import axios from 'axios'
import Pouch from './PouchItems'



class Locale extends Component{
    constructor(){
        super()
        this.state = {
            wallet:100,
            selectedLocale:[0,0,0,0],
            locale1Monsters: [1,2,3,9],
            locale2Monsters: [4,2,6,22],
            locale3Monsters: [7,2,3,69],
                locale1Clicked: false,
                locale2Clicked: false,
                locale3Clicked: false,
                    localeLock:false,
                    monster1Name:'',
                    monster2Name:'',
                    monster3Name:'',
                    monster1Class:'',
                    monster2Class:'',
                    monster3Class:'',
                    monster1Temperament:'',
                    monster2Temperament:'',
                    monster3Temperament:'',
            huntText: '',
                classText:'',
                temperamentText:'',
            huntTitle: '',
                huntMission:'',
            questText:'',
            rewardText:'',
                selectedMonsterHuntReward:'',
                cashRewardText:'',
                cashReward:'',
                selectedMonsterCaptureReward:'',
            monsterHunt:'',
                orText:'',
            monsterCapture:'',
                successText:'',
                failText:'',
            rewardLock:false,
                noDuplicateQuest: false,
                pouch:[],
                
            returnToHub:'',
        }
        this.state.componentDidMount = this.componentDidMount.bind(this)
    }
    
    componentDidMount(){
        axios.get('/api/locales').then(res =>{
           let allMonsters = res.data
            console.log(allMonsters)
            let locale12Monsters = []
            let locale22Monsters = []
            let locale32Monsters = []
            allMonsters.forEach((element) => {
                if(element.class === 'Beast'){
                    locale12Monsters.push(element)
                }if(element.class === 'Demon'){
                    locale22Monsters.push(element)
                }if(element.class === 'Undead'){
                    locale32Monsters.push(element)
                }
             }
         )
            this.setState({locale1Monsters: locale12Monsters});
            this.setState({locale2Monsters: locale22Monsters});
            this.setState({locale3Monsters: locale32Monsters});
                
    }
        )}
        
    
    locale1onClick(){
        if(this.state.localeLock === false){
        if(this.state.locale1Clicked === false){
            this.setState({locale1Clicked: true, locale2Clicked: false, locale3Clicked: false, selectedLocale: this.state.locale1Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:',localeLock:true,monster1Name: this.state.locale1Monsters[0].name,monster1Class: this.state.locale1Monsters[0].class,monster1Temperament: this.state.locale1Monsters[0].temperament,monster2Name: this.state.locale1Monsters[1].name, monster2Class: this.state.locale1Monsters[1].class,monster2Temperament:this.state.locale1Monsters[1].temperament,monster3Name: this.state.locale1Monsters[2].name,monster3Class: this.state.locale1Monsters[2].class,monster3Temperament:this.state.locale1Monsters[2].temperament,})
        }}else{}
    }
    locale2onClick(){
        if(this.state.localeLock === false){
        if(this.state.locale2Clicked === false){
            this.setState({locale1Clicked: false, locale2Clicked: true, locale3Clicked: false, selectedLocale: this.state.locale2Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:',localeLock:true,monster1Name: this.state.locale2Monsters[0].name,monster1Class: this.state.locale2Monsters[0].class,monster1Temperament: this.state.locale2Monsters[0].temperament,monster2Name: this.state.locale2Monsters[1].name,monster2Class: this.state.locale2Monsters[1].class,monster2Temperament:this.state.locale2Monsters[1].temperament,monster3Name: this.state.locale2Monsters[2].name,monster3Class: this.state.locale2Monsters[2].class,monster3Temperament:this.state.locale2Monsters[2].temperament,})
        }}else{}
        
    }
    locale3onClick(){
        if(this.state.localeLock === false){
        if(this.state.locale3Clicked === false){
            this.setState({locale1Clicked: false, locale2Clicked: false, locale3Clicked: true, selectedLocale: this.state.locale3Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:',localeLock:true,monster1Name: this.state.locale3Monsters[0].name,monster1Class: this.state.locale3Monsters[0].class,monster1Temperament: this.state.locale3Monsters[0].temperament,monster2Name: this.state.locale3Monsters[1].name,monster2Class: this.state.locale3Monsters[1].class,monster2Temperament:this.state.locale3Monsters[1].temperament,monster3Name: this.state.locale3Monsters[2].name,monster3Class: this.state.locale3Monsters[2].class,monster3Temperament:this.state.locale3Monsters[2].temperament,})
        }}else{}
    }
    monster1onClick(){
        if(this.state.noDuplicateQuest === false){
        this.setState({questText:'QUEST:', monsterHunt:'HUNT', orText:'OR',monsterCapture:'CAPTURE',rewardText:'Reward:',selectedMonsterHuntReward:this.state.selectedLocale[0].huntReward, selectedMonsterCaptureReward:this.state.selectedLocale[0].captureReward,cashRewardText:'Gold:',cashReward:this.state.selectedLocale[0].huntCashReward})
        }else{}
    }

    monster2onClick(){
        if(this.state.noDuplicateQuest === false){
            this.setState({questText:'QUEST:', monsterHunt:'HUNT', orText:'OR',monsterCapture:'CAPTURE',rewardText:'Reward:',selectedMonsterHuntReward:this.state.selectedLocale[1].huntReward, selectedMonsterCaptureReward:this.state.selectedLocale[1].captureReward,cashReward:this.state.selectedLocale[1].huntCashReward})
        }else{}
    }

    monster3onClick(){
        if(this.state.noDuplicateQuest ===false){
            this.setState({questText:'QUEST:', monsterHunt:'HUNT', orText:'OR',monsterCapture:'CAPTURE',rewardText:'Reward:',selectedMonsterHuntReward:this.state.selectedLocale[2].huntReward, selectedMonsterCaptureReward:this.state.selectedLocale[2].captureReward,cashReward:this.state.selectedLocale[2].huntCashReward})
        }else{}
    }
    huntonClick(){
        if(this.state.noDuplicateQuest === false){
        let huntFailComplete = Math.ceil(Math.random() * 10)
        console.log(huntFailComplete)
        if(huntFailComplete >= 2){
            this.setState({successText:'SUCCESS',})
            this.setState({wallet:this.state.wallet + this.state.cashReward})
            
        }else{
            this.setState({failText:'FAIL'})
        }
        this.setState({noDuplicateQuest:true})
        this.setState({returnToHub:'Return to Hub'})
        }
    }
    captureonClick(){
        const {selectedMonsterCaptureReward} = this.state
        if(this.state.noDuplicateQuest === false){
            let captureFailComplete = Math.ceil(Math.random() * 10)
        // console.log(captureFailComplete)
        if(captureFailComplete >= 5){
            this.setState({successText:'SUCCESS'})
            axios.post('api/rewards', {selectedMonsterCaptureReward}).then(res => {
                this.setState({pouch :res.data})
        })
            
        }else{
            this.setState({failText:'FAIL'})
        }
        this.setState({noDuplicateQuest:true})
        this.setState({returnToHub:'Return to Hub',rewardLock:true,questComplete:true,})
    }else{}
}
    alterReward = (name,newReward) => {
        axios.put(`/api/rewards/${name}`,{newReward}).then(res => {
            console.log(res.data)
            this.setState({pouch: res.data})
        })
}
    removeReward= (name) => {
        axios.delete(`api/rewards/${name}`).then(res => {
            this.setState({pouch: res.data})
        })
    }
    
    returnToHub(){
        this.setState({selectedLocale:[],locale1Clicked:false,locale2Clicked:false,locale3Clicked:false,huntText:'',huntMission:'',questText:'',rewardText:'',monsterHunt:'',selectedMonsterHuntReward:'',orText:'',monsterCapture:'',selectedMonsterCaptureReward:'',resultsText:'',noDuplicateQuest:false,returnToHub:'',classText:'',temperamentText:'',successText:'',failText:'',rewardText:'',localeLock:false,rewardLock:false,monster1Name:'',monster2Name:'',monster3Name:'',monster1Class:'',monster2Class:'',monster3Class:'',monster1Temperament:'',monster2Temperament:'',monster3Temperament:'',cashRewardText:'',cashReward:''},)
    }
    render(){
        console.log(this.state)
        // console.log(this.state.locale1Monsters)
        // console.log(this.state.locale1Monsters[1].name)
        // console.log(this.state.monster1Name)
        return(
            <div>
            <h1>Gold:</h1>
            <h1 className='gold'>{this.state.wallet}č</h1>
            <h1>Pens:</h1>
            {this.state.pouch.map((item) =>{
                console.log(item)
                return <Pouch item={item} alterReward={this.alterReward} removeReward={this.removeReward}/>
                })}
                <div className = {'locale'}>
                    <h1 onClick={() => this.locale1onClick()} className='forest'>Forest</h1>
                    <h1 onClick={() => this.locale2onClick()} className='hell'>Hell</h1>
                    <h1 onClick={() => this.locale3onClick()} className='crypt'>Crypt</h1>
                </div>
                <h1>{this.state.huntText}</h1>
                
                <div className={'monsterProfiles'}>
                    <div >
                 
                    <h2 onClick={() => this.monster1onClick()}>{this.state.monster1Name}</h2>
                    <div>{this.state.classText} {this.state.monster1Class}</div>
                    <div>{this.state.temperamentText} {this.state.monster1Temperament}</div>
                </div>
                <div >
                    <h2 onClick={() => this.monster2onClick()}>{this.state.monster2Name}</h2>
                    <div>{this.state.classText} {this.state.monster2Class}</div>
                    <div>{this.state.temperamentText} {this.state.monster2Temperament}</div>
                </div>
                <div >
                    <h2 onClick={() => this.monster3onClick()}>{this.state.monster3Name}</h2>
                    <div>{this.state.classText} {this.state.monster3Class}</div>
                    <div>{this.state.temperamentText} {this.state.monster3Temperament}</div>
                </div>
            </div>
            <h1>{this.state.questText}</h1>
                <div className={'hunt'} onClick={() => this.huntonClick()}>{this.state.monsterHunt}</div>
        <p>{this.state.rewardText}{this.state.selectedMonsterHuntReward} {this.state.cashRewardText}{this.state. cashReward}</p>
                <p>{this.state.orText}</p>
                <div className={'capture'} onClick={() => this.captureonClick()}>{this.state.monsterCapture}</div>
                <p>{this.state.rewardText}{this.state.selectedMonsterCaptureReward}</p>
            <h1 className={'success'}>{this.state.successText}</h1>
            <h1 className={'fail'}>{this.state.failText}</h1>
            <h1 onClick={() => this.returnToHub()}>{this.state.returnToHub}</h1>
        
        </div>
        )
    }

}
export default Locale