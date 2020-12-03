import React, { Component } from 'react';
import {Card,CardBody,Button, CardTitle} from 'reactstrap';
import {ACCOUNTS} from '../../shared/accounts'
import './style.css'

class Password extends Component{
    copyPassword = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
    }
    render(){
        return(
            <Card className="passwordCard">
                <CardTitle className='p-2 card-title'>{this.props.name} Password</CardTitle>
                <CardBody>
                    <textarea
                        className="password-area"
                        ref={(textarea) => this.textArea = textarea}
                        value={this.props.name}
                    />
                    <Button color="success" size="sm" onClick={() => this.copyPassword()}>Copy</Button>
                </CardBody>
            </Card>
        );
    }
}

class Passwords extends Component {
    constructor(props){
        super(props);
        this.state = {
            accounts: ACCOUNTS
        }
    }
    
    render() {
        const passwords = this.state.accounts.map( account => {
            let accName = account.name;
            return(
                <div key={account.id} className='col-12 col-sm-3 mb-3'>
                    <Password name={accName} />
                </div>
            );
        })
        return (
            <div className="container">
                <div className="col text-center row-content">
                    <h3><span className='d-none d-sm-block'>congratulations your passwords are ready</span> click to copy</h3>
                </div>
                <div className="row row-content">
                    {passwords}
                </div>
            </div>
        )
    }
}

export default Passwords
