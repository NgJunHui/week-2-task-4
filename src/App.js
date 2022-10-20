import React, { Component } from 'react'
import SignUp from './SignUp';
import "./App.css"

class App extends Component {

  state={
    personData: []
  }

  newData = (props) =>{
    this.setState({
      personData: [...this.state.personData, props]
    })
  }

  render()
   {
    
    return (
      
     <SignUp newData={this.newData}/>
      
     )
  }
}

export default App;