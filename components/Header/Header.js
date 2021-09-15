import styled from "@emotion/styled";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeaderContainer = styled.header`
  width: var(--mobile-card-width);
  height: 39px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    max-width: 573px;
  }

  @media (min-width: 1440px) {
    max-width: 730px;
  }
`;

const LogoContainer = styled.div`
  position: relative;
  width: 128px;
  height: 100%;
`;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  font-size: 13px;
  letter-spacing: 2.5px;
  > div:first-of-type {
    color: var(--color-text-theme);
    margin-right: 16px;
  }

  > div:nth-of-type(2) {
  }
`;

const ToggleButton = styled.span`
  cursor: pointer;
`;

const ToggleImageContainer = styled.div`
  font-size: 13px;
`;

const Header = ({ logo, children }) => {
  const [activeTheme, setActiveTheme] = useState("light");
  // toggle
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  // set variable on body data set
  useEffect(() => {
    document.body.dataset.theme = activeTheme;
  }, [activeTheme]);

  return (
    <HeaderContainer>
      <LogoContainer>
        {activeTheme === "light" ? (
          <Image src="/devfinder.svg" layout="fill" />
        ) : (
          <Image src="/devfinder-light.svg" layout="fill" />
        )}
      </LogoContainer>
      <ToggleContainer>
        <div>{activeTheme === "light" ? "DARK" : "LIGHT"}</div>
        <ToggleImageContainer>
          <ToggleButton onClick={() => setActiveTheme(inactiveTheme)}>
            {activeTheme === "light" ? (
              <Image src={"/icon-moon.svg"} width={20} height={20} />
            ) : (
              <Image src={"/icon-sun.svg"} width={20} height={20} />
            )}
          </ToggleButton>
        </ToggleImageContainer>
      </ToggleContainer>
    </HeaderContainer>
  );
};

export default Header;
