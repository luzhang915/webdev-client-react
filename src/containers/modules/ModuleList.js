import React from "react";

import LessonTabs from "../lessons/LessonTabs";
import ModuleListItem from "./ModuleListItem";

class ModuleList extends React.Component {
    constructor() {
        super();
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

    // renderModuleList() {
    //     let modules = this.state.modules.map( (module, i) =>
    //         <ModuleListItem key={i}
    //                         title={module.title}/>
    //     );
    //     return modules;
    // }

    createModule = () => {
        var module = {title: this.state.title};
        this.state.modules.push(module);
        this.setState({"modules": this.state.modules})
    };

    render() {
        return (
            <div>
                <h3>Module List {this.props.course.title}</h3>
                <h3>Module List {this.props.course.modules[0].title}</h3>
                <input className="form-control"
                       onChange={this.titleChanged}
                       placeholder="title"/>
                <button onClick={this.createModule} className="btn btn-primary btn-block">Add Module</button>
                <ul className="list-group">
                    {this.props.course.modules.map(
                        (module, i) => {
                            return (
                                <li onClick={() => this.selectModule(i)} key={i}>{module.title}</li>
                    )})}
                </ul>
                <LessonTabs module={this.props.course.modules[this.state.selectedModuleIndex]}/>
            </div>
        )
    }
}

export default ModuleList;