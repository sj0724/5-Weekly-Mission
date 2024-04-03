import { useEffect, useState } from "react";
import "./Card.css";
import styled from "styled-components";
import { ChangeDate, calculateDate } from "../utils/util";
import kebab from "../assets/kebab.svg";

export const EmptyImg = styled.div`
  height: 100%;
  background-color: var(--EmptyArea);
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function Card({ item }) {
  const [createdAt, setCreatedAt] = useState({});
  const [fullDate, setFullDate] = useState("");

  const { imageSource, url, description } = item;

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
    setFullDate(ChangeDate(createdate));
  }, [item]);

  return (
    <a className="itemCard" href={url} target="_blank" rel="noreferrer">
      {imageSource ? (
        <img className="itemImg" src={imageSource} alt="itemImage" />
      ) : (
        <EmptyImg>이미지가 없습니다.</EmptyImg>
      )}
      <div className="itemInfo">
        <img src={kebab} className="kebabIcon" />
        <p className="itemDate">{createdText}</p>
        <p className="itemDescription">{description}</p>
        <p>{fullDate}</p>
      </div>
    </a>
  );
}

export default Card;
