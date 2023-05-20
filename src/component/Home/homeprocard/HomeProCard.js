import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";
import './Homepro.css'
import { our, our2, our3 } from '../utill';

const HomeProCard = () => {
    return (
        <>
            <Container>
                <p className='our-te'> {our}</p>
                <p className='lorem-text'>{our2} </p>
                <p className='lorem-text'>{our3}</p>
                <Row className='row-div'>
                    <Col sm={4}>
                        <div className='home-card-div zoom'>
                            <div className='img'>
                               <img className='set' src='image/stra.png' /> 
                            </div>
                            <p className='stra'>Strawberry</p>
                            <p className='per'>per Kg</p>
                            <p className='number'>85$</p>
                            <center>
                            <button className='add-btn'><BsFillCartFill/>  Add to cart</button>

                            </center>
                        </div>

                    </Col>
                    <Col sm={4}>
                        <div className='home-card-div zoom'>
                            <div className='img'>
                            <img className='sets' src='image/gra.jpg' /> 
                            </div><br />
                            
                            <p className='berry'>Berry</p>
                            <p className='per'>per Kg</p>
                            <p className='number'>70$</p>
                            <center>
                            <button className='add-btn'><BsFillCartFill/>  Add to cart</button>

                            </center>


                        </div>


                    </Col>
                    <Col sm={4}>
                        <div className='home-card-div zoom'>
                            <div className='img'>
                            <img className='set' src='image/lemon.png' /> 

                            </div>
                            <p className='stra'>Lemon</p>
                            <p className='per'>per Kg</p>
                            <p className='number'>35$</p>
                            <center>
                            <button className='add-btn'><BsFillCartFill/>  Add to cart</button>

                            </center>


                        </div>


                    </Col>
                </Row>
            </Container>
            <div></div>
            <br />
        </>
    )
}

export default HomeProCard