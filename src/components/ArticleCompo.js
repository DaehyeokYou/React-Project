import React, { Component } from 'react';
import './ArticleCompo.css';
import Normal from '../image/normal.png';

class PostCompo extends Component {
    state = {
        //articleStdIdx: 1, 
        articleLoadCnt: this.props.articleLoadCnt
    }
    
    componentDidMount(){
        window.addEventListener('scroll', this._infiniteScroll, true);
    }

    _infiniteScroll = () => {
        let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let clientHeight = document.documentElement.clientHeight;
        //console.log('scrollTop : ', scrollTop, ' + clientHeight : ', clientHeight);
        //console.log('scrollHeight : ', scrollHeight);
        if(scrollTop + clientHeight >= scrollHeight - 300) {
            this.setState({
                //articleStdIdx: this.state.articleStdIdx + 5
                articleLoadCnt: this.state.articleLoadCnt + 5
            });
        }
    }
    render() {
        console.log('render');
        return this.props.articles.map((article) => {
            // if ( this.state.articleStdIdx <= article.r_id && article.r_id < this.state.articleStdIdx + this.state.articleLoadCnt) {
            if ( article.r_id <= this.state.articleLoadCnt) {
                //console.log(article.r_id);
                return (
                    <div className="article">
                        <div className="articleHead">
                            <div className="userImage">
                                <img className="userImageDetail" src={article.user_img} alt="userImg" />
                            </div>
                            <div className="userName">
                                {article.r_id + article.name}
                            </div>
                        </div>
                        <div>
                            <img className='articleImage' src={article.art_img} alt="articlImg" />
                        </div>
                        <div className='articleState'>
                            <div className='stateDiv'>
                                <img src ={Normal} className='stateBtn' onClick={() => alert('좋아요!')} />
                            </div>
                            <div className ='updateDiv'>
                                <button className ='updateBtn'onClick={() => alert('수정하기!')}>수정</button>
                            </div>
                        </div>
                        <div className="articleText">
                            <p>{article.text}</p>
                        </div>
                    </div>
                );
            } else {
                return;
            }
        });
    }
}
// defaultProps 설정 
PostCompo.defaultProps = {
    articleLoadCnt: 5
};
export default PostCompo;