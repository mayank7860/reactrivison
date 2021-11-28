import React, { Component } from 'react'
 class Lifecycle extends Component {
     constructor(){
        super();
        console.log("constructor")
     }
     componentDidMount(){
         console.log("componentDidMount")
     }
    render() {
        console.log("render")
        return (
            <div>
                <h1>Lifecycle method</h1>
            </div>
        )
    }
}

export default Lifecycle
