import React from "react";
import { Task } from "../../models/task";

export const TaskComponent = React.memo((props: Task) => {
    return (
        <div>
            <i>#{props.id}</i>
            <p>{props.title}</p>
            <p>{props.status}</p>
        </div>
    );
});
