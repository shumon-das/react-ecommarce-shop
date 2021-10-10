import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Navbarr = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">Sell&Buy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav 
                            className="my-2 my-lg-0"
                            style={{ maxHeight: '100px', marginLeft: 'auto' }}
                            navbarScroll
                        >
                            <Nav.Link href="/"><i className="fas fa-shopping-cart"></i> CART</Nav.Link>
                            <Nav.Link href="/login"><i className="fas fa-user"></i> Sign In</Nav.Link>
                    
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                
        </>
    )
}

export default Navbarr
