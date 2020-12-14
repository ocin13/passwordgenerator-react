import React from 'react';
import './style.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Breadcrumb, BreadcrumbItem ,Card,CardBody,CardHeader,CardText,CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom'

export default function Help() {
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link> </BreadcrumbItem>
                <BreadcrumbItem active>Help</BreadcrumbItem>
            </Breadcrumb>
            <div className="row text-center row-content">
                <div className="col">
                    <h1 className="mb-4">welcome to hi-Eden help center</h1>
                    <h6>find here answers for all your questions and learn new tips in how to create a secure passwords</h6>
                    <div className="col-12 col-md-8 mx-auto py-5">
                        <Form>
                            <FormGroup>
                                <Input bsSize="lg" placeholder='Type Your Question Here'/>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
            <div className="row row-content orangeBg">
                <div className="col-12 col-md-8">
                    <div className="col-12 col-md-6">
                        <Card body inverse className="help-cards">
                            <CardTitle tag="h5">General Info</CardTitle>
                            <CardText>basic info about hi-Eden and your data security.</CardText>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card body inverse className="help-cards">
                            <CardTitle tag="h5">Get Started Info</CardTitle>
                            <CardText>basic security information to help you to get started.</CardText>
                        </Card>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="col-12 col-md-6">
                        <Card body inverse className="help-cards">
                            <CardTitle tag="h5">Why Is Free</CardTitle>
                            <CardText>How Hi-Eden is Available free for his users.</CardText>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card body inverse className="help-cards">
                            <CardTitle tag="h5">Hi-Eden Project</CardTitle>
                            <CardText>Overview how hi-eden website got started and maintained.</CardText>
                        </Card>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className="col-12 col-md-6">
                        <Card body inverse className="help-cards">
                            <CardTitle tag="h5">WHi-Eden Blog</CardTitle>
                            <CardText>useful articles pubished by Hi-eden community about the latest web security updates.</CardText>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
