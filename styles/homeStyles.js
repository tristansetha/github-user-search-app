import styled from "@emotion/styled";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* border: 3px solid black; */
`;

export const Card = styled.section`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 87%;
  height: 517px;
  margin-top: 16px;
  padding: 33px 24px 29px 24px;
  background-color: var(--color-bg-card);
  border-radius: 12px;
  /* box-shadow: 0 10px 25px -10px var(--color-text-secondary); */
  box-shadow: 0 25px 25px -19px rgba(0, 0, 0, 0.1);

  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */

  /* https://css-tricks.com/almanac/properties/b/box-shadow/ */
  /* border: 2px solid purple */

  @media (min-width: 768px) {
    /* border: 1px solid black; */
    padding: 40px;
    max-width: 573px;
  }

  @media (min-width: 1440px) {
    padding: 48px;
    align-items: flex-end;
    max-width: 730px;
  }
`;

export const UserDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 41px;
  /* border: 2px solid purple; */
  > div:first-of-type {
    /* border: 2px solid purple; */
  }
  > div:nth-child(2) {
  }

  @media (min-width: 768px) {
    /* width: 100%; */
    height: 117px;
    /* border: 1px solid black; */
  }

  @media (min-width: 1440px) {
    gap: 22px;

    width: 100%;
    /* border: 1px solid blue; */
  }
`;

export const UserDetailsImageContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  /* border:1px solid black; */
  flex-grow: 0;

  @media (min-width: 768px) {
    width: 117px;
    height: 117px;
  }

  @media (min-width: 1440px) {
  }
`;

export const UserDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  /* margin-left: 15px; */
  /* border:1px solid red; */

  /* width: 144px; */
  height: 69px;
  > div:first-of-type {
    color: var(--color-text-profile-name);

    font-size: 16px;
    font-weight: 700;
  }

  > div:nth-child(2) {
    font-size: 13px;
    color: var(--color-text-profile-username);
  }

  >div:nth-child(3){
    color: var(--color-text-profile-joined);
  }
  @media (min-width: 768px) {
    width: 178px;
    height: 91px;

    > div:first-of-type {
      font-size: 26px;
      font-weight: 700;

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
    /* width: 66%; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* border:1px solid black; */
  }
`;

export const BioContainer = styled.div`
  width: 102%;
  padding: 0%;
  /* min-width: 279px; */
  height: 75px;

  /* border: 2px solid purple; */
  margin-top: 33px;
  font-size: 13px;
  letter-spacing: 0px;
  line-height: 25px;
  color: var(--color-text-profile-bio);
  @media (min-width: 768px) {
    min-width: 493px;
    /* border: 1px solid blue; */
  }

  @media (min-width: 1440px) {
    width: 66%;
    /* width: 480px; */
    margin-top: 0;
    /* border: 1px solid blue; */
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  /* min-width: 279px; */
  height: 85px;
  /* border: 2px solid purple; */
  margin-top: 23px;
  border-radius: 12px;

  background-color: var(--color-bg-main);
  > div {
    /* border: 1px solid black; */
  }
  @media (min-width: 768px) {
    padding: 15px;

    justify-content: space-around;
    min-width: 493px;
    /* border: 1px solid blue; */
  }

  @media (min-width: 1440px) {
    width: 66%;

    /* border: 1px solid blue; */
  }
`;

export const StatsElement = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  width: 79px;
  height: 48px;

  /* border: 1px solid black; */
  > div:first-child {
    /* border: 1px solid black; */
    height: 16px;
    font-size: 11px;
    text-align: center;
    color: var(--color-text-profile-stats1);

  }
  > div:nth-child(2) {
    /* border: 1px solid black; */

    height: 24px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    color: var(--color-text-profile-stats2);

  }
  @media (min-width: 768px) {
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
    > div:first-of-type {
      text-align: left;
      font-size: 13px;
    }
    > div:nth-child(2) {
      text-align: left;
      font-size: 22px;
    }
    /* border: 1px solid blue; */
  }

  @media (min-width: 1440px) {
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* width: 185px; */
  width: 57%;
  height: 127px;
  margin-top: 24px;
  color: var(--color-text-profile-links);
  /* border: 2px solid purple; */
  @media (min-width: 768px) {
    min-width: 493px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    /* border: 1px solid blue; */
  }

  @media (min-width: 1440px) {
    width: 66%;
    /* border: 1px solid blue; */
  }
`;

export const LinksElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* align-items: center; */
  /* border: 1px solid purple; */

  font-size: 13px;
  color: var(--color-text-primary);

  > div:nth-child(2) {
    /* border: 1px solid purple; */
    margin-left: 13px;
  }

  @media (min-width: 768px) {
    font-size: 15px;
    /* min-width: 493px; */

    /* border: 1px solid blue; */
  }

  @media (min-width: 1440px) {
    /* border: 1px solid blue; */
  }
`;
