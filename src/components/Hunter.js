import React, { Component } from 'react'
import axios from 'axios'

class Hunter extends Component{
    constructor(){
        super()
        this.state = {
            hunterName:'broken',    
        }
        // this.state.componentDidMount = this.componentDidMount.bind(this)
    }
    componentDidMount(){
        axios.get('/api/hunters').then(res =>{
            const hunters = res.data
            // console.log(111, hunters)
            // let hunterId = []
            let randomNumber = Math.floor(Math.random() * 5)
            let hunter = hunters.filter(e => e.ID === randomNumber)
            this.setState({
                hunterName: hunter[0].Name
            })
        })
    }
    render(){
        return(
        <h2>{this.state.hunterName}</h2>
        
        
        )}
}

export default Hunter