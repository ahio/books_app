import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from 'react-router';
import { Provider } from 'react-redux'
import hello from './hello'
import configureStore from './configStore'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={hello}/>
        </Router>
    </Provider>,
    document.getElementById('container')
);