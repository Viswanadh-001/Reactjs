import React, { Component } from 'react'
import  Axios from 'axios'
class User1 extends Component {
    state;
    constructor(props){
        super(props)
        console.log("First Constructor Method")
        this.state={
            users:[]
        }
    }
    getUserData = ()=>{
        console.log('About - get User Data method')
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data)
            this.setState({users:response.data})
        })
        .catch((err)=>{})
    }
    componentDidMount(){
        console.log("Third - component Did Mount method")
    }
  render() {
    return   <div>
                 <h3>User Component</h3>
                 <button onClick={this.getUserData}>Click</button>
              </div>
    
  }
}
export default User1