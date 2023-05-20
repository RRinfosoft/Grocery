import React from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
import './About.css'
import {
  abArr1, abUs, abWhy, cardImg2, cardtitle, cardusb, colImg2, colImg3, data, dec, dis, fifty, img, lasttitle1, lasttitle2, lasttitle3, mainCard, maincaro, maintext,
  maintext2, maintitle1, maintitle2, maintitle3, of, our, our2, pic1, pic2, pic3, sal, subtitle1, subtitle2, subtitle3, text
} from './utill'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <Container fluid className='back'>
        <Row>
          <Col sm={12}>
            <div >
              <p className='abArr'>{abArr1}</p>
              <p className='abUs'>{abUs}</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* second section */}
      {/* Why FruitKha */}
      <Container className='section'>
        <Row>
          <Col sm={6}>
            <p className='abwhy'>{abWhy}</p>
            <Row>
              <Col sm={6}> <div>{maintext}</div></Col>
              <Col sm={6}> <div>{maintext2}</div></Col>

            </Row>

          </Col>
          <Col sm={6}>
            <div className='abImg'>
              <img className='abImg2' src={img} />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Third section */}
      <Container fluid className='section2'>
        <Row>
          <Col sm={6}>

            <div >
              <p className='dec'>{dec} <span className='dis'>{dis}</span></p>

            </div>

            <motion.div animate={{ rotate: -90 }} className='motion'>

              <p>
                <p className='sal'> {sal}
                  <span className='fifty2'>{fifty}</span>
                  <span className='of2'>{of}</span>
                </p>
              </p>
            </motion.div>
            <p className='text'>{text}</p>
            <button className='F-btn2'>Shop Now</button>

          </Col>
          <Col sm={6}>
            <Row>
              <Col sm={4}>
                <div className='stro'>
                  <img className='stro2' src={colImg2} />
                </div></Col>
              <Col sm={4}>
                <div className='stro'>
                  <img className='stro2' src={colImg2} />
                </div></Col>
              <Col sm={4}>
                <div className='stro'>
                  <img className='stro2' src={colImg2} />
                </div></Col>
            </Row>
            <div className='stro'>
              <img className='stro2' src={colImg3} />
            </div>
          </Col>
        </Row>
      </Container>


      {/* Team section team section */}


      <Container className='section'>
        <p className='our'>{our}<span className='our2'>{our2}</span></p>
        <center>
          <hr className='hrc' />
        </center>
        <p className='data'>{data}</p>
        <Row>
          {mainCard}
        </Row>
      </Container>


      {/* testimonial Carousel testimonial Carousel */}
      <Container style={{ marginTop: "100px" }}>
        <Row>
          <Col sm={12}>

            <Carousel>
              <Carousel.Item>
                <div className="caroImg">
                  <img className="caroImg2" src={pic1} />
                </div>

                <center>  <p className='star'>★★★★★★★★★</p></center>

                <h3 className='main1'>={maintitle1}</h3>
                <h6 className='sub1'>{subtitle1}</h6>
                <p className='last1'>{lasttitle1}</p>
              </Carousel.Item>

              <Carousel.Item>
                <div className="caroImg">
                  <img className="caroImg2" src={pic1} />
                </div>
                <center>  <p className='star'>★★★★★★★★★</p></center>
                <h3 className='main1'>={maintitle2}</h3>
                <h6 className='sub1'>{subtitle2}</h6>
                <p className='last1'>{lasttitle2}</p>
              </Carousel.Item>

              <Carousel.Item>
                <div className="caroImg">
                  <img className="caroImg2" src={pic2} />
                </div>
                <center>  <p className='star'>★★★★★★★★★</p></center>

                <h3 className='main1'>={maintitle3}</h3>
                <h6 className='sub1'>{subtitle3}</h6>
                <p className='last1'>{lasttitle3}</p>

              </Carousel.Item>
            </Carousel>


            {/* <Carousel>
              <Carousel.Item>
                <div className="caroImg">
                  <img className="caroImg2" src={pic1} />
                </div>
                <Carousel.Caption>
                  <h3 className='main1'>={maintitle1}</h3>
                  <h6 className='sub1'>{subtitle1}</h6>
                  <p className='last1'>{lasttitle1}</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="caroImg">
                  <img className="caroImg2" src={pic2} />
                </div>
                <Carousel.Caption>
                  <h3 className='main1'>={maintitle2}</h3>
                  <h6 className='sub1'>{subtitle2}</h6>
                  <p className='last1'>{lasttitle2}</p>
                </Carousel.Caption>
              </Carousel.Item> <Carousel.Item>
                <div className="caroImg">
                  <img className="caroImg2" src={pic3} />
                </div>
                <Carousel.Caption>
                  <h3 className='main1'>={maintitle3}</h3>
                  <h6 className='sub1'>{subtitle3}</h6>
                  <p className='last1'>{lasttitle3}</p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel> */}

          </Col>
        </Row>
      </Container>



    </>
  )
}

export default About