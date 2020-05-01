import React from 'react';
import 'reset-css';
import './scss/main.scss';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route component={NotFound} />
       </Switch>
     </Router>
    </div>
  );
}
export default App;
