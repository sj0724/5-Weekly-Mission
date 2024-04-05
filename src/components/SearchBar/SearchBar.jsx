import searchIcon from "../../assets/Search.svg";
import * as S from "./SearchBar.styled";

function SearchModal() {
  return (
    <S.SearchBarModal>
      <S.SearchForm>
        <S.SearchBarInput placeholder="링크를 검색해 보세요"></S.SearchBarInput>
        <S.SearchIcon src={searchIcon} alt="serachIcon" />
      </S.SearchForm>
    </S.SearchBarModal>
  );
}

export default SearchModal;
