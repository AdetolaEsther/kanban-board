
import "@mui/material/styles";

declare module "@mui/material/styles" {
    interface Shape {
        borderRadius: number;
        borderRadiusSmall: number;
        borderRadiusMedium: number;
        borderRadiusLarge: number;
    }

    interface Theme {
        shape: Shape;
    }

    interface ThemeOptions {
        shape?: Partial<Shape>;
    }

    interface PaletteColor {
        lightPurple?: string;
    }

    interface Palette {
        primary: PaletteColor & {
            lightPurple?: string;
        };
    }

    interface PaletteOptions {
        primary?: PaletteColor & {
            lightPurple?: string;
        };
    }
}
