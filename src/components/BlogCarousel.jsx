import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './BlogCarousel.css'
import Post1 from '../assets/images/blog-post/post1.png'
import Post2 from '../assets/images/blog-post/post2.png'
import Post3 from '../assets/images/blog-post/post3.png'
import Post4 from '../assets/images/blog-post/post4.jpg'

const BlogCarousel = () => {

    const responsive = {
        0: {
            items: 1
        },
        250: {
            items: 1
        },
        560: {
            items: 2
        },
        960: {
            items: 3
        }
    }

    return (
        <main>
            <section>
                <div className="blog">
                    <div className="container">
                        <OwlCarousel
                            className="owl-carousel owl-theme blog-post"
                            loop={true}
                            autoplay={true}
                            autoplayTimeout="3000"
                            nav={true}
                            navText={["<i class='fa fa-chevron-left prev'></i>","<i class='fa fa-chevron-right next'></i>"]}
                            responsive={responsive}
                        >
                            <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                <img src={Post1} alt="post1" />
                                <div className="blog-title">
                                    <h3 style={{fontSize: "1.3rem", fontWeight: "bold"}}>London Fashion week's continued the evolution</h3>
                                    <button className="btn btn-blog">Fashion</button>
                                    <span>2 minutes</span>
                                </div>
                            </div>
                            <div className="blog-content">
                                <img src={Post2} alt="post2" data-aos="flip-left" data-aos-delay="200" />
                                <div className="blog-title">
                                    <h3 style={{fontSize: "1.3rem", fontWeight: "bold"}}>Planning a vac? Explore tranquil sceneries</h3>
                                    <button className="btn btn-blog">Vacation</button>
                                    <span>2 minutes</span>
                                </div>
                            </div>
                            <div className="blog-content" data-aos="fade-left" data-aos-delay="200">
                                <img src={Post3} alt="post3" />
                                <div className="blog-title">
                                    <h3 style={{fontSize: "1.3rem", fontWeight: "bold"}}>A fan of luxurious cars?</h3>
                                    <button className="btn btn-blog">Cars</button>
                                    <span>2 minutes</span>
                                </div>
                            </div>
                            <div className="blog-content" data-aos="fade-right" data-aos-delay="200">
                                <img src={Post4} alt="post4" />
                                <div className="blog-title">
                                    <h3 style={{fontSize: "1.3rem", fontWeight: "bold"}}>Having fun with friends</h3>
                                    <button className="btn btn-blog">Fun</button>
                                    <span>2 minutes</span>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default BlogCarousel
