import React from 'react';
import Layout from './shared/Layout';

const BlogPost = (props) => {

    return (

        <Layout>

            <div className="container">
                <div className="row mt-1">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="blog-post.html">Blog</a>
                        </li>
                        <li className="breadcrumb-item active">
                            Post Title
                        </li>
                    </ol>
                </div>


                <div className="row mt-2 mb-2">
                    <div className="col-lg-12">
                        <h1>Post Title</h1>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-12">
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
                        eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
                        Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit
                        amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum
                        sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget
                        tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim
                        ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent
                        dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate
                        magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
                        accumsan porttitor, facilisis luctus, metus
                        </p>
                    </div>
                </div>


                <div className="row mt-2">

                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-block">
                                <p>
                                    <small>Posted by <a href="#">Admin</a> on January 1, 2016 in <a href="#">Category</a></small>
                                </p>
                                <p>Pellentesque habitant morbi tristique senectus et...</p>
                                <p>
                                    <code>
                                        &lt;p&gt;this is what a code sample looks like&lt;/p&gt;
                                    </code>
                                </p>
                                <p>Pellentesque habitant morbi tristique senectus et netus...</p>

                                <h4>pre sample code</h4>
                                <pre>This is what code will look like</pre>

                                <h4>responsive image</h4>
                                <p>
                                    <img src="img/image.jpg" className="img-fluid" alt="Responsive image" />
                                </p>


                                <h4>table</h4>
                                <table className="table table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>john</td>
                                            <td>smith</td>
                                            <td>@jsmith</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>steve</td>
                                            <td>stevens</td>
                                            <td>@steve</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>mike</td>
                                            <td>michaels</td>
                                            <td>@mike</td>
                                        </tr>
                                    </tbody>
                                </table>
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


                    <div className="col-md-4 d-none d-md-block mb-3">
                        <div className="card card-block">
                            <h5 className="card-header bg-info">Recent Posts</h5>
                            <div className="list-group">
                                <button type="button" className="list-group-item">Cras justo odio</button>
                                <button type="button" className="list-group-item">Dapibus ac facilisis in</button>
                                <button type="button" className="list-group-item">Morbi leo risus</button>
                                <button type="button" className="list-group-item">Porta ac consecteturac</button>
                                <button type="button" className="list-group-item">Vestibulum at eros</button>
                            </div>
                            <div className="card-footer m-t-1">
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

export default BlogPost;