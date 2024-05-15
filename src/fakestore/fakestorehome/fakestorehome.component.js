import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FakestoreCategories from "../fakestorecategories/fakestoriescategories.component";
import FakestoreHomePage from "../fakestorehomepage/fakestorehomepage.component";
import FakestoreJewelery from "../fakestorejewelery/fakestorejewelery.component";
import ProductDetails from "../details/details.component";
import CartItems from "../cart.component";

export function FakestoreHome(props){

    const [ cartData, setCartData] = useState([]);

    function cartDataHandler(ele){
        // console.log(ele);
        setCartData(ele);
    }

    return(
        <BrowserRouter>
        <div className="container-fluid">

            
                <header className="d-flex justify-content-between">
                    <div>
                        <h3>Shopping</h3>
                    </div>

                    <nav className="d-flex">
                        <div className="me-3"><Link to='home' className="btn"> Home</Link></div>
                        <div className="me-3"><Link to="category/men's clothing" className="btn">Men's Fashion</Link></div>
                        <div className="me-3"><Link to="category/women's clothing" className="btn">Women's Fashion</Link></div>
                        <div className="me-3"><Link to="category/jewelery" className="btn">Jewelery</Link></div>
                        <div className="me-3"><Link to="category/electronics" className="btn">Electronics</Link></div>
                    </nav>

                    <div>
                        <span className="bi bi-person me-2"></span>
                        <span className="bi bi-search me-2"></span>
                        <span className="bi bi-heart me-2"></span>
                        <Link to="/cart" id="cart-icon" className="bi bi-cart2 me-2"></Link>
                    </div>
            </header>
            
            <div className="bg-dark text-white text-center " style={{fontSize:'25px'}}>
                <p className="m-2 p-3">Happy Season Ending Sale!</p>
            </div>

            <Routes>
                <Route path="/" element={<FakestoreHomePage/>} ></Route>
                <Route path="home" element={<FakestoreHomePage/>} ></Route>
                <Route path="jewelery" element={<FakestoreJewelery/>}></Route>
                <Route path="category/:catName/*" element={<FakestoreCategories cartDataHandler={cartDataHandler}/>} ></Route>
                <Route path="/product/:id" element={<ProductDetails/>}></Route>
                <Route path="/cart" element={<CartItems dataArray={cartData} />}></Route>
            </Routes>

            
                        
        </div>
        </BrowserRouter>
    );
}