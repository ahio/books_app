import React from "react";
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import { loadedData } from './actions'

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
            <div>Hello</div>
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