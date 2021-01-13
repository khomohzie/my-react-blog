import React from 'react'
import Layout from '../components/Layout'
import AOS from 'aos'
import Img from '../assets/images/about.jpg'
import SocialConnect from '../components/SocialConnect'

const About = () => {

    AOS.init();

    return (
        <div style={{ background: "lightGray" }}>

            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col mt-5">
                            <div className="text-center">
                                <h1 className="mt-5">Welcome</h1>
                                <p>We are Let's blog, an online community of bloggers.</p>
                            </div>
                        </div>
                    </div>

                    <SocialConnect />

                    <img src={Img} style={{ width: "100%", height: "400px" }} alt="blogger" />

                    <div className="row">
                        <div className="col">
                            <p className="mt-3 about-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ad enim voluptates vel nulla error et suscipit tenetur, quidem nesciunt cumque dolorum voluptatibus eaque totam saepe, deserunt nihil explicabo laborum.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-header" style={{ background: "var(--sky)", color: "var(--midnight)" }}>
                                    Address &amp; Phone <i className="fa fa-address-card" aria-hidden="true"></i>
                                </div>
                                <div className="card-block card-body">
                                    <ul className="list-unstyled">
                                        <li>Mike Smith</li>
                                        <li>1234 Street Name</li>
                                        <li>Vancouver, BC</li>
                                        <li>Canada V7V 1V1</li>
                                        <li>604.123.1234</li>
                                    </ul>
                                    <p>Connect on social media</p>
                                    <div className="connect">
                                        <i className="fa fa-facebook-f"></i>
                                        <i className="fa fa-twitter"></i>
                                        <i className="fa fa-instagram"></i>
                                        <i className="fa fa-youtube"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 mb-3">
                            <img src="https://usa.kaspersky.com/content/en-us/images/repository/isc/family-blog.jpg" style={{width: "100%", height: "293px"}} alt="aboutblog"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">

                    </div>
                </div>
            </Layout>

        </div >
    )
}

export default About