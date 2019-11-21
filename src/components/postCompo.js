import React, { Component } from 'react';
import './postCompo.css';

class PostCompo extends Component {
    state = { }
    
    render() {
        return this.props.articles.map((article) => {
            return (
                <div className="article">
                    <div className="articleHead">
                        {article.id}
                    </div>
                    <div className="articleImage">
                        <img src={article.img} alt="img" />
                    </div>
                    <div className="articleText">
                        <p>{article.text}</p>
                    </div>
                </div>
            );
        });
    }
}
// defaultProps 설정 
PostCompo.defaultProps = {
    value: 1
};
export default PostCompo;