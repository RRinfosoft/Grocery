import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './colmn.css'
import { BsFillCartFill } from "react-icons/bs";


const HomeColumn = () => {
    return (
        <>
            <Container fluid>
                <Row className='column'>
                    <Col sm={6}>
                        <div className='circle'>
                            <p className='percent'>30%</p>
                            <p className='off'>Off per Kg</p>
                        </div>
                        <div className='coiumn-img'>
                            <img className='set' src='image/rr.png' />

                        </div>

                    </Col>


                    <Col sm={6}>
                        <p className='of'> <span className='deal'>Deal</span> of the Month</p>
                        <p className='hikan'>HIKAN STRWABERRY</p>
                        <p>Vestibulum rutrum, risus nec facilisis mattis, est justo sagittis felis, non varius velit tellus et velit.
                            Aliquam vitae placerat nisl. Nullam ex lacus, consequat quis tellus id, fringilla accumsan magna.
                            Vestibulum pretium elit arcu, bibendum convallis ex luctus ut. Proin eu ex mi. Donec diam sapien,
                            gravida id tellus in, sodales gravida libero. Aenean ut lacus vel mi auctor rutrum. Proin nec auctor diam
                         nec lobortis orci. Proin bibendum diam vehicula, sollicitudin mi in, vehicula nisi.</p>
                         <div className='box'>
                            {/* <Row> */}
                                {/* <Col sm={3}> */}
                                    <div className='three'>
                                        <div className='oo'>00</div>
                                        <p className='text'>Days</p>

                                    </div>
                                {/* </Col> */}
                                {/* <Col sm={3}> */}
                                    <div className='three'>
                                        <div className='oo'>00</div>
                                        <p className='text'>Hours</p>

                                    </div>
                                {/* </Col> */}
                                {/* <Col sm={3}> */}
                                    <div className='three'>
                                        <div className='oo'>00</div>
                                        <p className='text'>Mins</p>

                                    </div>
                                {/* </Col> */}
                                {/* <Col sm={3}> */}
                                    <div className='three'>
                                        <div className='oo'>00</div>
                                        <p className='text'>Secs</p>

                                    </div>
                                {/* </Col> */}
                            {/* </Row> */}
                            </div>
                            <button className='Bs'> <BsFillCartFill /> Add to Cart</button>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeColumn