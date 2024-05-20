import { Link } from "react-router-dom";
export const AndhraUniv = () =>{
    return (
        <div className="University container-fluid">
            <div className="UnivTitle">
                <h1>Andhra University</h1>
            </div>
            
            <div className="univImage">
                <div>
                <img className=" img-fluid" src="../Images/andhrauni1.jpg"></img>
                </div>
                <div>
                <img className=" img-fluid" src="../Images/andhrauni2.jpg"></img>
                </div>
            </div>

            <div className="CourseDetails">
                <h4 className="AboutCourse">ABOUT Course</h4>
                <div className="Details">
                    <table className="table table-hover">

                        <tbody>
                            <tr>
                                <td><strong>Name of the Course</strong></td>
                                <td>M.Sc. Statistics (Pure and Applied)</td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>B.A/B.Sc. Mathematics and Statistics (with one of them as main wherever applicable) and any other subject.</td>
                            </tr>
                            <tr>
                                <td><strong>Notification Date</strong></td>
                                <td>Month of March</td>
                            </tr>
                            <tr>
                                <td><strong>Examination Date</strong></td>
                                <td>last week of April</td>
                            </tr>
                            <tr>
                                <td><strong>Examination Pattern</strong></td>
                                <td>The 90 questions are spread over three parts, viz., A , B & C.</td>
                            </tr>
                            <tr>
                                <td><strong>Placement</strong></td>
                                <td>The students of this department have bright employment opportunities as statistical officers, consultant statisticians software development personal, Field officers in several government, private and public sector organizations in addition to teaching and research institutions. Recently some software and Marketing Research companies in India have conducted Campus Interviews and selected many of the students for their organizations.</td>
                            </tr>
                            <tr>
                                <td><strong>Scholarship</strong></td>
                                <td>S.C. / S.T. / B.C. / EBC as per G.O.</td>
                            </tr>
                            <tr>
                                <td><strong>Number of Seats</strong></td>
                                <td>40</td>
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