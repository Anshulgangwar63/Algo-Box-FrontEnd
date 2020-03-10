import React,{Component} from 'react';
import '../../styles/problemdisplay.css'
import {Route, Switch } from 'react-router-dom';
import ProbStat from '../Problem/ProbComp/ProbStat';
import ProbSub from '../Problem/ProbComp/ProbSub';
import ProbEd from '../Problem/ProbComp/ProbEd';
import ProblemBar from './ProblemBar';


class Problem extends Component {
    constructor() {
        super();
        this.state = {
            problemDetail : null,
        }
    }

    componentDidMount() {
        const resp = {
            "error": false,
            "message": "success",
            "problem": {
                "sample_cases": [
                    {
                        "input": "123123",
                        "output": "123123"
                    },
                    {
                        "input": "111",
                        "output": "111"
                    }
                ],
                "tags": [],
                "created": "2020-03-08T12:43:38.498Z",
                "solved": 10,
                "attempted": 30,
                "_id": "5e64e87e3192b17be9a82663",
                "code": "1",
                "Author": "Anshul Gangwar",
                "statement": "This is a test Statement. This is a test Statement. This is a test Statement  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently",
                "name": "Test Problem",
                "input_format": "One single integer, that is the integer N. One single integer, that is the integer N. One single integer, that is the integer N",
                "output_format": "Print a single line contaning the integer N",
                "constraints": "1 <= N <= 10",
                "__v": 0
            }
        }
        this.setState({
            problemDetail: resp.problem
        })
    }

    render() {
        console.log(this.state.problemDetail);
        console.log(this.props.location);
        if(this.state.problemDetail == null) {
            return (
                <p>Loading</p>
            )
        }
        return(
            <div className="problem-page">
                <div className="problem-head-box">
                    <p className="problem-title">{this.state.problemDetail.name}</p>
                </div>
                <div className="problem-body">
                    <div className="problem-box_1">
                        <ProblemBar problemDetail = {this.state.problemDetail}/>
                        <Switch>
                            <Route exact path={`/${this.state.problemDetail.code}`}>
                                <ProbStat problemDetail = {this.state.problemDetail}/>
                            </Route>
                            <Route path={`/${this.state.problemDetail.code}/submission`}>
                                <ProbSub problemDetail = {this.state.problemDetail}/>
                            </Route>
                            <Route path={`/${this.state.problemDetail.code}/editorial`}>
                                <ProbEd problemDetail = {this.state.problemDetail}/>
                            </Route>
                        </Switch>
                    </div>
                    <div className="problem-box_2">
                        <p>Author : {this.state.problemDetail.Author}</p>
                        <hr />
                        <p>Submitted: {this.state.problemDetail.solved}</p>
                        <hr/>
                        <p>Attempted: {this.state.problemDetail.attempted}</p>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }

}

export default Problem;