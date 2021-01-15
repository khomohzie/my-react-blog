import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-social/bootstrap-social.css'
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'
import 'popper.js'
import Home from './pages/Home'
import Posts from './pages/Posts'
import BlogPost from './pages/BlogPost'
import Create from './pages/Create'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PageNotFound from './pages/404'
import { auth } from './services/firebase'

// import Index from './pages/Index'
// import PasswordShowHide from './helpers/PasswordShowHide'

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
      }
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
            <Redirect to='/' />
          )
      }
    />
  )
}

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthenticated(true);
        setLoading(false);
      } else {
        setAuthenticated(false);
        setLoading(false);
      }
    });
  }, []);

  return loading === true ? (
    <div className="spinner-border text-success" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
      <Router>
        <Switch>
          <Route path={["/", "/home"]} exact={true} component={Home} />
          <PrivateRoute
            path="/create"
            authenticated={authenticated}
            component={Create}
          />
          <PublicRoute
            path="/signup"
            authenticated={authenticated}
            component={Signup}
          />
          <PublicRoute
            path="/login"
            authenticated={authenticated}
            component={Login}
          />
          <Route path="/posts" component={Posts} />
          <Route path="/post:id" component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    );


  // <Router>
  //   <Switch>
  //     <Route path={["/", "/home"]} exact={true} component={Home} />
  //     <Route path="/index" component={Index} />
  //     <Route path="/post:id" component={BlogPost} />
  //     <Route path="/create" component={Create} />
  //     <Route path="/contact" component={Contact} />
  //     <Route path="/about" component={About} />
  //     <Route path="/login" component={Login} />
  //     <Route path="/signup" component={Signup} />
  //     <Route path="/password" component={PasswordShowHide} />
  //     <Route path="*" component={PageNotFound} />
  //   </Switch>
  // </Router>
}

export default App;
