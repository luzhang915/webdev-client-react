import React from 'react';
import TopicPills from "../topics/TopicPills";

class LessonTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLessonIndex: 0
        }
    }

    selectLesson = (index) => {
        this.setState({
            selectedLessonIndex:index
        });
    };

    render() {
        return (
            <div>
                <h4>{this.props.module.title} Lession Tabs</h4>
                <ul className="nav nav-tabs">
                    {this.props.module.lessons.map(
                        (lesson,i) => {
                            return (
                                <li key={i} className="nav-item">
                                    <a onClick={ () => this.selectLesson(i)}
                                       className="nav-link active" href="#">{lesson.title}</a>
                                </li>
                            )
                        }
                    )}
                </ul>
                <TopicPills lesson={this.props.module.lessons[this.state.selectedLessonIndex]}/>
            </div>
        )
    }
}

export default LessonTabs;
