import React, { Component } from 'react';
import Editor from './Editor'
import {  } from "module";
import './App.css'


class App extends Component {
  toggle = () => {
    let x = document.getElementById("edit");
    let y = document.getElementById("texxt");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.width = "47%";
    } else {
      x.style.display = "none";
      y.style.width = "85%";
    }
  }
  render() {
    return (
      
      <div className="App">
      <div className="cnt" id = "texxt"><h1>IDE</h1>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
      </div>
      <button onClick={this.toggle}>Hide/Show</button>
      <div id="edit">
      <Editor />
      </div>
      </div>
    );
  }
}

export default App;
