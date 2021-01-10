import React from 'react'
import Layout from '../components/Layout'
import AOS from 'aos'
import Background from '../assets/images/create-post.jpg'

const Create = () => {

    AOS.init();

    return (
        <div style={{ background: `url(${Background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

            <Layout>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 mt-5">

                            <h3 className="my-3 mt-5" style={{color: "beige"}}>Create Blog Post <i className="fa fa-pencil" aria-hidden="true"></i></h3>

                            <form>
                                <fieldset className="form-group">
                                    <label htmlFor="post-title" className="col-form-label create">Title</label>
                                    <input type="text" className="form-control" name="post-title" id="post-title" placeholder="Blog Title" required />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label htmlFor="post-intro" className="col-form-label create">Introduction</label>
                                    <textarea className="form-control" rows="10" name="post-intro" id="post-intro" placeholder="Blog Introduction" required></textarea>
                                </fieldset>
                                <div className="row">
                                    <div className="col-12 col-md-4">
                                        <fieldset className="form-group">
                                            <label htmlFor="subtitle1" className="col-form-label create">Subtitle</label>
                                            <input type="text" className="form-control" name="subtitle1" id="subtitle1" placeholder="Subtitle" />
                                            <small className="text-muted">If applicable</small>

                                            <label className="col-form-label create" htmlFor="moresubcontents">More subtitles and contents? Choose your number.</label>
                                            <select className="form-control">
                                                <option defaultValue>Choose...</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <fieldset className="form-group">
                                            <label htmlFor="content1" className="col-form-label create">Content</label>
                                            <textarea className="form-control" rows="10" name="content1" id="content1" placeholder="Content"></textarea>
                                            <small className="text-muted">If applicable</small>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

            </Layout>

        </div>
    );

}

export default Create;