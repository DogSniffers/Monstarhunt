// import React, { Component } from 'react'
// import axios from 'axios'

// class Hunter extends Component{
//     constructor(){
//         super()
//         this.state = {
//             hunterName:''
//         }
//     }
//     componentDidMount(){
//         axios.get('/api/hunters'.hunters).then(res =>{
//             console.log('hit')
//             const person = res.data
//             let randomNumber = Math.ceil(Math.random() * 4)
//             person.forEach(element => {
//                 if(person.element === randomNumber){
//                     this.setState({hunterName:`${element.name}`})
//                 }
//             });
//         })
//     }
//     render(){
//         return(
//         <h2>{this.state.hunterName}</h2>
//         )
//     }
// }

// export default Hunter