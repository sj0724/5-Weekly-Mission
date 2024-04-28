import AddModal from '../AddModal/AddModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditModal from '../EditModal/EditModal';
import ShareModal from '../ShareModal/ShareModal';
import * as S from './Modals.styled';

function Modals({ modalType, setModal }) {
  return (
    <S.ModalPage>
      {modalType === 'delete' && <DeleteModal setModal={setModal} />}
      {modalType === 'add' && <AddModal setModal={setModal} />}
      {modalType === 'edit' && <EditModal setModal={setModal} />}
      {modalType === 'share' && <ShareModal setModal={setModal} />}
    </S.ModalPage>
  );
}

export default Modals;
