const navbar = () => {
    return (
        <>
            <header className="header fixed-top">
                <div className="fixed-top header-main style--one">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-sm-4 col-8">
                                <div className="logo"> <a href="index-2.html"> <img className="default-logo" src="/logo.png" data-rjs={2} alt="" /> <img className="sticky-logo" src="/logo.png" data-rjs={2} alt="" /> </a> </div>
                            </div>
                            <div className="col-lg-9 col-sm-8 col-4">
                                <div className="main-menu d-flex align-items-center justify-content-end">
                                    <ul className="nav align-items-center">
                                        {/* <li className="menu-item-has-children"> <a href="#">Home</a>
                                        <ul className="sub-menu">
                                            <li><a href="index-2.html">Landing Page</a></li>
                                            <li><a href="home-1.html">home v1</a></li>
                                            <li><a href="home-2.html">home v2</a></li>
                                        </ul>
                                    </li> */}
                                        {/* <li className="menu-item-has-children"> <a href="#">Services</a>
                                        <ul className="sub-menu">
                                            <li><a href="service.html">service v1</a></li>
                                            <li><a href="service-two.html">service v2</a></li>
                                            <li><a href="service-details.html">service details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"> <a href="#">Project</a>
                                        <ul className="sub-menu">
                                            <li><a href="projects.html">Projects</a></li>
                                            <li><a href="project-details.html">project details</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"> <a href="#">Pages</a>
                                        <ul className="sub-menu">
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="coming-soon.html">Coming Soon</a></li>
                                            <li><a href="404.html">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="current-menu-parent menu-item-has-children"> <a href="#">Blog</a>
                                        <ul className="sub-menu">
                                            <li className="current-menu-item"><a href="blog.html">Blog Default</a></li>
                                            <li><a href="blog-single-column.html">Blog Single Colunm</a></li>
                                            <li><a href="blog-two-column.html">Blog two Colunm</a></li>
                                            <li><a href="blog-with-sidebar.html">Blog with Sidebar</a></li>
                                            <li><a href="blog-details.html">blog details</a></li>
                                        </ul>
                                    </li> */}
                                        <li><a href="">Home</a></li>
                                        <li><a href="#">Contact</a></li>
                                    </ul>
                                    <span className="offcanvas-trigger text-right d-none d-lg-block">
                                        <span /> <span />
                                        <span /> </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default navbar