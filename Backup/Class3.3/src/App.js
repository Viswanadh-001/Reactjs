import React from "react"
function App(){

    let msg="GM"

    let emp={
        eid:101,
        ename:"Sai Viswanadh",
        esal:45000,
        eloc:["Nellore","Banglore"]
    }

    return(
        <div>
            <h1>Message={msg}</h1>
            <h2>{10+30}</h2>
            <h3>{JSON.stringify(emp)}</h3>
            <h4>Employee Nmae:{emp.ename}</h4>
            <h5>Emp Loc:{emp.eloc[0]}</h5>
        </div>
    )
}
export default App