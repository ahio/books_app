import React from "react";
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import { loadedData } from './actions'
import { Router, Route, Link } from 'react-router'

let Book = React.createClass({
    render() {
        let data = {};
        this.props.books.forEach((element) => {
            if(element.title === this.props.params.bookTitle) {
                return data = {
                    title: element.title,
                    author: element.author,
                    description: element.description
                }
            }
        });
        console.log('data => ', data);
        return(
            <div>
                <div>{data.title}</div>
                <div>{data.author}</div>
                <div>{data.description}</div>
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
)(Book)