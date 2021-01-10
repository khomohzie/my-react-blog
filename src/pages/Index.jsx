import React from 'react';
import Layout from '../components/Layout';

import Image from '../assets/images/image.jpg'

const Index = (props) => {

    return (

        <Layout>

            <div className="container">

                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mt-5">Blog</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-8">

                        <div className="card">
                            <img className="card-img-top img-fluid" src={Image} alt="Card cap" />
                            <div className="card-block">
                                <h4 className="card-header bg-info">Post Title</h4>
                                <p className="card-body py-0">
                                    <small>Posted by <a href="#">Admin</a> on January 1, 2016 in <a href="#">Category</a></small>
                                </p>
                                <p className="card-body">
                                    Some quick example to build on the card title and make up the bulk of the card's content.
                                </p>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-block">
                                <h4 className="card-header bg-info">Post Title</h4>
                                <p className="card-body py-0">
                                    <small>Posted by <a href="#">Admin</a> on January 1, 2016 in <a href="#">Category</a></small>
                                </p>
                                <p className="card-body">
                                    Pellentesque habitant morbi tristique...
                                </p>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <img className="card-img-top img-fluid" src={Image} alt="Card cap" />
                            <div className="card-block">
                                <h4 className="card-header bg-info">Post Title <span className="badge badge-success">Updated</span></h4>
                                <p className="card-body">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-block">
                                <h4 className="card-header bg-info">Post title</h4>
                                <p className="card-body py-0">
                                    <small>Posted by <a href="#">Admin</a> on January 1, 2016 in <a href="#">Category</a></small>
                                </p>
                                <p className="card-body">
                                    Pellentesque habitant morbi tristique senectus...
                                </p>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>

                        <nav>
                            <ul className="pagination justify-content-between my-5">
                                <li className="page-item">
                                    <a className="page-link" href="#">Older Posts</a>
                                </li>
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">Newer Posts</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="col-md-4 d-none d-sm-block">

                        <div className="card card-block">
                            <h5 className="card-header bg-info">Recent Posts</h5>
                            <div className="list-group">
                                <button type="button" className="list-group-item">Cras justo odio</button>
                                <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
                                <button type="button" className="list-group-item">Morbi leo risus</button>
                                <button type="button" className="list-group-item">Porta ac consecteturac</button>
                                <button type="button" className="list-group-item">Vestibulum at eros</button>
                            </div>
                            <div className="card-footer mt-1">
                                <a href="#">View More</a>
                            </div>
                        </div>
                        <div className="card card-block mt-3">
                            <h5 className="card-header bg-info">Archives</h5>
                            <div className="list-group">
                                <button type="button" className="list-group-item">Cras justo odio</button>
                                <button type="button" className="list-group-item">Aregbe steals funds</button>
                                <button type="button" className="list-group-item">Ahfuh oajgwd ajiwj</button>
                                <button type="button" className="list-group-item">A ihsau adosajd adniajidow ajdojpw hidj</button>
                                <button type="button" className="list-group-item">Asqasidh ahsduwbdnwo kaj8dgwtfcf</button>
                            </div>
                            <div className="card-footer mt-1">
                                <a href="#">View More</a>
                            </div>
                        </div>
                        <div className="card card-block mt-3">
                            <h5 className="card-header bg-info">Categories</h5>
                            <div className="list-group">
                                <button type="button" className="list-group-item">Cras justo odio</button>
                                <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
                                <button type="button" className="list-group-item">Morbi leo risus</button>
                                <button type="button" className="list-group-item">Porta ac consecteturac</button>
                                <button type="button" className="list-group-item">Vestibulum at eros</button>
                            </div>
                            <div className="card-footer mt-1">
                                <a href="#">View More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Layout>

    );

}

export default Index;