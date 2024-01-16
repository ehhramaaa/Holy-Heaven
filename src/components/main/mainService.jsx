import { Link } from "react-router-dom"

const mainService = () => {
  return (
    <div>
      <section className="page-title-bg pt-250 pb-100" data-bg-img="/img/section-pattern/page-title.png">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Services</h2>
                <ul className="list-inline">
                  <li><Link to="/">Home</Link></li>
                  <li>Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title mb-4">
                <h3><strong>What we offer</strong></h3>
                <h2>Edge Innovation Fullstack Development, 3D Art and UI/UX Design</h2>
                <p>Offers a complete solution with a team of skilled fullstack developers, 3D art that creates extraordinary visuals, and interface design (UI/UX) that ensures an unforgettable user experience. Transform your ideas into reality with our comprehensive expertise in app development, digital art, and responsive user design.</p>
              </div>
              <ul className="list-unstyled list-check">
                <li><i className="fa fa-check" aria-hidden="true" /> Professional Full Stack Development</li>
                <li><i className="fa fa-check" aria-hidden="true" /> Classy 3D Art, Best UI/UX Design</li>
                <li><i className="fa fa-check" aria-hidden="true" /> Modern Technology, Dynamic Visuals, Superior UX</li>
              </ul>
            </div>
            <div className="col-lg-6 mt-50 mt-lg-0"> <img src="/img/serviec-1.jpg" data-rjs={2} alt="" /> </div>
          </div>
        </div>
      </section>
      <section className="pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3><strong>Service</strong></h3>
                <h2>Unlimited Digital Creativity<br />Bring Your Digital Vision to Life With Us!</h2>
                <p>We offer website development, 3d art, ui/ux design, website redesign, website portfolio. The design can be according to the client wishes or use a template, we will follow what the client wants.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/icon.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>Fullstack Web Development</h4>
                  <p> Top quality professional website development services with lower prices and quality results.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/img/icons/service-3.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>UI/UX Design</h4>
                  <p>Get professional web UI/UX design at pocket-friendly prices. The best solution for great looking websites and awesome functionality</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/img/icons/service-4.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>3D Art</h4>
                  <p> Amazing 3D artwork, affordable price! The best solution for captivating 3D art and animation displays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-120 pb-120 section-pattern" data-bg-img="/img/section-pattern/price-pattern.png">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3><strong>Pricing</strong></h3>
                <h2>Choose Your Best Plan</h2>
                <p>We offer different types of prices to suit client needs. </p>
              </div>
            </div>
          </div>
          <div className="pricing-navtab">
            <ul className="row nav nav-tabs justify-content-center" role="tablist">
              <li className="nav-item col-lg-3 col-sm-6"> <a href="#personal" className="nav-link text-center active" data-toggle="tab" role="tab">
                <h4 className="m-0 p-0"><strong>Web Developer</strong></h4>
                <p className="mt-0"><strong>Start From</strong></p>
                <h2>$50</h2>
              </a> </li>
              <li className="nav-item col-lg-3 col-sm-6"> <a href="#startup" className="nav-link text-center" data-toggle="tab" role="tab">
                <h4 className="m-0 p-0"><strong>UI/UX</strong></h4>
                <p className="mt-0"><strong>Start From</strong></p>
                <h2>$30</h2>
              </a> </li>
              <li className="nav-item col-lg-3 col-sm-6"> <a href="#business" className="nav-link text-center" data-toggle="tab" role="tab">
                <h4 className="m-0 p-0"><strong>3D Art</strong> </h4>
                <p className="mt-0"><strong>Start From</strong></p>
                <h2>$50</h2>
              </a> </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fadeInUp animated show active" id="personal" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tab-pane-text">
                      <h3>What’s included in this package</h3>
                      <ul className="list-unstyled list-check">
                        <li><i className="fa fa-check" aria-hidden="true" /> Attractive and responsive user interface. </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Optimal UI/UX design implementation. </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Development of a reliable and efficient server system. </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Database management </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> External services via (API).</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Technical support to resolve issues. </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-pane-text mt-50 mt-lg-0">
                      <p>Our experts follow the business strategy to grow up your business and engage more
                        customers to your door.</p>
                      <a href="#" className="btn"><span>purchase</span></a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pake Looping */}
              <div className="tab-pane fadeInUp animated" id="startup" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tab-pane-text">
                      <h3>What’s included in this package</h3>
                      <ul className="list-unstyled list-check">
                        <li><i className="fa fa-check" aria-hidden="true" /> User-Centric Interface Design </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Wireframing and Prototyping</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Responsive Design </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> User Persona Development </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Usability Testing</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Visual Design and Branding</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-pane-text mt-50 mt-lg-0">
                      <p>Our experts follow the business strategy to grow up your business and engage more
                        customers to your door. </p>
                      <a href="#" className="btn"><span>purchase</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fadeInUp animated" id="business" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tab-pane-text">
                      <h3>What’s included in this package</h3>
                      <ul className="list-unstyled list-check">
                        <li><i className="fa fa-check" aria-hidden="true" /> Custom 3D Modeling </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Texturing and Shading</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> High-Quality Rendering </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Animation Services </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Rigging and Character Design</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> 3D Visualization Consultation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-pane-text mt-50 mt-lg-0">
                      <h3>Business approach -</h3>
                      <p>Our experts follow the business strategy to grow up your business and engage more
                        customers to your door. </p>
                      <a href="#" className="btn"><span>purchase</span></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Looping */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default mainService