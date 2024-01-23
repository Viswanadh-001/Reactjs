import React, { Component } from "react";
import Employee from './Employee'
class User extends Component{
    user={
        name:"Sai Viswanadh",
        email:"kvscharan@gmail.com",
        loc:['Nellore','Banglore']
    }
    render(){
        return <div>
            <h1>User Component</h1>
            <hr />
            <Employee user={this.user}  eid={101} />
        </div>
    }
}
export default User