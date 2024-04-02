import { useEffect, useState } from "react";
import "./Card.css";
import styled from "styled-components";

export const EmptyImg = styled.div`
  height: 100%;
  background-color: lightgray;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

function Card({ item }) {
  const [createdAt, setCreatedAt] = useState({});

  const { imageSource, url, title } = item;

  const createdText = `${createdAt.time} ${createdAt.result} ago`;

  const calculateDate = (date) => {
    if (date < 60 * 2) {
      return { time: date, result: "minute" };
    }
    if (date <= 60 * 59) {
      const minute = Math.floor(date / (60 * 59));
      return { time: minute, result: "minutes" };
    }
    if (date < 60 * 60 * 24) {
      const day = Math.floor(date / (60 * 60 * 24));
      return { time: day, result: "hours" };
    }
    if (date < 60 * 60 * 24 * 30) {
      const day = Math.floor(date / (60 * 60 * 24));
      return { time: day, result: "days" };
    }
    if (date < 60 * 60 * 24 * 30 * 12) {
      const month = Math.floor(date / (60 * 60 * 24 * 30));
      return { time: month, result: "months" };
    }
    if (date >= 60 * 60 * 24 * 30 * 12) {
      const year = Math.floor(date / (60 * 60 * 24 * 30 * 12));
      return { time: year, result: "years" };
    }
  };

  useEffect(() => {
    const nowDate = new Date();
    const createdate = new Date(item.createdAt);
    const date = (nowDate - createdate) / 1000;
    setCreatedAt(calculateDate(date));
  }, [item]);

  return (
    <a className="itemCard" href={url} target="_blank" rel="noreferrer">
      {imageSource ? (
        <img className="itemImg" src={imageSource} alt="itemImage" />
      ) : (
        <EmptyImg>이미지가 없습니다.</EmptyImg>
      )}
      <div className="itemInfo">
        <p className="itemDate">{createdText}</p>
        <p>{title}</p>
      </div>
    </a>
  );
}

export default Card;
