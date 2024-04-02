import styled from "styled-components";
import searchIcon from "../assets/Search.svg";
import "./SearchBar.css";

export const SearchBarInput = styled.input`
  position: relative;
  padding: 15px 32px;
  width: 100%;
  border-radius: 10px;
  background-color: #dddddd;
  border: 1px solid #dddddd;
`;

function SearchModal() {
  return (
    <div className="searchModal">
      <form className="searchForm">
        <SearchBarInput placeholder="링크를 검색해 보세요"></SearchBarInput>
        <img src={searchIcon} className="searchIcon" alt="serachIcon" />
      </form>
    </div>
  );
}

export default SearchModal;
