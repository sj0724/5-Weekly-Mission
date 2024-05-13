import { useState } from 'react';
import * as S from './FolderButtonContainer.styled';
import FolderButton from '../FolderButton/FolderButton';
import { useModal } from '../../contexts/ModalContext';
import { Folders } from '../../hooks/useGetFolderList';

function FolderButtonContainer({
  link,
  setFolderName,
  setFolderId,
}: {
  link: Folders;
  setFolderName: React.Dispatch<React.SetStateAction<string>>;
  setFolderId: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [linkSelected, setLinkSelected] = useState<string[]>([]);
  const [totalBtn, setTotalBtn] = useState(true);
  const { openModal } = useModal();

  const handleMenuClick = (index: number) => {
    const booleanArr: string[] = new Array(link.length).fill('white');
    booleanArr[index] = 'select';
    setLinkSelected(booleanArr);
    setTotalBtn(false);
  };

  const handleClickTotalButton = () => {
    const totalArr: string[] = new Array(link.length).fill('white');
    setLinkSelected(totalArr);
    setFolderId(0);
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
          ? link.map((item, index: number) => (
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
