import React from 'react'
import './SiteContent.css'

import Blog1 from '../assets/images/blog-post/blog1.png'
import Blog2 from '../assets/images/blog-post/blog2.png'
import Blog3 from '../assets/images/blog-post/blog3.png'
import Blog4 from '../assets/images/blog-post/blog4.png'
import Post1 from '../assets/images/popular-post/m-blog-1.jpg'
import Post2 from '../assets/images/popular-post/m-blog-2.jpg'
import Post3 from '../assets/images/popular-post/m-blog-3.jpg'
import Post4 from '../assets/images/popular-post/m-blog-4.jpg'
import Post5 from '../assets/images/popular-post/m-blog-5.jpg'

const SiteContent = () => {
    return (
        <div>
            <main>
                <section className="container">
                    <div className="site-content">
                        <div className="posts">
                            <div className="post-content" data-aos="flip-left" data-aos-delay="200">
                                <div className="post-image">
                                    <div>
                                        <img src={Blog1} className="img" alt="blog1" />
                                    </div>
                                    <div className="post-info flex-row">
                                        <span><i className="fa fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                        <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 21, 2020</span>
                                        <span>2 Comments</span>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <a href="/">Why should boys have all the fun? It's the women who are making India an alcohol-loving country</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestiae laborum deleniti officiis illo iure blanditiis ipsa tempora iste expedita adipisci quasi quisquam, consequuntur aspernatur quam eos explicabo libero earum natus repudiandae id praesentium sed vel minima. Nisi, veniam officiis.</p>
                                    <button className="btn post-btn">Read More &nbsp; <i className="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <hr />
                            <div className="post-content" data-aos="flip-left" data-aos-delay="200">
                                <div className="post-image">
                                    <div>
                                        <img src={Blog2} className="img" alt="blog1" />
                                    </div>
                                    <div className="post-info flex-row">
                                        <span><i className="fa fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                        <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 23, 2020</span>
                                        <span>7 Comments</span>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <a href="/">Why should boys have all the fun? It's the women who are making India an alcohol-loving country</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestiae laborum deleniti officiis illo iure blanditiis ipsa tempora iste expedita adipisci quasi quisquam, consequuntur aspernatur quam eos explicabo libero earum natus repudiandae id praesentium sed vel minima. Nisi, veniam officiis.</p>
                                    <button className="btn post-btn">Read More &nbsp; <i className="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <hr />
                            <div className="post-content" data-aos="flip-left" data-aos-delay="200">
                                <div className="post-image">
                                    <div>
                                        <img src={Blog3} className="img" alt="blog1" />
                                    </div>
                                    <div className="post-info flex-row">
                                        <span><i className="fa fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                        <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 25, 2020</span>
                                        <span>5 Comments</span>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <a href="/">New data recording system to better analyse road accidents</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestiae laborum deleniti officiis illo iure blanditiis ipsa tempora iste expedita adipisci quasi quisquam, consequuntur aspernatur quam eos explicabo libero earum natus repudiandae id praesentium sed vel minima. Nisi, veniam officiis.</p>
                                    <button className="btn post-btn">Read More &nbsp; <i className="fa fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <hr />
                            <div className="post-content" data-aos="flip-left" data-aos-delay="200">
                                <div className="post-image">
                                    <div>
                                        <img src={Blog4} className="img" alt="blog1" />
                                    </div>
                                    <div className="post-info flex-row">
                                        <span><i className="fa fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                                        <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 27, 2020</span>
                                        <span>12 Comments</span>
                                    </div>
                                </div>
                                <div className="post-title">
                                    <a href="/">New data recording system to better analyse road accidents</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque molestiae laborum deleniti officiis illo iure blanditiis ipsa tempora iste expedita adipisci quasi quisquam, consequuntur aspernatur quam eos explicabo libero earum natus repudiandae id praesentium sed vel minima. Nisi, veniam officiis.</p>
                                    <button className="btn post-btn">Read More &nbsp; <i className="fa fa-arrow-right"></i></button>
                                </div>
                            </div>

                            <div className="pagination flex-row">
                                <a href="/"><i className="fa fa-chevron-left"></i></a>
                                <a href="/" className="pages">1</a>
                                <a href="/" className="pages">2</a>
                                <a href="/" className="pages">3</a>
                                <a href="/"><i className="fa fa-chevron-right"></i></a>
                            </div>
                        </div>
                        <aside className="sidebar">
                            <div className="category">
                                <h2>Category</h2>

                                <ul className="category-list">
                                    <li className="list-item" data-aos="flip-right" data-aos-delay="100">
                                        <a href="/">Software</a>
                                        <span>(05)</span>
                                    </li>
                                    <li className="list-item" data-aos="flip-right" data-aos-delay="200">
                                        <a href="/">Technology</a>
                                        <span>(02)</span>
                                    </li>
                                    <li className="list-item" data-aos="flip-right" data-aos-delay="300">
                                        <a href="/">Lifestyle</a>
                                        <span>(07)</span>
                                    </li>
                                    <li className="list-item" data-aos="flip-right" data-aos-delay="400">
                                        <a href="/">Shopping</a>
                                        <span>(01)</span>
                                    </li>
                                    <li className="list-item" data-aos="flip-right" data-aos-delay="500">
                                        <a href="/">Food</a>
                                        <span>(08)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="popular-post">
                                <h2>Popular Post</h2>

                                <div className="post-content" data-aos="flip-up" data-aos-delay="200">
                                    <div className="post-image">
                                        <div>
                                            <img src={Post1} className="img" alt="post1" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 21, 2020</span>
                                            <span>2 Comments</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="/">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="300">
                                    <div className="post-image">
                                        <div>
                                            <img src={Post2} className="img" alt="post2" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 21, 2020</span>
                                            <span>2 Comments</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="/">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="400">
                                    <div className="post-image">
                                        <div>
                                            <img src={Post3} className="img" alt="post3" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 21, 2020</span>
                                            <span>2 Comments</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="/">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="500">
                                    <div className="post-image">
                                        <div>
                                            <img src={Post4} className="img" alt="post4" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 21, 2020</span>
                                            <span>2 Comments</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="/">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                                <div className="post-content" data-aos="flip-up" data-aos-delay="600">
                                    <div className="post-image">
                                        <div>
                                            <img src={Post5} className="img" alt="post5" />
                                        </div>
                                        <div className="post-info flex-row">
                                            <span><i className="fa fa-calendar text-gray"></i>&nbsp;&nbsp;December 21, 2020</span>
                                            <span>2 Comments</span>
                                        </div>
                                    </div>
                                    <div className="post-title">
                                        <a href="/">New data recording system to better analyse road accidents</a>
                                    </div>
                                </div>
                            </div>

                            <div className="newsletter" data-aos="zoom-in-down" data-aos-delay="300">
                                <h2>Newsletter</h2>
                                <div className="form-element">
                                    <input type="text" className="input-element" placeholder="Email" />
                                    <button className="btn form-btn">Subscribe</button>
                                </div>
                            </div>

                            <div className="popular-tags">
                                <h2>Popular Tags</h2>
                                <div className="tags flex-row">
                                    <span className="tag" data-aos="flip-up" data-aos-delay="100">Software</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="200">Technology</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="300">Travel</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="400">Illustration</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="500">Design</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="600">Lifestyle</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="700">Love</span>
                                    <span className="tag" data-aos="flip-up" data-aos-delay="800">Project</span>
                                </div>
                            </div>

                        </aside>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SiteContent
