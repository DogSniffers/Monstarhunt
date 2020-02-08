import React, { Component } from 'react'
// import Track from './Track'
import axios from 'axios'

class Locale extends Component{
    constructor(){
        super()
        this.state = {
            selectedLocale:[0,0,0],
            locale1Monsters: [],
            locale2Monsters: [],
            locale3Monsters: [],
            locale1Clicked: false,
            locale2Clicked: false,
            locale3Clicked: false,
            huntText: '',
            classText:'',
            temperamentText:'',
            huntTitle: '',
            huntMission:''

        }
    }
    componentDidMount(){
        axios.get('/api/locales').then(res =>{
            const allMonsters = res.data
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
            this.setState({locale1Monsters: locale12Monsters})
            this.setState({locale2Monsters: locale22Monsters})
            this.setState({locale3Monsters: locale32Monsters})
                
            }) 
    }
    
    locale1onClick(){
        if(this.state.locale1Clicked === false){
            this.setState({locale1Clicked: true, locale2Clicked: false, locale3Clicked: false, selectedLocale: this.state.locale1Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:'})
        }
    }
    locale2onClick(){
        if(this.state.locale2Clicked === false){
            this.setState({locale1Clicked: false, locale2Clicked: true, locale3Clicked: false, selectedLocale: this.state.locale2Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:'})
        }
    }
    locale3onClick(){
        if(this.state.locale3Clicked === false){
            this.setState({locale1Clicked: false, locale2Clicked: false, locale3Clicked: true, selectedLocale: this.state.locale3Monsters, huntText: 'HUNT:',classText: 'Class:', temperamentText: 'Temperament:'})
        }
    }
    
    render(){
        // console.log(this.state)
        // console.log(this.state.selectedLocale)
        return(
            <div>
                <div className = {'locale'}>
                    <h1 onClick={() => this.locale1onClick()}>Forest</h1>
                    <h1 onClick={() => this.locale2onClick()}>Hell</h1>
                    <h1 onClick={() => this.locale3onClick()}>Crypt</h1>
                </div>
                <h1>{this.state.huntText}</h1>
                <div>
                    <h2>{this.state.selectedLocale[0].name}</h2>
                    <div>{this.state.classText} {this.state.selectedLocale[0].class}</div>
                    <div>{this.state.temperamentText} {this.state.selectedLocale[0].temperament}</div>
                </div>
                <div>
                    <h2>{this.state.selectedLocale[1].name}</h2>
                    <div>{this.state.classText} {this.state.selectedLocale[1].class}</div>
                    <div>{this.state.temperamentText} {this.state.selectedLocale[1].temperament}</div>
                </div>
                <div>
                    <h2>{this.state.selectedLocale[2].name}</h2>
                    <div>{this.state.classText} {this.state.selectedLocale[2].class}</div>
                    <div>{this.state.temperamentText} {this.state.selectedLocale[2].temperament}</div>
                </div>
            </div>
        )
    }

}
export default Locale