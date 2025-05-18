"use client";

import {
    Box,
    Stack,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
} from "@mui/material";
import Board from "./components/Board";

const NavItems = ["Home", "Tasks", "Teams", "Settings"];

export default function Home() {
    return (
        <Box p={4}>
            <Typography variant="h4" textAlign="center" fontWeight={600} mb={4}>
                KANBAN BOARD
            </Typography>

            <Stack direction="row" spacing={2}>
                <Box
                    width="30%"
                    minWidth={100}
                    bgcolor="	#1e1e1e"
                    p={1}
                    borderRadius={2}
                    boxShadow={2}
                >
                    <Typography variant="h6" fontWeight={500} mb={2}>
                        Navigation
                    </Typography>
                    <List>
                        {NavItems.map((item, index) => (
                            <ListItemButton key={index}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        ))}
                    </List>
                </Box>

                <Box flex={1}>
                    <Board />
                </Box>
            </Stack>
        </Box>
    );
}
