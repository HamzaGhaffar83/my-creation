import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import '../Footer/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <Container>
            <Row>
                <div className='br'><hr /></div>
                <Col md={6}>
                <div className='footer-right'>
                    <h2>Courselo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda deleniti aut maxime.</p>
                </div>
                
                </Col>

                <Col md={2} style={{ paddingTop:'66px'}}>
                    <div className='footer-list-items'>
                    <a href='#About'>About</a>
                     <ul>
                        <li>Categories</li>
                        <li>Features</li>
                        <li>Contact us</li>
                     </ul>
                     </div>
                
                </Col>
                <Col md={2} style={{ paddingTop:'66px'}}>
                    <div className='footer-list-items'>
                    <a href='#About'>Company</a>
                    <ul>
                        <li>Hire IO</li>
                        <li>Stories</li>
                        <li>Mentors</li>
                    </ul>
                    </div>
                </Col>
                <Col md={2} style={{ paddingTop:'66px'}}>
                    <div className='footer-list-items'>
                  <a href='#About'>Any Questions?</a>
                <ul>
                    <li>hello@coursole.com</li>
                    <li>hamzaghaffar370@gmail.com</li>
                    <li>ticer.pk</li>
                </ul>
                    </div>
                </Col>

             
                
            </Row>


            <Row>
            <div className='footer-bottom'>
                <Col md={6} sm={12}>
                    <p style={{color:'white',fontFamily:'sans-serif'}}>© 2023 Tareen Education Foundation, P.O Box 54660, Lahore-Pakistan.</p>
                </Col>


                <Col md={6} sm={12}>
                    <p style={{color:'white',fontFamily:'sans-serif',float:'right'}}>Developed By: Hamza Ghaffar</p>
                </Col>
            </div>
            </Row>
        </Container>
    </div>
  )
}
