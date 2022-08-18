import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect variant='light' expand='md' className="px-3" fixed="top">
			<Navbar.Brand as={Link} to='/'>
				DESTINATIONIZER
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav>
					<Nav.Link as={Link} to='/'>
						ABOUT
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
    )
}

export default Navigation