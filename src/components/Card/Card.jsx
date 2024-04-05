import { useEffect, useState } from "react";
import { changeDate, calculateDate } from "../../utils/util";
import kebab from "../../assets/kebab.svg";
import star from "../../assets/star.svg";
import * as S from "./Card.styled";

function Card({ item }) {
  const [createdAt, setCreatedAt] = useState({});
  const [fullDate, setFullDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");

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
    if (item.imageSource) {
      setImageUrl(item.imageSource);
    } else if (item.image_source) {
      setImageUrl(item.image_source);
    }
  }, [item]);

  return (
    <S.ItemCard href={url} target="_blank" rel="noreferrer">
      <S.StarIcon src={star} alt="starIcon" />
      {imageUrl ? (
        <S.ItemImg image={imageUrl} alt="itemImage" />
      ) : (
        <S.EmptyImg>이미지가 없습니다.</S.EmptyImg>
      )}
      <S.ItemInfo>
        <S.KebabIcon src={kebab} alt="kebabIcon" />
        <S.ItemDate>{createdText}</S.ItemDate>
        <S.ItemDescription>{description ? description : url}</S.ItemDescription>
        <S.ItemFullDate>{fullDate}</S.ItemFullDate>
      </S.ItemInfo>
    </S.ItemCard>
  );
}

export default Card;
