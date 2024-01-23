import React, { Component } from 'react'

class Message extends Component {
    state={msg:"Hello"}

    gmHandler = () =>{
        this.setState({msg:"Good Morning"})
    }

    gnHandler = () =>{
        this.setState({msg:"Good Night"})
    }
    
  render() {
    return (
      <div>
          <pre>{JSON.stringify(this.state)}</pre>
          <h3>Wish Message:{this.state.msg}</h3> 
          <button onClick={this.gmHandler}>GM</button>
          <button onClick={this.gnHandler}>GN</button>
      </div>
    )
  }
}
export default Message
