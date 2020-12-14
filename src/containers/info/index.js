import { Component } from "react";
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Breadcrumb, BreadcrumbItem ,ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import {ANSWERS} from '../../shared/answers'
import './style.css'
class Info extends Component {
    constructor(props){
        super(props);
        this.state= {
            answers: ANSWERS
        }
    }
    render(){
        const generaleArticles = this.state.answers.filter(answer => answer.tag == "general",[0]);
        const generales = generaleArticles.map(answer => {
            return(
                <ListGroupItem ><Link className="link" to={`/articles/${answer.id}`}>{answer.title}</Link></ListGroupItem>
            );
        });

        const startedArticles = this.state.answers.filter(answer => answer.tag == "started",[0]);
        const started = startedArticles.map(answer => {
            return(
                <ListGroupItem ><Link className="link" to={`/articles/${answer.id}`}>{answer.title}</Link></ListGroupItem>
            );
        });

        const futureArticles = this.state.answers.filter(answer => answer.tag == "future",[0]);
        const future = futureArticles.map(answer => {
            return(
                <ListGroupItem ><Link className="link" to={`/articles/${answer.id}`}>{answer.title}</Link></ListGroupItem>
            );
        });

        return (
            <div className="container">
               <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Info</BreadcrumbItem>
               </Breadcrumb>
               <div className="row row-content">
                   <div className="col">
                       <h2 className="mb-3">getting started</h2>
                       <h5>Everything you need to create, import your passwords, and get started with Hi-Eden.</h5>
                   </div>
               </div>
               <div className="row row-content">
                   <div className="col-12 col-md-6 mb-3">
                       <h2 className="mb-3">general</h2>
                        <ListGroup flush>
                            {generales}
                        </ListGroup>
                   </div>
                   <div className="col-12 col-md-6">
                       <h2 className="mb-3">getting started</h2>
                        <ListGroup flush>
                            {started}
                        </ListGroup>
                   </div>
               </div>
               <div className="row row-content">
                   <div className="col-12 col-md-6">
                       <h2 className="mb-3">future</h2>
                        <ListGroup flush>
                            {future}
                        </ListGroup>
                   </div>
               </div>
            </div>
        );
    }
}

export default Info;


