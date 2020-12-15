import React, { Component } from 'react';
import './style.css'

export class BlogInfo extends Component {
    render() {
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h2 className="mb-4"> {this.props.article.title} </h2>
                        <div className="orange-line mb-3"></div>
                        <img className="img-fluid my-5" src={this.props.article.image} alt={this.props.article.title} width={600} height={550} />
                        <h6 className="mb-3"> {this.props.article.subtitle} </h6>
                        <p className="px-2 mb-5 articleText"> {this.props.article.text} </p>
                        <h6>author: {this.props.article.author} </h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogInfo
