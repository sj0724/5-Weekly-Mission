import styled from "styled-components";
import searchIcon from "../assets/Search.svg";

const SearchBarInput = styled.input`
  position: relative;
  padding: 15px 32px;
  width: 100%;
  border-radius: 10px;
  background-color: #dddddd;
  border: 1px solid #dddddd;
`;

const SearchBarModal = styled.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchForm = styled.form`
  position: relative;
  width: 100%;
  max-width: 1060px;
  display: flex;
  justify-content: center;
`;

const SearchIcon = styled.img`
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 10px;
`;

function SearchModal() {
  return (
    <SearchBarModal>
      <SearchForm>
        <SearchBarInput placeholder="링크를 검색해 보세요"></SearchBarInput>
        <SearchIcon src={searchIcon} alt="serachIcon" />
      </SearchForm>
    </SearchBarModal>
  );
}

export default SearchModal;
