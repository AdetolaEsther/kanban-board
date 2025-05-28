import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#1A1A1A",
            light: "#9e7cf8",
            dark: "#07060a",
            contrastText: "#fff",
        },
        secondary: {
            main: "#888",
            contrastText: "#fff",
        },
        background: {
            default: "#121212",
            paper: "#000000",
        },
        text: {
            primary: "#fff",
            secondary: "#ccc",
            disabled: "#666",
        },
        divider: "#333",
        action: {
            hover: "rgba(0, 0, 0, 0.15)",
            selected: "#0A0A0A",
            disabledBackground: "#2a2a2a",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        subtitle1: {
            fontWeight: 600,
            color: "#fff",
        },
        subtitle2: {
            fontWeight: 700,
            color: "#fff",
        },
        caption: {
            color: "#888",
        },
        button: {
            textTransform: "none",
        },
    },
    shape: {
        borderRadius: 6,
        borderRadiusSmall: 2,
        borderRadiusMedium: 4,
        borderRadiusLarge: 20,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "0.8rem",
                    minHeight: 32,
                    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.4)",
                    borderRadius: 8,
                },
                outlinedPrimary: {
                    borderColor: "#000",
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                    "&:hover": {
                        backgroundColor: "#333",
                        borderColor: "#7f5af0",
                    },
                },
                containedPrimary: {
                    backgroundColor: "#7f5af0",
                    boxShadow: "0px 2px 8px rgba(127, 90, 240, 0.5)",
                    "&:hover": {
                        backgroundColor: "#6e49d9",
                    },
                },
            },
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    border: "2px solid transparent",
                    color: "#fff",
                    backgroundColor: "#171717",
                    width: 32,
                    height: 32,
                    boxShadow: "0px 2px 6px rgba(0,0,0,0.4)",
                    "&:hover": {
                        backgroundColor: "#333",
                        borderColor: "#7f5af0",
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#1e1e1e",
                    borderRadius: 8,
                },
            },
        },
    },
});

export default theme;
