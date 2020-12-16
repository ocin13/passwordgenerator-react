import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, CardImg, CardText, CardTitle } from 'reactstrap';
import Baner from '../../component/baner/baner';
import Promotions from '../../component/promotions'
import{SERVICES} from '../../shared/services';
import './style.css';
import {Link, NavLink} from 'react-router-dom'

function Panel() {
    return (
        <div className="panel mb-5">
            <img src="../assets/images/logo.png" width="150px" height="150px" />
            <h3 className="mb-3"><span className="d-none d-sm-block">FREE ONLINE </span>PASSWORD GENERATOR <br></br>BY <span text="danger">HI-EDEN</span></h3>
            <p className="mb-5 d-none d-sm-block">create a strong multiples passwords for your accounts faster and safer</p>
            <div className="panel-button">
                <Button className="mr-2" color="danger" size="lg"><NavLink to="/generator" className="generator-Button">Generate <span className="d-none d-sm-block">Password For Your Account</span></NavLink></Button>
                <Button outline color="danger" size="lg"><Link to='/quickpassword' className="generator-Button-2">Quick Password</Link></Button>    
            </div>
            <div className="row shape-container">
                <div className="box mx-5"></div>
                <div className="circle mx-4"></div>
                <div className="box mx-5"></div>
                <div className="circle mx-4"></div>
                <div className="box mx-5"></div>
                <div className="circle mx-4"></div>
                <div className="box mx-5"></div>
                <div className="circle mx-4"></div>
            </div>
        </div>
    )
}

function Service({service}) {
    return (
        <div className="services">
            <span ><i className={service.image}></i></span>
            <div>
                <h5 className='mb-3'> {service.title} </h5>
                <p className="d-none d-sm-block"> {service.description} </p>
            </div>
        </div>
    )
}


class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            services: SERVICES
        }
    }
    render() {
        const services = this.state.services.map( service => {
            return(
                <div key={service.id} className="col-md-4">
                    <Service service={service} />
                </div>
            );
        });
        return (
            <div className="container-fluid">
                <Panel />
                <div className="section"> 
                    <div className='row row-content px-5'>
                        {services} 
                    </div>
                    <Promotions />
                </div>
                <Baner />
            </div>
        )
    }
}

export default Home;
