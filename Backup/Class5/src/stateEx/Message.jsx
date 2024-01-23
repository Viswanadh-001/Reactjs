import React, { Component } from 'react'

class Message extends Component {
    state={
        msg:"Hello",
        
    }

    gmHandler = () =>{
        this.setState({msg:"Good Morning"})
    }
    gnHandler = () =>{
        this.setState({msg:"Good Night"})
    }
    resetHandler=()=>{
        this.setState({msg:"Hello"})
    }
  render() {
    return (
      <div>
          <h3>Wish Message:{this.state.msg}</h3> 
          <button onClick={this.gmHandler}>GM</button>
          <button onClick={this.gnHandler}>GN</button>
          <button onClick={this.resetHandler}>Reset</button>
      </div>
    )
  }
}
export default Message
