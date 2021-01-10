import React from 'react'
import './SiteTitle.css'
import AOS from 'aos'

// Home page Site Title Section

const SiteTitle = ({ element }) => {

    AOS.init();

    return (
        <main>
            <section className='site-title'>
                <div ref={element} className="site-background" data-aos="zoom-in-up" data-aos-delay="200">
                    <h3 className="description">One Blog, Many Bloggers</h3>
                    <h2 className="content">Discuss trends, share your thoughts, a letter at a time, anywhere, anytime.</h2>
                    <button className="btn">
                        Get started
                    </button>
                    <button className="btn btn-signin">
                        Sign in
                    </button>
                </div>
            </section>
        </main>
    )
}

export default SiteTitle
