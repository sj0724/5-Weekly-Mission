import AddFolderModal from '../AddFolderModal/AddFolderModal';
import AddModal from '../AddModal/AddModal';
import DeleteLinkModal from '../DeleteLinkModal/DeleteLinkModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import ShareModal from '../ShareModal/ShareModal';
import * as S from './Modals.styled';

function Modals({ modalType, setModal, folderName, link }) {
  return (
    <S.ModalPage>
      {modalType === 'delete' && (
        <DeleteModal setModal={setModal} folderName={folderName} />
      )}
      {modalType === 'add' && <AddModal setModal={setModal} link={link} />}
      {modalType === 'edit' && (
        <EditModal setModal={setModal} folderName={folderName} />
      )}
      {modalType === 'share' && (
        <ShareModal setModal={setModal} folderName={folderName} />
      )}
      {modalType === 'addFolder' && <AddFolderModal setModal={setModal} />}
      {modalType === 'deleteLink' && <DeleteLinkModal setModal={setModal} />}
    </S.ModalPage>
  );
}

export default Modals;
