import React from 'react';
import '../Partner/Partner.css';
import { Container,Row,Col } from 'react-bootstrap';
import Partner1 from '../Partner/partner1.png';
import Partner2 from '../Partner/partner4.png';
import Partner3 from '../Partner/partner3.png';
import Partner5 from '../Partner/partner5.png';
import Partner6 from '../Partner/partner7.png';


export default function Partner() {
  return (
    <div>
        <Container>
            <div className='partner'>
            <Row>
                <Col md={3}>
                    <div className='investor'></div>
                    <strong >Our Trusted Partner & our proud investor around the globe</strong>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col md={2}>
                            <img src={Partner1} alt='' className='img'
                            />
                        </Col>
                        <Col md={2}>
                            <img src={Partner2} alt='' className='img'
                            />
                        </Col>
                        <Col md={2}>
                            <img src={Partner3} alt='' className='img'
                            />
                        </Col>
                        <Col md={2}>
                            <img src={Partner5} alt='' className='img'
                            />
                        </Col>
                        <Col md={2}>
                            <img src={Partner6} alt='' className='img'
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            </div>
        </Container>
    </div>
  );
}
