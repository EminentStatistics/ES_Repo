
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";

export default function ProductDetails(){

    const [product, setProduct] = useState([]);

    const params = useParams();

    useEffect(()=>{
        axios({
            method : 'get',
            url : `https://fakestoreapi.com/products/${params.id}`
        })
        .then(response => setProduct(response.data))
    },[])

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <img src={product.image} width='300' height='400'/>
                </div>
                <div className="col-9 mt-5">
                    <dl>
                        <dt>Title</dt>
                        <dd>{product.title}</dd>
                        <dt>Description</dt>
                        <dd>{product.description}</dd>
                    </dl>
                    Back to<Link to={"/category/"+product.category}> {product.category}</Link>
                </div>
            </div>
        </div>
    );
}