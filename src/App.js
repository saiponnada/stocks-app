import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Covid from './Components/Covid';
import CompanyContainer from './Components/CompanyContainer';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/covid' exact component={Covid} />
          <Route path='/stock/:ticker' component={CompanyContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
