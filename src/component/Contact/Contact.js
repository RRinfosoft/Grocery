import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './contact.css'
import { ImLocation2 } from "react-icons/im";
import { con2, conArr1, have, lorem, mainCon, map } from './utill'

const Contact = () => {
    return (
        <>

            <Container fluid className='back'>
                <Row>
                    <Col sm={12}>
                        <div >
                            <p className='abArr'>{conArr1}</p>
                            <p className='abUs'>{con2}</p>
                        </div>
                    </Col>
                </Row>
            </Container>


            {/* Form section */}
            <Container className='section'>

                <Row>
                    <Col sm={8}>
                        <div>
                            <p className='have'>{have}</p>
                            <p className='have2'>{lorem}</p>
                        </div>

                        <form className="row g-4 p-3 registration-form">
                            <div className="col-sm-6 mt-3 position-relative">
                                <input type="text" className="form-control" placeholder='Name'

                                />
                            </div>
                            <div className="col-sm-6 mt-3 position-relative">
                                <input type="text" className="form-control" placeholder='Email'

                                />
                            </div>
                            <div className="col-sm-6 mt-3 position-relative">
                                <input type="text" className="form-control" placeholder='Phone'

                                />
                            </div>
                            <div className="col-sm-6 mt-3 position-relative">
                                <input type="text" className="form-control" placeholder='Subject'

                                />
                            </div>
                            <Form.Group as={Col} controlId="formGridCity">
                                {/* <Form.Label className='remark'>Remarks</Form.Label> */}
                                <Form.Control as="textarea" placeholder='Massege' rows={8}


                                />
                            </Form.Group>
                        </form>
                        <button className='F-btn3'>Submit</button>

                    </Col>

                    <Col sm={4}>
                        <div className='sky2'>
                            {mainCon}
                        </div>
                    </Col>
                </Row>
            </Container>


            {/* map section */}
            <Container fluid className='section skyy'>
                <div className='icn'><ImLocation2 /><span className='map'>{map}</span></div>
                <Row>
                    <Col sm={12}>
                        <div className='section'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.196060779947!2d78.77054666508712!3d28.83302233233912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbc0611edfe1%3A0xa8422c0a52f2e022!2sKothiwal%20Nagar%2C%20Shankar%20Nagar%2C%20Malviya%20Nagar%2C%20Budh%20Bazaar%2C%20Moradabad%2C%20Uttar%20Pradesh%20244001!5e0!3m2!1sen!2sin!4v1671620767347!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={{ marginTop: "300px" }} ></div>




        </>
    )
}

export default Contact