import React, { Component } from 'react'

class Message extends Component {
    constructor(props){
        super(props)
        this.state = {
            msg:"Hello"
        }
    }
    updateHandler=(value)=>{
        this.setState({msg:value})
    }
  render() {
    return (
      <div>
        <h1>Message Component</h1>
        <hr/>
        <h2>Message Value:{this.state.msg}</h2>
        <button onClick={this.updateHandler.bind(this,"GOOD MORNING")}>GM</button>
        <button onClick={this.updateHandler.bind(this,"GOOD AFTERNOON")}>GA</button>
        <button onClick={this.updateHandler.bind(this,"GOOD EVENING")}>GE</button>
        <button onClick={this.updateHandler.bind(this,"GOOD NIGHT")}>GN</button>
      </div>
    )
  }
}
export default Message
