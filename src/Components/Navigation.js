import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect variant='light' expand='md'>
			<Navbar.Brand as={Link} to='/'>
				Home
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link as={Link} to='/'>
						Home
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
    )
}

export default Navigation