import React, { Component } from 'react';
import ProbList from './ProbList';
import Prob from './Prob'
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={ProbList} />
        <Route path="/:post_id" component={Prob} />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
