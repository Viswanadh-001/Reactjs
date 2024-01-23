import React from "react"
import Message from "./Message/Message";
import Message1 from'./Message/Message1';
import Product from './Message/Product';
import Salary from "./Message/Salary";
import ProductsingleHandler from "./Message/ProductsingleHandler";



//import Navbar from './Navbar/Navbar'

const App=()=>{

    return(
        <div>
           <Message/>
           <hr/>
           <Message1/>
           <hr/>
           <Product/>
           <hr/>
           <ProductsingleHandler/>
           <hr/>
           <Salary/>
        </div>
    );
}
export default App