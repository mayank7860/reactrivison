import React from "react";

class Statec extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "mayank",
      email:"mayank00@gmail.com",
      count:0
    }
  }
  updateState(){
      this.setState({
          name:"mohan",
          count:this.state.count+1
      })
  }
  render() {
    return (
      <div>
        <h1>count {this.state.count}</h1>
        <h1>email {this.state.email}</h1>
        <button onClick={()=>{this.updateState()}}> Update Name</button>
      </div>
    );
  }
}
export default Statec;
