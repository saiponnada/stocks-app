import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CompanyContainer from './Components/CompanyContainer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={CompanyContainer} />
          <Route path='/stock/:ticker' component={CompanyContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
