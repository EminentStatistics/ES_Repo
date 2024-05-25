//  import { a } from "react-router-dom";
import {  Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { UniversityPage } from "../UniversityPage";
import { Header2 } from "./Header2";
 
 export const LandingPage = () => {
    

    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>} />
                <Route path="/university/:name" element={<UniversityPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}