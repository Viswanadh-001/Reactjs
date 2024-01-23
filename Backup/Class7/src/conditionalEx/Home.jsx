import React, { Component } from 'react'

class Home extends Component {
    state={isLogin:false,message:"Hello"}
    updateHandler=()=>{this.setState({isLogin:! this.state.isLogin,message:"Welcome"})}
  render() {
    return (
      <div>
        <h1>Home Comp</h1>
        <hr/>
        {!this.state.isLogin ? <><button onClick={this.updateHandler}>Login</button></>:
                               <><button onClick={this.updateHandler}>Logout</button></>
        }
        <h4>{this.state.message}</h4>
      </div>
    )
  }
}
export default Home
