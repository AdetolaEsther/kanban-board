"use client";

import React from "react";
import {
    Modal,
    Box,
    Typography,
    TextField,
    Button,
    MenuItem,
    Stack,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
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


export default function AddTaskModal({
    open,
    onClose,
    onAddTask,
}: AddTaskModalProps) {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            priority: "moderate" as Priority,
            assigneeName: "", 
            status: "TODO" as Status,
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            priority: Yup.string()
                .oneOf(priorityOptions)
                .required("Priority is required"),
            assigneeName: Yup.string().required("Assignee name is required"),
            status: Yup.string()
                .oneOf(statusOptions)
                .required("Status is required"),
        }),
        onSubmit: (values) => {
            const names = values.assigneeName.trim().split(" ");
            const initials =
                names.length > 1
                    ? (names[0][0] + names[names.length - 1][0]).toUpperCase()
                    : names[0][0].toUpperCase();

            onAddTask({
                title: values.title,
                description: values.description,
                priority: values.priority,
                assigneeInitial: initials,
                status: values.status,
            });
            formik.resetForm();
            onClose();
        },
    });

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={style}>
                <Typography variant="h6" mb={2}>
                    Add New Task
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            label="Title"
                            name="title"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            size="small"
                            // autoFocus
                            error={
                                formik.touched.title &&
                                Boolean(formik.errors.title)
                            }
                        />
                        <TextField
                            label="Description"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            size="small"
                            multiline
                            rows={3}
                        />
                        <TextField
                            select
                            label="Priority"
                            name="priority"
                            value={formik.values.priority}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            size="small"
                            error={
                                formik.touched.priority &&
                                Boolean(formik.errors.priority)
                            }
                            helperText={
                                formik.touched.priority &&
                                formik.errors.priority
                            }
                        >
                            {priorityOptions.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option.charAt(0).toUpperCase() +
                                        option.slice(1)}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            label="Assignee Name"
                            name="assigneeName"
                            value={formik.values.assigneeName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            size="small"
                            error={
                                formik.touched.assigneeName &&
                                Boolean(formik.errors.assigneeName)
                            }
                            helperText={
                                formik.touched.assigneeName &&
                                formik.errors.assigneeName
                            }
                        />

                        <TextField
                            select
                            label="Status"
                            name="status"
                            value={formik.values.status}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            fullWidth
                            size="small"
                            error={
                                formik.touched.status &&
                                Boolean(formik.errors.status)
                            }
                            helperText={
                                formik.touched.status && formik.errors.status
                            }
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
                                type="submit"
                                variant="contained"
                                color="primary"
                                disabled={formik.isSubmitting}
                            >
                                Add Task
                            </Button>
                        </Box>
                    </Stack>
                </form>
            </Box>
        </Modal>
    );
}
