import React from 'react';
import * as S from './FolderButton.styled';
import { Folder } from '@/hooks/useGetFolderList';

function FolderButton({
  item,
  isSelected,
  handleMenuClick,
  index,
  setOnSelect,
}: {
  item: Folder;
  isSelected: string;
  handleMenuClick: (index: number) => void;
  index: number;
  setOnSelect: React.Dispatch<
    React.SetStateAction<{ id: number; name: string }>
  >;
}) {
  const changeFolder = () => {
    setOnSelect({ id: item.id, name: item.name });
    handleMenuClick(index);
  };

  return (
    <S.FolderName onClick={changeFolder} $select={isSelected}>
      {item.name}
    </S.FolderName>
  );
}

export default FolderButton;
