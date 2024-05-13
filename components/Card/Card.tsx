import { useEffect, useRef, useState } from 'react';
import { changeDate, calculateDate } from '../../util/util';
import * as S from './Card.styled';
import KebabMenu from '../KebabMenu/KebabMenu';
import { Link } from '../../hooks/useGetFolder';
import Image from 'next/image';

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
        src={like ? '/full_star.svg' : '/star.svg'}
        alt="별 이미지"
        onClick={() => {
          setLike(!like);
        }}
      />
      {image_source ? (
        <S.ItemImg image={image_source} />
      ) : (
        <S.EmptyImg>
          <Image src="/logo.svg" alt="빈 이미지" width={133} height={24} />
        </S.EmptyImg>
      )}
      <S.ItemInfo>
        <S.KebabIcon
          src="/kebab.svg"
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
