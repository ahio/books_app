import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from 'react-router';
import hello from './hello'

ReactDOM.render(
    <Router>
        <Route path="/" component={hello}/>
    </Router>,
    document.getElementById('container')
);