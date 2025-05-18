"use client";

import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    MenuItem,
    Select,
    Stack,
    Avatar,
    IconButton,
    Tooltip,
} from "@mui/material";
import { Comment, AttachFile, Description } from "@mui/icons-material";

type Priority = "low" | "moderate" | "high" | "bug";
type Status = "TODO" | "IN PROGRESS" | "REVIEW" | "REWORK" | "DONE";

const priorityColors: Record<Priority, string> = {
    high: "#FF4C4C",
    moderate: "#FFD700",
    low: "#4CAF50",
        bug: "#2196F3",
};

interface TaskCardProps {
    priority: Priority;
    title: string;
    description: string;
    assigneeInitial?: string;
    status: Status;
    date: string;
}

const TaskCard: React.FC<TaskCardProps> = ({
    priority,
    title,
    description,
    assigneeInitial = "A",
    status,
    date,
}) => {
    const [taskStatus, setTaskStatus] = React.useState<Status>(status);

    return (
        <Card
            sx={{
                backgroundColor: "#3c3c3c",
                borderRadius: 2,
                position: "relative",
            }}
        >
            <Box
                sx={{
                    height: 6,
                    backgroundColor: priorityColors[priority],
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                }}
            />

            <CardContent sx={{ padding: 2 }}>
                <Box
                    sx={{
                        backgroundColor: "#4d4d4d",
                        borderRadius: 2,
                        padding: 2,
                        marginBottom: 2,
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        color="white"
                        fontWeight="bold"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    <Typography variant="body2" color="#ccc" gutterBottom>
                        {description}
                    </Typography>

                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        gap={2}
                    >
                        <Avatar
                            sx={{
                                width: 24,
                                height: 24,
                                fontSize: 12,
                                bgcolor: "#999",
                            }}
                        >
                            {assigneeInitial}
                        </Avatar>

                        <Select
                            value={taskStatus}
                            onChange={(e) =>
                                setTaskStatus(e.target.value as Status)
                            }
                            variant="outlined"
                            size="small"
                            sx={{
                                color: "white",
                                borderColor: "white",
                                fontSize: 12,
                                minWidth: 120,
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#888",
                                },
                                "& .MuiSvgIcon-root": {
                                    color: "white",
                                },
                            }}
                        >
                            {[
                                "TODO",
                                "IN PROGRESS",
                                "REVIEW",
                                "REWORK",
                                "DONE",
                            ].map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </Box>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack direction="row" spacing={1}>
                        <Tooltip title="Comments">
                            <IconButton size="small">
                                <Comment
                                    fontSize="small"
                                    sx={{ color: "#aaa", fontSize: 10 }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Attachments">
                            <IconButton size="small">
                                <AttachFile
                                    sx={{ color: "#aaa", fontSize: 10 }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="File">
                            <IconButton size="small">
                                <Description
                                    fontSize="small"
                                    sx={{ color: "#aaa", fontSize: 10 }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Typography variant="caption" color="#aaa" sx={{fontSize:10}}>
                        {date}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
