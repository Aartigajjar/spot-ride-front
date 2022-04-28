import React from 'react'
import './Header.css'
import logo from '../../images/LOGO.svg'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Content from '../Content/Content'

const Header = () => {
    return (
        <div>
            <Container className='d-flex justify-content-around'>
                <Navbar collapseOnSelect expand="lg" bg="" fixed='top' className='nav-bar' variant="light">

                    <Navbar.Brand href="#home" className='ml-auto'><img src={logo} className='nav-logo' alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle className='ms-auto' aria-controls="responsive-navbar-nav text-left"  />
                    <Navbar.Collapse  id="responsive-navbar-nav">
                        <Nav className="ms-auto  text-right ">
                            <Nav.Link href='#/'>Home</Nav.Link>
                            <Nav.Link href="/#About">About Us</Nav.Link>
                            <Nav.Link href="/#Contact">Contact Us</Nav.Link>
                            <Nav.Link href="#Support">Support</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </Container>
            <Content />
        </div>
    )
}

export default Header