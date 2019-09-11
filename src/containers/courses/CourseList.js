import React from 'react';

import CourseCard from "../../CourseCard";
import CourseRow from "./CourseRow";
import CourseService from "../../services/CourseService";

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            courses: [],
            newCourse: {}
        };
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses})
            });
    }

    titleFormChanged = (event) => {
        this.setState({newCourse:{
            title: event.target.value
            }})
    };

    createCourse = () => {
        this.courseService.createCourse(this.state.newCourse)
            .then((course) => {
                this.courseService.findAllCourses()
                    .then((courses) => {
                        this.setState({courses:courses})
                    })
            })
    };

    deleteCourse = (courseId) => {
        this.courseService.deleteCourse(courseId)
            .then((course) => {
                this.courseService.findAllCourses()
                    .then((courses) => {
                        this.setState({courses:courses})
                    })
            });
    };

    // render() {
    //     return (
    //         <div className="container">
    //             <h2>Course List</h2>
    //             <div className="card-deck">
    //                 <CourseCard />
    //                 <CourseCard />
    //                 <CourseCard />
    //                 <CourseCard />
    //             </div>
    //         </div>
    //     )
    // }

    render() {
        return (
            <div className="table-responsive-sm">
                <h2>Course List</h2>
                <table className="table table-hover">
                    <thead>
                        <tr className="thead-dark">
                            <th scope="col">Title</th>
                            <th scope="col"></th>
                        </tr>
                        <tr>
                            <th><input onChange={this.titleFormChanged} className="form-control" placeholder="CS0000"/></th>
                            <th><button onClick={this.createCourse} className="btn btn-primary">Add</button></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.courses.map((course,index) =>
                            <CourseRow key={index}
                                       deleteCourse={this.deleteCourse}
                                       course={course}/>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default CourseList;