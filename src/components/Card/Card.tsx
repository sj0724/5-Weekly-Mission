import React, { MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { changeDate, calculateDate } from '../../utils/util';
import kebab from '../../assets/kebab.svg';
import star from '../../assets/star.svg';
import fullStar from '../../assets/full_star.svg';
import * as S from './Card.styled';
import KebabMenu from '../KebabMenu/KebabMenu';
import logoIcon from '../../assets/logo.svg';
import { Link } from '../../hooks/useGetFolder';

function Card({ item }: { item: Link }) {
  const [createdAt, setCreatedAt] = useState({ time: 0, result: '' });
  const [fullDate, setFullDate] = useState('');
  const { image_source } = item;
  const [kebabView, setKebaView] = useState(false);
  const [like, setLike] = useState(false);
  const kebabRef = useRef<HTMLObjectElement>(null);

  const { url, description } = item;

  const createdText = `${createdAt.time} ${createdAt.result} ago`;

  useEffect(() => {
    const nowDate = new Date();
    let createdate = new Date(item.created_at);
    const date = (Number(nowDate) - Number(createdate)) / 1000;
    setCreatedAt(calculateDate(date));
    setFullDate(changeDate(createdate));
  }, [item]);

  useEffect(() => {
    function handleClickOutside(e: any) {
      if (
        kebabView &&
        kebabRef.current &&
        !kebabRef.current.contains(e.target)
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
        alt="별 이미지"
        onClick={() => {
          setLike(!like);
        }}
      />
      {image_source ? (
        <S.ItemImg image={image_source} />
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
