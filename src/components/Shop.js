import React, {Component} from 'react'
import axios from 'axios'

class Shop extends Component{
    constructor(){
        super()
        this.state={
            shop1Name:'',
            shop2Name:'',
            shop3Name:'',
            shop1Description:'',
            shop2Description:'',
            shop3Description:'',
            shop1Cost:0,
            shop2Cost:0,
            shop3Cost:0
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }
    render(){
        return(
            <div>hi</div>
        )
    }
}
export default Shop