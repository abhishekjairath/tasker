import { useEffect, useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Row, Col } from 'antd';

import { TaskListComponent } from "../components/TaskList";
import { Header } from "../components/Header";
import { Status } from "../constants/status";
import { Task } from '../models/task';
import { getAllTasks } from '../api/tasks-http.services';

export const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        getAllTasks().then(res => {
            setTasks(res.data)
        });
    }, []);

    const filterTasks = (status: Status) => {
        return tasks.filter((task: Task) => task.status === status);
    }

    return (
        <>
            <Header />
            <DragDropContext onDragEnd={() => {}}>
                <Row>
                    <Col span={8}>
                        <TaskListComponent tasks={filterTasks(Status.todo)} status={Status.todo} withPlaceholder={true} />
                    </Col>
                    <Col span={8}>
                        <TaskListComponent tasks={filterTasks(Status.inProgress)} status={Status.inProgress} />
                    </Col>
                    <Col span={8}>
                        <TaskListComponent tasks={filterTasks(Status.done)} status={Status.done} />
                    </Col>
                </Row>
            </DragDropContext>
        </>
    );
};