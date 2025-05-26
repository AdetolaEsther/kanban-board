import React, { useState } from "react";
import theme from "../theme";
import {DndContext, DragEndEvent,DragOverlay,DragStartEvent, PointerSensor,closestCenter, useSensor,useSensors, useDroppable,} from "@dnd-kit/core";
import {SortableContext,verticalListSortingStrategy,} from "@dnd-kit/sortable";
import { Box, Button, IconButton, Paper,Stack,Typography,} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { initialTasks } from "../data/data";
import AddTaskModal from "../modal/AddTaskModal";
import { TaskCardProps, Status } from "../types";
import TaskCard from "./Cards";
import SortableTaskCard from "./SortableTaskCard";

const DroppableColumn = ({
    columnId,
    title,
    tasks,
    children,
    onAddTask,
}: {
    columnId: string;
    title: string;
    tasks: any[];
    children: React.ReactNode;
    onAddTask: () => void;
}) => {
    const { isOver, setNodeRef } = useDroppable({
        id: columnId,
    });

    return (
        <Paper
            ref={setNodeRef}
            elevation={4}
            sx={{
                flex: 1,
                backgroundColor: isOver ? "#1a1a1a" : "#000000",
                borderRadius: 2,
                padding: 2,
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                border: isOver ? "2px dashed #7f5af0" : "2px solid transparent",
                transition: "all 0.2s ease",
            }}
        >
            <Stack spacing={0.5} mb={2}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        color="#fff"
                    >
                        {title}
                    </Typography>
                    <Stack direction="row">
                        <IconButton
                            onClick={onAddTask}
                            sx={{
                                color: "#fff",
                                backgroundColor: "#171717",
                                border: "2px solid",
                                borderColor: "#000",
                                borderRadius: 2,
                                width: 32,
                                height: 32,
                                ml: 0.5,
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            <AddIcon
                                sx={{ cursor: "pointer", color: "#fff" }}
                            />
                        </IconButton>
                        <IconButton
                            sx={{
                                color: "#fff",
                                border: "2px solid",
                                borderColor: "#000",
                                backgroundColor: "#171717",
                                borderRadius: 2,
                                width: 32,
                                height: 32,
                                ml: 0.5,
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            <MoreHorizIcon
                                sx={{ cursor: "pointer", color: "#fff" }}
                            />
                        </IconButton>
                    </Stack>
                </Stack>

                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <Typography variant="caption" color="#888">
                        {tasks.length} Tasks
                    </Typography>
                    <Typography variant="caption" color="#888">
                        updated: 4 hours ago
                    </Typography>
                </Stack>
            </Stack>

            <Stack
                spacing={2}
                flexGrow={1}
                sx={{ overflowY: "auto", minHeight: 200 }}
            >
                {children}
            </Stack>

            <Button
                fullWidth
                variant="text"
                startIcon={<AddIcon />}
                sx={{
                    mt: 2,
                    color: "#888",
                    justifyContent: "flex-start",
                    textTransform: "none",
                }}
                onClick={onAddTask}
            >
                Add New
            </Button>
        </Paper>
    );
};

const Board = () => {
    const [tasks, setTasks] = useState<TaskCardProps[]>(initialTasks);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8, 
            },
        })
    );
    const columns: { id: Status; title: string }[] = [
        { id: "TODO", title: "Prospects" },
        { id: "IN PROGRESS", title: "Wireframe" },
        { id: "REVIEW", title: "Design" },
        { id: "REWORK", title: "Development" },
        { id: "DONE", title: "Done" },
    ];
    const tasksByStatus: Record<Status, TaskCardProps[]> = {
        TODO: [],
        "IN PROGRESS": [],
        REVIEW: [],
        REWORK: [],
        DONE: [],
    };
    tasks.forEach((task) => {
        if (task.status in tasksByStatus) {
            tasksByStatus[task.status].push(task);
        } 
    });
    const handleDragStart = (event: DragStartEvent) => {
        console.log(" Drag started:", event.active.id);
        setActiveId(String(event.active.id));
    };
    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;
        setActiveId(null);
        if (!active || !over) {
            console.log(" No drag");
            return;
        }
        const draggedTask = tasks.find(
            (task) => String(task.id) === String(active.id)
        );
        if (!draggedTask) {
            return;
        }
        let newStatus: Status;
        if (columns.some((col) => col.id === over.id)) {
            newStatus = over.id as Status;
        } else {
            const targetTask = tasks.find(
                (task) => String(task.id) === String(over.id)
            );
            if (targetTask) {
                newStatus = targetTask.status;
            } else {
                return;
            }
        }

        // update only if status changed
        if (draggedTask.status !== newStatus) {
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === draggedTask.id
                        ? { ...task, status: newStatus }
                        : task
                )
            );
        } 
    };
    const handleAddTask = (newTask: Omit<TaskCardProps, "id" | "date">) => {
        const id = Date.now();
        const date = new Date().toLocaleDateString();
        setTasks((prev) => [...prev, { id, date, ...newTask }]);
    };
    const activeTask = activeId
        ? tasks.find((task) => String(task.id) === activeId)
        : null;
    return (
        <Box sx={{ padding: 4, backgroundColor: "#1e1e1e", borderRadius: 2 }}>
            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="space-between"
                    mb={3}
                    sx={{ width: "100%" }}
                >
                    <Stack
                        direction="row"
                        sx={{
                            backgroundColor: theme.palette.background.default,
                            borderRadius: 2,
                        }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={
                                <DashboardIcon
                                    sx={{ color: "green", fontSize: "16px" }}
                                />
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                border: "2px solid",
                                borderColor: "#000",
                                backgroundColor: theme.palette.background.paper,
                                fontSize: "10px",
                                px: 1.5,
                                borderRadius: 2,
                                minHeight: 32,
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            Pipeline View
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={
                                <SwapVertIcon sx={{ fontSize: "16px" }} />
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                border: "2px solid",
                                borderColor: "#000",
                                backgroundColor: theme.palette.background.paper,
                                fontSize: "10px",
                                px: 1.5,
                                borderRadius: 2,
                                minHeight: 32,
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            Sort
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={
                                <FilterAltIcon sx={{ fontSize: "16px" }} />
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                border: "2px solid",
                                borderColor: "#000",
                                backgroundColor: theme.palette.background.paper,
                                fontSize: "10px",
                                px: 1.5,
                                borderRadius: 2,
                                minHeight: 32,
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            Filter
                        </Button>
                    </Stack>

                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            backgroundColor: theme.palette.background.default,
                            borderRadius: 2,
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                        }}
                    >
                        <Button
                            variant="outlined"
                            startIcon={
                                <CalendarTodayIcon sx={{ fontSize: "16px" }} />
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                border: "2px solid",
                                borderColor: "#000",
                                backgroundColor: theme.palette.background.paper,
                                fontSize: "10px",
                                px: 1.5,
                                borderRadius: 2,
                                minHeight: 32,
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            17/09/2024
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={
                                <UploadFileIcon sx={{ fontSize: "16px" }} />
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                border: "2px solid",
                                borderColor: "#000",
                                backgroundColor: theme.palette.background.paper,
                                fontSize: "10px",
                                px: 1.5,
                                borderRadius: 2,
                                minHeight: 32,
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            Import / Export
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={<AddIcon sx={{ fontSize: "16px" }} />}
                            onClick={() => setModalOpen(true)}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                fontSize: "10px",
                                px: 1.5,
                                borderRadius: 2,
                                minHeight: 32,
                                boxShadow:
                                    "0px 2px 8px rgba(127, 90, 240, 0.5)",
                            }}
                        >
                            Add New
                        </Button>
                        <IconButton
                            sx={{
                                color: theme.palette.text.primary,
                                border: "2px solid",
                                borderColor: "#000",
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: 2,
                                width: 32,
                                height: 32,
                                ml: 0.5,
                                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                            }}
                        >
                            <MoreVertIcon sx={{ fontSize: "18px" }} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                sx={{ height: "70vh" }}
            >
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    {columns.map(({ id: columnId, title }) => (
                        <DroppableColumn
                            key={columnId}
                            columnId={columnId}
                            title={title}
                            tasks={tasksByStatus[columnId]}
                            onAddTask={() => setModalOpen(true)}
                        >
                            <SortableContext
                                items={tasksByStatus[columnId].map((t) =>
                                    String(t.id)
                                )}
                                strategy={verticalListSortingStrategy}
                            >
                                {tasksByStatus[columnId].map((task) => (
                                    <SortableTaskCard
                                        key={task.id}
                                        task={task}
                                    />
                                ))}
                            </SortableContext>
                        </DroppableColumn>
                    ))}

                    <DragOverlay>
                        {activeTask ? (
                            <div
                                style={{
                                    transform: "rotate(5deg)",
                                    opacity: 0.9,
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                                }}
                            >
                                <TaskCard {...activeTask} />
                            </div>
                        ) : null}
                    </DragOverlay>
                </DndContext>
            </Stack>

            <AddTaskModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onAddTask={handleAddTask}
            />
        </Box>
    );
};

export default Board;
