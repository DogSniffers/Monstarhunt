import React, { Component } from 'react'
import Track from './Track'
import monsters from '../../server/monsters'
import Axios from 'axios'

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
        Axios.get(/api/locale1).then(res =>{
            this.setState(locale1Monsters) = res.data
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
        // console.log(this.state)
        return(
            <div>
                <div onClick={() => this.locale1onClick()}>Forest</div>
                <div onClick={() => this.locale2onClick()}>Hell</div>
                <div onClick={() => this.locale3onClick()}>Crypt</div>
            </div>
        )
    }

}
export default Locale