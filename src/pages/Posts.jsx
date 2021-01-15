import React from 'react'
import Layout from '../components/Layout'
import PostsUI from '../components/PostsUI'
import Background from '../assets/images/posts.png'

const Posts = () => {
    return (
        <div>
            <Layout>

                <div style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundOrigin: "content-box" }}>
                    <PostsUI />
                </div>

            </Layout>
        </div>
    )
}

export default Posts
