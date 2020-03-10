import React, { Component } from 'react';
import axios from 'axios';
import Probcard from './Components/Problem/ProbCard';
class ProbList extends Component {
  state = {
    probs: [ ],
    loaded: false
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        // console.log(res);
        this.setState ({
          probs: res.data.slice(0, 10),
          loaded: true
        })
        console.log(this.state);
      }) 
  }
  render() {
    if(!this.state.loaded) {
      return <p>Loading</p>
    }
    return (
      <div>
      <Probcard probs={this.state.probs}/>
      </div>
    );
  }
}

export default ProbList;