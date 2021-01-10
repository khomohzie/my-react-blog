import React from 'react'
import Layout from '../components/Layout'
import SiteTitle from '../components/SiteTitle'
import UseSticky from '../helpers/UseSticky'
import BlogCarousel from '../components/BlogCarousel'
import SiteContent from '../components/SiteContent'

const Home = () => {
    const element = UseSticky()

    return (
        <div>
            <Layout>

                <SiteTitle element={element} />

                <BlogCarousel />

                <SiteContent />

            </Layout>
        </div>
    )
}

export default Home
