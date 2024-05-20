import { Link } from "react-router-dom";
export const IIT = () =>{
    return(
        <div>
            <div className="University container-fluid">
            <div className="UnivTitle">
                <h1>INDIAN INSTITUTE OF TECHNOLOGY</h1>
            </div>

            <div className="univImage">
                <div>
                <img className=" img-fluid" src="../Images/iitbombay.jpg"></img>
                </div>
                <div>
                <img className=" img-fluid" src="../Images/iitkanpur.jpeg"></img>
                </div>
            </div>

            <div className="mt-5">
                <p>From the Academic Session 2004-05, Indian Institutes of Technology have started conducting a Joint 
                    Admission Test for M.Sc. (JAM). The objective of JAM is to provide admissions to M.Sc. (Two Year),
                    Joint M.Sc.-Ph.D., M.Sc.- Ph.D. Dual Degree and other Post-Bachelor’s Degree programmes at the IITs
                    and to the Integrated Ph.D. programmes at IISc and to consolidate Science as a career option for bright
                    students from across the country. JAM is expected to serve as a benchmark for undergraduate level 
                    science education in the country. IISc is joining the JAM for the first time this year to select 
                    candidates to its Integrated Ph.D. Programmes. The integrated Ph.D. Programmes at IISc was
                    started in the early 90’s to enable students to directly join for a Ph.D. degree after their B.Sc. Degree.
                </p>
                <p>
                The M.Sc. (Two Year), Joint M.Sc.-Ph.D, M.Sc.-Ph.D. Dual Degree and other post-bachelor’s 
                degree programmes at the IITs and the integrated Ph.D. programmes at IISc offer high quality
                education in their respective disciplines, comparable to the best in the world. The curricula
                for these programmes are designed to provide the students with opportunities to develop academic
                talent leading to challenging and rewarding professional life. The curricula are regularly updated
                at IISc, Bangalore & IITs. The interdisciplinary content of the curricula equips the students with the ability to utilize 
                scientific knowledge for practical applications. The medium of instruction in all the programmes is English.
                </p>
            </div>

            
            

            <div className="CourseDetails">
                <h4 className="AboutCourse">ABOUT Course</h4>
                <div className="Details">
                    <table className="table table-hover">

                        <tbody>
                            <tr>
                                <td><strong>Name of the Course/s</strong></td>
                                <td>
                                    <ol>
                                        <li>IIT Bombay (IITB): Two-year Master of Science (M.Sc.) programs in: Applied Statistics and Informatics. (37) 19+10+5+3</li>
                                        <li>IIT Kanpur (IITK): Two-year Master of Science (M.Sc.) programs in: Statistics. (40 seats) 20+11+6+3</li>
                                        <li>IIT Delhi (IITB): Two- year M.Sc.- Ph.D. Dual Degree in O.R.(12 seats) 6+3+2+1</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>
                                    <p>The candidates who qualify in JAM 2012 shall have to fulfill the following eligibility criteria for admissions in IITs.</p>
                                    <ol>
                                        <li>At least 55% aggregate marks (taking into account all subjects, including languages and subsidiaries, all years combined) for General/OBC category candidates and at least 50% aggregate marks (taking into account all subjects, including languages and subsidiaries, all years combined) for SC, ST and PD category candidates in the qualifying degree.
                                            <br/>
                                            For candidates with letter grades/CGPA (instead of percentage of marks), the equivalence in percentage of marks will be decided by the Admitting Institute(s).
                                        </li>
                                        <li>Proof of having passed the qualifying degree with the minimum educational qualification as specified by the admitting institute should be submitted by 30 September of the academic year.</li>
                                    </ol>
                                    <p>At the time of admission, all admitted candidates will have to submit a physical fitness certificate from a registered medical practitioner in the prescribed form. At the time of registration, the admitted candidates may also have to undergo a physical fitness test by a medical board constituted by the Admitting Institute. In case a candidate is not found physically fit to pursue his/her chosen course of study, his/her admission is liable to be cancelled.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Notification Date</strong></td>
                                <td>2nd week of September</td>
                            </tr>
                            <tr>
                                <td><strong>Examination Date</strong></td>
                                <td>2nd week of February</td>
                            </tr>
                            
                            <tr>
                                <td className="InstContact" colSpan={2}><Link to="/contact"><button className="btn btn-primary">Contact us for More Information</button></Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
}