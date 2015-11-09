import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Provider } from 'react-redux'
import BooksList from './main'
import Book from './book'
import Author from './author'
import Genre from './genre'
import AuthorsList from './authors_list'
import configureStore from './configStore'

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={BooksList}/>
            <Route path="/book/:bookTitle" component={Book}/>
            <Route path="/author/:authorId" component={Author}/>
            <Route path="/genre/:genre" component={Genre}/>
            <Route path="/authors-list" component={AuthorsList}/>
        </Router>
    </Provider>,
    document.getElementById('container')
);