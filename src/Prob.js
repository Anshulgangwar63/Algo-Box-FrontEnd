import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Editor from './Editor';

class Prob extends Component {
    state = {
        post: null
    }
    toggle = () => {
        let x = document.getElementById("editor");
        let y = document.getElementById("post_text");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.width = "47%";
        } else {
            x.style.display = "none";
            y.style.width = "85%";
        }
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
          .then(res => {
              this.setState({
                  post: res.data
              })
          })
    }
    render() {
        const post = this.state.post ? (
            <div>
                <h2>{this.state.post.title}</h2>
                {this.state.post.body}
            </div>
        ) : (
            <div>Loading post...</div>
        )
        return(
            <div className="Post">
              <div className="content" id="post_text">
                { post }
              </div>
              <button onClick={this.toggle}>Hide/Show</button>
              <div id="editor">
                <Editor />
              </div>
            </div>
        );
    }
}

export default Prob;