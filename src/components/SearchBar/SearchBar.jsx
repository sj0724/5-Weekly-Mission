import { useEffect, useState } from 'react';
import searchIcon from '../../assets/Search.svg';
import searchIconPurple from '../../assets/SearchPurple.svg';
import closeIcon from '../../assets/close.svg';
import * as S from './SearchBar.styled';

function SearchModal({ linkList }) {
  const [text, setText] = useState();
  const [inputImage, setInputImage] = useState();

  const searchLink = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (text) {
      setInputImage(searchIconPurple);
      return;
    }
    setInputImage(searchIcon);
  }, [text]);

  return (
    <S.SearchBarModal>
      <S.SearchForm onSubmit={searchLink}>
        <S.SearchBarInput
          placeholder="링크를 검색해 보세요"
          onChange={(e) => setText(e.target.value)}
          id="word"
          value={text}
        />
        <S.SearchIcon src={inputImage} alt="serachIcon" />
        {text && (
          <S.CloseIcon
            src={closeIcon}
            alt="닫기 버튼"
            onClick={() => setText('')}
          />
        )}
      </S.SearchForm>
    </S.SearchBarModal>
  );
}

export default SearchModal;
