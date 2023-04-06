import React from 'react';
import banner from '../Banner/Banner.svg';
import '../Banner/Banner.css';
import { Container, Row, Col, Image } from 'react-bootstrap';



export default function Banner() {
    return (
        <div style={{backgroundColor:"#f8f9fa"}}>
            <Container style={{ backgroundColor: "#f8f9fa" }}>
                <div className='banner'>
                    <Row>
                        <Col md={6} style={{ paddingTop: "25px" }}>
                            <h1 style={{ fontWeight: "700", fontSize: "50px", paddingTop: "25px", fontFamily: "sans-serif" }}>Get world class Courses from world class mentors</h1>
                            <p style={{ color: "#9e9898", fontFamily: "sans-serif" }}>Get quality courses with us with the best price.Now you can get the best course
                                from us.We have top mentors around the globe
                            </p>
                            <Row>
                                <Col md={3}>
                                    <button className='btn btn-success' style={{ borderRadius: "revert", backgroundColor: "#2f2e41", borderColor: "#2f2e41", boxShadow: "none" }}>Get Started</button>
                                </Col>
                                <Col md={1} >
                                    <button style={{border:"none",background:"transparent"}}><svg xmlns="http://www.w3.org/2000/svg" href='#' width="40" height="40" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                    </svg></button>
                                    

                                </Col>
                                <Col md={8} style={{ paddingTop: '10px', paddingLeft: '20px' }}>
                                    <strong>How it works?</strong>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6} style={{paddingTop:"15px"}}>
                            <Image src={banner} style={{ width: "100%" }}></Image>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>

    )
}
