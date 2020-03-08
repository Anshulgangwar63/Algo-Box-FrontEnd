import React, { Component } from 'react';
import ProbList from './ProbList';
import Prob from './Prob'
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Main/Navbar';
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Navbar />
        <Route exact path="/" component={ProbList} />
        <Route path="/:post_id" component={Prob} />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
