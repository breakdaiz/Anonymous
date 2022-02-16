import React from 'react'
import {  Outlet } from "react-router-dom";

const ProductScreenDetail = () => {
    
    return (
        <div>  
            <h1>Product Screen Detail</h1> 
            <Outlet />
        </div>
    )
}  

export default ProductScreenDetail