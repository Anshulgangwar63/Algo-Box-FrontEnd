import React,{Component} from 'react';
import Editor from '../../Editor';
import '../../styles/problemdisplay.css'
import { BrowserRouter, Route } from 'react-router-dom';
import ProbStat from '../Problem/ProbComp/ProbStat';
import ProbSub from '../Problem/ProbComp/ProbSub';
import ProbEd from '../Problem/ProbComp/ProbEd';
import ProblemBar from './ProblemBar';

const Problem = (props) => {
    const problemDetail  = props.prob;
    // console.log(problemDetail.id);
    return(
        <div className="problem-page">
            <div className="problem-head-box">
                <p className="problem-title">{problemDetail.title}</p>
            </div>
            <div>
                <ProblemBar problemDetail = {problemDetail}/>
            </div>
            <BrowserRouter>
                <Route exact path={`/${problemDetail.id}/problem`} component={ProbStat}/>
                <Route exact path={`/${problemDetail.id}/submission`} component={ProbSub} />
                <Route exact path={`/${problemDetail.id}/editorial`} component={ProbEd} />
            </BrowserRouter>
            <Editor />
        </div>
    );
}

export default Problem;