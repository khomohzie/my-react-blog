import React from 'react'
import AOS from 'aos'
import './PostsUI.css'
import BlogCarousel from './BlogCarousel';

const PostsUI = () => {

    AOS.init();

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1 mt-5">
                        <h3 className="heading text-center mt-5">Search Blog Posts</h3>
                        <input type="text" className="search" placeholder="Search..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <BlogCarousel />
                    </div>
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt ea assumenda provident vel placeat, quod, ipsa officia blanditiis odit tenetur vero ipsum magnam! Quidem, consequatur voluptates. Recusandae, nobis nisi?
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt ea assumenda provident vel placeat, quod, ipsa officia blanditiis odit tenetur vero ipsum magnam! Quidem, consequatur voluptates. Recusandae, nobis nisi?
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt ea assumenda provident vel placeat, quod, ipsa officia blanditiis odit tenetur vero ipsum magnam! Quidem, consequatur voluptates. Recusandae, nobis nisi?
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt ea assumenda provident vel placeat, quod, ipsa officia blanditiis odit tenetur vero ipsum magnam! Quidem, consequatur voluptates. Recusandae, nobis nisi?
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt ea assumenda provident vel placeat, quod, ipsa officia blanditiis odit tenetur vero ipsum magnam! Quidem, consequatur voluptates. Recusandae, nobis nisi?
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt ea assumenda provident vel placeat, quod, ipsa officia blanditiis odit tenetur vero ipsum magnam! Quidem, consequatur voluptates. Recusandae, nobis nisi?
                </div>
                <div className="row">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad incidunt ea assumenda provident vel placeat, quod, ipsa officia blanditiis odit tenetur vero ipsum magnam! Quidem, consequatur voluptates. Recusandae, nobis nisi?
                </div>
            </div>
        </div>
    )
}

export default PostsUI
