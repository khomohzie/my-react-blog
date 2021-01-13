import React, { useState } from 'react'
import './LoginSignup.css'
import Loginsvg from '../assets/images/welcome.svg'
import Registersvg from '../assets/images/signup.svg'

const LoginSignup = () => {

    const [style, setStyle] = useState(false);

    const changeMode = (e) => {
        e.preventDefault();

        setStyle(!style);
    }

    return (
        <div>
            <div className={style ? "sign-container sign-up-mode" : "sign-container"}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form this-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Login" className="sign-btn solid" />

                            <p className="social-text">
                                Or Sign in with social platforms
                        </p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </form>

                        <form action="" className="sign-up-form this-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-field">
                                <i className="fa fa-envelope"></i>
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <input type="submit" value="Sign up" className="sign-btn solid" />

                            <p className="social-text">
                                Or Sign up with social platforms
                        </p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fa fa-facebook-f"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, iste.</p>

                            <button className="btn transparent" id="sign-up-btn" onClick={changeMode}>Sign up</button>
                        </div>

                        <img src={Loginsvg} className="image" alt="login" />
                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us?</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, iste.</p>

                            <button className="btn transparent" id="sign-in-btn" onClick={changeMode}>Sign in</button>
                        </div>

                        <img src={Registersvg} className="image" alt="register" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
