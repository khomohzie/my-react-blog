import React from 'react'
import Layout from '../components/Layout'
import Background from '../assets/images/contact.jpg'
import AOS from 'aos'
import '../styles/styles.css'

const Contact = (props) => {

    AOS.init();

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundOrigin: "center", backgroundPosition: "center" }}>

            <Layout>

                <div className="container">

                    <div className="row">
                        <div className="col-lg-12 mt-5">
                            <h1 className="mt-5">Contact <i className="fa fa-envelope"></i></h1>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-8 mb-3">
                            <form method="POST" action="" encType="text/plain">
                                <fieldset className="form-group">
                                    <label>Email</label>
                                    <input type="email" className="form-control" placeholder="Enter email" />
                                    <small className="text-muted">We'll never share your email with anyone else.</small>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Name" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Message</label>
                                    <textarea className="form-control" rows="3"></textarea>
                                </fieldset>
                                <button type="submit" className="btn btn-primary" style={{background: "var(--sky)", color: "var(--midnight)"}}>Submit</button>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header" style={{background: "var(--sky)", color: "var(--midnight)"}}>
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
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Layout>

        </div>
    );

}

export default Contact;