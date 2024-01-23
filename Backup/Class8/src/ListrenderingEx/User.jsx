import React, { Component } from 'react'
import users from '../data/userdata'

class User extends Component {
  constructor(props){
    super(props)
    this.state = { users:users}
  }

  render() {
    let {users} = this.state
    return <>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
           <table className='table table-hover table-striped'>
             <thead className='bg-primary text-white'>
              <tr>
                <th>Sl.NO</th>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>City</th>
                <th>Country</th>
              </tr>
             </thead>
             <tbody>
              {
                users.map((user,index)=>{
                  return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{user.login.uuid.substring(32)}</td>
                    <td>{user.name.first}</td>
                    <td>{user.email}</td>
                    <td>{user.dob.age}</td>
                    <td>{user.location.city}</td>
                    <td>{user.location.country}</td>
                  </tr>
                })
              }
             </tbody>
           </table>
        </div>
      </div>
      </div>
      </>
  }
}
export default User