import { useState } from 'react';
import * as S from './FolderButtonContainer.styled';
import FolderButton from '../FolderButton/FolderButton';
import { useModal } from '../../contexts/ModalContext';
import { Folders } from '../../hooks/useGetFolderList';
import ModalPortal from '@/Portal';
import AddFolderModal from '../Modal/AddFolderModal/AddFolderModal';

function FolderButtonContainer({
  link,
  setOnSelect,
}: {
  link: Folders;
  setOnSelect: React.Dispatch<
    React.SetStateAction<{ id: number; name: string }>
  >;
}) {
  const [linkSelected, setLinkSelected] = useState<string[]>([]);
  const [totalBtn, setTotalBtn] = useState(true);
  const { modalState, openModal } = useModal();

  const handleMenuClick = (index: number) => {
    const booleanArr: string[] = new Array(link.length).fill('white');
    booleanArr[index] = 'select';
    setLinkSelected(booleanArr);
    setTotalBtn(false);
  };

  const handleClickTotalButton = () => {
    const totalArr: string[] = new Array(link.length).fill('white');
    setLinkSelected(totalArr);
    setOnSelect({ id: 0, name: '' });
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
                setOnSelect={setOnSelect}
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
      {modalState.addFolder && (
        <ModalPortal>
          <AddFolderModal />
        </ModalPortal>
      )}
    </S.FolderMenu>
  );
}

export default FolderButtonContainer;
