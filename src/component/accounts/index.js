import React, { Component } from 'react';
import './style.css';
import {Card, CardTitle, CardText, Button,Modal,ModalBody,Breadcrumb, BreadcrumbItem,ModalHeader} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Account extends Component {
    constructor(props){
        super(props);
        this.state ={
            selected: false
        }
    }
    onSelectAccount(accountId){
        this.setState({selected: !this.state.selected})
    }
    render(){
        return (
            <Card body inverse style={{ backgroundColor: '#e63325', borderColor: '#f54336' }}>
                <CardTitle tag="h5">{this.props.account.name}</CardTitle>
                <CardText>create a custom password for your {this.props.account.name} account. </CardText>
                <Button onClick={() => this.onSelectAccount(this.props.account.id)}
                color={ this.state.selected ? 'primary' : 'success'}
                >{this.state.selected? 'Selected' : 'Select'}</Button>
          </Card>
        )
    }
}


export class Accounts extends Component {
    constructor(props){
        super(props);
        this.state = {
            accounts: this.props.accounts,
            modalShow:false,
            value: ''
        };
    }

    toggleModal(){
        this.setState({modalShow: !this.state.modalShow})
    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        const id = this.state.accounts.length;
        const newAcc = {
            id: id,
            name: this.state.value
        }
        this.setState({accounts: this.state.accounts.concat(newAcc)})
        this.props.updateAccounts(newAcc);
        event.preventDefault();
      }
    
    render() {
        console.log(JSON.stringify(this.state.accounts));
        let accounts = this.state.accounts.map( account => {
            return(
                    <div key={account.id} className="col-12 col-md-3 mb-3">
                        <Account account={account}/>
                    </div>
            );
        });
        return (
            <div className="container text-center">
                <Breadcrumb className="breadCrumb d-none d-md-block">
                    <BreadcrumbItem><NavLink to='/home'>Home</NavLink></BreadcrumbItem>
                    <BreadcrumbItem><NavLink to='/generator'>Generator</NavLink></BreadcrumbItem>
                    <BreadcrumbItem active>Accounts</BreadcrumbItem>
                </Breadcrumb>
                <div>
                    <h3>Accounts Board</h3>
                    <h5>select your accounts or add a new one</h5>
                </div>
                <div className="row px-5 row-content">
                    {accounts}
                    <div className='col-12 col-md-3'>
                    <Card body inverse style={{ backgroundColor: '#e63325', borderColor: '#f54336' }}>
                            <Button color='success' onClick={() => this.toggleModal()}><i className="fa fa-plus-square-o" style={{fontSize:"8em"}}></i></Button>
                    </Card>
                    </div>
                </div>
                <div className="row">
                    <div className='col-12 col-sm-3 mx-auto my-3'>
                        <Button color='danger' size='lg' className="px-5"><NavLink to='/passwords' className="continue-button">Continue</NavLink> <i className="fa fa-arrow-right"></i></Button>
                    </div>
                </div>
                <div>
                <Modal isOpen={this.state.modalShow} toggle={() => this.toggleModal()}  className="modal-account">
                    <ModalHeader  toggle={() => this.toggleModal()} style={{backgroundColor: '#db592e'}}>Add Account</ModalHeader>
                    <ModalBody className='px-5 modalBody'>
                        <form onSubmit={(event) => this.handleSubmit(event)} className="modalForm">
                            <label>
                            Account Name:
                            <input className='mx-1' type="text" name="value"  value={this.state.value} onChange={(event) => this.handleChange(event)} />
                            </label>
                            <input type="submit" value="Submit" onClick={() => this.toggleModal()}/>
                        </form>
                    </ModalBody>
                </Modal>
                </div>
            </div>

        )
    }
}

export default Accounts
