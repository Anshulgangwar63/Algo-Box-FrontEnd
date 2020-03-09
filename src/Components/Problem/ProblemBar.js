import React from 'react';
import {Link, Router, Switch,Route} from 'react-router-dom';
import '../../styles/problemdisplay.css';
import ProbStat from '../Problem/ProbComp/ProbStat';
import ProbSub from '../Problem/ProbComp/ProbSub';
import ProbEd from '../Problem/ProbComp/ProbEd';

const ProblemBar = (props) => {
    const problem = props.problemDetail;
    return(
        <div className="Prob-bar">
            <Link to={`/${problem.id}/problem`}>Problem</Link>
            <Link to={`/${problem.id}/submission`}>Submission</Link>
            <Link to={`/${problem.id}/editorial`}>Editorial</Link>
        </div>
    );          
}

export default ProblemBar;