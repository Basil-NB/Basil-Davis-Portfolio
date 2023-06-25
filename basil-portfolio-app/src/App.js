import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import About from './components/AboutMe';
import ContactMe from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={ContactMe} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;