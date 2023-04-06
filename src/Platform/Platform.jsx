import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import '../Platform/Platform.css';
import Pic1 from '../Platform/pic1.jpg';
import Pic2 from '../Platform/pic2.jpg';

export default function Platform() {
  return (
    <div className='platfrom'>
        <section>
            <Container>
            <Row>
                <div className='parent-platfrom'>
                <Col md={6}>
                    <div className='child-platform'>
                        <h4>
                            People Choose us<br/>for platform
                        </h4>
                    </div>
                    
                </Col>
                <Col md={6}>
                    <div className='child-platform'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam qui enim temporibus aliquam explicabo reiciendis, alias blanditiis laboriosam odit asperiores saepe vero perferendis voluptatem fugiat officia quae quod error nulla.</p>
                    </div>
                </Col>
                </div>
            </Row>
            <Row>
            <div className='Activities'>
                <Col >
                <Card style={{ width: '18rem',borderRadius:'20px',borderColor:'#efefe7',marginTop:"50px" }} className='platform-card' >
                    <Card.Img variant="top" src={Pic1} className='platform1'/>
                </Card>
                </Col>
                <Col >
                <Card style={{ width: '18rem',borderRadius:'20px',borderColor:'#efefe7',marginTop:"120px",marginLeft: "-210px" }} className='platform-card1' >
                    <Card.Img variant="top" src={Pic2} className='platform2'/>
                </Card>
                </Col>
                <Col >

                <div className='column-1'>

                    <Card className='card-2'>
                       <Card.Body >
                        <div className='platform-logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-heart" viewBox="0 0 16 16">
                            <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z"/>
                            </svg>
                          </div>
                        <Card.Title className='platform-heading'>Best Support System</Card.Title>
                            <p className='platform-para'>We take live Classes to give our students the best education.</p>
                        </Card.Body>
                    </Card>

                    <Card className='card-3'>
                       <Card.Body >
                        <div className='platform-logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                        <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                        </svg>
                       </div>
                        <Card.Title className='platform-heading'>3000+ Courses</Card.Title>
                            <p className='platform-para'>We take live Classes to give our students the best education.</p>
                        </Card.Body>
                    </Card>
                </div>
                
                </Col>
                <Col>
                    <div className='column-1'>
                    <Card className='card-2'>
                       <Card.Body >
                        <div className='platform-logo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                        </svg>
                       </div>
                        <Card.Title className='platform-heading'>Best Mentors</Card.Title>
                            <p className='platform-para'>We take live Classes to give our students the best education.</p>
                        </Card.Body>
                    </Card>


                    <Card className='card-3'>
                       <Card.Body >
                        <div className='platform-logo'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-palette2" viewBox="0 0 16 16">
                            <path d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 .5.5v5.277l4.147-4.131a.5.5 0 0 1 .707 0l3.535 3.536a.5.5 0 0 1 0 .708L10.261 10H15.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H3a2.99 2.99 0 0 1-2.121-.879A2.99 2.99 0 0 1 0 13.044m6-.21 7.328-7.3-2.829-2.828L6 7.188v5.647zM4.5 13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zM15 15v-4H9.258l-4.015 4H15zM0 .5v12.495V.5z"/>
                            <path d="M0 12.995V13a3.07 3.07 0 0 0 0-.005z"/>
                            </svg>
                        </div>
                        <Card.Title className='platform-heading'>Best Curriculum</Card.Title>
                            <p className='platform-para'>We take live Classes to give our students the best education.</p>
                        </Card.Body>
                    </Card>
                    
                    </div>
                </Col>
            </div>
            <div>
                <Col md={3}>
                
                </Col>
            </div>
            </Row>
            </Container>
        </section>
    </div>
  )
}
