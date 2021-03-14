import React from 'react'
import Link from 'next/link'
import renderHTML from 'react-render-html'
import moment from 'moment'
import { API } from '../../config'
import './Card.css'

const Card = ({ blog }) => {

    const showBlogCategories = blog =>
        blog.categories.map((c, i) => (
            <Link key={i} href={`/categories/${c.slug}`}>
                <a className="btn btn-primary mx-1 mt-3">{c.name}</a>
            </Link>
        ));

    const showBlogTags = blog =>
        blog.tags.map((t, i) => (
            <Link key={i} href={`/tags/${t.slug}`}>
                <a className="btn btn-outline-primary mx-1 mt-3">{t.name}</a>
            </Link>
        ));

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="lead pb-4">
                        <div data-aos="fade-left" data-aos-delay="1000">
                            <header>
                                <Link href={`/blogs/${blog.slug}`}>
                                    <a>
                                        <h2 className="py-3 font-weight-bold">{blog.title}</h2>
                                    </a>
                                </Link>
                            </header>
                            <section>
                                <p className="mark ml-1 py-2">
                                    Written by <Link href={`/profile/${blog.postedBy.username}`}><a style={{color: "blue", fontWeight: "bolder", textDecoration: "underline"}}>{blog.postedBy.username}</a></Link> | Published {moment(blog.updatedAt).fromNow()}
                                </p>
                            </section>
                            <section>
                                {showBlogCategories(blog)}
                                {showBlogTags(blog)}
                                <br />
                                <br />
                            </section>
                        </div>

                        <div className="row">
                            <div className="col-md-4" data-aos="fade-right" data-aos-delay="300">
                                <section>
                                    <img
                                        className="img img-fluid"
                                        style={{ maxHeight: '300px', width: '100%' }}
                                        src={`${API}/blog/photo/${blog.slug}`}
                                        alt={blog.title}
                                    />
                                </section>
                            </div>
                            <div className="col-md-8" data-aos="fade-left" data-aos-delay="400">
                                <div className="pb-3" style={{ maxHeight: "200px", overflowY: "hidden" }}>{renderHTML(blog.excerpt)}</div>

                                <Link href={`/blogs/${blog.slug}`}>
                                    <a className="btn btn-primary pt-2 read-more">Read more</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Card
