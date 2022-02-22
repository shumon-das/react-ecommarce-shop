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
                            <LinkContainer to="/datatable">
                                <Nav.Link><i className="fas fa-table"></i> Data Table</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/table">
                                <Nav.Link><i className="fas fa-users"></i> Users</Nav.Link>
                            </LinkContainer>
                             <LinkContainer to="/products">
                                <Nav.Link><i className="fas fa-shopping-cart"></i> Products</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/cart">
                                <Nav.Link><i className="fas fa-shopping-cart"></i> CART</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/aboutus">
                                <Nav.Link><i className="fas fa-info"></i> About Us</Nav.Link>
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
