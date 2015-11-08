import _ from 'lodash';
import React from "react";
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import { loadedData } from './actions'
import { Router, Route, Link } from 'react-router'


let Author = React.createClass({
    render() {
        let books = this.props.books,
            authors = this.props.authors,
            authorBooks = [];
        let author = _.find(authors, author => {
            return author._id === this.props.params.authorId;
        });
        _.forEach(books, (book) => {
            if (book.authorId === this.props.params.authorId) {
                authorBooks.push(book.title);
            }
        });

        return(
            <div>
                <div>{author.name}</div>
                <div>{author.biography}</div>
                <div>
                    <ul>
                        {_.map(authorBooks, book => (
                            <li><Link to={`/book/${book}`}>{book}</Link></li>
                        ))}
                    </ul>
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