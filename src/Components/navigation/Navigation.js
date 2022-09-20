import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect variant='light' expand='lg' fixed="top" id="navbar">
			<Container>
				<Navbar.Brand as={Link} to='/'>
					<h2 id="navbar-brand">DESTINATIONIZER</h2>
				</Navbar.Brand>
			</Container>
		</Navbar>
    )
}

export default Navigation