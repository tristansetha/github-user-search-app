import useSWR from "swr";
import styled from "@emotion/styled";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/state";

const SearchContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: var(--mobile-card-width);
  margin-top: 36px;
  background-color: var(--color-bg-card);
  border-radius: 10px;
  box-shadow: 0 25px 25px -19px rgba(0, 0, 0, 0.1);
  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
  @media (min-width: 768px) {
    max-width: 573px;
  }

  @media (min-width: 1440px) {
    height: 69px;
    max-width: 730px;
  }
`;

const IconContainer = styled.div`
  position: relative;
  margin-left: 16px;
  width: 24.06px;
  height: 24px;
  flex: 0 0 24px;
`;

const SearchInput = styled.input`
  flex: 1 1 auto;
  width: 56%;
  margin-left: 8.95px;
  border: none;
  text-align: left;
  line-height: 25px;
  outline: none;
  font-family: "Space Mono", monospace;
  color: pink;
  color: var(--color-text-search);
  background-color: inherit;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--color-text-search);
  }

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const SearchButton = styled.button`
  margin-right: 7px;
  height: 46px;
  width: 84px;
  border-radius: 10px;
  border: none;
  color: var(--color-text-header);
  background-color: var(--search-button-color);
  color: white;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    height: 50px;
    width: 106px;
  }
  :placeholder {
    color: pink;
  }
`;

const ErrorMessage = styled.span`
  color: #f74646;
`;

const fetcher = (url) => fetch(url).then((res) => res.json());

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [errorObj, setErrorObj] = useState({});
  const { setProfileContext } = useContext(AppContext);

  const handleError = (e) => {
    setErrorObj(e);
  };

  let { data, error } = useSWR(
    !shouldFetch ? null : `https://api.github.com/users/${inputValue}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      if (data.id != undefined) setProfileContext(data);
    }
  }, [data]);

  useEffect(() => {
    if (error) handleError(error);
  }, [error]);

  const handleShouldFetch = (bool) => {
    setShouldFetch(bool);
  };

  useEffect(() => {
    if (shouldFetch) handleShouldFetch(false);
  }, [data]);

  const handleSearch = () => {
    setShouldFetch(true);
  };

  return (
    <SearchContainer>
      <IconContainer>
        <Image src={"/icon-search.svg"} layout="fill" />
      </IconContainer>
      <SearchInput
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Github username..."
      />
      <ErrorMessage>
        {Object.entries(errorObj).length != 0 &&
        errorObj.message === "Not Found"
          ? "No results"
          : ""}
      </ErrorMessage>
      <SearchButton onClick={handleSearch}>Search</SearchButton>
    </SearchContainer>
  );
};

export default Search;
