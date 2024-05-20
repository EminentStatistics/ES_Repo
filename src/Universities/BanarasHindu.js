import { Link } from "react-router-dom";
export const BanarasHindu = () => {
    return(
        <div className="University container-fluid">
            <div className="UnivTitle">
                <h1>Banaras Hindu University</h1>
            </div>
            
            <div className="univImage">
                <div>
                <img className=" img-fluid" src="../Images/banaras1.jpg"></img>
                </div>
                <div>
                <img className=" img-fluid" src="../Images/banaras2.jpg"></img>
                </div>
            </div>

            <div className="CourseDetails">
                <h4 className="AboutCourse">ABOUT Courses</h4>
                <div className="Details">
                    <table className="table table-hover">

                        <tbody>
                            <tr>
                                
                                <td style={{"textAlign":"center"}} colSpan={2}><strong>M.Sc. in Mathematics, Statistics</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>B.Sc. (Hons.)/ B.Sc. under at least 10+2+3 pattern securing a minimum of 50% marks in the aggregate in Science subjects (considering all the three years of B.Sc. Course). The subject in which admission is sought must be Hons. subject at B.Sc.(Hons.) level/a subject studied in all the three parts at Graduate level. However, for admission to M.Sc. in Botany/ Zoology, a candidate must also have offered Chemistry as one of the subjects at the Graduate level.Similarly, for admission in M. Sc. in Statistics,
                                     a candidate must also have studied Mathematics as one of the subjects at the Graduate level.</td>
                            </tr>
                            <tr>
                                <td><strong>Number of seats</strong></td>
                                <td>51</td>
                            </tr>
                            <tr>
                                <td><strong>Entrance Exam model</strong></td>
                                <td>There shall be one paper of 150 minutes duration carrying 450 marks containing 150 multiple-choice questions based on level of the concerned subject.</td>
                            </tr>



                            <tr>
                                
                                <td style={{"textAlign":"center"}} colSpan={2}><strong>M. Sc. in Health Statistics (PROFESSIONAL COURSE)</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>B. Sc. (Hons.)/B.Sc. under at least 10+2+3 pattern securing a minimum of 50% marks in the aggregate in Science subjects (considering all the three years of B. Sc. Course). Statistics must be Hons. subject at B. Sc. (Hons.) level/a subject studied in all the three parts at B. Sc. level.</td>
                            </tr>
                            <tr>
                                <td><strong>Number of seats</strong></td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td><strong>Entrance Exam model</strong></td>
                                <td>There shall be one paper of 150 minutes duration carrying 450 marks containing 150 multiple-choice questions (MCQs). Out of 150 questions, 125 MCQs will be from the course content of Statistics taught at under graduate level and remaining 25 will be based on statistical techniques application in life sciences.</td>
                            </tr>



                            <tr>
                                
                                <td style={{"textAlign":"center"}} colSpan={2}><strong>M.Sc. in Statistics and Computing</strong></td>
                            </tr>
                            <tr>
                                <td><strong>Duration</strong></td>
                                <td>2 Years</td>
                            </tr>
                            <tr>
                                <td>Location </td>
                                <td>DST- Centre for Interdisciplinary Mathematical Sciences.</td>
                            </tr>
                            <tr>
                                <td><strong>Eligibility</strong></td>
                                <td>Any B.Sc./B.A. graduate under 10+2+3 securing minimum of 50% marks in aggregate and having studied Statistics and Mathematics as subjects at B.Sc./B.A. level.</td>
                            </tr>
                            <tr>
                                <td><strong>Number of seats</strong></td>
                                <td>Min 10 and Max 30</td>
                            </tr>
                            <tr>
                                <td><strong>Entrance Exam model</strong></td>
                                <td>There shall be one paper of 150 minutes duration consisting of 150 questions carrying 450 marks. It will contain 125 multiple choice questions on Statistics based on graduate level of Banaras Hindu University (available on BHU Website) and 25 multiple choice question based on statistical computing using high level programming language such as FORTRAN and C.</td>
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