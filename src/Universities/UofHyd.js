import { Link } from "react-router-dom";
export const UofHyd = () =>{
    return (
        <div className="University container-fluid">
            <div className="UnivTitle">
                <h1>University of Hyderabad</h1>
            </div>
            
            <div className="univImage">
                <div>
                <img className=" img-fluid" src="../Images/uoh1.jpg"></img>
                </div>
                <div>
                <img className=" img-fluid" src="../Images/uoh2.jpg"></img>
                </div>
            </div>

            <div className="CourseDetails">
                <h4 className="AboutCourse">ABOUT Course</h4>
                <div className="Details">
                    <table className="table table-hover">

                        <tbody>
                            <tr>
                                <td><strong>Name of the Course</strong></td>
                                <td>Statistics-OR(22)</td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>Bachelor’s degree with a minimum of 60% marks in the aggregate of optional 
                                    subjects with Mathematics/Statistics as one of the subjects; OR with at least
                                     55% of marks for those students who have done B.A. /B.Sc.(Hons)
                                      Course in Maths / Statistics.</td>
                            </tr>
                            <tr>
                                <td><strong>Notification Date</strong></td>
                                <td>1st week of Jan</td>
                            </tr>
                            <tr>
                                <td><strong>Examination Date</strong></td>
                                <td>3rd week of February</td>
                            </tr>
                            <tr>
                                <td><strong>Examination Pattern</strong></td>
                                <td><strong>Part-A :</strong> 25 Marks    <strong>Part-B :</strong> 75 Marks</td>
                            </tr>
                            <tr>
                                <td><strong>Placement</strong></td>
                                <td>Your teaching is oriented towards preparing the students to go for research in Mathematics/Statistics.
                                     Thus the students who join here get a strong background in mathematics at the M.Sc. level.
                                      Consequently students of this department consistently perform well in examinations or 
                                      interviews for research fellowships in various prestigious institutes in India. Because of the
                                       through training that students receive here, they are also highly sought after in the job market
                                        even with their M.Sc. degree. Students find it a privilege to be here because of the academic environment
                                     and the facilities they have here. Of course our’s is a very pleasant and a beautiful campus!</td>
                            </tr>
                            <tr>
                                <td><strong>Scholarship</strong></td>
                                <td>Each admitted student who do not possess any fellowship from any other agency will be paid a Fellowship/ Scholarship of Rs. 1000 p.m.as per the existing rules of the University.</td>
                            </tr>
                            <tr>
                                <td><strong>University Achievers awards</strong></td>
                                <td>The top two students in the class will get an achievers award @ Rs.2000/- p.m. (instead of the Rs. 1000 that other students get) for scoring highest marks in the class in the preceding semester. Its continuation depends upon the continuation of the scoring of the highest marks by the awardee.</td>
                            </tr>
                            <tr>
                                <td className="InstContact" colSpan={2}><Link to="/contact"><button className="btn btn-primary">Contact us for More Information</button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}