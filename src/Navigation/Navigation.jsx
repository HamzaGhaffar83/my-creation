import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import '../Navigation/Navigation.css';


export default function Navigation() {
    return (
        <>
            <div className='main'>
                <Container fluid style={{ backgroundColor: 'white' }}>
                    <Container> 
                            <Navbar bg="white" sticky="top" collapseOnSelect expand="lg" >
                                <Col md={3}>
                                <Navbar.Brand href="#home" className='logo'>Courselo</Navbar.Brand>
                                </Col>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Col md={6}>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="justify-content-center " id='navbar' style={{ width: "100%" }}>
                                        <Nav.Link href="#home" className='me-4'>Home</Nav.Link>
                                        <Nav.Link href="#link" className='me-4'>Courses</Nav.Link>
                                        <Nav.Link href="#link" className='me-4'>Mentors</Nav.Link>
                                        <Nav.Link href="#link" className='me-4'>About</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                                </Col>
                                {/* <div md={3}>
                                    <Col style={{ marginLeft: "-210px" }}>
                                        <Nav.Link className='sign-in' href="#" style={{ color: 'black' }}>Sign In</Nav.Link>

                                    </Col>

                                    <Col>
                                        &nbsp;&nbsp;&nbsp;&nbsp;<button type='button' style={{ marginTop: "20px", float: 'center', marginLeft: "-5px", }} className='btn btn-success ' id='button'>Get Started</button>
                                    </Col>
                                </div> */}
                            </Navbar>
                    </Container>
                </Container>
            </div>
        </>
    )
}
