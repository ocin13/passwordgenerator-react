import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import './style.css'

function Contact(){
    return(
        <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb className="breadCrumb d-none d-md-block">
                        <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contact</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12 col-lg-6 px-5 d-none d-md-block">
                        <img className="logo-lateral mx-auto img-fluid" src="../assets/images/logo.png" />
                        <div className="row shape-container">
                            <div className="box1 mx-5">X</div>
                            <div className="circle1 mx-4">1</div>
                            <div className="box1 mx-5">%</div>
                            <div className="circle1 mx-4">?</div>
                            <div className="box1 mx-5">Y</div>
                            <div className="circle1 mx-4">@</div>
                            <div className="box1 mx-5">$</div>
                            <div className="circle1 mx-4">0</div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 px-5 pt-5">
                        <Form >
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="firstname">FirstName</Label>
                                    <Input type="email" name="first" id="firstname" placeholder="FirstName" />
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="lastname">LastName</Label>
                                    <Input type="password" name="password" id="lastname" placeholder="LastName" />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Row form>
                                <Col>
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" name="email" id="email" placeholder="Email" />
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="comment">Comment</Label>
                                <Input placeholder="Comment..." type="textarea" name="comment" id="comment" />
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" name="check" id="accept"/>
                                <Label for="accept" check>accept</Label>
                            </FormGroup>
                            <Button>Send</Button>
                            </Form>
                        </div>
                    </div>
        </div>
    );
}

export default Contact;