"use client";

import React, { useState } from "react";
import { Modal,Box, Typography,TextField,Button,MenuItem,Stack,} from "@mui/material";
import { Priority, Status } from "../types";

interface AddTaskModalProps {
    open: boolean;
    onClose: () => void;
    onAddTask: (task: {
        title: string;
        description: string;
        priority: Priority;
        assigneeInitial: string;
        status: Status;
    }) => void;
}

const priorityOptions: Priority[] = ["high", "moderate", "low", "bug"];
const statusOptions: Status[] = ["TODO", "IN PROGRESS", "DONE"];

const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 360,
    bgcolor: "#222",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
    color: "#fff",
};

export default function AddTaskModal({open,onClose, onAddTask,}: AddTaskModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState<Priority>("moderate");
    const [assigneeInitial, setAssigneeInitial] = useState("");
    const [status, setStatus] = useState<Status>("TODO");

    const handleSubmit = () => {
        if (!title.trim()) return alert("Title is required");
        onAddTask({
            title,
            description,
            priority,
            assigneeInitial: assigneeInitial.toUpperCase(),
            status,
        });
        setTitle("");
        setDescription("");
        setPriority("moderate");
        setAssigneeInitial("");
        setStatus("TODO");
        onClose();
    };

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" mb={2}>
                    Add New Task
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        size="small"
                        autoFocus
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        size="small"
                        multiline
                        rows={3}
                    />
                    <TextField
                        select
                        label="Priority"
                        value={priority}
                        onChange={(e) =>
                            setPriority(e.target.value as Priority)
                        }
                        fullWidth
                        size="small"
                    >
                        {priorityOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Assignee Initial"
                        value={assigneeInitial}
                        onChange={(e) =>
                            setAssigneeInitial(e.target.value.slice(0, 1))
                        }
                        inputProps={{ maxLength: 1 }}
                        fullWidth
                        size="small"
                    />
                    <TextField
                        select
                        label="Status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as Status)}
                        fullWidth
                        size="small"
                    >
                        {statusOptions.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option.charAt(0).toUpperCase() +
                                    option.slice(1)}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Box textAlign="right">
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Add Task
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Modal>
    );
}
