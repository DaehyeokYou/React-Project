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
        <h1>Insta<span id='font-small'>Kilo</span>gram</h1>
        </div>
        <div className="App-intro">
          <PostCompo articles={this.state.articles}/>
        </div>
        
      </div>
    );
  }
}

export default App;
