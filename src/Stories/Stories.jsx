import React from 'react';
import { Container,Row,Col,Card } from 'react-bootstrap';
import '../Stories/Stories.css';
import Pic1 from '../Stories/img1.jpg'; 
import Pic3 from '../Stories/img3.jpg';

export default function Stories() {
  return (
    <div className='parent-stories'>
        <Container>
            <Row>
                <div className='child-stories'>
                <Col md={6}>
                    <h4>Mentor Story </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit.</p>
                </Col>
                <Col md={6}>
                    <div className='arrow-icons'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
                    </div>
                </Col>
                </div>
            </Row>

        <Row>
        <div className='stories-card'>
            <Col md={4}>

            <Card style={{ width: '22.3rem',borderRadius:"10px",height: "195px" }} className="st-card-1">
            <Card.Body>
                <Card.Title className='stories-title'>Highly Skilled</Card.Title>
                <Card.Text className='stories-para'>
                Lorem ipsum dolor, sit amet consectetur highly adipisicing elit. Quam quod at quos <br />iusto maiores dolorum 
                </Card.Text>
                <div className='d-flex'>
                    <div>
                    <img src={Pic1} alt='' className='rounded-circle' width="35px"/>
                    </div>
                    <div className='mentor-card-1'>
                        <h5>Muhammad Shakeel</h5>
                        <p>Web Design Mentor</p>
                    </div>
                </div>
            </Card.Body>
            </Card>

            </Col>
            <Col md={4}>

            <Card style={{ width: '22.3rem',borderRadius:"10px",height: "195px" }} className="st-card-2">
            <Card.Body>
                <Card.Title className='stories-title'>Top Class Mentors</Card.Title>
                <Card.Text className='stories-para'>
                Lorem ipsum dolor, sit amet consectetur highly adipisicing elit. Quam quod at quos <br />iusto maiores dolorum 
                </Card.Text>
                <div className='d-flex'>
                    <div>
                    <img src={Pic1} alt='' className='rounded-circle' width="35px"/>
                    </div>
                    <div className='mentor-card-1'>
                        <h5>Muhammad Asif</h5>
                        <p>Web Develper Mentor</p>
                    </div>
                </div>
            </Card.Body>
            </Card>
            
            </Col>
            <Col md={4}>

            <Card style={{ width: '22.2rem',borderRadius:"10px",height: "195px" }} className="st-card-3">
            <Card.Body>
                <Card.Title className='stories-title'>Highly Recommanded</Card.Title>
                <Card.Text className='stories-para'>
                Lorem ipsum dolor, sit amet consectetur highly adipisicing elit. Quam quod at quos <br />iusto maiores dolorum 
                </Card.Text>
                <div className='d-flex'>
                    <div>
                    <img src={Pic3} alt='' className='rounded-circle' width="35px"/>
                    </div>
                    <div className='mentor-card-1'>
                        <h5>Hamza Ghaffar</h5>
                        <p>Student</p>
                    </div>
                </div>
            </Card.Body>
            </Card>
            
            </Col>
        </div>
        </Row>
        </Container>
    </div>
  )
}
