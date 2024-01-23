import React, { Component } from 'react'

class Employee extends Component {
  render() {
    let {eid,user}   = this.props
    return <React.Fragment>
        <h2>Employee Componet</h2>
        <pre>{JSON.stringify(this.props)}</pre>
        <h3>Employee Id:{eid}</h3>
        <h4>Employee Name:{user.name}</h4>
        <h4>Employee Email:{user.email}</h4>
        <h4>Employee location1:{user.loc[0]}</h4>
        <h4>Employee location2:{user.loc[1]}</h4>
    </React.Fragment>
  }
}

export default Employee