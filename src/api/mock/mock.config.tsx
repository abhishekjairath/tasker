import data from '../mock/data/tasks.json';
import MockAdapter from "axios-mock-adapter";
import { AxiosInstance } from 'axios';

let tasksList = data.tasks;

export const isMockEnabled = () => {
    return process.env.REACT_APP_MOCK_ENABLED === 'true'
};

export const initializeAxiosMockAdapter = (instance: AxiosInstance) => {
    const mock = new MockAdapter(instance);
    mock.onGet("/tasks").reply(() => gettasks());
    mock.onGet(/\/tasks\/\d+/).reply(config => getTask(config));
    mock.onPost("/tasks").reply(config => addTask(config));
    mock.onPut(/\/tasks\/\d+/).reply(config => editTask(config));
    mock.onDelete(/\/tasks\/\d+/).reply(config => removeTask(config))
};

export const gettasks = () => {
    return [200, tasksList]
};

export const getTask = (config: any) => {
    const id = extractIdPathParamFromUrl(config);
    const Task = tasksList.find(c => c.id === id);
    return [200, Task];
};

const extractIdPathParamFromUrl = (config: any) => {
    return config.url.split('/').pop();
};

export const addTask = (config: any) => {
    const Task = JSON.parse(config.data);
    tasksList.push(Task);
    return [200, Task];
};

export const editTask = (config: any) => {
    const id = extractIdPathParamFromUrl(config);
    const TaskIndex = tasksList.findIndex(c => c.id === id);
    const Task = JSON.parse(config.data);
    tasksList[TaskIndex] = Task;
    return [200, Task];
};

export const removeTask = (config: any) => {
    const id = extractIdPathParamFromUrl(config);
    tasksList = tasksList.filter(c => c.id !== id);
    return [204, null];
};

