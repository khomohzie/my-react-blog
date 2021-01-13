import React, { useState } from 'react'
import './LargeNav.css'
import '../../styles/styles.css'
import Logo from '../../assets/images/logo.svg'

const LargeNav = ({ sticky }) => {

    // changing the color of the dropdown navbar on mobile devices
    const [mobileBg, setMobileBg] = useState(false)

    const changeBg = () => {
        if (!mobileBg) {
            setMobileBg(true)
        }
        else {
            setMobileBg(false)
        }
    }

    return (
        <nav className={sticky ? "navbar navbar-expand-sm flex-wrap navbar-sticky" : "navbar navbar-expand-sm flex-wrap"}>
            {sticky ? <img src={Logo} alt="logo" className="navbar-logo" /> : null}
            <a className="navbar-brand" href="/">Let's Blog</a>

            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#Navbar" onClick={changeBg}>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="Navbar" style={mobileBg ? {backgroundColor: "currentcolor"} : null}>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/"><span className="fa fa-home fa-lg"></span><span className="nav-text"> Home</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><span className="fa fa-info fa-lg"></span><span className="nav-text"> About</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact"><span className="fa fa-address-card fa-lg"></span><span className="nav-text"> Contact</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create"><i className="fa fa-pencil" aria-hidden="true"></i><span className="nav-text"> Write</span></a>
                    </li>
                </ul>

                <span className="navbar-text">
                    <a className="nav-link" href="/signup">
                        <span className="fa fa-user-plus"></span><span className="nav-text"> Sign up</span>
                    </a>
                </span>
                <span className="navbar-text">
                    <a className="nav-link" href="/login">
                        <span className="fa fa-sign-in"></span><span className="nav-text"> Login</span>
                    </a>
                </span>
            </div>
        </nav>
    )
}

export default LargeNav
