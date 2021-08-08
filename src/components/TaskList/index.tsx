import { List } from "antd";
import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { Status, StatusTitle } from "../../constants/status"
import { Task } from "../../models/task"
import { AddTaskInput } from "../AddTaskInput";
import { DraggableTask } from "../DraggableTask";

type Props = {
    status: Status;
    tasks?: Task[];
    withPlaceholder?: boolean;
}

export const TaskListComponent = React.memo((props: Props) => {
    const tasks = (props.tasks || []) as Task[];
    const listName = `droppable-${props.status}`;
    const getListItem = (task: Task, index: number) => <DraggableTask task={task} index={index} />;

    return (
        <Droppable droppableId={listName}>
            {(provided) => (
                <div className={listName} {...provided.droppableProps} ref={provided.innerRef}>
                    <List
                        header={<h3>{StatusTitle[props.status]}</h3>}
                        itemLayout="vertical"
                        size="small"
                        dataSource={tasks}
                        renderItem={getListItem}
                        footer={props.withPlaceholder && <AddTaskInput />}
                        style={{
                            margin: '0px 4px',
                        }}
                    />
                </div>
            )}
        </Droppable>
    );
});
