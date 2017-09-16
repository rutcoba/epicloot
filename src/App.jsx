import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import MainRouter from './components/MainRouter';
import Footer from './components/Footer';

const App = () => (
    
  <Router>
     <div id="wrapper">
        <Header />
          <MainRouter />  
        <Footer />  
      </div>
  </Router>
)

ReactDOM.render(
    <App />, 
document.getElementById('root'));