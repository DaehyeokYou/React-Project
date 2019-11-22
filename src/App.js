import React, { Component } from 'react';
import './App.css';
import PostCompo from './components/ArticleCompo.js'
import data from "./MOCK_DATA.json";

class App extends Component {
  state = {
    articles: data
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h2> Insta<span id='font-small'>Kilo</span>gram</h2>
        </div>
        <div className="App-intro">
          <PostCompo articles={this.state.articles}/>
        </div>
        <div className="App-footer">
          아이콘 제작자 <a href="https://www.flaticon.com/kr/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon">www.flaticon.com</a>
        </div>
      </div>
    );
  }
}

export default App;
