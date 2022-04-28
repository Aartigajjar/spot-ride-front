import React from 'react'
import './Header.css'
import logo from '../../images/LOGO.svg'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Content from '../Content/Content'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" className='nav-bar' variant="light">
                <Container className='d-flex justify-content-around'>
                    <Navbar.Brand href="#home"><img src={logo} className='nav-logo' alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav me-auto text-left" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto  text-right ">
                            <Nav.Link href='#/'>Home</Nav.Link>
                            <Nav.Link href="/#About">About Us</Nav.Link>
                            <Nav.Link href="/#Contact">Contact Us</Nav.Link>
                            <Nav.Link href="#Support">Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Content />
        </div>
    )
}

export default Header