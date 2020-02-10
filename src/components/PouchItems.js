import React from 'react'

class Pouch extends React.Component{
    constructor(){
        super()
        this.state = {
            userInput:''
        }
    }
    
    handleChange = (val) => {
        this.setState({userInput:val})
    }
    render(){
        return (
        <div>{this.props.item}<button onClick={() => this.props.alterReward(this.props.item,this.state.userInput)}>Update</button><input onChange={(e) => this.handleChange(e.target.value)}></input></div>
        )
    }}
    export default Pouch