import React from 'react';

export default () => {

    return (

        <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-info">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <a className="navbar-brand" href="/">Let's Blog</a>

            <div className="collapse navbar-collapse" id="Navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/"><span className="fa fa-home fa-lg"></span> Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about"><span className="fa fa-info fa-lg"></span> About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact"><span className="fa fa-address-card fa-lg"></span> Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/post/create"><i className="fa fa-pencil" aria-hidden="true"></i> Write</a>
                    </li>
                </ul>
                <form className="form-inline pull-xs-right">
                    <input className="form-control" type="text" placeholder="Search" />
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
            </div>

        </nav>

    );

}