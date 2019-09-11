import React from "react";

const ModuleListItem = ({title}) =>
    <li className="list-group-item">
        {title}
        <span className="pull-right">
            <i style={{'marginRight': '8px'}} className="fa fa-trash"/>
            <i className="fa fa-pencil"/>
        </span>
    </li>

export default ModuleListItem;