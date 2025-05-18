"use client";

import React from "react";
import {
    Box,
    Typography,
    Breadcrumbs,
    Link,
    Stack,
    Divider,
    Paper,
} from "@mui/material";
import TaskCard from "./Cards";
import AddIcon from "@mui/icons-material/Add";

const columns = ["Prospects", "Wireframe", "Design", "Development", "Done"];

const Board = () => {
    return (
        <Box sx={{ padding: 4, backgroundColor: "#2c2c2c", borderRadius: 2 }}>
            <Typography
                variant="h5"
                color="white"
                fontWeight={600}
                gutterBottom
            >
                dashboard.crm
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
                <Typography variant="body1" color="#ccc">
                    Total Tasks: <strong>15</strong>
                </Typography>
                <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ borderColor: "#555" }}
                />
                <Typography variant="body2" color="#999">
                    Last updated 4 hours ago
                </Typography>
            </Stack>

            <Breadcrumbs
                separator="›"
                aria-label="breadcrumb"
                sx={{ color: "#bbb", mb: 4 }}
            >
                <Link underline="hover" color="inherit" href="">
                    Home
                </Link>
                <Link underline="hover" color="inherit" href="">
                    Dashboard
                </Link>
                <Typography color="#888">Tasks</Typography>
            </Breadcrumbs>

            <Stack direction="row" spacing={2} justifyContent="space-between">
                {columns.map((col) => (
                    <Paper
                        key={col}
                        elevation={4}
                        sx={{
                            flex: 1,
                            backgroundColor: "#3a3a3a",
                            borderRadius: 2,
                            padding: 2,
                            minHeight: "60vh",
                        }}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={1}
                            mb={2}
                            gap={8}
                        >
                            <Typography
                                variant="subtitle1"
                                fontWeight={600}
                                color="#fff"
                                gutterBottom={false}
                            >
                                {col}
                            </Typography>
                            <AddIcon
                                sx={{ cursor: "pointer", color: "#fff" }}
                            />
                        </Stack>

                        <Stack spacing={2}>
                            <TaskCard
                                priority="moderate"
                                title="Example Task"
                                description="This is a sample task for the column."
                                assigneeInitial="KA"
                                status="TODO"
                                date="May 18, 2025"
                            />
                            <TaskCard
                                priority="low"
                                title="Example Task"
                                description="This is a sample task for the column."
                                assigneeInitial="AB"
                                status="TODO"
                                date="May 18, 2025"
                            />
                            <TaskCard
                                priority="high"
                                title="Example Task"
                                description="This is a sample task for the column."
                                assigneeInitial="VB"
                                status="TODO"
                                date="May 18, 2025"
                            />
                            <TaskCard
                                priority="bug"
                                title="Example Task"
                                description="This is a sample task for the column."
                                assigneeInitial="GB"
                                status="TODO"
                                date="May 18, 2025"
                            />
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </Box>
    );
};

export default Board;
