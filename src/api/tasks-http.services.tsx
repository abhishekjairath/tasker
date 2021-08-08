import {http} from "../api/http";
import { Task } from "../models/task";

export const getAllTasks = () => {
    return http.get("/tasks");
};

export const getTask = (id: string) => {
    return http.get(`/tasks/${id}`);
};

export const createTask = (data: Task) => {
    return http.post("/tasks", data);
};

export const updateTask = (id: string, data: Task) => {
    return http.put(`/tasks/${id}`, data);
};

export const removeTask = (id: string) => {
    return http.delete(`/tasks/${id}`);
};

