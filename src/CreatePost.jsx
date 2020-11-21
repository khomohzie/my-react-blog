import React from 'react';
import Layout from './shared/Layout';

const CreatePost = () => {

    return (

        <Layout>

            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">

                        <h3 className="my-3">Create Blog Post <i className="fa fa-pencil" aria-hidden="true"></i></h3>

                        <form>
                            <fieldset className="form-group">
                                <label for="post-title" className="col-form-label">Title</label>
                                <input type="text" className="form-control" name="post-title" id="post-title" placeholder="Blog Title" required />
                            </fieldset>
                            <fieldset className="form-group">
                                <label for="post-intro" className="col-form-label">Introduction</label>
                                <textarea className="form-control" rows="10" name="post-intro" id="post-intro" placeholder="Blog Introduction" required></textarea>
                            </fieldset>
                            <div className="row">
                                <div className="col-12 col-md-4">
                                    <fieldset className="form-group">
                                        <label for="subtitle1" className="col-form-label">Subtitle</label>
                                        <input type="text" className="form-control" name="subtitle1" id="subtitle1" placeholder="Subtitle" />
                                        <small className="text-muted">If applicable</small>

                                        <label className="col-form-label" for="moresubcontents">More subtitles and contents? Choose your number.</label>
                                        <select className="form-control">
                                            <option selected>Choose...</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </fieldset>
                                </div>
                                <div className="col-12 col-md-8">
                                    <fieldset className="form-group">
                                        <label for="content1" className="col-form-label">Content</label>
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

    );

}

export default CreatePost;