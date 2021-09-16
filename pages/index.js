import Layout from "@/components/Layout/Layout";
import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import { AppContext } from "@/context/state";
import { useContext } from "react";
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
        <Header logo="/devfinder.svg" />
        <Search />
        <Card>
          <UserDetailsContainer>
            <UserDetailsImageContainer>
              <img src={avatar_url} />
            </UserDetailsImageContainer>
            <UserDetailsInfo>
              <div>{name}</div>
              <div>@{login}</div>
              <div id="profile-joined">
                Joined {date.getDay()} {months[date.getMonth() + 1]}{" "}
                {date.getFullYear()}
              </div>
            </UserDetailsInfo>
          </UserDetailsContainer>
          <BioContainer>{bio ? bio : "No bio to be displayed"}</BioContainer>
          <StatsContainer>
            <StatsElement>
              <div>Repos</div>
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
              />
              <div>{location ? location : "Not Available"}</div>
            </LinksElement>
            <LinksElement valid={validTwitter}>
              <Image
                src="/icon-twitter.svg"
                layout="fixed"
                width={20}
                height={16.25}
              />
              <div>{twitter_username ? twitter_username : "Not Available"}</div>
            </LinksElement>
            <LinksElement valid={validBlog}>
              <Image
                src="/icon-website.svg"
                layout="fixed"
                width={19.99}
                height={19.94}
              />
              <div>{blog ? blog : "Not Available"}</div>
            </LinksElement>
            <LinksElement valid={validCompany}>
              <Image
                src="/icon-company.svg"
                layout="fixed"
                width={20}
                height={19.85}
              />
              <div>{company ? company : "Not Available"}</div>
            </LinksElement>
          </LinksContainer>
        </Card>
      </MainContainer>
    </Layout>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const res = await fetch("https://api.github.com/users/Octocat");
  const profile = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      profile,
    },
  };
}

export default Home;
