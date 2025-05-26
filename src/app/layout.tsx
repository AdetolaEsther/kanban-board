import "./globals.css";
import ThemeRegistry from "./ThemeRegistry";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kanban Board",
    description: "A simple Kanban board using Next.js and MUI",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>{children}</ThemeRegistry>
            </body>
        </html>
    );
}
