const mainHome = () => {
    return (
        <>
            {/* Main */}
            {/* Appointment */}
            <section className="banner section-pattern" data-bg-img="/img/section-pattern/slider-pattern.png">
                <div className="banner-slider owl-carousel d-flex align-items-center justify-content-center" data-owl-animate-in="fadeIn" data-owl-animate-out="fadeOut" data-owl-autoplay="false" data-owl-dots="true">
                    <div className="single-banner-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="banner-content">
                                        <h1>Find Creativity <br /><span>in Our</span> Technology <br />Solutions</h1>
                                        <p>Providing the best service to achieve customer satisfaction with guaranteedquality of work, speed, accuracy, and competitive prices.</p><a href="#" data-toggle="modal" data-target="#appointmentModalForm" className="banner-btn btn"><span>Contact us</span></a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right"> <img src="/img/banner/slider-1.png" data-rjs={2} alt="" /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Appointment Modal */}
            <div className="appointment-modal modal fade" id="appointmentModalForm" tabIndex={1} role="dialog" aria-labelledby="appointmentModalForm" aria-hidden="true">
                <div className="modal-dialog d-flex align-items-center" role="document">
                    <div className="container">
                        <div className=" row justify-content-center">
                            <div className="col-lg-8 col-12">
                                <div className="modal-content"> <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <img src="/img/icons/close.svg" alt="" /> </button>
                                    <form action="#" method="POST" className="appointment-form">
                                        <h2 className="form-title">Request Appoinment</h2> <input className="theme-input-style" type="text" placeholder="Full Name" /> <input className="theme-input-style" type="email" placeholder="Email" /> <input className="theme-input-style" type="tel" placeholder="Phone" /> <select className="theme-input-style clearfix">
                                            <option value disabled selected>Select purpose</option>
                                            <option value="1">Business</option>
                                            <option value="2">Consultancy</option>
                                        </select> <textarea className="theme-input-style" placeholder="Message" defaultValue={""} /> <button className="btn" type="submit"><span>Send request</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="pt-120 pb-90 section-pattern" data-bg-img="/img/section-pattern/feature-pattern.png">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature text-center">
                                <div className="image"> <img src="/img/feature/feature-2.png" data-rjs={2} alt="" /> </div>
                                <div className="content">
                                    <h3>VisualCraft 3D Verse</h3>
                                    <p>Bringing a high level of expertise in 3D art to create stunning and unforgettable visual experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature text-center">
                                <div className="image"> <img src="/img/feature/feature-1.png" data-rjs={2} alt="" /> </div>
                                <div className="content">
                                    <h3>CodeCraft Development</h3>
                                    <p>Our expert fullstack developers lead innovation in IT development solutions, taking your projects to the next level.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-feature text-center">
                                <div className="image"> <img src="/img/feature/feature-3.png" data-rjs={2} alt="" /> </div>
                                <div className="content">
                                    <h3>PixelInnovate Designs</h3>
                                    <p>UI/UX design meets IT expertise, forming a digital environment that is both functional and aesthetically pleasing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120 section-pattern ov-hidden" data-bg-img="/img/section-pattern/about-pattern.png">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="section-title">
                                <h3><strong>About Agency</strong></h3>
                                <h2>Empowering &amp; Driving<br />Success in the Digital <br />Landscape</h2>
                                <p>Join us on this journey of technological empowerment, where every solution is crafted with your success in mind. Your digital transformation starts here, with Holy Heaven IT Corp.</p>
                            </div>
                            <div className="about-nav-tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-items"> <a className="nav-link active" data-toggle="tab" href="#mission" role="tab" aria-selected="true">Our Mission</a> </li>
                                    <li className="nav-items"> <a className="nav-link" data-toggle="tab" href="#vission" role="tab" aria-selected="false">Our Vission</a> </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="mission" role="tabpanel">
                                        <p>“To be a leading partner in helping clients realize their online vision through innovative website development, stunning 3D art, intuitive UI/UX design, and effective website refreshes.”</p>
                                        <ul className="list-unstyled list-check">
                                            <li><i className="fa fa-check" aria-hidden="true" /> Become successful &amp; superior</li>
                                            <li><i className="fa fa-check" aria-hidden="true" /> Provide quick &amp; good solution for
                                                business</li>
                                        </ul> <a href="#" className="btn"><span>SEE MORE</span></a>
                                    </div>
                                    <div className="tab-pane fade" id="vission" role="tabpanel">
                                        <p>“To provide high-quality services that not only meet, but also exceed client expectations.”</p>
                                        <ul className="list-unstyled list-check">
                                            <li><i className="fa fa-check" aria-hidden="true" /> Become successful &amp; superior</li>
                                            <li><i className="fa fa-check" aria-hidden="true" /> Provide quick &amp; good solution for
                                                business</li>
                                        </ul> <a href="#" className="btn"><span>SEE MORE</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 video-area mt-50 mt-lg-0">
                            <img src="/img/section-bg/about-feature.png" data-rjs={2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-70 section-pattern" data-bg-img="/img/section-pattern/work-process-pattern.png">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3><strong>Steps</strong></h3>
                                <h2>Work Process Our Experts Do</h2>
                                <p>After discussing with our professional team, we will send an offer letter, if the price is appropriate we can send an invoice / payment bill, then we can also make a contract agreement document if needed. After the contract is signed and the bill has been paid, we will start working according to the contract.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row process-bg" data-bg-img="/img/process_shape.png">
                        <div className="col-12">
                            <img src="/flow.jpeg" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120 section-pattern" data-bg-img="/img/section-pattern/service-pattern.png">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h3><strong>Service</strong></h3>
                                <h2>We’re Providing <br />Best Solutions <br />For Your Business</h2>
                                <p>We offer website development, 3d art, ui/ux design, website redesign, website portfolio. The design can be according to the client wishes or use a template, we will follow what the client wants.</p>
                            </div><a href="#" className="btn"><span>view All</span></a>
                        </div>
                        <div className="col-lg-6">
                            <div className="row mt-40 mt-lg-0">
                                <div className="col-sm-12 single-service-wrapper">
                                    <div className="single-service text-center">
                                        <div className="row">
                                            <div className="col">
                                                <div className="icon">
                                                    <img src="/icon.png" data-rjs={2} alt="" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="content">
                                                    <h4>Fullstack Web Development</h4>
                                                    <p> Top quality professional website development services with lower prices and quality results.</p><a href="#" className="btn-inline">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex single-service-wrapper">
                                    <div className="col-sm-6">
                                        <div className="single-service text-center">
                                            <div className="icon"> <img src="/img/icons/service-3.png" data-rjs={2} alt="" /> </div>
                                            <div className="content">
                                                <h4>UI/UX Design</h4>
                                                <p>Get professional web UI/UX design at pocket-friendly prices. The best solution for great looking websites and awesome functionality.</p><a href="#" className="btn-inline">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="single-service text-center">
                                            <div className="icon"> <img src="/img/icons/service-4.png" data-rjs={2} alt="" /> </div>
                                            <div className="content">
                                                <h4>3D Art</h4>
                                                <p> Amazing 3D artwork, affordable price! The best solution for captivating 3D art and animation displays.</p><a href="#" className="btn-inline">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-sm-6 single-service-wrapper">
                                    <div className="single-service text-center">
                                        <div className="icon"> <img src="/img/icons/service-4.png" data-rjs={2} alt="" /> </div>
                                        <div className="content">
                                            <h4>Business Campaign</h4>
                                            <p>He improve started no we manners however effects. Prospect humoured.</p><a href="#" className="btn-inline">Read More</a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-90 section-pattern" data-bg-img="/img/section-pattern/case-study-pattern.png">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3>Portofolio</h3>
                                <h2>Our Recent Portofolio</h2>
                                <p>Increase your trust in us through our diverse portfolio and achievements in various technology projects, Our Quality Proven in Every Project We Handle.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row project-items grid">
                        <div className="col-lg-6 grid-item sales business">
                            <div className="single-project-item">
                                <div className="image"> <img src="/img/portfolio/portfolio-cecel.png" data-rjs={2} alt="" /> </div>
                                <div className="project-body">
                                    <h3><a href="https://cecelajahh.com/" target="blank">Portofolio Website</a></h3>
                                    <p className="project-meta">Client:<span>Chellsy Wilian J.</span></p>
                                    <p> Website for Assiggment University.</p><a href="#" className="btn-inline">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item sales financial">
                            <div className="single-project-item">
                                <div className="image"> <img src="/img/portfolio/portfolio-nasya.png" data-rjs={2} alt="" /> </div>
                                <div className="project-body">
                                    <h3><a href="https://nasyaanggriani.com/" target="blank">Portofolio Website</a></h3>
                                    <p className="project-meta">Client:<span>Nasya Anggriani</span></p>
                                    <p> Website for Portofolio Client</p><a href="#" className="btn-inline">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item investment business">
                            <div className="single-project-item">
                                <div className="image"> <img src="/img/portfolio/portfolio-ui.png" data-rjs={2} alt="" /> </div>
                                <div className="project-body">
                                    <h3><a href="#">Design UI/UX for fashion App</a></h3>
                                    <p className="project-meta">Client:<span></span></p>
                                    <p>Apple Watch Product Design</p><a href="#" className="btn-inline">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 grid-item financial funds">
                            <div className="single-project-item">
                                <div className="image"> <img src="/img/portfolio/portfolio-3d.png" data-rjs={2} alt="" /> </div>
                                <div className="project-body">
                                    <h3><a href="https://www.artstation.com/artwork/Geq4OQ" target="blank">3D Art Animation</a></h3>
                                    <p className="project-meta">Client:<span></span></p>
                                    <p>Minerva Land</p><a href="#" className="btn-inline">Read
                                        More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-70 section-pattern" data-bg-img="/img/section-pattern/testimonial-pattern.png">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3>Team Members</h3>
                                <h2>Our Experts Team Members</h2>
                                <p>Organization Structure Of Holy Heaven IT Corp</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team-member">
                                <div className="image position-relative">
                                    <img src="/img/team/team-1.png" data-rjs={2} alt="" /> </div>
                                <div className="team-info">
                                    <div className="info-front text-center">
                                        <h4>Muhamad Ramadhan</h4>
                                        <p>CEO of Holy Heaven IT Corp</p>
                                    </div>
                                    <div className="info-back">
                                        <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">
                                            <li> <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team-member">
                                <div className="image position-relative">
                                    <img src="/img/team/team-2.png" data-rjs={2} alt="" />
                                </div>
                                <div className="team-info">
                                    <div className="info-front text-center">
                                        <h4>Viona Azzahra</h4>
                                        <p>Administration & Finance</p>
                                    </div>
                                    <div className="info-back">
                                        <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">
                                            <li> <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team-member">
                                <div className="image position-relative">
                                    <img src="/img/team/team-3.png" data-rjs={2} alt="" /> </div>
                                <div className="team-info">
                                    <div className="info-front text-center">
                                        <h4>Zaenal Abidinsyah</h4>
                                        <p>Marketing</p>
                                    </div>
                                    <div className="info-back">
                                        <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">
                                            <li> <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-team-member">
                                <div className="image position-relative">
                                    <img src="/img/team/team-4.png" data-rjs={2} alt="" /> </div>
                                <div className="team-info">
                                    <div className="info-front text-center">
                                        <h4>Aditya .N.P</h4>
                                        <p>Customer Service</p>
                                    </div>
                                    <div className="info-back">
                                        <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">
                                            <li> <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a> </li>
                                            <li> <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Main */}
        </>
    )
}

export default mainHome