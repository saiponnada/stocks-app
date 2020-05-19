import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Covid from './Components/Covid';
import CompanyContainer from './Components/CompanyContainer';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    const themeVal = sessionStorage.getItem('theme');
    if (themeVal) {
      setTheme(themeVal);
    } else {
      sessionStorage.setItem('theme', 'light');
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App theme-` + theme}>
        <nav className={`nav-` + theme}>
          <button className='p-3 btn btn-link' onClick={toggleTheme}>
            {theme === 'dark' ? (
              <FiSun title='light' />
            ) : (
              <FiMoon title='dark' />
            )}
          </button>
        </nav>
        <Router>
          <Switch>
            <Route path='/' exact component={Covid} />
            <Route path='/covid' exact component={Covid} />
            <Route path='/stock/:ticker' component={CompanyContainer} />
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
