// import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './carousel.css'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { AiFillStar } from "react-icons/ai";

const HomeCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className='carouselss'>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <div className='caro-circle'>
                                        <img
                                            className="dblock"
                                            src="image/pix3.jpg"
                                        />
                                    </div>
                                    <center>
                                        <h1>Jacob sikim</h1>
                                        <h6>Local Shop Owner</h6>
                                        <p>
                                            Vestibulum in ultrices diam, sit amet sollicitudin massa. Mauris viverra vulputate augue, maximus dignissim lorem ornare eget. Mauris ac tortor rutrum, vehicula orci ac, congue mauris. Aenean aliquet sed nisl nec placerat. Duis egestas gravida magna, in pharetra nunc vulputate in. Ut malesuada imperdiet vulputate. Praesent tempor elit eu pharetra vulputate.</p>
                                        <div className='icn'>
                                            <AiFillStar /><AiFillStar /><AiFillStar />
                                        </div>
                                    </center>
                                </Carousel.Item>




                                <Carousel.Item>
                                    <div className='caro-circle'>
                                        <img
                                            className="dblock"
                                            src="image/pix2.jpg"
                                        />
                                    </div>
                                    <center>
                                        <h1>Shweta Tiwari</h1>
                                        <h6>Local Shop Owner</h6>
                                        <p>
                                            Vestibulum in ultrices diam, sit amet sollicitudin massa. Mauris viverra vulputate augue, maximus dignissim lorem ornare eget. Mauris ac tortor rutrum, vehicula orci ac, congue mauris. Aenean aliquet sed nisl nec placerat. Duis egestas gravida magna, in pharetra nunc vulputate in. Ut malesuada imperdiet vulputate. Praesent tempor elit eu pharetra vulputate.</p>
                                        <div className='icn'>
                                            <AiFillStar /><AiFillStar /><AiFillStar />
                                        </div>
                                    </center>
                                </Carousel.Item>




                                <Carousel.Item>
                                    <div className='caro-circle'>
                                        <img
                                            className="dblock"
                                            src="image/pix4.jpg"
                                        />

                                    </div>
                                    <center>
                                        <h1>David Niph</h1>
                                        <h6>Local Shop Owner</h6>
                                        <p>
                                            Vestibulum in ultrices diam, sit amet sollicitudin massa. Mauris viverra vulputate augue, maximus dignissim lorem ornare eget. Mauris ac tortor rutrum, vehicula orci ac, congue mauris. Aenean aliquet sed nisl nec placerat. Duis egestas gravida magna, in pharetra nunc vulputate in. Ut malesuada imperdiet vulputate. Praesent tempor elit eu pharetra vulputate.</p>
                                        <div className='icn'>
                                            <AiFillStar /><AiFillStar /><AiFillStar />
                                        </div>
                                    </center>
                                </Carousel.Item>


                            </Carousel>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row className='video'>
                    <Col sm={6}>
                        <div className='video-sec'>
                          
                        <video width="80%" height="300" controls autoPlay>
                                <source src="image/videos.mp4" type="video/mp4" />
                            </video>

                        </div>

                    </Col>
                    <Col sm={6}>
                        <div className='video-sec'>
                            <p className='since'>Since Year 1999</p>
                            <p className='fru'><span className='we'>We are</span> Fruitkha</p>
                            <p className='para'>
                                Pellentesque mattis, enim faucibus suscipit vestibulum, orci turpis tincidunt felis, nec tristique mi mi non magna.
                                Phasellus sed viverra purus. Integer mauris dolor, pellentesque nec mi a, commodo rhoncus est. Quisque sed accumsan nisl.
                                Aenean rutrum non lacus ac dapibus. Ut tempus est sit amet auctor pretium. Vestibulum non ipsum massa.
                            </p>
                            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mi odio, viverra et hendrerit eu, tincidunt vitae purus. .</p>
                            <button className='kn-btn'>Know More</button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeCarousel