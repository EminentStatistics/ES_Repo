import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import {  Link, useParams } from "react-router-dom";
import CartItems from "../cart.component";
import { createContext } from "react"; 


// export let myContext = React.createContext(null);

export default function FakestoreCategories(props){

    

    const showChild = false;

    const params = useParams();
    // const status = "unknown"

    const [product, setProduct] = useState([]);
    const [cartItemsArray, setCartItemsArray] = useState([]);

    // console.log(cartItemsArray);

    // let item = "HI";  

    useEffect(()=>{
        // alert(params.catName)
        
        axios({
            method:'get',
            url : `https://fakestoreapi.com/products/category/${params.catName}`
        })
        .then(response => setProduct(response.data))
    },[params.catName])

    // console.log(cartItemsArray, "categories");

        function cartClick(e){
            alert(`${e.target.id} product added`)
            const item = [...cartItemsArray, e.target.id];
            // console.log(...item);
            setCartItemsArray([...cartItemsArray, e.target.id]);
            // console.log(cartItemsArray);
            props.cartDataHandler([...cartItemsArray, e.target.id]);
            // alert(cartItems);
        
        }
   

    

    function showCartItems(){
        // console.log(cartItemsArray);
    }

    // console.log(cartItems);

    return(
        <div className="container-fluid">
            
                {/* {showChild && <CartItems data={cartItemsArray} />} */}
            

            <div className="d-flex flex-wrap">
                {
                    product.map(item => 
                        <div key={item.id} className="card m-2 p-2" style={{width:'300px'}}>
                            <img src={item.image} className="card-img-top" width='150' height='200' />
                            <div className="card-header" style={{height:'200px',width:'280px',overflow:"none"}}>
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
                                <Link to={"/product/"+item.id } className="btn btn-primary me-2" >Details</Link>
                                <button id={item.id} className="btn btn-danger" onClick={cartClick}>Add to Cart
                                </button>
                                
                                </div>
                                
                            </div>
                        </div>
                    )
                }
            </div>

            

            <div>
                <button className="btn btn-danger" onClick={showCartItems} >Click to show cart Items</button>

            </div>
            
            {/* <CartItems data={cartItemsArray} /> */}
            
                
        </div>
    );
}