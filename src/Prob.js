import React, { Component } from 'react';
import axios from 'axios';
import Editor from './Editor';
import Problem from './Components/Problem/Problem';
import './styles/problemdisplay.css';

class Prob extends Component {
    state = {
        problemDetail: null,
        loaded:false
    }
    // toggle = () => {
    //     let x = document.getElementById("editor");
    //     let y = document.getElementById("post_text");
    //     if (x.style.display === "none") {
    //         x.style.display = "flex";
    //         y.style.width = "47%";
    //     } else {
    //         x.style.display = "block";
    //         y.style.width = "85%";
    //     }
    // }
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
              {/* <div className="content" id="post_text">
                { post }
              </div>
              
              <button onClick={this.toggle}>Hide/Show</button>
              <div id="editor">
                <Editor />
              </div> */}
            </div>
        );
    }
}

export default Prob;