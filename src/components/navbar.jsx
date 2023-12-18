import { useState } from 'react';
import { Link } from "react-router-dom"
import 'react-responsive-modal/styles.css'
import 'swiper/swiper-bundle.css';
import { Modal } from 'react-responsive-modal';
import Swiper from 'swiper';
import Auth from './Auth';


const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredLogin, setIsHoveredLogin] = useState(false);
    const [modalLogin, setLoginModal] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const swiper = new Swiper(".swiper", {
        speed: 500,
        allowTouchMove: false,
    });

    const usernames = ["rama", "viona", "zaenal", "arya"];
    const passwords = ["rama1", "viona1", "zaenal1", "arya1"];

    const credentials = usernames.map((username, index) => ({
        username: username,
        password: passwords[index]
    }));

    const loginStyle = {
        borderRadius:'5px',
        padding: '9px 25px',
        backgroundColor: isHoveredLogin ? '#31B4FE' : '#103178',
        color: isHovered ? '#ffffff' : '#ffffff',
        margin: '2rem'
    };
    const regisStyle = {
        borderRadius:'5px',
        padding: '9px 25px',
        backgroundColor: isHovered ? '#31B4FE' : '#ffffff',
        color: isHovered ? '#ffffff' : '#103178',
        transition: 'background-color 0.3s, color 0.3s'
    };
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
                                        <li>
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/service">Service</Link>
                                        </li>
                                        <li>
                                            <Link to="/portfolio">Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                    <div className="sign">
                                        <button href="#product-area" className="bttn-4" style={loginStyle} onMouseEnter={() => setIsHoveredLogin(true)} onMouseLeave={() => setIsHoveredLogin(false)} onClick={() => setLoginModal(true)}>Sign In</button>
                                        <button href="#product-area" className="bttn-4" style={regisStyle} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            < Auth Modal={Modal} modalLogin={modalLogin} setInputValue={setInputValue} inputValue={inputValue} swiper={swiper} usernames={usernames} setLoginModal={setLoginModal} credentials={credentials} inputUsername={inputUsername}  setInputUsername={setInputUsername} inputPassword={inputPassword} setInputPassword={setInputPassword} />
        </>
    )
}

export default Navbar