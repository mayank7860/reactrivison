import React, { Component } from 'react'

 class Lifecycle2 extends Component {
     constructor(){
         super();
         this.state={
             data:null
         }
         console.log("constructor")
     }
     componentDidMount(){
         this.setState({data:"updated"})
         console.log("componentDidMount")
     }
    render() {
        console.log("render")
        return (
            <div>
                <h1>lifecycle Method:componentDidMount</h1>
            </div>
        )
    }
}

export default Lifecycle2
