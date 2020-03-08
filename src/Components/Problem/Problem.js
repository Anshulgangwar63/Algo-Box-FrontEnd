import React,{Component} from 'react';
import Editor from '../../Editor';
import '../../styles/problemdisplay.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProbStat from '../Problem/ProbComp/ProbStat';
import ProbSub from '../Problem/ProbComp/ProbSub';
import ProbEd from '../Problem/ProbComp/ProbEd';
import ProblemBar from './ProblemBar';

const Problem = (props) => {
    const problemDetail  = props.prob;
    // console.log(problemDetail.id);
    // const problemPath = `/${problemDetail.id}/problem`;
    // console.log(problemPath);
    return(
        <div className="problem-page">
            <div className="problem-head-box">
                <p className="problem-title">{problemDetail.title}</p>
            </div>
            <div>
                <ProblemBar problemDetail = {problemDetail}/>
            </div>
            <Switch>
                <Route path={`/${problemDetail.id}/problem`}>
                    <ProbStat />
                </Route>
                <Route path={`/${problemDetail.id}/submission`}>
                    <ProbSub />
                </Route>
                <Route path={`/${problemDetail.id}/editorial`}>
                    <ProbEd />
                </Route>
            </Switch>
            <Editor />
        </div>
    );
}

export default Problem;