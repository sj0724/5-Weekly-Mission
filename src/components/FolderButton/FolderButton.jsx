import * as S from './FolderButton.styled';

function FolderButton({
  item,
  setFolderId,
  setFolderName,
  isSelected,
  handleMenuClick,
  index,
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
