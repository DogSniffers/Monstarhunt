import React, { Component } from 'react'
import Quest from './Quest'
import axios from 'axios'



class Locale extends Component{
    constructor(){
        super()
        this.state = {
            selectedLocale:[0,0,0,0],
            locale1Monsters: [1,2,3,9],
            locale2Monsters: [4,2,6,22],
            locale3Monsters: [7,2,3,69],
                locale1Clicked: false,
                locale2Clicked: false,
                locale3Clicked: false,
                    localeLock:false,
            huntText: '',
                classText:'',
                temperamentText:'',
            huntTitle: '',
                huntMission:'',
            questText:'',
            rewardText:'',
                selectedMonsterHuntReward:'',
                selectedMonsterCaptureReward:'',
            monsterHunt:'',
                orText:'',
            monsterCapture:'',
                successText:'',
                failText:'',
            rewardLock:false,
                noDuplicateQuest: false,
                
            returnToHub:'',
        }
    }
    componentDidMount(){
        axios.get('/api/locales').then(res =>{
           let allMonsters = res.data
            console.log(allMonsters)
            const locale12Monsters = []
            const locale22Monsters = []
            const locale32Monsters = []
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
            this.setState({locale1Clicked: true, locale2Clicked: false, locale3Clicked: false, selectedLocale: this.state.locale1Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:',localeLock:true,})
        }}else{}
    }
    locale2onClick(){
        if(this.state.localeLock === false){
        if(this.state.locale2Clicked === false){
            this.setState({locale1Clicked: false, locale2Clicked: true, locale3Clicked: false, selectedLocale: this.state.locale2Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:',localeLock:true,})
        }}else{}
    }
    locale3onClick(){
        if(this.state.localeLock === false){
        if(this.state.locale3Clicked === false){
            this.setState({locale1Clicked: false, locale2Clicked: false, locale3Clicked: true, selectedLocale: this.state.locale3Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:',localeLock:true,})
        }}else{}
    }
    monster1onClick(){
        if(this.state.noDuplicateQuest === false){
        this.setState({questText:'QUEST:', monsterHunt:'HUNT', orText:'OR',monsterCapture:'CAPTURE',rewardText:'Reward:',selectedMonsterHuntReward:this.state.selectedLocale[3]})
        }else{}
    }

    monster2onClick(){
        if(this.state.noDuplicateQuest === false){
            this.setState({questText:'QUEST:', monsterHunt:'HUNT', orText:'OR',monsterCapture:'CAPTURE',rewardText:'Reward:',selectedMonsterHuntReward:this.state.selectedLocale[1]})
        }else{}
    }

    monster3onClick(){
        if(this.state.noDuplicateQuest ===false){
            this.setState({questText:'QUEST:', monsterHunt:'HUNT', orText:'OR',monsterCapture:'CAPTURE',rewardText:'Reward:',selectedMonsterHuntReward:this.state.selectedLocale[3]})
        }else{}
    }
    huntonClick(){
        if(this.state.noDuplicateQuest === false){
        let huntFailComplete = Math.ceil(Math.random() * 10)
        console.log(huntFailComplete)
        if(huntFailComplete >= 2){
            this.setState({successText:'SUCCESS'})
            
            
        }else{
            this.setState({failText:'FAIL'})
        }
        this.setState({noDuplicateQuest:true})
        this.setState({returnToHub:'Return to Hub'})
        }else{}
    }
    captureonClick(){
        if(this.state.noDuplicateQuest === false){
            let captureFailComplete = Math.ceil(Math.random() * 10)
        console.log(captureFailComplete)
        if(captureFailComplete >= 5){
            this.setState({successText:'SUCCESS'})
        }else{
            this.setState({failText:'FAIL'})
        }
        this.setState({noDuplicateQuest:true})
        this.setState({returnToHub:'Return to Hub',rewardLock:true,questComplete:true,})
    }else{}
    }
    
    returnToHub(){
        this.setState({selectedLocale:[],locale1Clicked:false,locale2Clicked:false,locale3Clicked:false,huntText:'',huntMission:'',questText:'',rewardText:'',monsterHunt:'',selectedMonsterHuntReward:'',orText:'',monsterCapture:'',resultsText:'',noDuplicateQuest:false,returnToHub:'',classText:'',temperamentText:'',successText:'',failText:'',rewardText:'',localeLock:false,rewardLock:false,},)
    }
    render(){
        console.log(this.state)
        console.log(this.state.selectedLocale)
        return(
            <div>
                <div className = {'locale'}>
                    <h1 onClick={() => this.locale1onClick()}>Forest</h1>
                    <h1 onClick={() => this.locale2onClick()}>Hell</h1>
                    <h1 onClick={() => this.locale3onClick()}>Crypt</h1>
                </div>
                <h1>{this.state.huntText}</h1>
                
                
                    <div >
                    {/* From Each h2 and div I removed the .name, .class, and .temperament after the [] */}
                    <h2 onClick={() => this.monster1onClick()}>{this.state.selectedLocale[0]}</h2>
                    <div>{this.state.classText} {this.state.selectedLocale[0]}</div>
                    <div>/{this.state.temperamentText} {this.state.selectedLocale[0]}</div>
                </div>
                <div >
                    <h2 onClick={() => this.monster2onClick()}>{this.state.selectedLocale[1]}</h2>
                    <div>{this.state.classText} {this.state.selectedLocale[1]}</div>
                    <div>{this.state.temperamentText} {this.state.selectedLocale[1]}</div>
                </div>
                <div >
                    <h2 onClick={() => this.monster3onClick()}>{this.state.selectedLocale[2]}</h2>
                    <div>{this.state.classText} {this.state.selectedLocale[2]}</div>
                    <div>{this.state.temperamentText} {this.state.selectedLocale[2]}</div>
                </div>
            <h1>{this.state.questText}</h1>
                <div className={'hunt'} onClick={() => this.huntonClick()}>{this.state.monsterHunt}</div>
                <p>{this.state.rewardText}{this.state.selectedMonsterHuntReward}</p>
                <p>{this.state.orText}</p>
                <div className={'capture'} onClick={() => this.captureonClick()}>{this.state.monsterCapture}</div>
                    <p>{this.state.rewardText}</p>
            <h1 className={'success'}>{this.state.successText}</h1>
            <h1 className={'fail'}>{this.state.failText}</h1>
            <h1 onClick={() => this.returnToHub()}>{this.state.returnToHub}</h1>
        
        </div>
        )
    }

}
export default Locale