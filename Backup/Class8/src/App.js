import React from "react"
import Navbar from './Navbar/Navbar'
import User from "./ListrenderingEx/User";
import User1 from "./ListrenderingEx/User1"
import User2 from "./ListrenderingEx/User2"

const App=()=>{

    return(
        <div>
          <Navbar/>
          <User/>
          <User1/>
          <User2/>
        </div>
    );
}
export default App