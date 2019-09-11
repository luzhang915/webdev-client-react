import React from 'react';

class TopicPills extends React.Component {
    render() {
        return (
            <div>
                <h5>Topic Pills</h5>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        {this.props.lesson.topics.map(
                            (lesson,i) => {
                            return (<a className="nav-link" href="#">{lesson.title}</a>)
                        }
                        )}
                    </li>
                </ul>
            </div>

        )
    }
}

export default TopicPills;