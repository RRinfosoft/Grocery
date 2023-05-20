import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { FaShippingFast } from "react-icons/fa";
import { MdWifiCalling3 } from "react-icons/md";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import './Home.css'
import HomeProCard from './homeprocard/HomeProCard';
import HomeColumn from './HomeColumn/HomeColumn';
import HomeCarousel from './HomeCarousel/HomeCarousel';
import EndColumn from './EndColumn/EndColumn';
import EndCardParent from './EndCardParent/EndCardParent';
import NewSlides from '../News/NewSlides/NewSlides';
import { mainCard } from './utill';

const Home = () => {
    return (
        <>
            
                        <div className='background'>
                            <p className='fress-text slide-right'>FRESH & ORGANIC</p>
                            <p className='D-Text slide-right'>Delicious Seasonal Fruits</p>
                            <Link>
                                <button className='F-btn'>Fruits collection</button>
                                <button className='C-btn'>Contact Us</button>
                            </Link>
                        </div>
               


            <div className='T-card-div'>
                <Container>
                    <Row >
                        <Col className='C-item' sm={4}>
                            <div className='icon'>
                                <div className='ic-color'>
                                    <FaShippingFast />

                                </div>
                            </div>
                            <p className='free-text'>Free shipping</p>
                            <p className='wh-text'>When order over $75</p>


                        </Col>
                        <Col className='C-item' sm={4}>
                            <div className='icon'>
                                <div className='ic-color'>
                                    <MdWifiCalling3 />

                                </div>
                            </div>
                            <p className='free-text'> 24/7 Support</p>
                            <p className='wh-text'>Get support all day</p>


                        </Col>
                        <Col className='C-item' sm={4}>
                            <div className='icon'>
                                <div className='ic-color'>
                                    <HiOutlineReceiptRefund />

                                </div>
                            </div>
                            <p className='free-text'>Refund proper</p>
                            <p className='wh-text'>Get refund within 3 days!</p>


                        </Col>
                    </Row>
                </Container>
            </div>

                  {/* Card Section  */}

      <Container className='section'>
        <Row>
            {mainCard}
        </Row>
      </Container>

            <br />
            <HomeProCard />
            <HomeColumn />
            <HomeCarousel />
            <EndColumn />
            <EndCardParent /><br />
            <NewSlides />
            <br />


        </>
    )
}

export default Home