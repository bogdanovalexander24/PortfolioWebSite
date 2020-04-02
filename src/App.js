import React, { Fragment, useEffect } from 'react';
import './css/main.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './components/pages/Main/Main';
import About from './components/pages/About/About';
import Work from './components/pages/Work/Work';
import Contact from './components/pages/Contact/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
