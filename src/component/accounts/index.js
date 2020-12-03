import React, { Component } from 'react';
import './style.css';
import { ACCOUNTS} from '../../shared/accounts';
import {Card, CardTitle, CardText, Button,Modal,ModalBody,ModalFooter,ModalHeader,Form,Input,Label,Col} from 'reactstrap';
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
            accounts: ACCOUNTS,
            modalShow:false,
            value: {
                name: ''
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit(){
        const name = this.state.value;
        const newAcc = {

            name: name
        }
        newAcc.id = this.state.accounts.length;
        const newAccountsArray = this.state.accounts.concat(newAcc);
        this.setState({accounts: newAccountsArray});
    }

    toggleModal(){
        this.setState({modalShow: !this.state.modalShow})
    }
    render() {
        const accounts = this.state.accounts.map( account => {
            return(
                    <div key={account.id} className="col col-sm-3 mb-3">
                        <Account account={account}/>
                    </div>
            );
        });
        return (
            <div className="container text-center">
                <div>
                    <h3>Accounts Board</h3>
                    <h5>select your accounts or add a new one</h5>
                </div>
                <div className="row px-5 row-content">
                    {accounts}
                    <div className='col col-sm-3'>
                    <Card body inverse style={{ backgroundColor: '#e63325', borderColor: '#f54336' }}>
                            <Button color='success' onClick={() => this.toggleModal()}><i className="fa fa-plus-square-o" style={{fontSize:"8em"}}></i></Button>
                    </Card>
                    </div>
                </div>
                <div className="row">
                    <div className='col col-sm-3 mx-auto my-3'>
                        <Button color='danger' size='lg' className="px-5"><NavLink to='/accounts-password' className="continue-button">Continue</NavLink> <i className="fa fa-arrow-right"></i></Button>
                    </div>
                </div>
                <div>
                <Modal isOpen={this.state.modalShow} toggle={() => this.toggleModal()} >
                    <ModalHeader  toggle={() => this.toggleModal()} style={{backgroundColor: '#db592e'}}>Add Account</ModalHeader>
                    <ModalBody className='px-5' >
                        <form >
                            <label>
                            Essay:
                            <input type="text" onChange={(event) => this.setState({value: event.target.value})} />
                            </label>
                            <input type="submit" value="Submit" onClick={() => this.handleSubmit()}/>
                        </form>
                    </ModalBody>
                </Modal>
                </div>
            </div>

        )
    }
}

export default Accounts
