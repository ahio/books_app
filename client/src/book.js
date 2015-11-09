import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import { loadedData } from './actions'
import { Link } from 'react-router'
import NavigationBar from './nav-bar'

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
                <NavigationBar />
                <div className="book-container">
                    <div className="book-title">{book.title}</div>
                    <div className="book-author">By <Link to={`/author/${book.authorId}`}>{author.name}</Link></div>
                    <div className="book-genre-container">
                        <span className="text">Genre:</span>
                        {_.map(book.genre, (genre) => (
                            <span className="book-genre"><Link to={`/genre/${genre}`}>{genre}</Link></span>
                        ))}
                    </div>
                    <div className="book-description">{book.description}</div>
                </div>
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