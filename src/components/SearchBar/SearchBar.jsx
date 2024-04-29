import { useEffect, useState } from 'react';
import searchIcon from '../../assets/Search.svg';
import searchIconPurple from '../../assets/SearchPurple.svg';
import * as S from './SearchBar.styled';

function SearchModal() {
  const [text, setText] = useState();
  const [inputImage, setInputImage] = useState();

  useEffect(() => {
    if (text) {
      setInputImage(searchIconPurple);
      return;
    }
    setInputImage(searchIcon);
  }, [text]);

  return (
    <S.SearchBarModal>
      <S.SearchForm onSubmit={(e) => e.preventDefault()}>
        <S.SearchBarInput
          placeholder="링크를 검색해 보세요"
          onChange={(e) => setText(e.target.value)}
        />
        <S.SearchIcon src={inputImage} alt="serachIcon" />
      </S.SearchForm>
    </S.SearchBarModal>
  );
}

export default SearchModal;
