import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import { loadedData } from './actions'
import { Link } from 'react-router'

let Genre = React.createClass({
    render() {
        let books = this.props.books;
        let booksGenre = [];
        books.forEach( book => {
            let currentBook = book;
            book.genre.forEach( genre => {
                if(genre === this.props.params.genre) {
                    booksGenre.push(currentBook);
                }
            });
        });
        return (
            <ol>
                {booksGenre.map( book => (
                    <li key={book.title}><Link to={`/book/${book.title}`}><h3 className="book-title">{book.title}</h3></Link> - <Link to={`/author/${book.authorId}`}>{book.authorName}</Link></li>
                ))}
            </ol>
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