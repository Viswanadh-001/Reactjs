import React from "react"
import Navbar from './Navbar/Navbar'
import Employee from "./listrendering/Employee";
//import Home from "./conditionalEx/Home";
//import Home1 from "./conditionalEx/Home1"
//import Home2 from "./conditionalEx/Home2"

const App=()=>{

    return(
        <div>
          <Navbar/>
          <Employee/>
          {/*<Home/>
          <hr/>
          <Home1/>
          <hr/>
          <Home2/>*/}
        </div>
    );
}
export default App