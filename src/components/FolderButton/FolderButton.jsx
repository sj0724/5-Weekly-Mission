import * as S from "./FolderButton.styled";

function FolderButton({
  item,
  setFolderId,
  setFolderName,
  isSelected,
  handleMenuClick,
  index,
}) {
  const changeFolder = () => {
    if (!item) {
      setFolderId("");
      setFolderName("");
    } else {
      setFolderId(item.id);
      setFolderName(item.name);
    }
    handleMenuClick(index);
  };

  return (
    <S.FolderName onClick={changeFolder} $select={isSelected}>
      {item ? item.name : "전체"}
    </S.FolderName>
  );
}

export default FolderButton;
