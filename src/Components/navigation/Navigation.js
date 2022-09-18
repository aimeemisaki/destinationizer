import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect variant='light' expand='lg' fixed="top">
			<Container>
				<Navbar.Brand as={Link} to='/'>
					<h2 id="navbar-brand">DESTINATIONIZER</h2>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<Nav.Link as={Link} to='/' id="navbar-text">
							ABOUT
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    )
}

export default Navigation