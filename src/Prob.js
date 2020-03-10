import React, { Component } from 'react';
import axios from 'axios';
import Problem from './Components/Problem/Problem';
import './styles/problemdisplay.css';

class Prob extends Component {
    state = {
        problemDetail: null,
        loaded:false
    }

    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
          .then(res => {
              this.setState({
                  problemDetail: res.data,
                  loaded:true,
              })
          })
    }
    render() {
        if(!this.state.loaded) {
            return <p>Loading .....</p>
        }

        return(
            <div className="Post">
                <Problem prob={this.state.problemDetail}/>
            </div>
        );
    }
}

export default Prob;