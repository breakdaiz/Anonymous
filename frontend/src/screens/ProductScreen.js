import React from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Image, ListGroup, Card, Button  } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";



const ProductScreen = (props) => {

    const match  = {params: useParams()};
    const product = products.find(p => p._id === match.params.id);
    
    return (
        <div>
         {product.name}
        </div>
    )
}

export default ProductScreen