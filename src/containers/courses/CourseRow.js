import React from 'react';
import { Link } from 'react-router-dom';

class CourseRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/${this.props.course.id}`} className="btn btn-outline-secondary btn-block">
                        {this.props.course.title}
                    </Link>
                </td>
                <td>{this.props.course.create_by}</td>
                <td>{this.props.course.instructor}</td>
                <td>{this.props.course.seats}</td>
                <td><button className="btn btn-danger"
                            onClick={() =>
                                this.props.deleteCourse(this.props.course.id)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default CourseRow;