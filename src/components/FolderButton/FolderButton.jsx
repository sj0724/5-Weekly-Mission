import * as S from "./FolderButton.styled";

function FolderButton({ item, setFolderId, setFolderName }) {
  const changeFolder = () => {
    if (!item) {
      setFolderId("");
      setFolderName("");
    } else {
      setFolderId(item.id);
      setFolderName(item.name);
    }
  };

  return (
    <S.FolderName onClick={changeFolder}>
      {item ? item.name : "전체"}
    </S.FolderName>
  );
}

export default FolderButton;
