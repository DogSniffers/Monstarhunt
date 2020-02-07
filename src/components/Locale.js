import React, { Component } from 'react'
import Track from './Track'
// import monsters from '../../server/monsters'
import axios from 'axios'

class Locale extends Component{
    constructor(){
        super()
        this.state = {
            selectedLocale:[],
            locale1Monsters: [],
            locale2Monsters: [],
            locale3Monsters: [],
            locale1Clicked: false,
            locale2Clicked: false,
            locale3Clicked: false
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
            this.setState({locale1Clicked: true, locale2Clicked: false, locale3Clicked: false, selectedLocale: this.state.locale1Monsters})
        }
    }
    locale2onClick(){
        if(this.state.locale2Clicked === false){
            this.setState({locale1Clicked: false, locale2Clicked: true, locale3Clicked: false, selectedLocale: this.state.locale2Monsters})
        }
    }
    locale3onClick(){
        if(this.state.locale3Clicked === false){
            this.setState({locale1Clicked: false, locale2Clicked: false, locale3Clicked: true, selectedLocale: this.state.locale3Monsters})
        }
    }
    

    render(){
        console.log(this.state)
        return(
            <div>
                <div onClick={() => this.locale1onClick()}>Forest</div>
                <div onClick={() => this.locale2onClick()}>Hell</div>
                <div onClick={() => this.locale3onClick()}>Crypt</div>
        <div>{this.selectedLocale}</div>
            </div>
        )
    }

}
export default Locale