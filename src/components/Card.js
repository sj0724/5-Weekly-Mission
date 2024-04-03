import { useEffect, useState } from "react";
import "./Card.css";
import styled from "styled-components";
import { changeDate, calculateDate } from "../utils/util";
import kebab from "../assets/kebab.svg";
import star from "../assets/star.svg";

const EmptyImg = styled.div`
  height: 100%;
  background-color: var(--EmptyArea);
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const ItemImg = styled.div`
  height: 100%;
  background-image: url(${(props) => props.image});
  border-radius: 15px 15px 0 0;
  background-size: cover;
  background-position: center;

  &:hover {
    background-size: 130%;
  }
`;

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
    } else {
      return;
    }
  }, [item]);

  return (
    <a className="itemCard" href={url} target="_blank" rel="noreferrer">
      <img src={star} className="starIcon" alt="starIcon" />
      {imageUrl ? (
        <ItemImg image={imageUrl} alt="itemImage" />
      ) : (
        <EmptyImg>이미지가 없습니다.</EmptyImg>
      )}
      <div className="itemInfo">
        <img src={kebab} className="kebabIcon" alt="kebabIcon" />
        <p className="itemDate">{createdText}</p>
        <p className="itemDescription">{description ? description : url}</p>
        <p className="itemFullDate">{fullDate}</p>
      </div>
    </a>
  );
}

export default Card;
