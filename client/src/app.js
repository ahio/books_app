import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link } from 'react-router'
import { Provider } from 'react-redux'
import BooksList from './main'
import Book from './book'
import Author from './author'
import Genre from './genre'
import configureStore from './configStore'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={BooksList}/>
            <Route path="/book/:bookTitle" component={Book}/>
            <Route path="/author/:authorId" component={Author}/>
            <Route path="/genre/:genre" component={Genre}/>
        </Router>
    </Provider>,
    document.getElementById('container')
);