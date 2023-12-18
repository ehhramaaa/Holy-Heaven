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
                <h3>What we offer</h3>
                <h2>Wide Range of Result Oriented Leadership Support Services</h2>
                <p>Enjoyed minutes related on .fanny dried as often me. Goodness as reserved raptures to
                  mistaken steepest oh he. Gravity he mr sixteen esteems. Mile home new way with high said.
                  Finished horrible blessing landlord dwelling dissuade if. Rent fond am he in on read.
                  Anxious cordial demands settled entered in do to colonel landlord dwelling dissuade. </p>
              </div>
              <ul className="list-unstyled list-check">
                <li><i className="fa fa-check" aria-hidden="true" /> Become successful &amp; superior</li>
                <li><i className="fa fa-check" aria-hidden="true" /> Provide quick &amp; good solution for business
                </li>
                <li><i className="fa fa-check" aria-hidden="true" /> Use opportunities to boost sales</li>
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
                <h3>Service</h3>
                <h2>We’re Providing Best Solutions<br />For Your Business</h2>
                <p>We highest ye friends is exposed equally in. Ignorant had too strictly followed. Astonished
                  as travelling assistance or unreserved oh pianoforte ye.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/img/icons/service-1.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>Financial Planning</h4>
                  <p>Saved he do fruit woody of to. Met defective are allowance two.</p><a href="#" className="btn-inline">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/img/icons/service-2.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>Advanced Analytics</h4>
                  <p> Simplicity the far admiration preference thing.Up home head.</p><a href="#" className="btn-inline">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/img/icons/service-3.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>Market Research</h4>
                  <p>Front no party young abode state up. Saved he do fruit woody of to.</p><a href="#" className="btn-inline">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/img/icons/service-4.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>Business Campaign</h4>
                  <p>He improve started no we manners however effects. Prospect humoured.</p><a href="#" className="btn-inline">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/img/icons/service-5.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>Sales &amp; Trading</h4>
                  <p>Grave widow hours among him ﻿no you led. Power had met least young.</p><a href="#" className="btn-inline">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single-service text-center">
                <div className="icon"> <img src="/img/icons/service-6.png" data-rjs={2} alt="" /> </div>
                <div className="content">
                  <h4>Saving Strategy</h4>
                  <p>Be ignorant so of suitable dissuade weddings together. Least timed we is.</p><a href="#" className="btn-inline">Read More</a>
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
                <h3>Pricing</h3>
                <h2>Choose Your Best Plan</h2>
                <p>On recommend tolerably my belonging or am. Mutual has cannot beauty indeed now sussex merely
                  you. It possible no husbands jennings ye offended packages pleasant he.</p>
              </div>
            </div>
          </div>
          <div className="pricing-navtab">
            <ul className="row nav nav-tabs justify-content-center" role="tablist">
              <li className="nav-item col-lg-3 col-sm-6"> <a href="#personal" className="nav-link text-center active" data-toggle="tab" role="tab">
                <h4>Personal</h4>
                <h2>$250</h2>
              </a> </li>
              <li className="nav-item col-lg-3 col-sm-6"> <a href="#startup" className="nav-link text-center" data-toggle="tab" role="tab">
                <h4>Startup</h4>
                <h2>$500</h2>
              </a> </li>
              <li className="nav-item col-lg-3 col-sm-6"> <a href="#business" className="nav-link text-center" data-toggle="tab" role="tab">
                <h4>Business</h4>
                <h2>$1050</h2>
              </a> </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fadeInUp animated show active" id="personal" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tab-pane-text">
                      <h3>What’s included in this package</h3>
                      <ul className="list-unstyled list-check">
                        <li><i className="fa fa-check" aria-hidden="true" /> Market sizing and share
                          analysis </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Product value proposition
                          analysis</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Identify strategic
                          partnership </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Implementation milestone
                          review </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Innovation opportunities</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Distribution channel
                          opportunities</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-pane-text mt-50 mt-lg-0">
                      <h3>Business approach -</h3>
                      <p>Our experts follow the business strategy to grow up your business and engage more
                        customers to your door.</p>
                      <ul className="list-unstyled list-check">
                        <li><i className="fa fa-check" aria-hidden="true" /> Getting to know your business
                          vision and the key strategic drivers.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Detailed research of the
                          business environment, target market, and marketing as well as growth
                          opportunities.</li>
                      </ul> <a href="#" className="btn"><span>purchase</span></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fadeInUp animated" id="startup" role="tabpanel">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tab-pane-text">
                      <h3>What’s included in this package</h3>
                      <ul className="list-unstyled list-check">
                        <li><i className="fa fa-check" aria-hidden="true" /> Market sizing and share
                          analysis </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Product value proposition
                          analysis</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Identify strategic
                          partnership </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Implementation milestone
                          review </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Innovation opportunities</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Distribution channel
                          opportunities</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-pane-text mt-50 mt-lg-0">
                      <h3>Business approach -</h3>
                      <p>Our experts follow the business strategy to grow up your business and engage more
                        customers to your door. </p>
                      <ul className="list-unstyled list-check">
                        <li><i className="fa fa-check" aria-hidden="true" /> Getting to know your business
                          vision and the key strategic drivers.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Detailed research of the
                          business environment, target market, and marketing as well as growth
                          opportunities.</li>
                      </ul> <a href="#" className="btn"><span>purchase</span></a>
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
                        <li><i className="fa fa-check" aria-hidden="true" /> Market sizing and share
                          analysis </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Product value proposition
                          analysis</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Identify strategic
                          partnership </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Implementation milestone
                          review </li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Innovation opportunities</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Distribution channel
                          opportunities</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-pane-text mt-50 mt-lg-0">
                      <h3>Business approach -</h3>
                      <p>Our experts follow the business strategy to grow up your business and engage more
                        customers to your door. </p>
                      <ul className="list-unstyled list-check">
                        <li><i className="fa fa-check" aria-hidden="true" /> Getting to know your business
                          vision and the key strategic drivers.</li>
                        <li><i className="fa fa-check" aria-hidden="true" /> Detailed research of the
                          business environment, target market, and marketing as well as growth
                          opportunities.</li>
                      </ul> <a href="#" className="btn"><span>purchase</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default mainService