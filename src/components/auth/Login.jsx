
import { Modal } from 'react-responsive-modal';
import { useState } from 'react';
import Swal from 'sweetalert2'

const Login = ({ modalLogin, setLoginModal }) => {
    const [inputValue, setInputValue] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const checkValid = (event) => {
        event.target.nextElementSibling.disabled = !event.target.value.length;
        if (event.target.type === 'email') {
            setInputEmail(event.target.value);
        } else if (event.target.type === 'password') {
            setInputPassword(event.target.value);
        }
    };

    const handleDisable = inputValue.length === 0;

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4444/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: inputEmail,
                    password: inputPassword
                })
            });

            if (response.status === 200) {
                return setLoginModal(false), Swal.fire({
                    position: "top-mid",
                    icon: "success",
                    title: "Successfully Login",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                return setLoginModal(false), Swal.fire({
                    position: "top-mid",
                    icon: "error",
                    title: "Failed Login!! Please Check Credentials",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        } catch (error) {
            console.error('Login error:', error);
        }
    };


    const closeIconModal = (
        <img src="/public/x.svg" alt="Slide 1" style={{ width: '30px' }} />
    );
    return (
        <div>
            <Modal
                open={modalLogin}
                onClose={() => [setLoginModal(false), setInputValue('')]}
                center
                closeIcon={closeIconModal}
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',
                }}
            >
                <div className="authCard">
                    <div className="swiper-slide">
                        <img src="/favicon.png" alt="Slide 1" />
                        <h2>Welcome</h2>
                        <h3>Enter your account</h3>
                        <form onSubmit={handleLogin}>
                            <input spellCheck="false" onInput={checkValid} type="email" placeholder="e.g. johnsmith" className="control" name="email" />
                            <div id="spinner" className="spinner"></div>

                            <input onInput={checkValid} type="password" id="password" placeholder="Your password" name='password' />

                            <button disabled={handleDisable} type="submit" style={{ marginTop: '2rem' }}>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
                <div className="swiper-pagination" />
            </Modal >
        </div>
    )
}

export default Login