import React, { useState } from 'react';
import * as S from './ShareModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import Image from 'next/image';
import Toast from '@/components/Toast/Toast';

function ShareModal({
  folderName,
  folderId,
}: {
  folderName: string;
  folderId: string;
}) {
  const [toast, setToast] = useState(false);

  const shareLink = async () => {
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_BASE_URL}/shared/${folderId}`
    );
    setToast(true);
  };

  return (
    <BaseModal state={'share'}>
      <S.Header>
        <p>폴더 공유</p>
        <span>{folderName}</span>
      </S.Header>
      <S.ButtonContainer>
        <S.ShareButtonBody $color="#FEE500">
          <span>
            <Image
              src="/Kakao.svg"
              alt="카카오톡 아이콘"
              width={18}
              height={18}
            />
          </span>
          <p>카카오톡</p>
        </S.ShareButtonBody>
        <S.ShareButtonBody $color="#1877F2">
          <span>
            <Image
              src="/Facebook.svg"
              alt="페이스북 아이콘"
              width={18}
              height={18}
            />
          </span>
          <p>페이스북</p>
        </S.ShareButtonBody>
        <S.ShareButtonBody
          $color="rgba(157, 157, 157, 0.04)"
          onClick={() => shareLink()}
        >
          <span>
            <Image src="/link.svg" alt="링크 아이콘" width={18} height={18} />
          </span>
          <p>링크 복사</p>
        </S.ShareButtonBody>
      </S.ButtonContainer>
      {toast && <Toast setToast={setToast} text="URL이 복사되었습니다." />}
    </BaseModal>
  );
}

export default ShareModal;
