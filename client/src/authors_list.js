import React from "react";
import { connect } from 'react-redux'
import { loadedData } from './actions'
import { Link } from 'react-router'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import NavigationBar from './nav-bar'

let AuthorsList = React.createClass({
    render() {
        let authors = this.props.authors,
            books = this.props.books,
            authorsOfBooks = [];

        authors.forEach(author => {
            let currentAuthor = author;
            let bookAuthor = [];
            books.forEach(book => {
               if(currentAuthor._id === book.authorId) {
                   bookAuthor.push(book.title);
               }
            });
            currentAuthor.bookTitle = bookAuthor;
            authorsOfBooks.push(currentAuthor);
        });

        return(
            <div>
                <NavigationBar />
                <div className="authors-list">
                    {authorsOfBooks.map( author => (
                        <div className="authors-list-item">
                            <DropdownButton bsStyle='link' title={author.name} id={author._id}>
                                <li role="presentation"><Link className="author-profile-link" to={`/author/${author._id}`}>Profile Page</Link></li>
                                <MenuItem divider />
                                <div className="text">Books</div>
                                {author.bookTitle.map( book => (
                                    <li role="presentation">
                                        <Link className="book-item" to={`/book/${book}`}>{book}</Link>
                                    </li>
                                ))}
                            </DropdownButton>
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
)(AuthorsList)