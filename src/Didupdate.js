import React from 'react'

 class Didupdate extends React.Component {
     constructor(){
         super();
         this.state={
             active:null,
             who:null

         }
        }
        componentDidUpdate(){
            console.log("componentDidUpdate")
        }
    render() {
        return (
            <div>
                <h1>ComponentDidUpdate</h1>
                <button onClick={()=>{this.setState({active:"yes"})}}>click me</button>
            </div>
        )
    }
}

export default Didupdate
