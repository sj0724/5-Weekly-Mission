import * as S from './AddModal.styled';
import closeIcon from '../../../assets/close.svg';
import checkIcon from '../../../assets/check.svg';
import { useState } from 'react';

function AddModal({ children, setModal }) {
  const [check, setCheck] = useState(false);

  return (
    <S.Background>
      <S.Body>
        <S.Header>
          <p>폴더에 추가</p>
          <span>폴더명</span>
        </S.Header>
        <S.FolderContainer>
          <S.FolderButton check={check} onClick={() => setCheck(!check)}>
            <S.FolderInfo>
              <h2>폴더이름</h2>
              <p>링크 갯수</p>
            </S.FolderInfo>
            {check && <img src={checkIcon} alt="체크 아이콘" />}
          </S.FolderButton>
        </S.FolderContainer>
        <S.AddButton>추가하기</S.AddButton>
        <S.CloseIcon
          src={closeIcon}
          alt="닫기버튼"
          onClick={() => setModal(false)}
        />
      </S.Body>
    </S.Background>
  );
}

export default AddModal;
