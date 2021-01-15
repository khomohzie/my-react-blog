import React, { useState } from 'react'
import { auth } from '../services/firebase'
import './SiteTitle.css'
import AOS from 'aos'

// Home page Site Title Section

const SiteTitle = ({ element }) => {

    AOS.init();

    const [authenticated, setAuthenticated] = useState(false);

    auth().onAuthStateChanged((user) => {
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    });

    return (
        <main>
            <section className='site-title'>
                <div ref={element} className="site-background" data-aos="zoom-in-up" data-aos-delay="200">
                    <h3 className="description">One Blog, Many Bloggers</h3>
                    <h2 className="content">Discuss trends, share your thoughts, a letter at a time, anywhere, anytime.</h2>

                    {authenticated === false ? (
                        <>
                            <a href="/signup" className="btn">
                                Get started
                            </a>
                            <a href="/login" className="btn btn-signin">
                                Sign in
                            </a>
                        </>
                    ) : null}

                </div>
            </section>
        </main>
    )
}

export default SiteTitle
