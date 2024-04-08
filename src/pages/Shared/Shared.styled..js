import styled from "styled-components";

export const Shared = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Pretendard;
`;

export const OwnerProfile = styled.div`
  background-color: var(--Background);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 60px 0;
`;

export const OwnerProfileImage = styled.img`
  width: 60px;
  height: 60px;
`;

export const OwnerName = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-top: 12px;
`;

export const FolderName = styled.p`
  color: #000;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
`;

export const SharedContent = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1199px) {
    padding: 0 32px;
  }
`;
