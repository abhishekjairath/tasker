import { Input } from "antd";
import { Status } from "../../constants/status";
import { createTask } from '../../api/tasks-http.services';

export const AddTaskInput = () => {
    const addTask = (e: any) => {
        const title = e.target.value;
        const newTask = {
            title,
            status: Status.inProgress,
            id: '24',
        }
        createTask(newTask).then(() => e.target.value = '');
    }
    return <Input placeholder="Add new task" type="text" onPressEnter={addTask} allowClear={true} />;
};
