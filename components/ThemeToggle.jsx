import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        if (theme === "light") {
          setTheme("dark");
        } else {
          setTheme("light");
        }
      }}
    >
      click
    </button>
  );
};

export default ThemeToggle;
