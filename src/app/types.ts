export type TaskCardProps = {
    id: number;
    priority: "low" | "moderate" | "high" | "bug";
    title: string;
    description: string;
    assigneeInitial: string;
    status: "TODO" | "IN PROGRESS" | "REVIEW" | "REWORK" | "DONE";
    date: string;
};

export interface SortableTaskCardProps {
    task: TaskCardProps;
}
 export type Priority = "low" | "moderate" | "high" | "bug";
 export type Status = "TODO" | "IN PROGRESS" | "REVIEW" | "REWORK" | "DONE";