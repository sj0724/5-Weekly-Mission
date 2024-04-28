import AddModal from '../AddModal/AddModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import ShareModal from '../ShareModal/ShareModal';
import * as S from './Modals.styled';

function Modals({ modalType, setModal, folderName }) {
  return (
    <S.ModalPage>
      {modalType === 'delete' && (
        <DeleteModal setModal={setModal} folderName={folderName} />
      )}
      {modalType === 'add' && <AddModal setModal={setModal} />}
      {modalType === 'edit' && (
        <EditModal setModal={setModal} folderName={folderName} />
      )}
      {modalType === 'share' && (
        <ShareModal setModal={setModal} folderName={folderName} />
      )}
    </S.ModalPage>
  );
}

export default Modals;
