import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import Image from "next/image";
import {
  MainContainer,
  Card,
  UserDetailsContainer,
  UserDetailsImageContainer,
  UserDetailsInfo,
  BioContainer,
  StatsContainer,
  StatsElement,
  LinksContainer,
  LinksElement,
} from "../styles/homeStyles";

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
              <div id="profile-joined">Joined 25 Jan 2011</div>
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
