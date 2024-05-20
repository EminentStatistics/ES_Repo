import { Link } from "react-router-dom";
export const PuneUniv = () =>{
    return(
        <div className="University container-fluid">
            <div className="UnivTitle">
                <h1>Pune University</h1>
            </div>
            
            <div className="univImage">
                <div>
                <img className=" img-fluid" src="../Images/pune1.jpg"></img>
                </div>
                <div>
                <img className=" img-fluid" src="../Images/pune2.jpg"></img>
                </div>
            </div>

            <div className="mt-5">
                <p>In last few years, our students have been recruited by international software and pharmaceutical industries. These are Pfizer, Novartis, Ideas, Systat, Quantlinks, SPSS, SAS, GE Finance, Codelinks, Hindustan lever, among others. After passing M.Sc. students can choose research careers in India as well as U.S.A./Canada/U.K. Students have also been recruited as officers in RBI, Indian Statistical Services, Bureau of Economics and Statistics.</p>

            </div>


            <div className="CourseDetails">
                <h4 className="AboutCourse">ABOUT Course</h4>
                <div className="Details">
                    <table className="table table-hover">

                        <tbody>
                            <tr>
                                <td><strong>Name of the Course</strong></td>
                                <td>
                                    <ol>
                                        <li>M.A./M.Sc. Statistics</li>
                                        <li>M.A./M.Sc. Actuarial Statistics</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td><strong>No.of Seats</strong></td>
                                <td><p>M.A./M.Sc. Statistics ( 50 seats )</p>
                                    <p>M.A./M.Sc. Actuarial Statistics ( 20 seats )</p>
                                    </td>
                            </tr>
                            <tr>
                                <td><strong>Notification Date</strong></td>
                                <td>Last week of April</td>
                            </tr>
                            <tr>
                                <td><strong>Examination Date</strong></td>
                                <td>June 1st week</td>
                            </tr>
                            <tr>
                                <td><strong>Stipend</strong></td>
                                <td><p>The Department of Statistics is a U.G.C. Center for Advanced Studies in Statistics. It is also supported by NBHM. The Department offers a number of Scholarships to M.A./M.Sc. students. These Scholarships range from Rs.500/-per month to Rs.1200/-per month. Some of the special courses taught in the Dept. are: Statistical Methods for Quality and Reliability, Survival Analysis, Actuarial Statistics, Clinical Trials, Statistical Analysis of Micro array Data, Regression & Time Series Analysis, Data Mining, and Statistical Methods in finance.</p>
                                    <p>Some scholarships are available for meritorious students These scholarships are sponsored by Pfizer India, Cranes Software International Ltd. and NBHM gives scholarships based on an exam.</p>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>Placement</strong></td>
                                <td>In last few years, our students have been recruited by international software and pharmaceutical industries. These are Pfizer, Novartis, Ideas, Systat, Quantlinks, SPSS, SAS, GE Finance, Codelinks, Hindustan lever, among others. After passing M.Sc. students can choose research careers in India as well as U.S.A./Canada/U.K. Students have also been recruited as officers in RBI, Indian Statistical Services, Bureau of Economics and Statistics.</td>
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