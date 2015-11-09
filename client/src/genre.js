import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import { loadedData } from './actions'
import { Link } from 'react-router'
import NavigationBar from './nav-bar'

let Genre = React.createClass({
    render() {
        let books = this.props.books,
            booksGenre = [];

        books.forEach( book => {
            let currentBook = book;
            book.genre.forEach( genre => {
                if(genre === this.props.params.genre) {
                    booksGenre.push(currentBook);
                }
            });
        });

        return (
            <div>
                <NavigationBar />
                <div className="books">
                    {booksGenre.map( book => (
                        <div key={book.title} className="book">
                            <div className="book-content">
                                <h3>
                                    <Link to={`/book/${book.title}`}>{book.title}</Link>
                                    <span>
                                        <Link to={`/author/${book.authorId}`}>{book.authorName}</Link>
                                    </span>
                                </h3>
                            </div>
                        </div>
                    ))}
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
)(Genre)