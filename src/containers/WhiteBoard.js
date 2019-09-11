import React from 'react';

import TopicPills from "./topics/TopicPills";
import LessonTabs from "./lessons/LessonTabs";
import CourseList from "./courses/CourseList";
import ModuleList from "./modules/ModuleList";

class WhiteBoard extends React.Component {
    render() {
        return (
            <div className="container-fluid">

                <h1>Whiteboard</h1>

                <CourseList />

                <TopicPills/>

                <LessonTabs/>

                <ModuleList />

            </div>
        )
    }
}

export default WhiteBoard;