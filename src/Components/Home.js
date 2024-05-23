

export const Home = () => {
    return(
        <div>
            <div className="Homebg">
                <div className="Homeclass">
                    <div className="Homecontent">
                        <h2>Your Bright Future is <b>Our Mission</b></h2>
                        <p>For feature for your life and everything education can take place in formal or informal setting.</p>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="ImageLeft col-md-6 col-6 col-xs-12">
                        <img className="img-fluid" src="Images/image2.jpg"></img>
                    </div>
                    <div className="CoDet col-md-6 col-6 col-xs-12">
                        <div className="CoachingDetails">
                            <div className="CoachingContent">
                                <h3 className="title">EMINENT STATISTICS</h3>
                                <p>Coaching for</p>
                                <p>M.Sc. (Statistics) Entrance</p>
                                <p>IIT-JAM, HCU, ISI, PUNE, PONDICHERRY, AU, ANU & SVU</p>
                                <p>MATHEMATICAL SCIENCE : CSIR - UGC NET & AP SET</p>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="quote">
                <p>
                Education is the foundation of all we do in life. It shapes who we are and what we aspire to be.
                </p>
            </div>
            <div>
                <h3 id="facultytitle">Faculty</h3>
                <div className="FacultyDetails">
                    <div className="card no-border col-xs-12">
                        <img className="card-img-top" alt="faculty1" src="./Images/Alex_smith.jpg"></img>
                        <div className="card-header">
                            <h4>Alex_smith</h4>
                            <p>Msc Mathematics</p>
                        </div>
                    </div>

                    <div className="card no-border col-xs-12">
                        <img className="card-img-top" alt="faculty2" src="./Images/Alex_smith.jpg"></img>
                        <div className="card-header">
                            <h4>Alex_smith</h4>
                            <p>Msc Mathematics</p>
                        </div>
                    </div>
                </div>
            </div>
            
          </div>
    );
}