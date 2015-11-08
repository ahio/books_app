import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import { loadedData } from './actions'
import { Router, Route, Link } from 'react-router'

let Genre = React.createClass({
    render() {
        let books = this.props.books;
        let booksGenre = [];
        _.forEach(books, book => {
            let currentBook = book;
            _.forEach(book.genre, genre => {
                if(genre === this.props.params.genre) {
                    booksGenre.push(currentBook);
                }
            });
        });
        return (
            <ol>{_.map(booksGenre, book => (
                <li key={book.title}><Link to={`/book/${book.title}`}><h3 className="book-title">{book.title}</h3></Link> - <Link to={`/author/${book.authorId}`}>{book.authorName}</Link></li>
            ))}</ol>
        )
    }
});

function mapStateToProps(state) {
    return {
        books: state.data.books,
        authors: state.data.authors
    }
}
export default connect(
    mapStateToProps,
    { loadedData }
)(Genre)