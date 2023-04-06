import React from 'react';
import '../CoursesCategories/Courses-Categories.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Web from '../CoursesCategories/web-design.jpeg';
import { Row,Col } from 'react-bootstrap';
import UI from '../CoursesCategories/Ui-design.jpg';
import Coding from '../CoursesCategories/coding.jpg';
export default function CoursesCategories() {
  return (
    <div className='parent-container'>
    <div className='container'>
      <div className='parent'>
      <Row>
        <Col className='colum'>
        <Card style={{ width: '21rem' }} className="HoverDesign">
      <Card.Img variant="top" src={Web}></Card.Img>
      <Card.Body>
        <Card.Title className='course-title'>Web Design</Card.Title>
        <Card.Text className='course-Para'>
        Web design refers to the design of websites
        </Card.Text>
        <span className='dollar'>$100.00</span>
        <Button variant="primary" className='Enroll'>Enroll Now</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col className='colum'>
        <Card style={{ width: '21rem' }} className="HoverDesign">
      <Card.Img variant="top" src={UI}></Card.Img>
      <Card.Body>
        <Card.Title className='course-title'>Ui/Ux Design</Card.Title>
        <Card.Text className='course-Para'>
        Learn Ui/Ux design with more easy process
        </Card.Text>
        <span className='dollar'>$180.00</span>
        <Button variant="primary" className='Enroll'>Enroll Now</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col className='colum'>
        <Card style={{ width: '21rem' }} className="HoverDesign">
      <Card.Img variant="top" src={Coding}></Card.Img>
      <Card.Body>
        <Card.Title className='course-title'>Coding</Card.Title>
        <Card.Text className='course-Para'>
        Become a professional developer in 6 months
        </Card.Text>
        <span className='dollar'>$210.00</span>
        <Button variant="primary" className='Enroll'>Enroll Now</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
            <Button variant="dark" className='seeMore'>See More</Button>
        </Col>
      </Row>
      <div><br style={{border:"2"}}/></div>
      
      </div>
    </div>
    </div>
    
  );
}
