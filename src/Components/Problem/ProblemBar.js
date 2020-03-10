import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import '../../styles/problemdisplay.css';
import ProbStat from '../Problem/ProbComp/ProbStat';
import ProbSub from '../Problem/ProbComp/ProbSub';
import ProbEd from '../Problem/ProbComp/ProbEd';

const ProblemBar = (props) => {
    const problem = props.problemDetail;
    console.log(problem.code);
    return(
        <div className="Prob-bar">
            <NavLink exact to={`/${problem.code}`} className="bar-link">Problem</NavLink>
            <NavLink to={`/${problem.code}/submission`} className="bar-link">Submission</NavLink>
            <NavLink to={`/${problem.code}/editorial`} className="bar-link">Editorial</NavLink>
        </div>
    );          
}

export default ProblemBar;