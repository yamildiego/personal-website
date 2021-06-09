import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './AppBar.css';

class AppBar extends Component {
    state = {
        showMenu: this.props.isOpen
    }

    handleClickMenu = () => {
        this.setState({ ...this.state, showMenu: !this.state.showMenu });
    }

    render() {
        return (
            <React.Fragment>
                <header className={`AppBar`}>
                    <Navbar expand="lg">
                        <Container className="justify-content-start">
                            <Navbar.Brand>
                                <Link className="AppBarToggle" onClick={this.handleClickMenu} to="#" >
                                    <FontAwesomeIcon icon={this.state.showMenu ? 'times' : 'bars'} />
                                </Link>
                            </Navbar.Brand>
                            {
                                <Navbar className={`Menu ${this.state.showMenu ? " showMenu" : ""}`}>
                                    <Nav className="me-auto">
                                        <Link className="nav-link" to="/home">Home</Link>
                                        <Link className="nav-link" to="/work">Work</Link>
                                        <Link className="nav-link" to="/about">About</Link>
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </Nav>
                                </Navbar>
                            }
                        </Container>
                    </Navbar>
                </header>
            </React.Fragment >
        );
    }
}

export default AppBar;