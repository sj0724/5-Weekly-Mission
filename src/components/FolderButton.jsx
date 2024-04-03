import styled from "styled-components";

const FolderName = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid var(--Primary);
  background: #fff;
  cursor: pointer;
  height: 35px;
`;

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
    <FolderName onClick={changeFolder}>{item ? item.name : "전체"}</FolderName>
  );
}

export default FolderButton;
