import React, { Component } from 'react'
import {Form,Row,Col,FormGroup,Label,Input, Button} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import './style.css';


function Password() {
    return (
        <div className="passd-form">
            <div className="passd-form-input">
                <Form>
                    <Row form className="px-5 py-3">
                        <Col md={6}>
                        <FormGroup>
                            <Label for="name">Name:</Label>
                            <Input type="name" name="name" id="name" placeholder="Ex: Sister's pet" />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="pin">Pin:</Label>
                            <Input type="pin" name="pin" id="pin" placeholder="Ex: Brother's birth year" />
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row className="px-5 py-3">
                        <Col md={2}>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" /> Use Degits
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" /> Use Special Caracteres
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" /> Use UpperCase
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" /> Use LowerCase
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" /> Use Special Warnings
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={2}>
                            <FormGroup check>
                                <Label check>
                                <Input type="checkbox" /> Avoid Symbols
                                </Label>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="px-5 py-3">
                        <FormGroup className="slidecontainer">
                            <Label for="length" className="mb-3">Password Length:</Label>
                            <Input type="range" name="length"  className="slider" id="myRange"/>
                        </FormGroup>
                    </Row>
                    <Col md={3} className='mx-auto my-3'>
                        <Button color='danger' size='lg' className="px-5"><NavLink to='/accounts' className="continue-button">Continue</NavLink> <i className="fa fa-arrow-right"></i></Button>
                    </Col>
                </Form>
            </div>
        </div>
    )
}


export class Generator extends Component {
    render() {
        return (
            <div className="container">
               <div className="head row-content">
                <h1>generate your password now</h1>
                <h5>Enter A Name And A Pin Number Of 4 Digits In Order To Generate Your Passwords<br /> Dont Forget To Check For The Additional Otions</h5>
               </div>
               <Password />
            </div>
        )
    }
}

export default Generator
