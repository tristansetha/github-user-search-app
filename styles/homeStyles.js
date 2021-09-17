import styled from "@emotion/styled";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Card = styled.section`
  display: grid;
  grid-template-columns: 0.5fr 1.03fr;
  grid-template-rows: 0.6fr 0.64fr 0.72fr 1.08fr;
  column-gap: 19.5px;
  row-gap: 25px;
  width: var(--mobile-card-width);
  height: 517px;
  margin-top: 16px;
  padding: 24px;
  background-color: var(--color-bg-card);
  border-radius: 12px;
  box-shadow: 0 25px 25px -19px rgba(0, 0, 0, 0.1);
  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
  /* https://css-tricks.com/almanac/properties/b/box-shadow/ */

  @media (min-width: 768px) {
    grid-template-columns: 0.47fr 1.35fr;
    grid-template-rows: 1.2fr 0.49fr 0.84fr 0.628fr;
    column-gap: 41px;
    padding: 40px;
    max-width: 573px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 0.34fr 1.40fr;
    grid-template-rows: 0.65fr 0.50fr 0.85fr 0.63fr;
    column-gap: 37px;
    row-gap: 30px;
    padding: 48px;
    max-width: 730px;
  }
`;

export const UserDetailsImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  >div {
    position: relative;
    width: 70px;
    height: 70px;
  }

  img {
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    >div {
      width: 117px;
      height: 117px;
    }
  }

  @media (min-width: 1440px) {
    align-items: flex-start;
    grid-row: 1/5;
    grid-column: 1;
  }
`;

export const UserDetailInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const UserDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  > div:first-of-type {
    color: var(--color-text-profile-name);
    h1 {
      font-size: 16px;
    font-weight: 700;
    }

  }

  > div:nth-of-type(2) {
    font-size: 13px;
    color: var(--color-text-profile-username);
  }

  > div:nth-of-type(3) {
    color: var(--color-text-profile-joined);
  }
  @media (min-width: 768px) {
    > div:first-of-type {
      h1 {
        font-size: 26px;
      font-weight: 700;
      }
    }
    > div:nth-of-type(2) {
      font-size: 16px;
      order: 3;
    }
    > div:nth-of-type(3) {
      font-size: 15px;
      order: 2;
    }
  }

  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    > div:nth-of-type(3) {
      text-align: right;
    }
  }
`;

export const BioContainer = styled.div`
  grid-column: 1/3;
  padding: 0%;
  height: 75px;
  font-size: 13px;
  letter-spacing: 0px;
  line-height: 25px;
  color: var(--color-text-profile-bio);
  @media (min-width: 768px) {
    min-width: 493px;
  }

  @media (min-width: 1440px) {
    grid-column: 2;
    font-size: 15px;
    line-height: 25px;
  }
`;

export const StatsContainer = styled.div`
  grid-column: 1/3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 85px;
  border-radius: 12px;
  background-color: var(--color-bg-main);

  @media (min-width: 768px) {
    padding: 15px;

    justify-content: space-around;
    min-width: 493px;
  }

  @media (min-width: 1440px) {
    grid-column: 2;
    width: 66%;
  }
`;

export const StatsElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 79px;
  height: 48px;

  > div:first-of-type {
    height: 16px;
    font-size: 11px;
    text-align: center;
    color: var(--color-text-profile-stats1);
  }
  > div:nth-of-type(2) {
    height: 24px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: var(--color-text-profile-stats2);
  }
  @media (min-width: 768px) {
    > div:first-of-type {
      text-align: left;
      font-size: 13px;
    }
    > div:nth-of-type(2) {
      text-align: left;
      font-size: 22px;
    }
  }

  @media (min-width: 1440px) {
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column: 1/3;
  width: 100%;
  color: var(--color-text-profile-links);
  @media (min-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  @media (min-width: 1440px) {
    row-gap: 0px;
    width: 100%;
    grid-column: 2;

  }
`;

export const LinksElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  font-size: 13px;
  opacity: ${(props) => (props.valid ? "100%" : "50%")};

  > div:nth-of-type(2) {
    margin-left: 13px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 1440px){
    > div {
      font-size: 15px;
    }
  }
`;
