import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import WhiteBoard from "./containers/WhiteBoard";
import HelloWorld from "./HelloWorld";
import CourseEditor from "./containers/courses/CourseEditor";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to="/whiteboard"> WhiteBoard </Link> |
                    <Link to="/hello"> Hello </Link>
                    <Route path='/whiteboard' component={WhiteBoard}/>
                    <Route path='/hello' component={HelloWorld}/>
                    <Route path='/course/:courseId' component={CourseEditor}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);