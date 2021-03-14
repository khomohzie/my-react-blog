import React, { useState } from 'react'
import Layout from '../components/Layout'
import AOS from 'aos'
import Background from '../assets/images/create-post.jpg'
import Form from '../components/Form'
import axios from '../helpers/axios'

const Create = (props) => {

    AOS.init();

    const [content2, setContent2] = useState(false);
    const [content3, setContent3] = useState(false);
    const [content4, setContent4] = useState(false);

    const [post, setPost] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();

        setPost({
            ...post, [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(post)

        await axios.createBlog(post)
            .then(() => {
                setPost({
                    [event.target.name]: ''
                })
            })
    }

    return (
        <div style={{ background: `url(${Background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

            <Layout>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 mt-5">

                            <h3 className="my-3 mt-5 create">Create Blog Post <i className="fa fa-pencil" aria-hidden="true"></i></h3>

                            <form>
                                <fieldset className="form-group">
                                    <label htmlFor="post-title" className="col-form-label create">Title</label>
                                    <input type="text" className="form-control" name="title" onChange={handleChange} value={post.title || ""} id="post-title" placeholder="Blog Title" required />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label htmlFor="post-intro" className="col-form-label create">Introduction</label>
                                    <textarea className="form-control" rows="10" name="intro" onChange={handleChange} value={post.intro || ""} id="post-intro" placeholder="Blog Introduction" required></textarea>
                                </fieldset>
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <fieldset className="form-group">
                                            <label htmlFor="subtitle1" className="col-form-label create">Subtitle</label>
                                            <input type="text" className="form-control" name="subtitle1" onChange={handleChange} value={post.subtitle1 || ""} id="subtitle1" placeholder="Subtitle" />
                                            <small>If applicable</small>
                                        </fieldset>

                                        {/* <label htmlFor="image" className="col-form-label create">Image?</label>

                                        <div className="custom custom-file">
                                            <input multiple="" type="file" className="custom-file-input" name="Image" onChange={handleChange} value={post.image || ""} />
                                            <label className="custom-file-label">
                                                Click to open file browser
                                            </label>
                                        </div>
                                        <small>If applicable</small> */}
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <fieldset className="form-group">
                                            <label htmlFor="content1" className="col-form-label create">Content</label>
                                            <textarea className="form-control" rows="10" name="content1" onChange={handleChange} value={post.content1 || ""} id="content1" placeholder="Content" required></textarea>
                                        </fieldset>
                                    </div>
                                </div>

                                {/* <div className="more-field">

                                    <h5 className="create">More subtitles and contents?</h5>

                                    {content2 === true ? (
                                        <Form />
                                    ) : (<button className="more-btn" onClick={() => {
                                        setContent3(false)
                                        setContent4(false)
                                        setContent2(!content2)
                                    }}>
                                        1 more content
                                    </button>
                                        )}

                                    {content3 === true ? (
                                        <>
                                            <Form />
                                            <Form />
                                        </>
                                    ) : (<button className="more-btn" onClick={() => {
                                        setContent2(false)
                                        setContent4(false)
                                        setContent3(!content3)
                                    }}>
                                        2 more contents
                                    </button>
                                        )}

                                    {content4 === true ? (
                                        <>
                                            <Form />
                                            <Form />
                                            <Form />
                                        </>
                                    ) : (<button className="more-btn" onClick={() => {
                                        setContent2(false)
                                        setContent3(false)
                                        setContent4(!content4)
                                    }}>
                                        3 more contents
                                    </button>
                                        )}
                                </div> */}

                                <input type="submit" onClick={handleSubmit} className="submit-btn" value="Submit"/>
                            </form>

                        </div>
                    </div>
                </div>

            </Layout>

        </div>
    );

}

export default Create;