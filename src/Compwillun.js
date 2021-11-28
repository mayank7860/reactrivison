import React, { Component } from 'react'


 class Compwillun extends Component {
     componentWillUnmount(){
         alert("User Has Been Deleted")
     
       }
       name="ram ";
    render(){
        return (
            <div>
            <Compwillun2 x={this.name}/>
               <ul>
                   <li>Name:Mayank Mohan Dixit</li>
                   <li>Email:mayankmohan001994@mail.com</li>
                   <li>Contect:00000000000</li>
               </ul> 
            </div>
        )
    }
}
class Compwillun2 extends Component {
    
   render(){
       return (
           <div>
           {/* <h6>{JSON.stringfy(this.props)}</h6> */}
              <h1>2nd component</h1>
              {/* <h6>name={this.props.name}</h6> */}
           </div>
       )
   }
}

export  {Compwillun ,Compwillun2};