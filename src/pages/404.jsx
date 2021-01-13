import React from 'react'
import '../styles/404.css'

const PageNotFound = () => {
    return (
        <div>
            <div className="container" style={{marginTop: "100px", marginBottom: "80px"}}>
                <div className="row">
                    <div className="col offset-md-4 cont">
                        <div class='content'>
                            <h2>404</h2>
                            <h4>
                                Oops! Page not found
                            </h4>
                            <p>The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.</p>
                            <a className="btn" href='/'>Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound
