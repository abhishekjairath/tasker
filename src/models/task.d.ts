import { User } from './user';
import { Project } from './project';
import { Status } from '../constants/status';

export type Task = {
    id: String;
    title: String;
    description?: String;
    projects?: Project[];
    assignedTo?: User;
    status: Status;
}