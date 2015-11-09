import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import { loadedData } from './actions'
import { Link } from 'react-router'

let Book = React.createClass({
    render() {
        let books = this.props.books,
            book,
            author;

        book = _.find(books, book => {
            return book.title === this.props.params.bookTitle;
        });
        author = _.find(this.props.authors, author => {
            return author._id === book.authorId;
        });

        return(
            <div>
                <div>{book.title}</div>
                <div><Link to={`/author/${book.authorId}`}>{author.name}</Link></div>
                <div>{_.map(book.genre, (genre) => (
                    <li><Link to={`/genre/${genre}`}>{genre}</Link></li>
                ))}</div>
                <div>{book.description}</div>
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
)(Book)