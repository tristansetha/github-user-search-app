import styled from "@emotion/styled";
import Image from 'next/image'

const HeaderContainer = styled.header`
  width: var(--mobile-card-width);
  height: 39px;
  /* border: 1px solid purple; */
  display: flex;
  justify-content: space-between;
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
  align-items: center;
  /* width: 78px;
  height: 20px; */
  font-size: 13px;
  letter-spacing: 2.5px;
  /* border: 2px solid black; */
  > div:first-child{
    /* border: 1px solid red; */
    margin-right: 16px;
  }
`;

const ToggleImageContainer = styled.div`
  /* border: 1px solid black; */
  font-size: 13px;
`;

const Header = ({ logo, children }) => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image
          src={logo}
          layout="fill"
        />
      </LogoContainer>
      <ToggleContainer>
        <div>DARK</div>
        <ToggleImageContainer>
          <Image
            src={"/icon-moon.svg"}
            width={20}
            height={20}
          />
        </ToggleImageContainer>
      </ToggleContainer>
    </HeaderContainer>
  );
}

export default Header;
