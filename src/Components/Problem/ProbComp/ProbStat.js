import React from 'react';
import '../../../styles/ProbStat.css';
import EditorComp from './editorComp';

const ProbStat = ({ problemDetail }) => {
    let num = 0;
    const samples = problemDetail.sample_cases.map((scase) => {
        num++;
        return (
            <div className="problem-statement">
                <h4>Sample {num}</h4>
                <div>
                    <h5>Input</h5> 
                    <p className="problem-input">{scase.input}</p>
                    <h5>Output</h5> 
                    <p className="problem-input">{scase.output}</p>
                </div>
            </div>
        )
    });
    return (
        <div>
            <div className="problem-statement-body">
                <div className="problem-statement">
                    <p>{problemDetail.statement}</p>
                </div>
                <hr/>
                <h3 className="problem-body-header">Constraint</h3>
                <div className="problem-statement">
                    <p>{problemDetail.constraints}</p>
                </div>
                <hr/>
                <h3 className="problem-body-header">Input</h3>
                <div className="problem-statement">
                    <p>{problemDetail.input_format}</p>
                </div>
                <hr />
                <h3 className="problem-body-header">Output</h3>
                <div className="problem-statement">
                    <p>{problemDetail.output_format}</p>
                </div>
                <hr />
                <h3 className="problem-body-header">Sample Cases</h3>
                {samples}
            </div>
            <div className="editor-box">
                <EditorComp />
            </div>
        </div>
    )
}

export default ProbStat;