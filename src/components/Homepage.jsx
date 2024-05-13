import React from 'react'

const Homepage = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card mb-3">
                                    <img src="data:image/jpeg;base64,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" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h3 class="card-title">SREE BUDHA COLLEGE OF ENGINEERING</h3>
                                        <p class="card-text">Sree Buddha College of Engineering, affiliated to Kerala Technological University, has been par excellence in technical education. The sermons of Lord Buddha gave us a lead to be the flowers of exaltation. The primary objective is to promote education and research in the field of technology and to replenish the skills that get lurked in the budding technocrats. Each and every member in the family of SBCE pushes themselves to set the institution as an example to the world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="card">
                                        <div class="card-body p-0">
                                            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                        <img src="https://sbce.ac.in/wp-content/themes/sbce/images/buddha.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142052746210.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://sbce.ac.in/wp-content/uploads/2017/05/gate2-e1582310432977.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://sbce.ac.in/wp-content/uploads/2017/05/1436334306_Computer_Center.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://sbce.ac.in/wp-content/uploads/2017/05/1-1-e1582310189554.png" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://images.shiksha.com/mediadata/images/1462789572phpcZlqK9.jpeg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://sbce.ac.in/wp-content/uploads/2018/12/canteen-3.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                    <div class="carousel-item">
                                                        <img src="https://images.static-collegedunia.com/public/college_data/images/campusimage/142052746216.jpg" class="d-block w-100" alt="..." />
                                                    </div>
                                                </div>
                                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                    <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <br />
                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                    <div class="card text-bg-dark">
                                        <img src="https://www.dbgidoon.ac.in/wp-content/uploads/2018/07/CS-LAB-3.jpg" class="card-img" alt="" />
                                        <div class="card-img-overlay bg-dark" style={{ opacity: '0.7', transition: 'transform 0.5s ease' }}>
                                            <h3 class="card-title"><b>Our Vision</b></h3>
                                            <br />
                                            <br />
                                            <h5 class="card-text">To create proffesionally competent engineers with human values and social commitements</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                    <div class="card text-bg-dark">
                                        <img src="https://www.edwiseinternational.com/images/Blog-On-Studying-Abroad-Overseas-Education-Aug-2015.jpg" class="card-img" alt="" />
                                        <div class="card-img-overlay bg-dark" style={{ opacity: '0.7' }}>
                                            <h3 class="card-title"><b>Our Programmes</b></h3>
                                            <br />
                                            <br />
                                            <button className="btn btn-success"><b>Under Graduate</b></button>
                                            <br />
                                            <br />
                                            <button className="btn btn-success"><b>Post Graduate</b></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
                                    <div class="card text-bg-dark">
                                        <img src="https://www.dbgidoon.ac.in/wp-content/uploads/2018/07/CS-LAB-3.jpg" class="card-img" alt="" />
                                        <div class="card-img-overlay bg-dark" style={{ opacity: '0.7' }}>
                                            <h3 class="card-title"><b>Our Mission</b></h3>
                                            <br />
                                            <br />
                                            <h5 class="card-text">Offer well balanced curriculum with student-centric approach.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="row g-3">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <div class="accordion" id="accordionPanelsStayOpenExample">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{ color: 'black' }}>
                                                    <b>Placements</b>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                                <div class="accordion-body">
                                                    Career Guidance and Placement Unit (CGPU) has played a vital role in ensuring the career development and campus recruitment of the students graduating from SBCE. With a close watch on the changing employment scenario, the Unit has always guided students in their career options and facilitated recruitment drives of prestigious companies.
                                                    CGPU operates on a three-tier system, the upper most being the Advisory Council, comprising of a member of the SBC Trust, Principal, and Head of CGPU. The second tier which is the Core team consists of the Head of CGPU, Heads of All departments, Placement Officers and Placement Manager. The third tier comprises of Sr.Advisors and student representatives of final year from all branches.
                                                    CGPU is well equipped to conduct training and placement drives in the campus. The facilities include four air-conditioned halls of a total seating capacity of around 1400, four computing facilities with cumulative capacity of around 300 computers and fifteen cabins to conduct interviews and group discussions.
                                                    The major employers are invited to conduct seminars and workshops on Career Development every year. Students are also enlightened about the changing market and employability demands through orientation sessions. CGPU provides compulsory training in Personality Development, CV Writing, Communication Skills, Aptitude tests, Interview Technique etc. to all students. The training programmes are framed based on the Training Need Analysis (TNA) conducted in advance. These programmes are carried out with the support of competent external as well as in house experts. Workshop for students, Faculty Development Programmes and Internship for students in industries help the institution to keep abreast of technological advancements and strengthen its ties with industries.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo" style={{ color: 'black' }}>
                                                    <b>Anti-drugs Cell</b>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                                                <div class="accordion-body">
                                                    Anti Drugs Cell of the college has been constituted to ensure a drug- free campus by imposing a total ban on the possession or consumption or use of drugs and alcohol by students of the college, within or outside the campus/hostels.

                                                    The duties of the anti-drugs cell include : <br />
                                                    -Organizing awareness programmes in the college and hostels with the help of government authorized agencies/ organizations. <br />
                                                    -Educating the students about the ill-effects of drugs and alcohol. <br />
                                                    -Encouraging peer policing among students against the use of drugs. <br />
                                                    -Reporting of any noticed use of drugs by the students to the students affairs committee.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree" style={{ color: 'black' }}>
                                                    <b>Arts Club</b>
                                                </button>
                                            </h2>
                                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                                                <div class="accordion-body">
                                                    Art without Engineering is just dreaming. Engineering without Art is just calculating.

                                                    The proud league of SBC alumni boasts socially committed engineers rather than money making cooperate slaves. This cultural enlightenment is the outcome of socio-cultural exposure which each and every SBCIAN acquires, and this exposure is the result of a well functioning Arts club.

                                                    Arts club is a common platform for all to speak up and debate how SBC should be. Every college is a market place for all talents. But how they are identified and incubated is all that matters. This defines the success of a college and their students. If academics can accelerate a research scholar, here we accelerate a coder who designs his User Interface (UI) because only an artist can identify the pulse of the customer.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage
