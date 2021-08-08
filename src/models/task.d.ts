import { User } from './user';
import { Project } from './project';
import { Status } from '../constants/status';

export type Task = {
    id: string;
    title: string;
    description?: string;
    projects?: Project[];
    assignedTo?: User;
    status: Status;
}