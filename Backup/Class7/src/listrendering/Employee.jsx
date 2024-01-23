import React, { Component } from 'react'

export class Employee extends Component {
    employees=[
        {eid:101,ename:"Sai",esal:45000},
        {eid:101,ename:"Viswanadh",esal:55000},
        {eid:103,ename:"Kuppachi",esal:65000},
    ]
  render() {
    return (
      <div>
        <h3>Employee Data</h3>
        <table border={3}>
            <thead>
                <tr >
                  <th>Employee Id</th>
                    <th> Name</th>
                
                    <th> Salary</th>
                </tr>
            </thead>
            <tbody>
               {
                this.employees.map(function(emp,index){
                    return <tr key={index}>
                            <td>{emp.eid}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.esal}</td>
                           </tr>
                })
               } 
            </tbody>
        </table>
      </div>
    )
  }
}

export default Employee