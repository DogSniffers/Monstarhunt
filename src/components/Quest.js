import React, {Component} from 'react'

class Quest extends Component{
    constructor(){
        super()
        this.state={
            text: ''
        }
    }
     
    monsterClick(){
        this.setState({text: 'Quest'})
    }
    render(){
        return(
        <h1>{this.state.text}</h1>
        )
    }
}


export default Quest