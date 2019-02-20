import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/main.css';
import Home from './components/Home/Home';
import Show from './components/Show/Show';
import Search from './components/Search/Search'
import Episode from './components/Episode/Episode';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// import { CookiesProvider, Cookies } from 'react-cookie';

// const cookies = new Cookies();
// cookies.set('st','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E', {expires:'2029-02-11T01:35:48.159Z'})
// console.log(cookies.get('st'))
const routing = (

        <Router>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/j/j/search" component={Search}></Route>
                <Route exact path="/:showName" component={Show} ></Route>
                <Route exact path="/:show/:episodeName" component={Episode}></Route>
            </div>
        </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
