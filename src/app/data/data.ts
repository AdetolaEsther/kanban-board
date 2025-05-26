import { TaskCardProps } from "../types";

export const initialTasks: TaskCardProps[] = [
    {
        id: 1,
        priority: "moderate",
        title: "Lead Qualification Process",
        description:
            "Assess incoming leads to determine their potential and prioritize accordingly.",
        assigneeInitial: "KA",
        status: "TODO",
        date: "May 18, 2025",
    },
    {
        id: 2,
        priority: "low",
        title: "Sales Pipeline Blueprint",
        description: "Create a clear visual sales pipeline for team use.",
        assigneeInitial: "AB",
        status: "REVIEW",
        date: "May 19, 2025",
    },
    {
        id: 3,
        priority: "high",
        title: "CRM Layout Draft",
        description: "Design wireframe for CRM dashboard layout.",
        assigneeInitial: "VB",
        status: "IN PROGRESS",
        date: "May 20, 2025",
    },
    {
        id: 4,
        priority: "bug",
        title: "CRM Testing & Optimization",
        description: "QA testing to identify and fix CRM bugs.",
        assigneeInitial: "GB",
        status: "REWORK",
        date: "May 21, 2025",
    },
    {
        id: 5,
        priority: "bug",
        title: "CRM Testing & Optimization",
        description: "QA testing to identify and fix CRM bugs.",
        assigneeInitial: "GB",
        status: "REWORK",
        date: "May 21, 2025",
    },
    {
        id: 6,
        priority: "low",
        title: "CRM Testing & Optimization",
        description: "QA testing to identify and fix CRM bugs.",
        assigneeInitial: "GB",
        status: "IN PROGRESS",
        date: "May 21, 2025",
    },
];
