import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { changeDate, calculateDate } from '../../util/util';
import * as S from './Card.styled';
import KebabMenu from '../KebabMenu/KebabMenu';
import { LinkData } from '../../hooks/useGetFolder';
import Image from 'next/image';
import Link from 'next/link';
import { useModal } from '@/contexts/ModalContext';
import ModalPortal from '@/Portal';
import DeleteLinkModal from '../Modal/DeleteLinkModal/DeleteLinkModal';

function Card({
  item,
  setUrl,
  onSelect,
}: {
  item: LinkData;
  setUrl: Dispatch<SetStateAction<string>>;
  onSelect?: {
    id: string;
    name: string;
  };
}) {
  const [createdAt, setCreatedAt] = useState({ time: 0, result: '' });
  const [fullDate, setFullDate] = useState('');
  const { image_source } = item;
  const [kebabView, setKebabView] = useState(false);
  const [like, setLike] = useState(false);
  const { url, description, id } = item;
  const { modalState } = useModal();

  const createdText = `${createdAt.time} ${createdAt.result} ago`;

  const handleKebab = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    setKebabView(!kebabView);
    e.preventDefault();
  };

  useEffect(() => {
    const nowDate = new Date();
    const createDate = new Date(item.created_at);
    const date = (Number(nowDate) - Number(createDate)) / 1000;
    setCreatedAt(calculateDate(date));
    setFullDate(changeDate(createDate));
  }, [item]);

  return (
    <Link href={url} target="_blank" rel="noreferrer">
      <S.ItemCard>
        <S.StarIcon
          src={like ? '/full_star.svg' : '/star.svg'}
          alt="별 이미지"
          onClick={(e) => {
            setLike(!like);
            e.preventDefault();
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
          {onSelect && onSelect.name && (
            <S.KebabIcon
              src="/kebab.svg"
              alt="kebabIcon"
              onClick={handleKebab}
            />
          )}
          <S.ItemDate>{createdText}</S.ItemDate>
          <S.ItemDescription>
            {description ? description : url}
          </S.ItemDescription>
          <S.ItemFullDate>{fullDate}</S.ItemFullDate>
        </S.ItemInfo>
        {kebabView && (
          <KebabMenu
            url={url}
            setUrl={setUrl}
            id={id}
            setKebabView={setKebabView}
            kebabView={kebabView}
          />
        )}
      </S.ItemCard>
      {modalState.deleteLink && (
        <ModalPortal>
          <DeleteLinkModal id={id} />
        </ModalPortal>
      )}
    </Link>
  );
}

export default Card;
