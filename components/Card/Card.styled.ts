import styled from 'styled-components';

export const EmptyImg = styled.div`
  height: 100%;
  background-color: var(--EmptyArea);
  border-radius: 1.5rem 1.5rem 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    opacity: 0.2;
    width: 13.3rem;
    height: 2.4rem;
  }
`;

export const ItemImg = styled.div<{ image: string }>`
  height: 100%;
  background-image: url(${(props) => props.image});
  border-radius: 1.5rem 1.5rem 0 0;
  background-size: cover;
  background-position: center;

  &:hover {
    background-size: 130%;
  }
`;

export const ItemCard = styled.div`
  width: 34rem;
  height: 33.4rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem;
  text-decoration: none;
  color: #000;
  position: relative;
  font-size: 1.6rem;

  &:hover {
    background-color: var(--Background);
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const StarIcon = styled.img`
  width: 3.4rem;
  height: 3rem;
  flex-shrink: 0;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 10;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem;
  width: 100%;
  height: 13.5rem;
  gap: 1rem;
  position: relative;
`;

export const KebabIcon = styled.img`
  cursor: pointer;
  width: 2.1rem;
  height: 1.7rem;
  flex-shrink: 0;
  position: absolute;
  right: 2rem;
  top: 1.5rem;
`;

export const ItemDate = styled.p`
  color: var(--Description);
  font-size: 1.3rem;
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
  font-size: 1.4rem;
`;
