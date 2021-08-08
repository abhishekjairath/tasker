import React from "react";

import { tasksData } from "../../api/fake"
import { Status } from "../../constants/status"
import { Task } from "../../models/task"
import { TaskComponent } from "../Task"

type Props = {
    status: Status;
}

export const TaskListComponent = React.memo((props: Props) => {
    const tasks = tasksData.filter((task) => task.status === props.status) as Task[];

    return (
        <ul>
            {tasks.map((task, i) => <li><TaskComponent key={i} {...task} /></li>)}
        </ul>
    );
});
