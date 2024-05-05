import React from 'react';
import * as S from './FolderButton.styled';
import { Folder } from '../../hooks/useGetFolderList';

function FolderButton({
  item,
  setFolderId,
  setFolderName,
  isSelected,
  handleMenuClick,
  index,
}: {
  item: Folder;
  setFolderId: React.Dispatch<React.SetStateAction<number>>;
  setFolderName: React.Dispatch<React.SetStateAction<string>>;
  isSelected: string;
  handleMenuClick: (index: number) => void;
  index: number;
}) {
  const changeFolder = () => {
    setFolderId(item.id);
    setFolderName(item.name);
    handleMenuClick(index);
  };

  return (
    <S.FolderName onClick={changeFolder} $select={isSelected}>
      {item.name}
    </S.FolderName>
  );
}

export default FolderButton;
