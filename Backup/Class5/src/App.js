import React from "react"
import Message from "./stateEx/Message";
import Message1 from "./stateEx/Message1";
import Message2 from "./stateEx/Message2";

//import Navbar from './Navbar/Navbar'

const App=()=>{

    return(
        <div>
           {/* <Navbar/>*/}
            <Message/>
            <hr/>
            <Message1/>
            <hr/>
            <Message2/>
        </div>
    );
}
export default App