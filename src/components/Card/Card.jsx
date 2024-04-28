import { useEffect, useState } from 'react';
import { changeDate, calculateDate } from '../../utils/util';
import kebab from '../../assets/kebab.svg';
import star from '../../assets/star.svg';
import * as S from './Card.styled';
import KebabMenu from '../KebabMenu/KebabMenu';

function Card({ item, toggleModal }) {
  const [createdAt, setCreatedAt] = useState({});
  const [fullDate, setFullDate] = useState('');
  const [imageUrl] = useState(item.image_source);
  const [kebabView, setKebaView] = useState(false);

  const { url, description } = item;

  const createdText = `${createdAt.time} ${createdAt.result} ago`;

  useEffect(() => {
    const nowDate = new Date();
    let createdate;
    if (item.createdAt) {
      createdate = new Date(item.createdAt);
    } else if (item.created_at) {
      createdate = new Date(item.created_at);
    }
    const date = (nowDate - createdate) / 1000;
    setCreatedAt(calculateDate(date));
    setFullDate(changeDate(createdate));
  }, [item]);

  return (
    <S.ItemCard>
      <S.StarIcon src={star} alt="starIcon" />
      {imageUrl ? (
        <S.ItemImg image={imageUrl} alt="itemImage" />
      ) : (
        <S.EmptyImg>이미지가 없습니다.</S.EmptyImg>
      )}
      <S.ItemInfo>
        <S.KebabIcon
          src={kebab}
          alt="kebabIcon"
          onClick={() => setKebaView(!kebabView)}
        />
        <S.ItemDate>{createdText}</S.ItemDate>
        <S.ItemDescription>
          <a href={url} target="_blank" rel="noreferrer">
            {description ? description : url}
          </a>
        </S.ItemDescription>
        <S.ItemFullDate>{fullDate}</S.ItemFullDate>
      </S.ItemInfo>
      {kebabView && <KebabMenu toggleModal={toggleModal} item={item} />}
    </S.ItemCard>
  );
}

export default Card;
