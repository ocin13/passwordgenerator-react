import React, { Component } from 'react';
import './style.css';
import {Breadcrumb, BreadcrumbItem, Media,} from 'reactstrap';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import {Link} from 'react-router-dom';

function Article({article}){
    return(
                        <Media className="px-5 py-4 mb-5 blogCard">
                            <Media left>
                                <img className="img-fluid" src={article.image} width="300px" height="250px" alt={article.title}/>
                            </Media>
                            <Media body className='px-3 pt-3'>
                                <Media heading className="blogTitle">
                                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                                </Media>
                                <p className="d-none d-md-block"> {article.subtitle}</p>
                                <h6 className="mt-3"> author: {article.author} </h6>
                            </Media>
                        </Media>
    );
}

class Blog extends Component {
    render() {
        const articles = this.props.articles.map(article => {
            return(
                <Fade in key={article.id}>
                    <Article article={article} />
                </Fade>
                
            );
        });
        const lastArticle = this.props.articles.length-1;
        const newArticle = this.props.articles.filter(article => article.id == +lastArticle)[0];
        return (
            <div className="container-fluid px-5 orangeBg">
                <Breadcrumb className="d-none d-md-block">
                    <BreadcrumbItem><Link to='/home' >Home</Link></BreadcrumbItem>
                    <BreadcrumbItem>Blog</BreadcrumbItem>
                </Breadcrumb>
                <div className="row row-content">
                    <div className="col-12">
                        <h2 className="mb-4">most recent post</h2>
                        <div className="orange-line mb-3"></div>
                        <FadeTransform
                            in
                            transformProps={{
                                exitTransform: 'scale(0.9) translateY(-30%)'
                            }}>
                            <Media className="px-5 py-4 blogCard">
                                <Media left>
                                    <img className="img-fluid" src={newArticle.image} width="300px" height="250px" alt={newArticle.title}/>
                                </Media>
                                <Media body className='px-3 pt-3'>
                                    <Media heading className="blogTitle">
                                        <Link to={`/blog/${newArticle.id}`}>{newArticle.title}</Link>
                                    </Media>
                                    <p className="d-none d-md-block"> {newArticle.subtitle}</p>
                                    <h6 className="mt-3"> author: {newArticle.author} </h6>
                                </Media>
                            </Media>
                        </FadeTransform>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="mb-4">recent</h2>
                        <Stagger in>
                            {articles}
                        </Stagger>
                            
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;
