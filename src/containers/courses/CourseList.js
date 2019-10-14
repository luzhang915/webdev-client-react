import React from 'react';

import CourseRow from "./CourseRow";
import CourseService from "../../services/CourseService";

import './CourseListStyle.css';

class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.state = {
            courses: [],
            newCourse: {
                title: "",
                create_by: "me",
                instructor: "",
                seats: 0
            },
            title: "",
            create_by: "me",
            instructor: "",
            seats: 0
        };
    }

    componentDidMount() {
        this.courseService.findAllCourses()
            .then(courses => {
                this.setState({courses: courses})
            });
    }

    titleFormChanged = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    create_byFormChanged = (event) => {
        this.setState({
            create_by: event.target.value
        })
    };

    instructorFormChanged = (event) => {
        this.setState({
            instructor: event.target.value
        })
    };

    seatsFormChanged = (event) => {
        this.setState({
            seats: event.target.value
        })
    };

    createCourse = () => {
        this.setState({
            newCourse: {
                title: this.state.title,
                create_by: this.state.create_by,
                instructor: this.state.instructor,
                seats: this.state.seats
            }
        });
        this.courseService.createCourse(this.state.newCourse)
            .then(() => {
                this.courseService.findAllCourses()
                    .then((courses) => {
                        this.setState({courses:courses})
                    })
            });
        this.clearInput();
    };

    clearInput = () => {
        this.setState({
            title: "",
            create_by: "",
            instructor: "",
            seats: 0
        });
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

    render() {
        return (
            <div className="container-fluid">
                <h2>Course List</h2>
                <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr className="thead-dark ">
                            <th>Course Title</th>
                            <th>Created By</th>
                            <th>Instrctor</th>
                            <th>Seats Capacity</th>
                            <th></th>
                        </tr>
                        <tr>
                            <th><input ref="titleInput" onChange={this.titleFormChanged} className="form-control" placeholder={this.state.title}/></th>
                            <th><input ref="create_byInput" onChange={this.create_byFormChanged} className="form-control" placeholder={this.state.create_by}/></th>
                            <th><input ref="instructorInput" onChange={this.instructorFormChanged} className="form-control" placeholder="Jane Doe"/></th>
                            <th><input ref="seatsInput" onChange={this.seatsFormChanged} className="form-control" placeholder="100"/></th>
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
            </div>
        )
    }
}

export default CourseList;