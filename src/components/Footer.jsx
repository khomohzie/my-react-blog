import React from 'react'
import './Footer.css'

import img1 from '../assets/images/template/thumb-card3.png'
import img2 from '../assets/images/template/thumb-card4.png'
import img3 from '../assets/images/template/thumb-card5.png'
import img4 from '../assets/images/template/thumb-card6.png'
import img5 from '../assets/images/template/thumb-card7.png'
import img6 from '../assets/images/template/thumb-card8.png'

const Footer = () => {

    const scrollTop = () =>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="about-us" data-aos="fade-right" data-aos-delay="200">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis iure, autem nulla tenetur repellendus.</p>
                </div>

                <div className="contact" data-aos="fade-right" data-aos-delay="200">
                    <h2>Contact</h2>
                    <p>Have a complaint or want to speak with me?</p>
                    <div className="form-element">
                        <input type="text" placeholder="Email" /><span><i className="fa fa-chevron-right"></i></span>
                    </div>
                </div>

                <div className="template" data-aos="fade-left" data-aos-delay="200">
                    <h2>Templates</h2>
                    <p>Get beautiful templates for your post</p>
                    <div className="flex-row">
                        <img src={img1} alt="image1" />
                        <img src={img2} alt="image2" />
                        <img src={img3} alt="image3" />
                    </div>
                    <div className="flex-row">
                        <img src={img4} alt="image4" />
                        <img src={img5} alt="image5" />
                        <img src={img6} alt="image6" />
                    </div>
                </div>

                <div className="follow" data-aos="fade-left" data-aos-delay="200">
                    <h2>Social platforms</h2>
                    <p>Connect on social media</p>
                    <div>
                        <i className="fa fa-facebook-f"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-youtube"></i>
                    </div>
                </div>
            </div>

            <div className="rights flex-row">
                <h4 className="text-gray">
                    Copyright ©2021 All rights reserved | Let's Blog
                </h4>
            </div>
            <div className="move-up">
                <span onClick={scrollTop}><i className="fa fa-arrow-circle-up fa-2x"></i></span>
            </div>
        </footer>
    )
}

export default Footer
