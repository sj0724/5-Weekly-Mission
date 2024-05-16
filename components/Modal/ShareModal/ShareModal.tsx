import React from 'react';
import * as S from './ShareModal.styled';
import BaseModal from '../BaseModal/BaseModal';
import Image from 'next/image';

function ShareModal({ folderName }: { folderName: string }) {
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
        <S.ShareButtonBody $color="rgba(157, 157, 157, 0.04)">
          <span>
            <Image src="/link.svg" alt="링크 아이콘" width={18} height={18} />
          </span>
          <p>링크 복사</p>
        </S.ShareButtonBody>
      </S.ButtonContainer>
    </BaseModal>
  );
}

export default ShareModal;
