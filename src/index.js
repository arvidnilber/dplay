import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/main.css';
import Home from './components/Home/Home';
import Show from './components/Show/Show';

import Episode from './components/Episode/Episode';
import { Route, BrowserRouter as Router } from 'react-router-dom';
const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/:showName" component={Show} ></Route>
            <Route exact path="/:show/:episodeName" component={Episode}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
