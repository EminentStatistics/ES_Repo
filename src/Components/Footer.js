import { Link } from "react-router-dom";

export const Footer = () =>{
    return (
        <div className="Footer">
                <div className="row FooterData">
                    <div className="col-4 footercontent">
                        <p id='footcont'>EMINENT STATISTICS Institute is one of the best coaching centres in Vijayawada (A.P) city in providing coaching and training for higher education. We offer guidance to those students who are aspiring for IIT-JAM (Mathematics and Statistics), HCU, PUNE, DELHI, PONDICHERRY, CUCET and UGC CSIR (Mathematical Sciences).</p>
                    </div>
                    <div className="col-4 contentlist" >
                        <ul>
                            <li><Link to="/"><a>Home</a></Link></li>
                            <li><Link to="/contact"><a>Contact</a></Link></li>
                            <li><Link to="/about"><a>About</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-4 sociallinks">
                            <h4>Check us Here</h4>
                            <ul>
                                <li><a href="#"><i class="bi bi-facebook"></i> &nbsp;&nbsp;Facebook</a></li>
                                <li><a href="#"><i class="bi bi-instagram"></i> &nbsp;&nbsp;Instagram</a></li>
                                <li><a href="#"><i class="bi bi-youtube"></i> &nbsp;&nbsp;Youtube</a></li>
                                <li><a href="#"><i class="bi bi-telephone-plus-fill"></i>&nbsp;&nbsp;+91-7272727272</a></li>
                            </ul>
                    </div>
                </div>

                <div className="Address">
                    <p className="Addresstitle">Address</p>
                    <p className="AddressContent">Near P B Siddhartha College of Arts & Science Bus Stop,</p>
                    <p className="AddressContent">1st Floor, Sri Vyshnavi Books & Stationary,</p>
                    <p className="AddressContent">Moghalrajpuram, Siddhartha Nagar,</p>
                    <p className="AddressContent">Vijayawada – 520010</p>
                </div>
            </div>
    );
}