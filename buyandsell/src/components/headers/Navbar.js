import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Navbarr = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>Sell&Buy</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav 
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px', marginLeft: 'auto' }}
                            navbarScroll
                        >
                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-shopping-cart"></i> CART</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/login">
                                <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                
        </>
    )
}

export default Navbarr
