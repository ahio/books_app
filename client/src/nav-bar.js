import React from "react";
import { Link } from 'react-router'
import { Navbar, NavBrand, Nav } from 'react-bootstrap';

let NavigationBar = React.createClass({
    render() {
        return(
            <div>
                <Navbar>
                    <NavBrand><Link to={`/`}>Books Library</Link></NavBrand>
                    <Nav left>
                        <ul className="nav navbar-nav navbar-right">
                            <li role="presentation">
                                <Link to={`/authors-list`}>Authors List</Link>
                            </li>
                        </ul>
                    </Nav>
                </Navbar>
            </div>
        )
    }
});

export default NavigationBar;