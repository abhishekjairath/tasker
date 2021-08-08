import { Draggable } from "react-beautiful-dnd";
import { Task } from "../../models/task";

import { TaskComponent } from "../Task";

export const DraggableTask = (props: { task: Task; index: number; }) => {
  return (
      <Draggable key={props.task.id} draggableId={props.task.id} index={props.index}>
          {(provided) =>
              <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                  <TaskComponent  {...props.task} />
              </div>
          }
      </Draggable>
  )
};