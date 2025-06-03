"use client";

import {
    Box,
    Stack,
    Typography,
    List,
    ListItemText,
    ListItemButton,
    Divider,
    Breadcrumbs,
    Link,
    Button,
    IconButton,
} from "@mui/material";
import {
    Settings,
    Download,
    TrendingUp,
    Dashboard,
    Assignment,
    AccountCircle,
    Visibility,
    CalendarToday,
    Notes,
    Assessment,
    Group,
    Business,
    Security,
    Payment,
    Notifications,
} from "@mui/icons-material";
import Board from "./components/Board";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import ShareIcon from "@mui/icons-material/Share";
import AnchorIcon from "@mui/icons-material/Anchor";
import BoltIcon from "@mui/icons-material/Bolt";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { useTheme } from "@mui/material/styles";


const NavItems = [
    {
        name: "Sales CRM",
        icon: <TrendingUp />,
        submenu: [{ name: "Overview", icon: <Visibility /> }],
    },
    {
        name: "Dashboard CRM",
        icon: <Dashboard />,
        submenu: [
            { name: "Tasks", icon: <Assignment /> },
            { name: "Calendars", icon: <CalendarToday /> },
            { name: "Notes", icon: <Notes /> },
            { name: "Reports", icon: <Assessment /> },
            { name: "View", icon: <Visibility /> },
        ],
    },
    {
        name: "Project Management",
        icon: <Business />,
        submenu: [
            { name: "Team Members", icon: <Group /> },
            { name: "Departments", icon: <Business /> },
            { name: "Permissions", icon: <Security /> },
            { name: "Invitations", icon: <Group /> },
        ],
    },
    {
        name: "Settings",
        icon: <Settings />,
        submenu: [
            { name: "Profile", icon: <AccountCircle /> },
            { name: "Notifications", icon: <Notifications /> },
            { name: "Security", icon: <Security /> },
            { name: "Billing", icon: <Payment /> },
        ],
    },
];

const Home = () => {
    const theme = useTheme();

    return (
        <Box
            p={4}
            bgcolor={theme.palette.background.default}
            color={theme.palette.text.primary}
        >
            <Stack direction="row" spacing={2}>
                <Box
                    width="15%"
                    minWidth={200}
                    bgcolor={theme.palette.primary.main}
                    p={1}
                    borderRadius={theme.shape.borderRadiusSmall}
                    boxShadow={2}
                >
                    <Stack direction="row" alignItems="center" mb={2}>
                        <LogoDevIcon sx={{ color: "#b497f7 " }} />
                        <Typography
                            variant="h6"
                            fontWeight={500}
                            color={theme.palette.text.primary}
                        >
                            Project Inc.
                        </Typography>
                    </Stack>
                    <List sx={{ py: 0 }}>
                        {NavItems.map((item, index) => (
                            <Box key={index} sx={{ mb: 1 }}>
                                <ListItemButton
                                    sx={{
                                        color: theme.palette.text.primary,
                                        px: 1.5,
                                        borderRadius:
                                            theme.shape.borderRadiusSmall,
                                        minHeight: 40,
                                        fontSize: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        py: 1,
                                        "&:hover": {
                                            backgroundColor:
                                                theme.palette.action.hover,
                                            border: `2px solid ${theme.palette.primary.dark}`,
                                            boxShadow: theme.shadows[4],
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            mr: 1,
                                            display: "flex",
                                            alignItems: "center",
                                            "& svg": {
                                                fontSize: "14px",
                                                color: theme.palette.primary
                                                    .contrastText,
                                            },
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <ListItemText
                                        primary={item.name}
                                        primaryTypographyProps={{
                                            fontSize: "10px",
                                            fontWeight: 500,
                                            color: theme.palette.text.primary,
                                        }}
                                    />
                                </ListItemButton>

                                <List
                                    component="div"
                                    disablePadding
                                    sx={{ ml: 1, mt: 0.5 }}
                                >
                                    {item.submenu.map((subItem, subIndex) => (
                                        <ListItemButton
                                            key={subIndex}
                                            sx={{
                                                pl: 3,
                                                py: 0.5,
                                                minHeight: 32,
                                                color: theme.palette.text
                                                    .secondary,
                                                fontSize: "9px",
                                                borderRadius: 1.5,
                                                mb: 0.5,
                                                "& svg": {
                                                    fontSize: "12px",
                                                    mr: 1,
                                                    color: theme.palette.text
                                                        .secondary,
                                                },
                                                "&:hover": {
                                                    color: theme.palette.text
                                                        .primary,
                                                    backgroundColor:
                                                        theme.palette.background
                                                            .default,
                                                    border: `1px solid ${theme.palette.primary.dark}`,
                                                    boxShadow: theme.shadows[2],
                                                },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                {subItem.icon}
                                            </Box>
                                            <ListItemText
                                                primary={subItem.name}
                                                primaryTypographyProps={{
                                                    fontSize: "9px",
                                                }}
                                            />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Box>
                        ))}
                    </List>
                </Box>

                <Box flex={1}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        mb={2}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={600}
                            color={theme.palette.text.primary}
                        >
                            Dashboard CRM
                        </Typography>

                        <Stack direction="row">
                            <Button
                                variant="outlined"
                                startIcon={
                                    <BoltIcon sx={{ fontSize: "10px" }} />
                                }
                                sx={{
                                    color: theme.palette.text.primary,
                                    border: `2px solid ${theme.palette.divider}`,
                                    backgroundColor:
                                        theme.palette.background.paper,
                                    fontSize: "10px",
                                    px: 1.5,
                                    borderRadius: 1,
                                    minHeight: 32,
                                    boxShadow: theme.shadows[4],
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.action.hover,
                                        borderColor: theme.palette.primary.main,
                                    },
                                }}
                            >
                                Upgrade
                            </Button>
                        </Stack>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems={"flex-start"}
                        justifyContent={"space-between"}
                        mb={2}
                    >
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Typography
                                variant="body1"
                                color={theme.palette.text.secondary}
                            >
                                Total Tasks: <strong>{6}</strong>
                            </Typography>
                            <Divider
                                orientation="vertical"
                                flexItem
                                sx={{ borderColor: theme.palette.divider }}
                            />
                            <Typography
                                variant="body2"
                                color={theme.palette.text.disabled}
                            >
                                Last updated 4 hours ago
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={1}>
                            <Button
                                variant="outlined"
                                startIcon={
                                    <ShareIcon sx={{ fontSize: "10px" }} />
                                }
                                sx={{
                                    color: theme.palette.text.primary,
                                    border: `2px solid ${theme.palette.divider}`,
                                    backgroundColor:
                                        theme.palette.background.paper,
                                    fontSize: "10px",
                                    px: 1.5,
                                    borderRadius: 1,
                                    minHeight: 32,
                                    boxShadow: theme.shadows[4],
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.action.hover,
                                        borderColor: theme.palette.primary.main,
                                    },
                                }}
                            >
                                Share
                            </Button>

                            <Button
                                variant="outlined"
                                startIcon={
                                    <AnchorIcon sx={{ fontSize: "small" }} />
                                }
                                sx={{
                                    color: theme.palette.text.primary,
                                    border: `2px solid ${theme.palette.divider}`,
                                    backgroundColor:
                                        theme.palette.background.paper,
                                    fontSize: "10px",
                                    px: 1.5,
                                    borderRadius: 1,
                                    minHeight: 32,
                                    boxShadow: theme.shadows[4],
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.action.hover,
                                        borderColor: theme.palette.primary.main,
                                    },
                                }}
                            >
                                Request
                            </Button>

                            <IconButton
                                sx={{
                                    color: theme.palette.text.primary,
                                    // border: `2px solid ${theme.palette.divider}`,
                                    backgroundColor:
                                        theme.palette.background.paper,
                                    borderRadius: theme.shape.borderRadius,
                                   
                                    boxShadow: theme.shadows[4],
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.action.hover,
                                        borderColor: theme.palette.primary.main,
                                    },
                                }}
                            >
                                <Download sx={{ fontSize: "18px" }} />
                            </IconButton>

                            <IconButton
                                sx={{
                                    color: theme.palette.text.primary,
                                    // border: `2px solid ${theme.palette.divider}`,
                                    backgroundColor:
                                        theme.palette.background.paper,
                                    borderRadius: theme.shape.borderRadius,
                                    
                                    boxShadow: theme.shadows[4],
                                    "&:hover": {
                                        backgroundColor:
                                            theme.palette.action.hover,
                                        borderColor: theme.palette.primary.main,
                                    },
                                }}
                            >
                                <Settings />
                            </IconButton>
                        </Stack>
                    </Stack>

                    <Breadcrumbs
                        separator="/"
                        aria-label="breadcrumb"
                        sx={{ color: theme.palette.text.secondary, mb: 2 }}
                    >
                        <Link
                            underline="hover"
                            color="inherit"
                            href=""
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Home
                        </Link>
                        <Link
                            underline="hover"
                            color="inherit"
                            href=""
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <DashboardIcon
                                sx={{ mr: 0.5 }}
                                fontSize="inherit"
                            />
                            Dashboard
                        </Link>
                        <Typography
                            color={theme.palette.text.disabled}
                            sx={{ display: "flex", alignItems: "center" }}
                        >
                            <AssignmentIcon
                                sx={{ mr: 0.5 }}
                                fontSize="inherit"
                            />
                            Tasks
                        </Typography>
                    </Breadcrumbs>

                    <Board />
                </Box>
            </Stack>
        </Box>
    );
};

export default Home;

