import React from 'react'
import CompB from './CompB'
import CompBfun from './CompBfun'
const CompA=()=> {
    let ename="Sai"
  return  <div>
        <pre>{ename}</pre>
        <h1>Component A</h1>
        <hr />
        <CompB name={ename} id={101} msg={"GM"}/>
        <hr />
        <CompBfun name={ename} id={101} msg={"GM"}/>
  </div>
  
}
export default CompA
