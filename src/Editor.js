import React from 'react';
import MonacoEditor from 'react-monaco-editor';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
      language : 'cpp',
    }
    console.log(props);
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
  }

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    return (
    <div>
      <MonacoEditor
        width="950"
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