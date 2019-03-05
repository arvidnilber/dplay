// import React, { Suspense, lazy } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import './css/main.css';
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch
// } from 'react-router-dom'

// // const Loading = lazy(() => import('./components/Loading'));
// // const Show = lazy(() => import('./components/Show/Show'));
// // const Home = lazy(() => import('./components/Home/Home'));
// // const Episode = lazy(()=> import('./components/Episode/Episode'));
// // const Header = lazy(() => import('./components/Header/Header'));
// import Header from '.7'
// import {Home} from './lazy.js'
// // import { CookiesProvider, Cookies } from 'react-cookie';

// // const cookies = new Cookies();
// // cookies.set('st','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E', {expires:'2029-02-11T01:35:48.159Z'})
// // console.log(cookies.get('st'))
// const routing = () => (

//         <Router>
//             <div>
//                 <Header></Header>
//                 <React.Fragment>
//                         <Switch>
//                             <Route exact path="/" component={Home}></Route>
//                             {/* <Route exact path="/j/j/search" component={Search}></Route> */}
//                             <Route exact path="/:showName" component={Show} ></Route>
//                             <Route exact path="/:show/:episodeName" component={Episode}></Route>
//                         </Switch>
//                 </React.Fragment>
//             </div>
//         </Router>
// )

// ReactDOM.render(routing, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/main.css';
import Home from './components/Home/Home';
import Show from './components/Show/Show';
import Search from './components/Search/Search'
import Episode from './components/Episode/Episode';
import {Post} from './lazy'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
// import { CookiesProvider, Cookies } from 'react-cookie';

// const cookies = new Cookies();
// cookies.set('st','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVU0VSSUQ6ZHBsYXlzZTozZWMxZjdhNy1hZmEzLTRjMGUtOWZiMS04MjVjNDE0ZmRlMzciLCJqdGkiOiJ0b2tlbi05OGMxZjgxZC0zYTMwLTQ5ZjUtYWM0NS05ZDM1NzFlNTI0YTIiLCJhbm9ueW1vdXMiOmZhbHNlLCJpYXQiOjE1NTA0ODQzMDJ9.X8M-Du6ujass9tx0-TlmjCkrWqQ6CIYbeFHweCd1m8E', {expires:'2029-02-11T01:35:48.159Z'})
// console.log(cookies.get('st'))
const routing = (

        <Router>
            <div>
                <Header></Header>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/j/j/search" component={Search}></Route>
                <Route exact path="/:showName" component={Show} ></Route>
                <Route exact path="/:show/:episodeName" component={Episode}></Route>
                <Route exact path="/p/p/post" component={Post}></Route>
            </div>
        </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA