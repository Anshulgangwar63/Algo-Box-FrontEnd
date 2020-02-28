import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
      language : 'cpp',
    }
  }
  editorDidMount(editor, monaco) {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange = (newValue, e) => {
    this.setState({
      ...this.state,
      code: newValue
    })
    // console.log('onChange', newValue, e);
  }
  handleChange = (e) => {
    this.setState({
      language: e.target.value
    })
    console.log(e.target.value);
  }
  toggle = () => {
    let x = document.getElementById("toggle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
    <div>
      {/* <button onClick={this.toggle}>Hide/Show</button> */}
      {/* <div id="toggle"> */}
      <select id="lang" onChange={this.handleChange}>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="javascript">JavaScript</option>
      </select>
      <MonacoEditor
        width="650"
        height="600"
        language={this.state.language}
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
      {/* </div> */}
      </div>
    );
  }
}

export default Editor;