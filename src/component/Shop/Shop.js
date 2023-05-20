import React from 'react'
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap'
import './Shop.css'
import { abArr1, abUs, mainfruit,mainfruit2 } from './utill'
import NewSlides from '../News/NewSlides/NewSlides'
import { motion } from 'framer-motion'

const Shop = () => {
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

      <Container className='section'>
        <Row>
            {mainfruit}
        </Row>
      </Container>
      <Container className='section'>
        <Row>
            {mainfruit2}
        </Row>
      </Container>










      <NewSlides />
   
   </>
  )
}

export default Shop