import LandingPage from 'pages/LandingPage';
import Example from 'pages/Example';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
