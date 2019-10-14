import React from 'react';

class TopicPills extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        {(this.props.lesson!=null) ? this.props.lesson.topics.map(
                            (lesson,i) => {
                            return (<a className="nav-link" href="#">{lesson.title}</a>)
                        }
                        ) : null}
                    </li>
                </ul>
            </div>

        )
    }
}

export default TopicPills;