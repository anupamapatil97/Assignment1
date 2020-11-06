import React, { Component } from 'react'
import UserInput from './Components/UserInput/UserInput'
import UserOutput from './Components/UserOutpt/UserOutput'

export default class App extends Component {
    state={
        username:"lorem",
    }
handleNameChange=(event)=>{
    this.setState({username:event.target.value})
}
  
    render() {
        return (
            <div className="card">  
             <UserInput changed={this.handleNameChange} newvalue={this.state.username}/>
                <UserOutput name="ipsum"/>
               
                <UserOutput name={this.state.username}/>
                <UserOutput name={this.state.username}/>
                <UserOutput name={this.state.username}/>
            </div>
        )
    }
}
