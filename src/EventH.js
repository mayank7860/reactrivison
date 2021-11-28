import React from 'react'

export default class EventH extends React.Component {
    testfun(){
        alert("test")
    }
    render() {
        return (
            <div>
                <h1>Event Handlers</h1>
                <button onClick={()=>this.testfun()}>Click</button>
            </div>
        )
    }
}
