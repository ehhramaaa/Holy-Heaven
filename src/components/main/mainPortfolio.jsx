import { Link } from "react-router-dom"

const mainPortfolio = () => {
  return (
    <div>
      <section className="page-title-bg pt-250 pb-100" data-bg-img="/img/section-pattern/page-title.png">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-title text-center">
                <h2>Projects</h2>
                <ul className="list-inline">
                  <li><a href="index-2.html">Home</a></li>
                  <li>Projects</li>
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
              <div className="section-title mb-50 mb-lg-0">
                <h3>What We’ve Done</h3>
                <h2>We Work All Over The <br />World With Company</h2>
                <p>Enjoyed minutes related on fanny dried as often me. Goodness as reserved raptures to mistaken
                  steepest oh he. Gravity he mr sixteen esteems. Mile home new way with high said. Finished
                  horrible blessing landlord dwelling dissuade if. Rent fond am he in on read. Anxious cordial
                  demands settled entered in do to colonel landlord dwelling dissuade.</p>
              </div>
            </div>
            <div className="col-lg-6"> <img src="/img/case-study-about.jpg" data-rjs={2} alt="" /> </div>
          </div>
        </div>
      </section>
      <section className="pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h3>Case Studies</h3>
                <h2>Our Recent Project</h2>
                <p>Mutual has cannot beauty indeed now sussex merely you. It possible no husbands jennings ye
                  offended packages pleasant he. Remainder recommend who applauded departure joy.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="project-nav text-center mb-30">
                <div className="nav justify-content-center align-items-center">
                  <ul className="project_filter list-inline">
                    <li className="active" data-filter="*"> <span className="filter-btn">All</span> </li>
                    <li className data-filter=".financial"> <span className="filter-btn">Financial</span> </li>
                    <li className data-filter=".business"> <span className="filter-btn">Business</span> </li>
                    <li className data-filter=".funds"> <span className="filter-btn">Funds</span> </li>
                    <li className data-filter=".investment"> <span className="filter-btn">Investment</span> </li>
                    <li className data-filter=".sales"> <span className="filter-btn">Sales</span> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row project-items grid">
            <div className="col-lg-6 grid-item sales business">
              <div className="single-project-item">
                <div className="image"> <img src="/img/project/project-1.png" data-rjs={2} alt="" /> </div>
                <div className="project-body">
                  <h3><a href="#">Business consultant finds more ways to bring business to light</a></h3>
                  <p className="project-meta">Client:<span>Alto Palermo S.A.</span></p>
                  <p>Imprudence attachment him his for sympathize. Large above be to means. Dashwood do
                    provided stronger is. But discretion frequently.</p><a href="#" className="btn-inline">Read
                      More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-item sales financial">
              <div className="single-project-item">
                <div className="image"> <img src="/img/project/project-2.png" data-rjs={2} alt="" /> </div>
                <div className="project-body">
                  <h3><a href="#">Business consultant finds more ways to bring business to light</a></h3>
                  <p className="project-meta">Client:<span>Alto Palermo S.A.</span></p>
                  <p>Imprudence attachment him his for sympathize. Large above be to means. Dashwood do
                    provided stronger is. But discretion frequently.</p><a href="#" className="btn-inline">Read
                      More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-item investment business">
              <div className="single-project-item">
                <div className="image"> <img src="/img/project/project-3.png" data-rjs={2} alt="" /> </div>
                <div className="project-body">
                  <h3><a href="#">Business consultant finds more ways to bring business to light</a></h3>
                  <p className="project-meta">Client:<span>Alto Palermo S.A.</span></p>
                  <p>Imprudence attachment him his for sympathize. Large above be to means. Dashwood do
                    provided stronger is. But discretion frequently.</p><a href="#" className="btn-inline">Read
                      More</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-item financial funds">
              <div className="single-project-item">
                <div className="image"> <img src="/img/project/project-4.png" data-rjs={2} alt="" /> </div>
                <div className="project-body">
                  <h3><a href="#">Business consultant finds more ways to bring business to light</a></h3>
                  <p className="project-meta">Client:<span>Alto Palermo S.A.</span></p>
                  <p>Imprudence attachment him his for sympathize. Large above be to means. Dashwood do
                    provided stronger is. But discretion frequently.</p><a href="#" className="btn-inline">Read
                      More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="project-load-more text-center mt-20"> <a href="#" className="btn"><span>Load More</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default mainPortfolio