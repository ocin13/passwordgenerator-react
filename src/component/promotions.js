import React, { Component } from 'react'
import { PROMOTIONS } from '../shared/promotions';

function Promotion({promotion}) {
    return (
        <div className="row row-content px-5">
            <div className={`col-12 col-sm-5 ${promotion.style}`}>
                <img className="img-fluid" src={promotion.image} width="300px" height="250px" alt={promotion.title}/>
            </div>
            <div className="col-12 col-sm-7">
                <h3> {promotion.title} </h3>
                <p className="d-none d-sm-block"> {promotion.text} </p>
            </div>
        </div>
    )
}


class Promotions extends Component {
    constructor(props){
         super(props);
         this.state = {
             promotions: PROMOTIONS
         }
    }
    render() {
        const promotions = this.state.promotions.map( promotion => {
            return(
                <Promotion promotion={promotion} />
            );
        });
        return (
            <div>
                {promotions}
            </div>
        )
    }
}

export default Promotions;
