import React, { Component } from 'react'

 class Hideshow extends Component {
     constructor(){
         super();
         this.state={
             show:true
         }
     }
    render() {
        return (
            <div>
              {
                  this.state.show ?
                  <h1>Hide and show</h1> 
                  :null
              }
               <button onClick={()=>((this.setState({show:!this.state.show})))}>click me</button>
            </div>
        )
    }
}
export default Hideshow;

