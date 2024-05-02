import { useState } from 'react';
import * as S from './FolderButtonContainer.styled';
import FolderButton from '../FolderButton/FolderButton';
import { useModal } from '../../contexts/ModalContext';

function FolderButtonContainer({ link, setFolderName, setFolderId }) {
  const [linkSelected, setLinkSelected] = useState([]);
  const [totalBtn, setTotalBtn] = useState(true);
  const { openModal } = useModal();

  const handleMenuClick = (index) => {
    const booleanArr = [...link].fill('white');
    booleanArr[index] = 'select';
    setLinkSelected(booleanArr);
    setTotalBtn(false);
  };

  const handleClickTotalButton = () => {
    const totalArr = [...link].fill('white');
    setLinkSelected(totalArr);
    setFolderId('');
    setFolderName('');
    setTotalBtn(true);
  };

  return (
    <S.FolderMenu>
      <S.FolderButtons>
        <S.TotalFolderButton
          onClick={handleClickTotalButton}
          $select={totalBtn}
        >
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
      <S.AddFolderButton onClick={() => openModal('addFolder')}>
        폴더 추가
        <S.PlusIcon />
      </S.AddFolderButton>
    </S.FolderMenu>
  );
}

export default FolderButtonContainer;
