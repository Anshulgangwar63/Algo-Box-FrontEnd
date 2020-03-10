import React from 'react';
import Editor from '../../../Editor';

class EditorComp extends React.Component {
    state = {
        lang:null,
    }
    handleChange= (e) => {
        console.log("this is from ",e.target.value);
        this.setState({
            lang: e.target.value,
        })
    }
    render() {
        return(
            <div>
                <div className="editor-bar">
                    <select id="lang" onChange={this.handleChange}>
                        <option value="#">Choose</option>
                        <option value="cpp">C++</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="javascript">JavaScript</option>
                    </select>
                </div>
                <Editor lang={this.state.lang}/>
            </div>
        );
    }
}


export default EditorComp;