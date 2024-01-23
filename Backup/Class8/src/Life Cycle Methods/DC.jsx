import React, { Component } from 'react'

class DC extends Component {
    constructor(props){
        super(props)
        this.state={
            ct:new Date().toLocaleTimeString()
        }
    }
    updateTime=()=>{
        setInterval(()=>{
            this.setState({
                ct:new Date().toLocaleTimeString()
            })
        },1000)
    }
  render() {
    setInterval(()=>{},1000)
    return (
      <div>
          <h2>Digital Clock</h2>
          <h3>{this.state.ct}</h3>
          <button onClick={this.updateTime}>Click Bro!!</button>
      </div>
    )
  }
}
export default DC