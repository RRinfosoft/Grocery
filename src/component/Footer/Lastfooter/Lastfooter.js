import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './last.css'

const Lastfooter = () => {
  return (
    <>
    <Container fluid>
        <Row className='last-footer'>
            <Col sm={12}>
                <p className='copy'>Copyrights@2023-<span className='ori'>Rishi Raj saini,Ravi Sanker,</span>All Rights Reserved.</p>
                <p className='copy2'>Distributed By-<span className='ori'>RRINFOSOFT</span></p>
            </Col>
        </Row>
    </Container>
    
    </>
  )
}

export default Lastfooter