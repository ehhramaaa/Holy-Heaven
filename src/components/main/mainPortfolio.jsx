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
                  <li><Link to="/">Home</Link></li>
                  <li>Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-120">
        <div className="container">
          {/* <div className="row">
            <div className="col-12">
              <div className="project-nav text-center mb-30">
                <div className="nav justify-content-center align-items-center">
                  <ul className="project_filter list-inline">
                    <li className="active" data-filter="*"> <span className="filter-btn">All</span> </li>
                    <li className data-filter=".web"> <span className="filter-btn">Website</span> </li>
                    <li className data-filter=".ui"> <span className="filter-btn">UI/UX</span> </li>
                    <li className data-filter=".3d"> <span className="filter-btn">3D Art</span> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          {/* TODO Pake Looping */}
          <div className="row project-items grid">
            <div className="col-lg-6 grid-item sales web">
              <div className="single-project-item">
                <div className="image"> <img src="/img/portfolio/portfolio-cecel.png" data-rjs={2} alt="" /> </div>
                <div className="project-body">
                  <h3><a href="https://cecelajahh.com/" target="blank">Portofolio Website</a></h3>
                  <p className="project-meta">Client:<span>Chellsy Wilian J.</span></p>
                  <p> Website for Assiggment University.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-item sales web">
              <div className="single-project-item">
                <div className="image"> <img src="/img/portfolio/portfolio-nasya.png" data-rjs={2} alt="" /> </div>
                <div className="project-body">
                  <h3><a href="https://nasyaanggriani.com/" target="blank">Portofolio Website</a></h3>
                  <p className="project-meta">Client:<span>Nasya Anggriani</span></p>
                  <p> Website for Portofolio Client</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-item investment ui">
              <div className="single-project-item">
                <div className="image"> <img src="/img/portfolio/portfolio-ui.png" data-rjs={2} alt="" /> </div>
                <div className="project-body">
                  <h3><a href="#">Design UI/UX for fashion App</a></h3>
                  <p className="project-meta">Client:<span></span></p>
                  <p>Apple Watch Product Design</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-item financial 3d">
              <div className="single-project-item">
                <div className="image"> <img src="/img/portfolio/portfolio-3d.png" data-rjs={2} alt="" /> </div>
                <div className="project-body">
                  <h3><a href="https://www.artstation.com/artwork/Geq4OQ" target="blank">3D Art Animation</a></h3>
                  <p className="project-meta">Client:<span></span></p>
                  <p>Minerva Land</p>
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