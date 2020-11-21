import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import Home from './Home';
import BlogPost from './BlogPost';
import CreatePost from './CreatePost';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "home"]} exact={true} component={Home} />
        <Route path="/post:id" component={BlogPost} />
        <Route path="/post/create" component={CreatePost} />
        <Route path="/contact" component={Contact} />
        <Route path="*" render={ () => <div className="text-center p-5"><h3>Oops! You're lost.</h3></div> } />
      </Switch>
    </Router>
  );
}

export default App;
