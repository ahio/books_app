import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link } from 'react-router';
import { Provider } from 'react-redux'
import hello from './main'
import Book from './book'
import configureStore from './configStore'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={hello}/>
            <Route path="/book/:bookTitle" component={Book}/>
        </Router>
    </Provider>,
    document.getElementById('container')
);