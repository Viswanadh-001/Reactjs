import React from "react"
import Navbar from "./Navbar/Navbar";
import Product from "./Products/Product";
import Product1 from "./Products/Product1";
import Product2 from "./Products/Product2"


//import Navbar from './Navbar/Navbar'

const App=()=>{

    return(
        <div>
           <Navbar/>
           <Product/>
           <hr/>
           <Product1/>
           <hr/>
           <Product2/>
        </div>
    );
}
export default App