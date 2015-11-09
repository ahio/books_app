import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import { loadedData } from './actions'
import { Link } from 'react-router'
import NavigationBar from './nav-bar'


let Author = React.createClass({
    render() {
        let books = this.props.books,
            authors = this.props.authors,
            authorBooks,
            author;

        author = _.find(authors, author => {
            return author._id === this.props.params.authorId;
        });
        authorBooks = _.filter(books, book => {
            return book.authorId === this.props.params.authorId
        });

        return(
            <div>
                <NavigationBar />
                <div>
                    <div>{author.name}</div>
                    <div>{author.biography}</div>
                    <div>
                        <ul>
                            {authorBooks.map( book => (
                                <li><Link to={`/book/${book.title}`}>{book.title}</Link></li>
                            ))}
                        </ul>
                    </div>
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
)(Author)