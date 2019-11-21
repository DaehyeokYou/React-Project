import React, { Component } from 'react';
import './ArticleCompo.css';

class PostCompo extends Component {
    state = { }
    
    render() {
        return this.props.articles.map((article) => {
            return (
                <div className="article">
                    <div className="articleHead">
                        <div className="userImage">
                            <img className="userImageDetail" src={article.user_img} alt="userImg" />
                        </div>
                        <div className="userName">
                            {article.name}
                        </div>
                    </div>
                    <div>
                        <img className='articleImage' src={article.art_img} alt="articlImg" />
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