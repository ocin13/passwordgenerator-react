import React, { Component } from 'react';
import {Card,CardText,CardBody,CardTitle,Button} from 'reactstrap';

export class QuickPassword extends Component {
    copyPassword = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
    }

    getSymbol(){
        let symbols = ["/", "#", "@","*","-","%","!","&","$","+"];
        let i = Math.floor(Math.random()*10);
        return symbols[i];
      }

      getString(){
        let symbols = ["a", "b", "c","d","e","f","g","h","i","j", "k", "l","m","n","o","p","q","r","s", "t", "u","v","w","x","y","z"];
        let i = Math.floor(Math.random()*26);
        return symbols[i];
      }

    render() {
        const password = this.getString() + this.getString() + this.getSymbol() + Math.floor(Math.random()*10) + Math.floor(Math.random()*10) + this.getString() + this.getString().toLocaleUpperCase()  + this.getString() + this.getSymbol() + Math.floor(Math.random()*10) + this.getString() + this.getString() + this.getSymbol();
        return (
            <div className="row row-content">
                <div className="col-12 text-center mb-5 mx-auto" >
                    <h4 style={{color: '#000'}}>Refresh to get new password</h4>
                </div>
                <div className="col-10 col-md-3 mx-auto">
                    <Card className="passwordCard">
                        <CardTitle className='p-2 card-title' style={{backgroundColor:"red"}}>Random Password</CardTitle>
                        <CardBody>
                            <textarea
                                className="password-area"
                                ref={(textarea) => this.textArea = textarea}
                                value={password}
                            />
                            <Button color="danger" size="sm" onClick={() => this.copyPassword()}>Copy</Button>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
}

export default QuickPassword
