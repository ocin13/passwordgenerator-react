import React, { Component } from 'react';
import {Card,CardBody,Button, CardTitle,BreadcrumbItem,Breadcrumb} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import './style.css'

class Password extends Component{
    copyPassword = () => {
        const el = this.textArea
        el.select()
        document.execCommand("copy")
    }
    //encrypt the letters
    encryptWord(word = this.props.data.name){
    let n = word.length;
    let suffix = word.slice(n/2);
    let newWord = word + suffix;
    let changedWord =   newWord.replace(/a/gi,"z");
    let changedWord01 = changedWord.replace(/b/gi,"y");
    let changedWord02 = changedWord01.replace(/c/gi,"x");
    let changedWord03 = changedWord02.replace(/d/gi,"w");
    let changedWord04 = changedWord03.replace(/e/gi,"v");
    let changedWord05 = changedWord04.replace(/f/gi,"u");
    let changedWord06 = changedWord05.replace(/g/gi,"t");
    let changedWord07 = changedWord06.replace(/h/gi,"s");
    let changedWord08 = changedWord07.replace(/i/gi,"r");
    let changedWord09 = changedWord08.replace(/j/gi,"q");
    let changedWord10 = changedWord09.replace(/k/gi,"p");
    let changedWord11 = changedWord10.replace(/l/gi,"o");
    let changedWord12 = changedWord11.replace(/m/gi,"n");
    let changedWord13 = changedWord12.replace(/n/gi,"m1n");
    let changedWord14 = changedWord13.replace(/o/gi,"l2o");
    let changedWord15 = changedWord14.replace(/p/gi,"k3p");
    let changedWord16 = changedWord15.replace(/q/gi,"j4q");
    let changedWord17 = changedWord16.replace(/r/gi,"i5r");
    let changedWord18 = changedWord17.replace(/s/gi,"h6s");
    let changedWord19 = changedWord18.replace(/t/gi,"g7t");
    let changedWord20 = changedWord19.replace(/u/gi,"f8u");
    let changedWord21 = changedWord20.replace(/v/gi,"e9v");
    let changedWord22 = changedWord21.replace(/w/gi,"d10w");
    let changedWord23 = changedWord22.replace(/x/gi,"c11c");
    let changedWord24 = changedWord23.replace(/z/gi,"a12z");
    return changedWord24;
      
    }
    //encrypt the pin
    encryptPin(pin = this.props.data.pin){
        let newPin = Math.floor(pin/100);
        return newPin;
      }
    //accounts symbol
    symbolAcc(pin = this.props.data.pin){
    let symbols = ["/", "#", "@","*","-","%","!","&","$","+"];
    let n = Math.floor(pin/1000);
    return symbols[n];
    }
    //get account initial
    accInitial(name = this.props.name){
        let accName = name.slice(0,2);
        return accName;
    }
    render(){
        const prePassword = this.encryptWord() + this.encryptPin();
        const slicedPrePassword = prePassword.slice(0,this.props.data.length-4)
        const accIni = this.accInitial().toUpperCase();
        const password = slicedPrePassword+ accIni + this.symbolAcc(); 
        return(
            <Card className="passwordCard">
                <CardTitle className='p-2 card-title'>{this.props.name} Password</CardTitle>
                <CardBody>
                    <textarea
                        className="password-area"
                        ref={(textarea) => this.textArea = textarea}
                        value={password}
                    />
                    <Button color="success" size="sm" onClick={() => this.copyPassword()}>Copy</Button>
                </CardBody>
            </Card>
        );
    }
}

class Passwords extends Component {
    
    render() {
        const passwords = this.props.accounts.map( account => {
            let accName = account.name;
            return(
                <div key={account.id} className='col-12 col-sm-3 mb-3'>
                    <Password name={accName} data={this.props.data}/>
                </div>
            );
        })
        return (
            <div className="container pt-5">
                <Breadcrumb>
                    <BreadcrumbItem><NavLink to='/home'>Home</NavLink></BreadcrumbItem>
                    <BreadcrumbItem><NavLink to='/generator'>Generator</NavLink></BreadcrumbItem>
                    <BreadcrumbItem><NavLink to='/accounts'>Accounts</NavLink></BreadcrumbItem>
                    <BreadcrumbItem active>Passwords</BreadcrumbItem>
                </Breadcrumb>
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
