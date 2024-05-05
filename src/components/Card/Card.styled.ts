import styled from 'styled-components';

export const EmptyImg = styled.div`
  height: 100%;
  background-color: var(--EmptyArea);
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    opacity: 0.2;
    width: 133px;
    height: 24px;
  }
`;

export const ItemImg = styled.div<{ image: string }>`
  height: 100%;
  background-image: url(${(props) => props.image});
  border-radius: 15px 15px 0 0;
  background-size: cover;
  background-position: center;

  &:hover {
    background-size: 130%;
  }
`;

export const ItemCard = styled.div`
  width: 340px;
  height: 334px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 15px;
  text-decoration: none;
  color: #000;
  position: relative;
  font-size: 1rem;

  &:hover {
    background-color: var(--Background);
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const StarIcon = styled.img`
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  width: 100%;
  height: 135px;
  gap: 10px;
  position: relative;
`;

export const KebabIcon = styled.img`
  cursor: pointer;
  width: 21px;
  height: 17px;
  flex-shrink: 0;
  position: absolute;
  right: 20px;
  top: 15px;
`;

export const ItemDate = styled.p`
  color: var(--Description);
  font-size: 13px;
`;

export const ItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const ItemFullDate = styled.p`
  font-size: 14px;
`;
