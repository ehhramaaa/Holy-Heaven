
import { Row, Col, NavLink } from 'react-bootstrap';

const footer = () => {
    return (
        <div>
            {/* Footer */}
            {/* <footer className="footer bg-light section-pattern footer-bg" data-bg-img="/img/section-pattern/footer-pattern.png">
                <div className="footer-top pt-60">
                    <div className="container border-bottom">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget widget_contact_info">
                                    <div className="widget-logo"> <img src="/img/footer_logo.png" data-rjs={2} alt="" /> </div>
                                    <div className="info-content">
                                        <div className="single-info"> <span>Office Location</span>
                                            <p>173 Collins Street West victoria, Melbourne, Australia</p>
                                        </div>
                                        <div className="single-info"> <span>Business Phone</span>
                                            <p><a href="#">+0096665431</a><a href="#">+0096667331</a></p>
                                        </div>
                                        <div className="single-info"> <span>Support mail</span>
                                            <p> <a href="#">bizidea@info.com</a> <a href="#">bizidea@gmail.com</a> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="widget widget_recent_entries">
                                    <div className="widget-title">
                                        <h4>Recent Posts</h4>
                                    </div>
                                    <div className="single-post media">
                                        <div className="post-image"> <img src="/img/blog/recent-post.png" data-rjs={2} alt="" />
                                        </div>
                                        <div className="post-content media-body"> <span className="posted-on">18 Feb, 2019</span>
                                            <h5><a href="#">Funds in Institutional Portfolios</a></h5>
                                        </div>
                                    </div>
                                    <div className="single-post media">
                                        <div className="post-image"> <img src="/img/blog/recent-post.png" data-rjs={2} alt="" />
                                        </div>
                                        <div className="post-content media-body"> <span className="posted-on">18 Feb, 2019</span>
                                            <h5><a href="#">Funds in Institutional Portfolios</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="widget widget_nav_menu">
                                    <div className="widget-title">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <ul className="menu">
                                        <li><a href="#">About Company</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">Our Experts</a></li>
                                        <li><a href="#">Get Constultation</a></li>
                                        <li><a href="#">Terms &amp; Condition</a></li>
                                        <li><a href="#">Privacy policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="widget widget_newsletter">
                                    <div className="widget-title">
                                        <h4>Newsletter</h4>
                                    </div>
                                    <div className="newsletter-content">
                                        <p>Cuteness you exquisite ourselves now end forfeited. Enquire ye without it garrets
                                            himself. Interest our nor received followed was.</p>
                                        <form action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&id=f4e0e93d1d" method="post" name="mc-embedded-subscribe-form" target="_blank" className="newsletter-form">
                                            <div className="theme-input-group"> <input type="text" placeholder="Your Email" /> <button type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button> </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget widget_social_icon">
                                    <ul className="social_icon_list list-inline">
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
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="copyright-text text-center"> <span><a href="#">Holy Heaven IT Corp</a> © Copyright 2023.All rights reserved.</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <a href="#" className="back-to-top position-fixed">
                <div className="back-toop-tooltip"><span>Back To Top</span></div>
                <div className="top-arrow" />
                <div className="top-line" />
            </a> */}


            {/* Footer-Area-Start */}
            <footer className="footer-area v2 section-bg angle-2">
                <div className="productShape1">
                    <div className="productShape1inner">
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* Subscribe-Area-Start */}
                            <div className="subscribe-area v2">
                                <Row>
                                    <Col xs={3}>
                                        <NavLink className="footer-logo" href="">
                                            <img className="sticky-logo" src="/logo.png" data-rjs={2} alt="" />
                                        </NavLink>
                                        <p>Office Location</p>
                                        <p>Bandung, Indonesia</p>
                                        <p>Bussiness Phone</p>
                                        <p>+62 882-0013-77521</p>
                                        <p>Support mail</p>
                                        <p>holyheavenic@gmail.com</p>
                                    </Col>
                                    <Col xs={3}>
                                        <h5>
                                            Social Media
                                        </h5>

                                        <p>Connect with our social media</p>
                                    </Col>
                                    <Col xs={2}>
                                        <h5>
                                            Quick Links
                                        </h5>
                                        <NavLink>Our Services</NavLink>
                                        <NavLink>Our Portofolio</NavLink>
                                        <NavLink href=''>Get Constultation</NavLink>
                                    </Col>
                                    <Col xs={4}>
                                        <h5>
                                            Newsletter
                                        </h5>
                                        <p>Our team is ready to provide a quick response to any questions or requests you may have.</p>
                                        <div className="theme-input-group"> <input type="text" placeholder="Your Email" />
                                            <button type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            {/* Subscribe-Area-End */}
                        </div>
                    </div>
                </div>
                <div className="copyright-area pt-5 pb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 text-center text-white">
                                <span className="copyright">Holy Heaven IT Corp © Copyright 2023.All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer-Area-End */}
        </div>
    )
}

export default footer