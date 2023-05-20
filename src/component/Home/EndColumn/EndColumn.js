import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import './End.css'
import { colImg3, dec, dis, fifty, of, sal, text } from '../utill'
import { motion } from 'framer-motion'

const EndColumn = () => {
  return (
    <>
    <Container fluid className='section sky2'>
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
           
            <div className='stro23'>
              <img className='stro23' src={colImg3} />
            </div>
          </Col>
        </Row>
        {/* <Row className='end'>
            <Col sm={6}>
                <div className='end-col'>
                    <p className='decem-text'>December sale is on!</p>
                    <p className='with'>with big <span className='dis'>Discount....</span></p>
                    <p className='sale'>Sale!<span className='fifty'>50%</span>off</p>
                    <p className='upto'>Upto</p>

                    <center>
                <button className='shop-btn'>Shop Now</button>

                    </center>
                </div>
            </Col>
            <Col sm={6}>
                <div className='end-col'>
                    <img className='enx-col'  src='image/ore.png' />

                </div>
            </Col>
        </Row> */}
    </Container>
    
    
    </>
  )
}

export default EndColumn