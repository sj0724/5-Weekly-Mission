import { useState } from 'react';
import * as S from './FolderButtonContainer.styled';
import FolderButton from '../FolderButton/FolderButton';

function FolderButtonContainer({
  link,
  setFolderName,
  setFolderId,
  toggleModal,
}) {
  const [linkSelected, setLinkSelected] = useState(false);
  const [totalBtn, setTotalBtn] = useState(true);

  const handleMenuClick = (index) => {
    const booleanArr = [...link].fill(false);
    booleanArr[index] = true;
    setLinkSelected(booleanArr);
    setTotalBtn(false);
  };

  const setTotal = () => {
    const totalArr = [...link].fill(false);
    setLinkSelected(totalArr);
    setFolderId('');
    setFolderName('');
    setTotalBtn(true);
  };

  return (
    <S.FolderMenu>
      <S.FolderButtons>
        <S.TotalFolderButton onClick={setTotal} $select={totalBtn}>
          전체
        </S.TotalFolderButton>
        {link
          ? link.map((item, index) => (
              <FolderButton
                item={item}
                key={item.name}
                setFolderId={setFolderId}
                setFolderName={setFolderName}
                isSelected={linkSelected[index]}
                handleMenuClick={handleMenuClick}
                index={index}
              />
            ))
          : null}
      </S.FolderButtons>
      <S.AddFolderButton onClick={() => toggleModal('addFolder')}>
        폴더 추가
        <S.PlusIcon />
      </S.AddFolderButton>
    </S.FolderMenu>
  );
}

export default FolderButtonContainer;
