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
                <ul className="nav nav-tabs">
                    {(this.props.module!=null) ? this.props.module.lessons.map(
                        (lesson,i) => {
                            return (
                                <li key={i} className="nav-item">
                                    <a onClick={ () => this.selectLesson(i)}
                                       className="nav-link" href="#">{lesson.title}</a>
                                </li>
                            )
                        }
                    ) : null}
                </ul>
                <TopicPills lesson={(this.props.module!=null) ? this.props.module.lessons[this.state.selectedLessonIndex] : null}/>
            </div>
        )
    }
}

export default LessonTabs;
