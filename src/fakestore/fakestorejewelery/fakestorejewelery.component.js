import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function FakestoreJewelery(){

    const [product, setProduct] = useState([]);

    useEffect(()=>{
        axios({
            method:'get',
            url:"https://fakestoreapi.com/products/category/jewelery"
        })
        .then(res=>{
            setProduct(res.data)
        })

    },[]);

    return(
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
                {
                    product.map(item => 
                        <div key={item.id} className="card m-2 p-2" style={{width:'250px'}}>
                            <img src={item.image} className="card-img-top" width='150' height='150' />
                            <div className="card-header" style={{height:'200px',width:'230px',overflow:"none"}}>
                                <dl>
                                    <dt>Title</dt>
                                    <dd>{item.title}</dd>
                                    <dt>Price</dt>
                                    <dd>{item.price}</dd>
                                </dl>
                            </div>
                            <div className="card-body" style={{height:'100px'}}>
                                <span className="bi bi-star-fill"></span> {item.rating.rate} [{item.rating.count}]
                                <div className="mt-3">
                                <button className="btn btn-primary me-2">Details</button>
                                <button className="btn btn-success">Add to Cart</button>
                                </div>
                                
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}