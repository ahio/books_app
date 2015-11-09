import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import { loadedData } from './actions'
import { Link } from 'react-router'
import NavigationBar from './nav-bar'

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
            author;

        books.forEach( book => {
            author = _.find(authors, author => {
                return author._id === book.authorId
            });
            book.authorName = author.name;
            booksData.push(book);
        });

        return(
        <div>
            <NavigationBar />
            <div className="books-list">
                { booksData.map( book => (
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
)(BooksList)