import { Link } from "react-router-dom";
export const UofDelhi = () =>{
    return(
        <div className="University container-fluid">
        <div className="UnivTitle">
            <h1>University of Delhi</h1>
        </div>
        
        <div className="univImage">
            <div>
            <img className=" img-fluid" src="../Images/delhi1.jpg"></img>
            </div>
            <div>
            <img className=" img-fluid" src="../Images/delhi2.jpg"></img>
            </div>
        </div>

        <div className="mt-5">
            <p>The Department of Mathematical Statistics was established in August 1973, though the teaching of M.A. in Mathematical Statistics had been introduced as early as in July 1957 at the initiative of Professor Ram Behari as part of a development programme adopted by the Department of Mathematics. Professor H.C. Gupta was the first head of the Department and he can be credited with the setting up of a good school in Stochastic Processes. In 1987, the Department of Mathematical Statistics was re-named as the Department of Statistics. The Department is running the post-graduate (M.A./M.Sc.), M.Phil. and Ph.D. Programmes in Statistics. In 1971, the scope of post-graduate course in Mathematical Statistics was extended leading to M.Sc. degree in Mathematical Statistics.</p>
            <p>The syllabus of M.A./ M.Sc. course has been revised and restructured periodically to incorporate and reflect the latest in the discipline. The Department imparts rigorous training and exposure to the students in computer education by way of introducing the latest state-of-the-art in the programming language and computer software to enable the students to perform statistical data analysis. With a view to preparing research background of the students, the M. Phil. course in Mathematical Statistics was introduced in 1977 and the same has been continually updated covering most of the topical areas of Theoretical and Applied Statistics at the specialization level.</p>
            <p>The Department has laboratories equipped with the basic and modern computing facilities. There is a good collection of books in laboratories with latest titles in various areas of statistics. Two computer laboratories with latest computing systems and related equipment have been setup in the Department for the use of students, research scholars and teachers. Regarding the job opportunities for the alumni, the Department has its own placement cell operating since academic year 2005-06. We can take pride in the fact that students get suitable placement in Research Institutes or Industries or Government Departments. Quite a few are selected in Indian Statistical Service (ISS) each year.</p>
        </div>

        <div className="CourseDetails">
            <h4 className="AboutCourse">ABOUT Course</h4>
            <div className="Details">
                <table className="table table-hover">

                    <tbody>
                        <tr>
                            <td><strong>Name of the Course</strong></td>
                            <td> M.A./M.Sc. Statistics</td>
                        </tr>
                        <tr>
                            <td><strong>Duration</strong></td>
                            <td>2 Years</td>
                        </tr>
                        <tr>
                            <td><strong>Eligibility</strong></td>
                            <td><p>Admission to Post-Graduate Course in Statistics leading to a Master’s Degree in Statistics will be made through two modes:</p>
                            <p>Mode-I : Direct Admission ( only for Delhi students)</p>
                            <p>Mode-II : Through an Entrance Test</p>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Notification Date</strong></td>
                            <td>2nd week of March</td>
                        </tr>
                        <tr>
                            <td><strong>Examination Date</strong></td>
                            <td>3rd week of june</td>
                        </tr>
                        <tr>
                            <td><strong>Number of Seats Available : Mode-II </strong></td>
                            <td>93</td>
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