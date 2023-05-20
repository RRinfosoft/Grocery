import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './EndCard.css'
import { FaUserAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { mainCard2 } from '../utill';

const EndCardParent = () => {
    return (
        <>
            <Container className='section'>
                <Row>
                    {mainCard2}
                    {/* <Col sm={4}>
                        <div className='end-card-parent'>
                            <div className='cover-image'>
                                <img className='cover' src='image/stra2nd.jpg' />
                            </div>
                            <p className='you'>You will vainly look for fruit on it in autumn</p>
                            <p className='admin'><FaUserAlt />Admin <FaTrash />27 December 2022</p>
                            <p className='suspen'>Suspendisse pulvinar risus nec ante porttitor, nec gravida tortor accumsan.
                                Ut accumsan tristique quam a efficitur. </p>
                            <p className='read'>Read More <FaGreaterThan /></p>

                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='end-card-parent'>
                            <div className='cover-image'>
                                <img className='cover' src='image/stra3rd.jpg' />

                            </div>
                            <p className='you2'>A man's worth has its season,like tomato.</p>
                            <p className='admin'><FaUserAlt />Admin <FaTrash />27 December 2022</p>
                            <p className='suspen'>Suspendisse pulvinar risus nec ante porttitor, nec gravida tortor accumsan.
                                Ut accumsan tristique quam a efficitur. </p>
                            <p className='read'>Read More <FaGreaterThan /></p>
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className='end-card-parent'>
                            <div className='cover-image'>
                                <img className='cover' src='image/stra4th.jpg' />

                            </div>
                            <p className='you'>Good thoughts bear good fresh juicy fruit</p>
                            <p className='admin'><FaUserAlt />Admin <FaTrash />27 December 2022</p>
                            <p className='suspen'>Suspendisse pulvinar risus nec ante porttitor, nec gravida tortor accumsan.
                                Ut accumsan tristique quam a efficitur. </p>
                            <p className='read'>Read More <FaGreaterThan /></p>
                        </div>
                    </Col> */}
                </Row>
            </Container>

        </>
    )
}

export default EndCardParent