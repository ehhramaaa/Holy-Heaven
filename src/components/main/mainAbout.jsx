import { Link } from "react-router-dom";

const mainAbout = () => {
    return (
        <div>
            <section className="page-title-bg pt-250 pb-100" data-bg-img="/img/section-pattern/page-title.png">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>About</h2>
                                <ul className="list-inline">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="mb-5"><strong>Who We Are</strong></h3>
                                <h4>Empowering Your Business through Expert IT Guidance
                                    Unleashing Innovation, Ensuring Security, and Driving Success in the Digital Landscape.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> <img src="/img/about-main.jpg" data-rjs={2} alt="" /> </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="about-text mt-5">
                                <p>
                                    Welcome to Holy Heaven IT Corp, where technology meets strategy to shape the future of your business. As a leading IT consulting partner, we pride ourselves on navigating the complex intersection of business and technology with precision. Our dedicated team of seasoned IT professionals brings a wealth of expertise to the table, offering tailored solutions that propel your organization forward. At Holy Heaven IT Corp, we go beyond conventional consulting — we are your strategic ally in the digital realm. From crafting innovative IT strategies to implementing robust solutions and fortifying cybersecurity measures, we are committed to transforming challenges into opportunities. Join us on this journey of technological empowerment, where every solution is crafted with your success in mind. Your digital transformation starts here, with Holy Heaven IT Corp.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120 ov-hidden">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="section-title mb-4">
                                <h3><strong>Our Mission</strong></h3>
                                <h2>Our Mission Is To Help <br />Clients To Meet Their Goal</h2>
                                <p>“To provide high-quality services that not only meet, but also exceed client expectations. We want to be responsible for helping clients build their online presence with attractive and functional designs. Through close collaboration with clients, we aim to create a unique and satisfying digital experience for end users”.</p>
                            </div>
                            <ul className="list-unstyled list-check">
                                <li><i className="fa fa-check" aria-hidden="true" /> Become successful &amp; superior</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Provide quick &amp; good solution for business
                                </li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Use opportunities to boost sales</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Planning &amp; executing projects</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 video-area mt-50 mt-lg-0">
                            <img src="/img/section-bg/about-feature.png" data-rjs={2} alt />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6"> <img src="/img/about02.jpg" data-rjs={2} className="w-100" alt="" /> </div>
                        <div className="col-lg-6">
                            <div className="section-title mb-4 mt-50 mt-lg-0">
                                <h3>Our Vision</h3>
                                <h2>Our Vision Is To Provide <br />Best Solution For Client</h2>
                                <p>“To be a leading partner in helping clients realize their online vision through innovative website development, stunning 3D art, intuitive UI/UX design, and effective website refreshes. We are committed to delivering customized design solutions, whether it's following client-specific instructions or using pre-made templates”.</p>
                            </div>
                            <ul className="list-unstyled list-check">
                                <li><i className="fa fa-check" aria-hidden="true" /> Become successful &amp; superior</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Provide quick &amp; good solution for business
                                </li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Use opportunities to boost sales</li>
                                <li><i className="fa fa-check" aria-hidden="true" /> Planning &amp; executing projects</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default mainAbout