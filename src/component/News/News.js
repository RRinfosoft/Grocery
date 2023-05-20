import React from 'react'
import './news.css'
import { abArr1,abUs, mainCard,mainCard2 } from './utill'
import { Container,Row,Col } from 'react-bootstrap'
import NewSlides from './NewSlides/NewSlides'


const News = () => {
  return (
 <>
     <Container fluid className='back'>
        <Row>
          <Col sm={12}>
            <div >
              <p className='abArr2'>{abArr1}</p>
              <div>
             
              </div>
              <p className='abUs'>{abUs}</p>
              <hr />
            </div>
          </Col>
        </Row>
      </Container>



      {/* Card Section  */}

      <Container className='section'>
        <Row>
            {mainCard}
        </Row>
      </Container>
      <Container className='section'>
        <Row>
            {mainCard2}
        </Row>
      </Container>

      <NewSlides />
       
 </>
  )
}

export default News