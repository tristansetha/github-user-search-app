import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import { AppContext } from "@/context/state";
import { useContext } from "react";
import Image from "next/image";
import {
  MainContainer,
  Card,
  UserDetailInfoContainer,
  UserDetailsImageContainer,
  UserDetailsInfo,
  BioContainer,
  StatsContainer,
  StatsElement,
  LinksContainer,
  LinksElement,
} from "../styles/homeStyles";

const Home = ({ profile }) => {
  const { profileContext } = useContext(AppContext);

  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    twitter_username,
    blog,
    location,
    company,
  } = Object.entries(profileContext).length === 0 ? profile : profileContext;

  let date = new Date(created_at);
  let validLocation = location ? true : false;
  let validTwitter = twitter_username ? true : false;
  let validBlog = blog ? true : false;
  let validCompany = company ? true : false;

  let months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sept",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  return (
    <Layout>
      <MainContainer>
        <Header />
        <Search />
        <Card>
          <UserDetailsImageContainer>
            <div>
              <Image layout="fill" src={avatar_url} alt="User avatar" />
            </div>
          </UserDetailsImageContainer>
          <UserDetailInfoContainer>
            <UserDetailsInfo>
              <div><h1>{name}</h1></div>
              <div>@{login}</div>
              <div id="profile-joined">
                Joined {date.getDay()} {months[date.getMonth() + 1]}{" "}
                {date.getFullYear()}
              </div>
            </UserDetailsInfo>
          </UserDetailInfoContainer>
          <BioContainer>{bio ? bio : "No bio to be displayed"}</BioContainer>
          <StatsContainer>
            <StatsElement>
              <h1>Repos</h1>
              <div>{public_repos}</div>
            </StatsElement>
            <StatsElement>
              <div>Followers</div>
              <div>{followers}</div>
            </StatsElement>
            <StatsElement>
              <div>Following</div>
              <div>{following}</div>
            </StatsElement>
          </StatsContainer>
          <LinksContainer>
            <LinksElement valid={validLocation}>
              <Image
                src="/icon-location.svg"
                layout="fixed"
                width={13.75}
                height={20}
                alt="Icon location"
              />
              <div>{location ? location : "Not Available"}</div>
            </LinksElement>
            <LinksElement valid={validTwitter}>
              <Image
                src="/icon-twitter.svg"
                layout="fixed"
                width={20}
                height={16.25}
                alt="Icon twitter"
              />
              <div>{twitter_username ? twitter_username : "Not Available"}</div>
            </LinksElement>
            <LinksElement valid={validBlog}>
              <Image
                src="/icon-website.svg"
                layout="fixed"
                width={19.99}
                height={19.94}
                alt="Icon website"
              />
              <div>{blog ? blog : "Not Available"}</div>
            </LinksElement>
            <LinksElement valid={validCompany}>
              <Image
                src="/icon-company.svg"
                layout="fixed"
                width={20}
                height={19.85}
                alt="Icon company"
              />
              <div>{company ? company : "Not Available"}</div>
            </LinksElement>
          </LinksContainer>
        </Card>
      </MainContainer>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users/Octocat");
  const profile = await res.json();
  return {
    props: {
      profile,
    },
  };
}

export default Home;
