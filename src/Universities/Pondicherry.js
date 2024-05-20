import { Link } from "react-router-dom";
export const Pondicherry = () =>{
    return(
        <div className="University container-fluid">
            <div className="UnivTitle">
                <h1>PONDICHERRY UNIVERSITY</h1>
            </div>
            
            <div className="univImage">
                <div>
                <img className=" img-fluid" src="../Images/pondicherry1.jpg"></img>
                </div>
                <div>
                <img className=" img-fluid" src="../Images/pondicherry2.jpg"></img>
                </div>
            </div>

            <div className="CourseDetails">
                <h4 className="AboutCourse">ABOUT Course</h4>
                <div className="Details">
                    <table className="table table-hover">

                        <tbody>
                            <tr>
                                <td><strong>Name of the Course</strong></td>
                                <td><strong>M.SC. </strong>- Statistics and  <strong>M.SC. </strong>- Quantitative Finance </td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility for M.Sc. – Statistics </strong></td>
                                <td>Bachelor’s degree in Statistics or Mathematics with Statistics as a allied subject with a minimum of 55% of marks</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility for M.Sc. – Quantitative Finance</strong></td>
                                <td>A candidate who has secured 55% marks or above in any one of the following or equivalent is eligible to apply. B. Sc. (Maths), B. Sc. (Statistics), B.Com(with Mathematics), B.A(Eco) (With Mathematics),Bachelor’s degree in Engineering (Computer Science & Engineering/ Information Technology) or Bachelor’s degree in Computer Science/Computer Applications/Information Technology.</td>
                            </tr>
                            <tr>
                                <td><strong>Reservations</strong></td>
                                <td>SC:15%,ST:7.5%, OBC: 27% , PH:3%</td>
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
                                <td>The Placement activities of the Department are taken care of by a Placement Cell which comprises
                                     of a student member and a faculty advisor. The placement cell organizes campusrecruitment programmes
                                      every year and takes pride in facilitating placement
                                     for eligible students in Multinational Companies and other companies in the private sector.</td>
                            </tr>
                            <tr>
                                <td><strong>Merit Scholarship</strong></td>
                                <td><ol>
                                    <li>The candidate who secures the highest percentage of marks in P.G. admission entrance examination shall be eligible for the award of Merit Scholarship @ Rs.500/- p.m. for the Ist semester.</li>
                                    <li>For the subsequent semesters the Merit scholarship at same rate of Rs.500/- p.m.shall be awarded to the candidates as noted here under.</li>
                                    <li>For the II semester who tops the class in the I semester exams.</li>
                                    <li>For the III semester who tops the class in the II semester exams.</li>
                                    <li>For the IV semester who tops the class in the III semester exams.</li>
                                    </ol>
                                    </td>
                            </tr>
                            <tr>
                                <td><strong>Merit-cum-Means Scholarship (MCM)</strong></td>
                                <td>20% of the students in each P.G.degree programme are eligible for the award of MCM Scholarship of the University. The scholarship is based both on the merit in each semester and the parental income of the student. The annual income of the parents should not exceed Rs.1,10,000/- (Rupees one lakh ten thousand only). Amount of scholarship is Rs.500/- p.m.</td>
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