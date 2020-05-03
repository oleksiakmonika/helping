import React from 'react';
import 'reset-css';
import './scss/main.scss';
import Home from './components/Home';
import NotFound from './components/NotFound';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Log from './components/Nav/Log'


function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/zaloguj" component={Log}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
