import React from "react";
class CompB extends React.Component{
    render(){
        return <div>
            <pre>{JSON.stringify(this.props)}</pre>
             <h2>Component B</h2>
             <h3>Name:{this.props.name}</h3>
             <h3>id:{this.props.id}</h3>
             <h3>Message:{this.props.msg}</h3>
        </div>
    }
}
export default CompB