import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import { loadedData } from './actions'
import { Router, Route, Link } from 'react-router'

var BooksList = React.createClass({
    componentDidMount() {
        $.get('/books.json', function(result) {
            if (this.isMounted()) {
                this.props.loadedData(result);
            }
        }.bind(this));
    },
    render() {
        let authors = this.props.authors,
            books = this.props.books,
            booksData = [],
            authorName;

        books.forEach( book => {
            authorName = _.find(authors, author => {
                return author._id === book.authorId
            });
            book.authorName = authorName.name;
            booksData.push(book);
        });

        return(
        <div className="books-list">
            <ol>
                { _.map(booksData, (book) => (
                    <li key={book.title}><Link to={`/book/${book.title}`}><h3 className="book-title">{book.title}</h3></Link> - <Link to={`/author/${book.authorId}`}>{book.authorName}</Link></li>
                ))}
            </ol>
        </div>
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
)(BooksList)