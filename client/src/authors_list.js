import React from "react";
import { connect } from 'react-redux'
import { loadedData } from './actions'
import { Link } from 'react-router'
import { DropdownButton, MenuItem } from 'react-bootstrap';

let AuthorsList = React.createClass({
    render() {
        let authors = this.props.authors;
        let books = this.props.books;
        let authorsOfBooks = [];

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

        console.log(authorsOfBooks);


        return(
            <div>
                <ol>
                {authorsOfBooks.map( author => (
                    <li>
                        <DropdownButton bsStyle='link' title="AuthorsName" id={author._id}>
                            <MenuItem><Link to={`/author/${author._id}`}>{author.name}</Link></MenuItem>
                            <MenuItem divider />
                            {author.bookTitle.map( book => (
                                <MenuItem><Link to={`/book/${book}`}>{book}</Link></MenuItem>
                            ))}
                        </DropdownButton>
                    </li>
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
)(AuthorsList)