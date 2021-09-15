// components/ThemeToggle.js

import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const ToggleButton = styled.button`
  cursor: pointer;
  /* background: var(--color-bg-toggle); */
  transition: background 0.25s ease-in-out;
`;

const ToggleThumb = styled.span``;

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState("light");

  // toggle
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  // set variable on body data set
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);
  return (
    <ToggleButton type="button" onClick={() => setActiveTheme(inactiveTheme)}>
      <ToggleThumb activeTheme={activeTheme} />
      <span>🌙</span>
      <span>☀️</span>
    </ToggleButton>
  );
};

export default ThemeToggle;
