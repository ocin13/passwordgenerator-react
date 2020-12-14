import React, { Component } from 'react'
import {Form,Row,Col,FormGroup,Label,Input, Button,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import './style.css';


export class Generator extends Component {
    constructor(props){
        super(props);
        this.state = {
                name: this.props.data.name,
                pin: this.props.data.pin,
                length: this.props.data.length
        }
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event){
        this.props.updateDataInput(this.state.name,this.state.pin,this.state.length);
        event.preventDefault();
      }
    render() {
        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem><NavLink to='/home'>Home</NavLink></BreadcrumbItem>
                    <BreadcrumbItem active>Generator</BreadcrumbItem>
                </Breadcrumb>
               <div className="head row-content">
                <h1>generate your password now</h1>
                <h5>Enter A Name And A Pin Number Of 4 Digits In Order To Generate Your Passwords<br /> Dont Forget To Check For The Additional Otions</h5>
               </div>
               <div className="passd-form">
                    <div className="passd-form-input">
                        <Form onSubmit={(event) => this.handleSubmit(event)}>
                            <Row form className="px-5 py-3">
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="name">Name:</Label>
                                    <Input type="text" name="name" id="name"  value={this.state.name} onChange={(event) => this.handleInputChange(event)}/>
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label for="pin">Pin:</Label>
                                    <Input type="number" name="pin" id="pin"  value={this.state.pin} onChange={(event) => this.handleInputChange(event)}/>
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
                                    <Input type="range" name="length"  className="slider" id="myRange" value={this.state.length} onChange={(event) => this.handleInputChange(event)} />
                                </FormGroup>
                            </Row>
                            <Col md={3} className='mx-auto my-3'>
                            <Button type="submit" value='Submit' color='danger' size='lg' className="px-5" onClick={(event) => this.handleSubmit(event)}><NavLink to='/accounts' className="continue-button">Continue <i className="fa fa-arrow-right"></i></NavLink></Button>
                            </Col>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Generator
