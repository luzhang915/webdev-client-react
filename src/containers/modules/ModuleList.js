import React from "react";

import LessonTabs from "../lessons/LessonTabs";

class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedModuleIndex: 0
        };
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
    }

    selectModule = (index) => {
        this.setState({
            selectedModuleIndex: index
        });
    };

    titleChanged(event) {
        this.setState({title: event.target.value});
    }

    createModule = () => {
        var module = {title: this.state.title};
        if (!this.state.modules) {
            this.setState({modules : []});
        }
        this.state.modules.push(module);
        this.setState({"modules": this.state.modules})
    };

    render() {
        return (
            <div>
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>
                <button onClick={this.createModule} className="btn btn-primary btn-block">Add Module</button>
                <br/>
                <ul className="list-group list-group-horizontal">
                    {this.props.course.modules.map(
                        (module, i) => {
                            return (
                                <li className={(this.state.selectedModuleIndex===i) ? "list-group-item active" : "list-group-item"}
                                    onClick={() => this.selectModule(i)}
                                    key={i}>{module.title}</li>
                    )})}
                </ul>
                <LessonTabs module={this.props.course.modules[this.state.selectedModuleIndex]}/>
            </div>
        )
    }
}

export default ModuleList;