import React, { Component } from 'react';
import './style.css';
import {Input,Button, FormGroup, Row, Col} from 'reactstrap'

export class NewsLetter extends Component {
    render() {
        return (
            <div className="row row-content">
                <div className="col-8 mx-auto row-content text-center">
                    <h3 className="mb-5">subscribe to the newsletter and get the latest info</h3>
                    <FormGroup>
                        <Row>
                            <Col md={2} className="mb-3">
                                <Button color="danger" size="lg">Subscripe</Button>
                            </Col>
                            <Col md={10}>
                                <Input size="lg"/>
                            </Col>
                        </Row>
                    </FormGroup>
                </div>
            </div>
        )
    }
}

export default NewsLetter
