import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/problemdisplay.css';

const ProblemBar = (props) => {
    const problem = props.problemDetail;
    console.log(problem.id);
    return(
        <div className="Prob-bar">
            <Link to={`/${problem.id}/problem`}>Problem</Link>
            <Link to={`/${problem.id}/submission`}>Submission</Link>
            <Link to={`/${problem.id}/editorial`}>Editorial</Link>
        </div>
    );          
}

export default ProblemBar;