import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/problemdisplay.css';

const ProblemBar = (props) => {
    const problem = props.problemDetail;
    return(
        <div className="Prob-bar">
            <NavLink exact to={`/${problem.code}`} className="bar-link">Problem</NavLink>
            <NavLink to={`/${problem.code}/submission`} className="bar-link">Submission</NavLink>
            <NavLink to={`/${problem.code}/editorial`} className="bar-link">Editorial</NavLink>
        </div>
    );          
}

export default ProblemBar;