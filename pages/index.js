import styled from "@emotion/styled";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.js";
import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import Image from "next/image";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* border: 3px solid black; */
`;

const Card = styled.section`
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
    max-width: 573px;
  }

  @media (min-width: 1440px) {
    /* border: 1px solid blue; */
    padding: 48px;
    align-items: flex-end;
    max-width: 730px;
  }
`;

const UserDetailsContainer = styled.div`
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
    width: 100%;
    /* border: 1px solid blue; */
  }
`;

const UserDetailsImageContainer = styled.div`
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

const UserDetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  /* margin-left: 15px; */
  /* border:1px solid red; */

  /* width: 144px; */
  height: 69px;
  > div:first-child {
    font-size: 16px;
    font-weight: 700;
  }

  > div:nth-child(2) {
    font-size: 13px;
    color: var(--color-accent-primary);
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
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const BioContainer = styled.div`
  width: 102%;
  padding: 0%;
  /* min-width: 279px; */
  height: 75px;

  /* border: 2px solid purple; */
  margin-top: 33px;
  font-size: 13px;
  letter-spacing: 0px;
  line-height: 25px;
  @media (min-width: 768px) {
    min-width: 493px;
    /* border: 1px solid blue; */
  }

  @media (min-width: 1440px) {
    width: 66%;
    margin-top: 20px;
    /* border: 1px solid blue; */
  }
`;

const StatsContainer = styled.div`
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
    min-width: 493px;
    /* border: 1px solid blue; */
  }

  @media (min-width: 1440px) {
    width: 66%;

    /* border: 1px solid blue; */
  }
`;

const StatsElement = styled.div`
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
  }
  > div:nth-child(2) {
    /* border: 1px solid black; */
    height: 24px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* width: 185px; */
  width: 57%;
  height: 127px;
  margin-top: 24px;
  /* border: 2px solid purple; */
  @media (min-width: 768px) {
    /* min-width: 493px; */
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30px;
    /* border: 1px solid blue; */
  }

  @media (min-width: 1440px) {
    width: 76%;

    /* border: 1px solid blue; */
  }
`;

const LinksElement = styled.div`
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

const Home = () => {
  return (
    <Layout>
      <MainContainer>
        <Header logo="/devfinder.svg" />
        <Search />
        <Card>
          <UserDetailsContainer>
            <UserDetailsImageContainer>
              <Image src={"/Oval.svg"} layout="fill" width={70} height={70} />
            </UserDetailsImageContainer>
            <UserDetailsInfo>
              <div>The Octocat</div>
              <div>@octocat</div>
              <div>Joined 25 Jan 2011</div>
            </UserDetailsInfo>
          </UserDetailsContainer>
          <BioContainer>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. Quisque volutpat mattis eros.
          </BioContainer>
          <StatsContainer>
            <StatsElement>
              <div>Repos</div>
              <div>8</div>
            </StatsElement>
            <StatsElement>
              <div>Followers</div>
              <div>3938</div>
            </StatsElement>
            <StatsElement>
              <div>Following</div>
              <div>9</div>
            </StatsElement>
          </StatsContainer>
          <LinksContainer>
            <LinksElement>
              <Image
                src="/icon-location.svg"
                layout="fixed"
                width={13.75}
                height={20}
              />
              <div>San Francisco</div>
            </LinksElement>
            <LinksElement>
              <Image
                src="/icon-twitter.svg"
                layout="fixed"
                width={20}
                height={16.25}
              />
              <div>https://github.blog</div>
            </LinksElement>
            <LinksElement>
              <Image
                src="/icon-website.svg"
                layout="fixed"
                width={19.99}
                height={19.94}
              />
              <div>Not Available</div>
            </LinksElement>
            <LinksElement>
              <Image
                src="/icon-company.svg"
                layout="fixed"
                width={20}
                height={19.85}
              />
              <div>@github</div>
            </LinksElement>
          </LinksContainer>
        </Card>
      </MainContainer>
    </Layout>
  );
};

export default Home;
