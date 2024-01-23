import React from "react";
const CompBfun =(props)=> {
        return <div>
            <pre>{JSON.stringify(props)}</pre>
             <h2>Component B</h2>
             <h3>Name:{props.name}</h3>
             <h3>id:{props.id}</h3>
             <h3>Message:{props.msg}</h3>
        </div>
    
}
export default CompBfun