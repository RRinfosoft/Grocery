import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../news.css'
import { carousel, carousel2, carousel3 ,carousel4} from '../utill';
import { Col, Container, Row } from 'react-bootstrap';
import { cardImg2 } from '../../About/utill';

const NewSlides = () => {
  return (
  <>
  {/* <div className='sky section'>
  <Carousel>
      <Carousel.Item>
      <div className='CarouselImg'>
      <img
          className="CarouselImg2"
          src={carousel}
          alt="First slide"
        />
      </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='CarouselImg'>
      <img
          className="CarouselImg2"
          src={carousel2}
          alt="First slide"
        />
      </div>
      </Carousel.Item>

      <Carousel.Item>
      <div className='CarouselImg'>
      <img
          className="CarouselImg2"
          src={carousel3}
          alt="First slide"
        />
      </div>
      </Carousel.Item>
    </Carousel>
    </div> */}

    <Container fluid className='section sky'>
        <Row>
            <Col sm={3}> 
            <div className='CarouselImg'>
                <img src={carousel} />
            </div>
            </Col>
            <Col sm={3}> 
            <div className='CarouselImg'>
                <img src={carousel2} />
            </div>
            </Col>
            <Col sm={3}> 
            <div className='CarouselImg'>
                <img src={carousel3} />
            </div>
            </Col>
            <Col sm={3}> 
            <div className='CarouselImg'>
                <img src={carousel4} />
            </div>
            </Col>
           
        </Row>
    </Container>
  </>
  )
}

export default NewSlides