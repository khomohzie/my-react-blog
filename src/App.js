import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'
import 'popper.js'
import Home from './pages/Home'
import Index from './pages/Index'
import BlogPost from './pages/BlogPost'
import Create from './pages/Create'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PageNotFound from './pages/404'
import PasswordShowHide from './helpers/PasswordShowHide'

function App() {
  return (

    <Router>
      <Switch>
        <Route path={["/", "/home"]} exact={true} component={Home} />
        <Route path="/index" component={Index} />
        <Route path="/post:id" component={BlogPost} />
        <Route path="/create" component={Create} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/password" component={PasswordShowHide} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>

  );
}

export default App;
