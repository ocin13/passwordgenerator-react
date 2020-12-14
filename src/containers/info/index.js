import { Component } from "react";
import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import './style.css'

export default function Info() {
    return (
        <div>
           <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Info</BreadcrumbItem>
           </Breadcrumb>
        </div>
    );
}


