import { useEffect, useRef, useState } from 'react';
import { changeDate, calculateDate } from '../../utils/util';
import kebab from '../../assets/kebab.svg';
import star from '../../assets/star.svg';
import fullStar from '../../assets/full_star.svg';
import * as S from './Card.styled';
import KebabMenu from '../KebabMenu/KebabMenu';
import logoIcon from '../../assets/logo.svg';

function Card({ item }) {
  const [createdAt, setCreatedAt] = useState({});
  const [fullDate, setFullDate] = useState('');
  const [imageUrl] = useState(item.image_source);
  const [kebabView, setKebaView] = useState(false);
  const [like, setLike] = useState(false);
  const kebabRef = useRef();

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

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        kebabView &&
        kebabRef.current &&
        !kebabRef.current.contains(event.target)
      ) {
        setKebaView(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [kebabView]);

  return (
    <S.ItemCard>
      <S.StarIcon
        src={like ? fullStar : star}
        alt="starIcon"
        onClick={() => {
          setLike(!like);
        }}
      />
      {imageUrl ? (
        <S.ItemImg image={imageUrl} alt="itemImage" />
      ) : (
        <S.EmptyImg>
          <img src={logoIcon} alt="빈 이미지" />
        </S.EmptyImg>
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
      {kebabView && <KebabMenu menuRef={kebabRef} />}
    </S.ItemCard>
  );
}

export default Card;
