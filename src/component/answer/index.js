import React, { Component } from 'react'
import './style.css';
import {Breadcrumb, BreadcrumbItem, Card,ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom'

export class Answer extends Component {
    render() {
        const answers = this.props.answers.map(answer => {
            return(
                <ListGroupItem ><Link className="link" to={`/info/${answer.id}`}>{answer.title}</Link></ListGroupItem>
            );
        });
        return (
            <div className="container">
                <Breadcrumb className="breadCrumb d-none d-md-block">
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to='/info'>Info</Link></BreadcrumbItem>
                    <BreadcrumbItem active> {this.props.answer.title}</BreadcrumbItem>
                </Breadcrumb>
                <div className="row row-content">
                    <div className="d-none d-md-block col-md-3 sideMenu">
                        <ListGroup flush>
                            {answers}
                        </ListGroup>
                    </div>
                    <div className="col-12 col-md-9 px-5">
                        <h2 className="mb-5"> {this.props.answer.title} </h2>
                        <div className="orange-line mb-5"></div>
                       <div>
                        <p className="answerText"> {this.props.answer.text} </p>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Answer
