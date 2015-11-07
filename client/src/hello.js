import React from "react";
import { connect } from 'react-redux'
import ReactDOM from "react-dom";
import { loadedData } from './actions'

var hello = React.createClass({
    componentDidMount() {
        $.get('/books.json', function(result) {
            var lastGist = result[0];
            if (this.isMounted()) {
                console.log(result);
                //this.setState({
                //    username: lastGist.owner.login,
                //    lastGistUrl: lastGist.html_url
                //});
            }
        }.bind(this));
    },
    render() {
        return(
            <div>Hello</div>
        )
    }
});


export default hello;