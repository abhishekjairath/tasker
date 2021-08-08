import { DragDropContext } from 'react-beautiful-dnd';

import { TaskListComponent } from "../components/TaskList";
import { Status } from "../constants/status"

export const Tasks = () => {
/*
        - Filter -------------- Add New (open as modal)
        - Three swimlanes
        -
*/

    return (
        <DragDropContext onDragEnd={() => {}}>
            <TaskListComponent status={Status.todo} />
            <TaskListComponent status={Status.inProgress} />
            <TaskListComponent status={Status.done} />
        </DragDropContext>
    )
};