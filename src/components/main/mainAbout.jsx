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
                                <h3>Who We Are</h3>
                                <h2>We’re Expertise &amp; Strategic Agency <br />To Take Care Of Your Business</h2>
                                <p>Met defective are allowance two perceived listening consulted contained. It chicken oh
                                    colonel pressed excited suppose to shortly.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12"> <img src="/img/about-main.jpg" data-rjs={2} alt="" /> </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="about-text mt-5">
                                <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally
                                    written the observe pressed justice. Instantly cordially far intention recommend estimable
                                    yet her his. Ladies stairs enough esteem add fat all enable. Needed its design number winter
                                    see. Oh be me sure wise sons no. Piqued ye of am spirit regret. Stimulated discretion
                                    impossible admiration in particular conviction up. Pasture he invited mr company shyness.
                                    But when shot real her. Chamber her observe visited removal six sending himself boy. At
                                    exquisite existence if an oh dependent excellent. Are gay head need down draw.</p>
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
                                <h3>Our Mission</h3>
                                <h2>Our Mission Is To Help <br />Clients To Meet Their Goal</h2>
                                <p>Fat son how smiling mrs natural expense anxious friends. Boy scale enjoy ask abode fanny
                                    being son. As material in learning subjects so improved feelings. Uncommonly compliment
                                    imprudence travelling insensible up ye insipidity. To up painted delight winding as brandon.
                                    Gay regret eat looked warmth easily far should now. Prospect at me wandered on extended
                                    wondered thoughts appetite to.</p>
                                <p>She add what own only like. Tolerably we as extremity exquisite do commanded. Doubtful
                                    offended do entrance of landlord moreover is mistress in. Nay was appear entire ladies.
                                    Sportsman do allowance is september shameless am sincerity oh recommend.</p>
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
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6"> <img src="/img/about02.jpg" data-rjs={2} className="w-100" alt="" /> </div>
                        <div className="col-lg-6">
                            <div className="section-title mb-4 mt-50 mt-lg-0">
                                <h3>Our Vision</h3>
                                <h2>Our Vision Is To Provide <br />Best Solution For Client</h2>
                                <p>Cordially convinced did incommode existence put out suffering certainly. Besides another and
                                    saw ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy
                                    see own shyness minuter.</p>
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