"use client"

import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export const ModeToggle = () => {

    const { theme, setTheme } = useTheme();
    return (
        <Button
            variant="outline"
            size="icon"
            className=""
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <MdOutlineWbSunny className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100" />
            <LuMoon className="absolute h-10 w-10 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
        </Button>
    );
}