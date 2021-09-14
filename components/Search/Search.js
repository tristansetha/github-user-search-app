import styled from "@emotion/styled";
import Image from 'next/image'

const SearchContainer = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
  height: 60px;
  width: var(--mobile-card-width);
  margin-top: 36px;
  background-color: var(--color-bg-card);
  border-radius: 10px;
  /* border:2px solid blue; */
  /* filter: drop-shadow(0 10px 10px var(--color-text-secondary)); */
  box-shadow: 0 25px 25px -19px var(--color-text-secondary);
  /* box-shadow: [horizontal offset] [vertical offset] [blur radius] [optional spread radius] [color]; */
`;

const IconContainer = styled.div`
  margin-left: 16px;

`;

const SearchInput = styled.input`
line-height: 25px;
border: none;
outline: none;
/* text-align: top; */
  /* border:2px solid blue; */
`;

const SearchButton = styled.button`
  margin-right:7px;
  height: 46px;
  width: 84px;
  border-radius: 10px;
  border: none;
  background-color: var(--search-button-color);
  color: white;
`;

const Search = () => {
  return (
    <SearchContainer>
      <IconContainer>
        <Image
          src={'/icon-search.svg'}
          width={20.05}
          height={20}
        />
      </IconContainer>
      <SearchInput placeholder="Search Github username..." />
      <SearchButton >Search</SearchButton>
    </SearchContainer>
  );
}

export default Search;
