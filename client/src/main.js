import React from "react";
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import { loadedData } from './actions'
import { Router, Route, Link } from 'react-router'

var hello = React.createClass({
    componentDidMount() {
        $.get('/books.json', function(result) {
            if (this.isMounted()) {
                this.props.loadedData(result);
            }
        }.bind(this));
    },
    render() {
        return(
        <div className="books-list">
            <ol>
                {this.props.books.map((element) => (
                    <li key={element.title}><Link to={`/book/${element.title}`}><h3 className="book-title">{element.title}</h3></Link> - <Link to={`/author/${element.author}`}>{element.author}</Link></li>
                ))}
            </ol>
        </div>
        )
    }
});

function mapStateToProps(state) {
    return {
        books: state.data.books
    }
}
export default connect(
    mapStateToProps,
    { loadedData }
)(hello)