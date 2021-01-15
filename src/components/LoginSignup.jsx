import React, { useState } from 'react'
import './LoginSignup.css'
import { signin, signInWithGoogle, signInWithGithub, signInWithFacebook } from '../helpers/auth'
import { signup } from '../helpers/auth'

import Loginsvg from '../assets/images/welcome.svg'
import Registersvg from '../assets/images/signup.svg'

const LoginSignup = () => {

    const [style, setStyle] = useState(false);

    const [error, setError] = useState(null);
    const [login, setLogin] = useState([]);

    const [signerror, setSignerror] = useState(null);
    const [register, setRegister] = useState([]);

    const changeMode = (e) => {
        e.preventDefault();

        setStyle(!style);
    }

    const handleLoginChange = (event) => {
        event.preventDefault();

        setLogin({
            ...login, [event.target.name]: event.target.value
        })
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        setError("");

        try {
            await signin(login.email, login.password);
        }
        catch (error) {
            setError(error.message);
        }
    }

    const handleSignupChange = (event) => {
        event.preventDefault();

        setRegister({
            ...register, [event.target.name]: event.target.value
        })
    }

    const handleSignup = async (event) => {
        event.preventDefault();

        setSignerror("");

        try {
            await signup(register.email, register.password);
        }
        catch (error) {
            setSignerror(error.message);
        }
    }

    const googleSignIn = async () => {
        try {
            await signInWithGoogle();
        }
        catch (error) {
            setError(error.message);
        }
    }

    const githubSignIn = async () => {
        try {
            await signInWithGithub();
        }
        catch (error) {
            setError(error.message);
        }
    }

    const facebookSignIn = async () => {
        try {
            await signInWithFacebook();
        }
        catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <div className={style ? "sign-container sign-up-mode" : "sign-container"}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleLogin} className="sign-in-form this-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="email" name="email" onChange={handleLoginChange} value={login.email || ""} placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" name="password" onChange={handleLoginChange} value={login.password || ""} placeholder="Password" />
                            </div>

                            {error ? <p>{error}</p> : null}

                            <input type="submit" value="Login" className="sign-btn solid" />

                            <p className="social-text">
                                Or Sign in with social platforms
                            </p>
                            <div className="social-media">
                                <button className="social-icon" onClick={googleSignIn}>
                                    <i className="fa fa-google"></i>
                                </button>
                                <button className="social-icon">
                                    <i className="fa fa-facebook-f" onClick={facebookSignIn}></i>
                                </button>
                                <button className="social-icon">
                                    <i className="fa fa-twitter"></i>
                                </button>
                                <button className="social-icon" onClick={githubSignIn} title="Github">
                                    <i className="fa fa-github"></i>
                                </button>
                            </div>
                        </form>

                        <form onSubmit={handleSignup} className="sign-up-form this-form">
                            <h2 className="title">Sign up</h2>
                            {/* <div className="input-field">
                                <i className="fa fa-user"></i>
                                <input type="text" placeholder="Username" />
                            </div> */}
                            <div className="input-field">
                                <i className="fa fa-envelope"></i>
                                <input type="email" name="email" onChange={handleSignupChange} value={register.email || ""} placeholder="Email" />
                            </div>
                            <div className="input-field">
                                <i className="fa fa-lock"></i>
                                <input type="password" name="password" onChange={handleSignupChange} value={register.password || ""} placeholder="Password" />
                            </div>

                            {signerror ? (<p>{signerror}</p>) : null}

                            <input type="submit" value="Sign up" className="sign-btn solid" />

                            <p className="social-text">
                                Or Sign up with social platforms
                        </p>
                            <div className="social-media">
                                <button className="social-icon" onClick={googleSignIn}>
                                    <i className="fa fa-google"></i>
                                </button>
                                <button className="social-icon">
                                    <i className="fa fa-facebook-f" onClick={facebookSignIn}></i>
                                </button>
                                <button className="social-icon">
                                    <i className="fa fa-twitter"></i>
                                </button>
                                <button className="social-icon" onClick={githubSignIn} title="Github">
                                    <i className="fa fa-github"></i>
                                </button>
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
