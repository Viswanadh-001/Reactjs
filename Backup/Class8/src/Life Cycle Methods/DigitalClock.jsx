import React, { Component } from 'react'

class DigitalClock extends Component {
    constructor(props){
        super(props)
        this.state={
            ct:new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState=({
                ct:new Date().toLocaleTimeString()
            })
        },1000)
        
    }
      render(){
       setInterval(()=>{

    },1000)
    return(
         <div>
              <h2>Didital Clock</h2>
               <h3>{this.state.ct}</h3>
           </div>
    )
      }
    }
    
export default DigitalClock