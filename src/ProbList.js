import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProbList extends Component {
  state = {
    probs: [ ]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        // console.log(res);
        this.setState ({
          probs: res.data.slice(0, 10)
        })
        console.log(this.state);
      }) 
  }
  render() {
    const { probs } = this.state;
    const probList = probs.length ? (
      probs.map(prob => {
        return(
          <div>
            <Link to={'/'+prob.id}>
              { prob.title }
            </Link>
          </div>
        )
      })
    ) : (
      <div className="center"></div>
    )
    return(
      <div>
        <h1>Hey There</h1>
        { probList }
      </div>
    );
  }
}

export default ProbList;