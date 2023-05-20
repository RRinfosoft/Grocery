import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './foot.css'
import { FaGreaterThan } from "react-icons/fa";
import Lastfooter from './Lastfooter/Lastfooter';
import { ab, ab2, get, get2, get3, get4, mainArrow, page, subs, subs2 } from './utill';

const Footer = () => {
    return (
        <>
            <Container fluid>
                <Row className='footer'>
                    <Col sm={3}>
                        <div className='footer-colimn'>
                            <p className='F-head'>{ab}</p>
                            <hr className='hr' />
                            <p className='contray'>{ab2}</p>

                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className='footer-colimn'>
                            <p className='F-head'>{get}</p>
                            <hr className='hr' />
                            <p className='address'>{get2}</p>
                            <p className='address'>{get3}</p>
                            <p className='address'>{get4}</p>

                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className='footer-colimn'>
                            <p className='F-head'>{page}</p>
                            <hr className='hr' />
                            <p className='pages'>{mainArrow}</p>
                            {/* <p className='pages'><FaGreaterThan /> About</p>
                            <p className='pages'><FaGreaterThan /> Shop</p>
                            <p className='pages'><FaGreaterThan /> News</p>
                            <p className='pages'><FaGreaterThan /> Contact</p> */}

                        </div>
                    </Col>
                    <Col sm={3}>
                        <div className='footer-colimn'>
                            <p className='F-head'>{subs}</p>
                            <hr className='hr' />
                            <p className='to'>{subs2}</p>
                            <input className='input' placeholder='Email' />
                        </div>
                    </Col>

                </Row>
            </Container>
            
            <Lastfooter />
        </>
    )
}

export default Footer