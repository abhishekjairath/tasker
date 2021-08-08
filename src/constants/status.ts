export enum Status {
    deleted = -1,
    todo = 0,
    inProgress = 1,
    done = 2,
}

export const StatusTitle = {
    [Status.done]: "Done",
    [Status.inProgress]: "In Progress",
    [Status.todo]: "To Do",
    [Status.deleted]: "Deleted",
};
