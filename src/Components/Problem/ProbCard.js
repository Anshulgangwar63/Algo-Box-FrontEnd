import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/probcardStyle.css';

const ProbCard = ({ probs }) => {
    const probList = probs.length ? probs.map(prob => {
        return(
            <div className="card" key={prob.id}>
                <div className="problem-part">
                    <p className="problem">{prob.title}</p>
                </div>
                <Link to={'/'+prob.id} style={{textDecoration:'none'}}>
                <div className="button-part">
                    <p>Solve</p>
                </div>
                </Link>
            </div>
        );
    }) : (
        <p>No problem</p>
    )
    return(
        <div>
        {probList}
        </div>
    )
}


export default ProbCard;