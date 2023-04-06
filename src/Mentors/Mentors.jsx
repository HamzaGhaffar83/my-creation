import React from 'react';
import '../Mentors/Mentors.css';
import { Container,Row,Col,Card,Button } from 'react-bootstrap';
import Mentor1 from '../Mentors/Sir-Shakeel.jpg';

export default function Mentors() {
  return (
    <div className='section'>
        <Container>
            <Row>
                <Col md={6} sm={6} lg={6}>
                    <h3 className='Mentor-skills'>Highly skilled Mentors</h3>
                </Col>
                <Col md={6} sm={6} lg={6}>
                    <p className='Mentors-Para'>We have highly skilled,talented,experienced mentors.Our mentors will guide<br /> you throughout the course.If you face problem he will be there to help you.Also<br /> our mentors give 1 to 1 support.</p>
                </Col>
            </Row>
            <Row>
                <div className='parent-Mentor'>
                <Col md={3} sm={3} lg={3}>
                    <div className='child-mentor'>
                    <Card style={{ width: '16rem',height: '350px' }}>
                    <Card.Img variant="top" src={Mentor1} className="Mentors-img"/>
                    <Card.Body>
                        <Card.Title className='mentors-name'> Muhammad Shakeel</Card.Title>
                        <Card.Text className='mentors-courses'>
                            Full Stack Development Mentor
                        </Card.Text>
                        <div className='play-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            </svg>
                            <p>6 Courses</p>
                        </div>
                    </Card.Body>
                    </Card>
                    </div>
                </Col>
                <Col md={3} sm={3} lg={3}>
                <div className='child-mentor'>
                <Card style={{ width: '16rem',height: '350px' }}>
                <Card.Img variant="top" src={Mentor1} className="Mentors-img"/>
                    <Card.Body>
                        <Card.Title className='mentors-name'>Muhammad Shakeel</Card.Title>
                        <Card.Text className='mentors-courses'>
                        Graphic Design Mentor
                        </Card.Text>
                        <div className='play-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            </svg>
                            <p>6 Courses</p>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                
                </Col>
                <Col md={3} sm={3} lg={3}>
                    <div className='child-mentor'>
                    <Card style={{ width: '16rem',height: '350px' }}>
                    <Card.Img variant="top" src={Mentor1} className="Mentors-img"/>
                    <Card.Body>
                        <Card.Title className='mentors-name'>Muhammad Shakeel</Card.Title>
                        <Card.Text className='mentors-courses'>
                        Digital Marketing Mentor
                        </Card.Text>
                        <div className='play-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            </svg>
                            <p>6 Courses</p>
                        </div>
                    </Card.Body>
                    </Card>
                    </div>
                
                </Col>
                <Col md={3} sm={3} lg={3}>
                    <div className='child-mentor'>
                    <Card style={{ width: '16rem', height: '350px'}}>
                     <Card.Img variant="top" src={Mentor1} className="Mentors-img"/>
                        <Card.Body>
                          <Card.Title className='mentors-name'>Muhammad Shakeel</Card.Title>
                        <Card.Text className='mentors-courses'>
                            Mobile App Development Mentor
                        </Card.Text>
                        <div className='play-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                            </svg>
                            <p>6 Courses</p>
                        </div>
                        </Card.Body>
                    </Card>
                    </div>
                
                </Col>
                </div>
            </Row>
            <Row>
                <Col md={12}>
                <Button variant="dark" className='seeMore'>See More</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
