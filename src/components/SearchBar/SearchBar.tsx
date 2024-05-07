import React, { Dispatch, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import searchIcon from '../../assets/Search.svg';
import searchIconPurple from '../../assets/SearchPurple.svg';
import closeIcon from '../../assets/close.svg';
import * as S from './SearchBar.styled';

interface PropsType {
  setSearchKeyWord: Dispatch<React.SetStateAction<string>>;
}

function SearchModal({ setSearchKeyWord }: PropsType) {
  const [text, setText] = useState('');
  const [inputImage, setInputImage] = useState('');

  const searchLink = (e: FormEvent) => {
    e.preventDefault();
    setSearchKeyWord(text);
  };

  const cancelSearch = () => {
    setText('');
    setSearchKeyWord('');
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
        <S.SearchIcon src={inputImage} alt="돋보기 아이콘" />
        {text && (
          <S.CloseIcon
            src={closeIcon}
            alt="닫기 아이콘"
            onClick={cancelSearch}
          />
        )}
      </S.SearchForm>
    </S.SearchBarModal>
  );
}

export default SearchModal;
