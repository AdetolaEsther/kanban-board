"use client";

import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Stack,
    Avatar,
    IconButton,
    Tooltip,
} from "@mui/material";
import { Comment, AttachFile, Description } from "@mui/icons-material";
import { Priority, TaskCardProps } from "../types";
import theme from "../theme";

const priorityColors: Record<Priority, string> = {
    high: "#F93827",
    moderate: "#F4631E",
    low: "#3E7B27",
    bug: "#00A9FF",
};

const TaskCard: React.FC<TaskCardProps> = ({
    priority,
    title,
    description,
    assigneeInitial = "A",
    status,
    date,
}) => {
    return (
        <Card
            sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: "0 0 0 1px #333",
                overflow: "hidden",
                position: "relative",
                mb: 1.5,
            }}
        >
            <Box
                sx={{
                    backgroundColor: priorityColors[priority],
                    height: 24,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: 10,
                    textTransform: "uppercase",
                }}
            >
                {priority} Priority
            </Box>

            <CardContent sx={{ padding: 2, borderRadius: 2 }}>
                <Box
                    sx={{
                        border: `1px dotted ${theme.palette.text.primary}`,
                        borderRadius: 2,
                        padding: 1.5,
                        mb: 1.5,
                    }}
                >
                    <Stack spacing={1}>
                        <Typography
                            variant="subtitle2"
                            color={theme.palette.text.primary}
                            fontWeight="bold"
                            lineHeight={1.3}
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color={theme.palette.text.secondary}
                            fontSize={12}
                        >
                            {description}
                        </Typography>
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Avatar
                                sx={{
                                    width: 24,
                                    height: 24,
                                    fontSize: 12,
                                    bgcolor: "#444", 
                                }}
                            >
                                {assigneeInitial}
                            </Avatar>
                            <Typography
                                sx={{
                                    backgroundColor: "#333",
                                    color: "#666",
                                    fontSize: 10,
                                    px: 1,
                                    py: 0.25,
                                    borderRadius: 1,
                                    border: "1px solid #666",
                                    textTransform: "uppercase",
                                }}
                            >
                                {status}
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>

                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack direction="row" spacing={0.5}>
                        <Tooltip title="Comments">
                            <IconButton size="small">
                                <Comment
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: 14,
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Attachments">
                            <IconButton size="small">
                                <AttachFile
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: 14,
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Files">
                            <IconButton size="small">
                                <Description
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontSize: 14,
                                    }}
                                />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                    <Typography
                        variant="caption"
                        sx={{
                            fontSize: 10,
                            color: theme.palette.text.secondary,
                        }}
                    >
                        {date}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default TaskCard;
